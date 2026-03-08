const META_TAG = {
  system: 'http://dsf.dev/fhir/CodeSystem/read-access-tag',
  code: 'ALL',
};

export function deriveEndpointIdentifier(url) {
  if (!url || !url.trim()) return '';
  try {
    const hostname = new URL(url.trim()).hostname;
    return hostname ? hostname + '-endpoint' : '';
  } catch {
    return '';
  }
}

export function getEndpointIdentifier(org) {
  return org.endpointIdentifierOverride?.trim() || deriveEndpointIdentifier(org.endpointUrl);
}

export function validate(parentOrg, members) {
  const errors = [];
  if (!parentOrg.identifier.trim()) errors.push('Parent organization identifier is required.');

  if (members.length === 0) errors.push('At least one member organization is required.');

  members.forEach((m, i) => {
    const n = i + 1;
    if (!m.identifier.trim()) errors.push(`Member ${n}: Identifier is required.`);
    if (!m.endpointUrl.trim()) errors.push(`Member ${n}: DSF FHIR Server Endpoint URL is required.`);
    if (!getEndpointIdentifier(m)) errors.push(`Member ${n}: Endpoint identifier could not be derived. Please enter the URL or override manually.`);
    const mTps = m.thumbprints.filter(t => t.trim());
    if (mTps.length === 0) errors.push(`Member ${n}: At least one certificate thumbprint is required.`);
    if (m.roles.length === 0) errors.push(`Member ${n}: At least one role must be selected.`);
  });

  return errors;
}

export function buildParentOrganization(org) {
  return {
    resourceType: 'Organization',
    meta: {
      profile: ['http://dsf.dev/fhir/StructureDefinition/organization-parent'],
      tag: [META_TAG],
    },
    active: true,
    identifier: [{
      system: 'http://dsf.dev/sid/organization-identifier',
      value: org.identifier.trim(),
    }],
    name: org.name.trim() || undefined,
  };
}

export function buildMemberOrganization(org, endpointId) {
  const thumbprintExtensions = org.thumbprints
    .filter(t => t.trim())
    .map(t => ({
      url: 'http://dsf.dev/fhir/StructureDefinition/extension-certificate-thumbprint',
      valueString: t.trim(),
    }));

  return {
    resourceType: 'Organization',
    meta: {
      profile: ['http://dsf.dev/fhir/StructureDefinition/organization'],
      tag: [META_TAG],
    },
    extension: thumbprintExtensions,
    active: true,
    identifier: [{
      system: 'http://dsf.dev/sid/organization-identifier',
      value: org.identifier.trim(),
    }],
    name: org.name.trim() || undefined,
    endpoint: [{
      reference: `urn:uuid:${endpointId}`,
      type: 'Endpoint',
    }],
  };
}

export function buildEndpoint(org, managingOrgId) {
  return {
    resourceType: 'Endpoint',
    meta: {
      profile: ['http://dsf.dev/fhir/StructureDefinition/endpoint'],
      tag: [META_TAG],
    },
    status: 'active',
    identifier: [{
      system: 'http://dsf.dev/sid/endpoint-identifier',
      value: getEndpointIdentifier(org),
    }],
    connectionType: {
      system: 'http://terminology.hl7.org/CodeSystem/endpoint-connection-type',
      code: 'hl7-fhir-rest',
    },
    name: `DSF Endpoint for ${org.identifier.trim()}`,
    managingOrganization: {
      reference: `urn:uuid:${managingOrgId}`,
      type: 'Organization',
    },
    payloadType: [{
      coding: [{
        system: 'http://hl7.org/fhir/resource-types',
        code: 'Task',
      }],
    }],
    payloadMimeType: ['application/fhir+json', 'application/fhir+xml'],
    address: org.endpointUrl.trim(),
  };
}

export function buildAffiliation(parentOrgId, memberOrgId, endpointId, roles) {
  return {
    resourceType: 'OrganizationAffiliation',
    meta: {
      profile: ['http://dsf.dev/fhir/StructureDefinition/organization-affiliation'],
      tag: [META_TAG],
    },
    active: true,
    organization: {
      reference: `urn:uuid:${parentOrgId}`,
      type: 'Organization',
    },
    participatingOrganization: {
      reference: `urn:uuid:${memberOrgId}`,
      type: 'Organization',
    },
    code: roles.map(r => ({
      coding: [{
        system: 'http://dsf.dev/fhir/CodeSystem/organization-role',
        code: r,
      }],
    })),
    endpoint: [{
      reference: `urn:uuid:${endpointId}`,
      type: 'Endpoint',
    }],
  };
}

export function generateBundle(parentOrg, members, uuidFn) {
  const entries = [];
  const parentOrgId = uuidFn();

  entries.push({
    fullUrl: `urn:uuid:${parentOrgId}`,
    resource: buildParentOrganization(parentOrg),
    request: {
      method: 'PUT',
      url: `Organization?identifier=http://dsf.dev/sid/organization-identifier|${encodeURIComponent(parentOrg.identifier.trim())}`,
    },
  });

  members.forEach(member => {
    const memberOrgId = uuidFn();
    const memberEndpointId = uuidFn();

    entries.push({
      fullUrl: `urn:uuid:${memberOrgId}`,
      resource: buildMemberOrganization(member, memberEndpointId),
      request: {
        method: 'PUT',
        url: `Organization?identifier=http://dsf.dev/sid/organization-identifier|${encodeURIComponent(member.identifier.trim())}`,
      },
    });

    entries.push({
      fullUrl: `urn:uuid:${memberEndpointId}`,
      resource: buildEndpoint(member, memberOrgId),
      request: {
        method: 'PUT',
        url: `Endpoint?identifier=http://dsf.dev/sid/endpoint-identifier|${encodeURIComponent(getEndpointIdentifier(member))}`,
      },
    });

    entries.push({
      fullUrl: `urn:uuid:${uuidFn()}`,
      resource: buildAffiliation(parentOrgId, memberOrgId, memberEndpointId, member.roles),
      request: {
        method: 'PUT',
        url: `OrganizationAffiliation?primary-organization:identifier=http://dsf.dev/sid/organization-identifier|${encodeURIComponent(parentOrg.identifier.trim())}&participating-organization:identifier=http://dsf.dev/sid/organization-identifier|${encodeURIComponent(member.identifier.trim())}`,
      },
    });
  });

  return {
    resourceType: 'Bundle',
    type: 'transaction',
    entry: entries,
  };
}

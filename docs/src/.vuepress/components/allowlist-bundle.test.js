import { describe, it, expect } from 'vitest';
import {
  deriveEndpointIdentifier,
  getEndpointIdentifier,
  validate,
  buildParentOrganization,
  buildMemberOrganization,
  buildEndpoint,
  buildAffiliation,
  generateBundle,
} from './allowlist-bundle.js';

// -- Helper: valid member org data --
function validMember(overrides = {}) {
  return {
    identifier: 'hospital.example.org',
    name: 'Example Hospital',
    endpointUrl: 'https://dsf.hospital.example.org/fhir',
    endpointIdentifierOverride: '',
    thumbprints: ['aabbccdd'],
    roles: ['DIC'],
    ...overrides,
  };
}

function validParent(overrides = {}) {
  return { identifier: 'dsf.dev', name: 'DSF Community', ...overrides };
}

// =============================================
// deriveEndpointIdentifier
// =============================================
describe('deriveEndpointIdentifier', () => {
  it('extracts hostname and appends -endpoint', () => {
    expect(deriveEndpointIdentifier('https://dsf.hospital.example.org/fhir'))
      .toBe('dsf.hospital.example.org-endpoint');
  });

  it('works with plain hostname URL', () => {
    expect(deriveEndpointIdentifier('https://example.org'))
      .toBe('example.org-endpoint');
  });

  it('returns empty string for empty input', () => {
    expect(deriveEndpointIdentifier('')).toBe('');
    expect(deriveEndpointIdentifier(null)).toBe('');
    expect(deriveEndpointIdentifier(undefined)).toBe('');
  });

  it('returns empty string for invalid URL', () => {
    expect(deriveEndpointIdentifier('not-a-url')).toBe('');
  });

  it('handles whitespace around URL', () => {
    expect(deriveEndpointIdentifier('  https://example.org/fhir  '))
      .toBe('example.org-endpoint');
  });

  it('handles URL with port', () => {
    expect(deriveEndpointIdentifier('https://dsf.example.org:8443/fhir'))
      .toBe('dsf.example.org-endpoint');
  });
});

// =============================================
// getEndpointIdentifier
// =============================================
describe('getEndpointIdentifier', () => {
  it('uses override when provided', () => {
    const org = { endpointUrl: 'https://example.org/fhir', endpointIdentifierOverride: 'custom-id' };
    expect(getEndpointIdentifier(org)).toBe('custom-id');
  });

  it('derives from URL when no override', () => {
    const org = { endpointUrl: 'https://dsf.example.org/fhir', endpointIdentifierOverride: '' };
    expect(getEndpointIdentifier(org)).toBe('dsf.example.org-endpoint');
  });

  it('derives from URL when override is whitespace only', () => {
    const org = { endpointUrl: 'https://dsf.example.org/fhir', endpointIdentifierOverride: '   ' };
    expect(getEndpointIdentifier(org)).toBe('dsf.example.org-endpoint');
  });

  it('handles missing override property', () => {
    const org = { endpointUrl: 'https://dsf.example.org/fhir' };
    expect(getEndpointIdentifier(org)).toBe('dsf.example.org-endpoint');
  });
});

// =============================================
// validate
// =============================================
describe('validate', () => {
  it('returns no errors for valid input', () => {
    const errors = validate(validParent(), [validMember()]);
    expect(errors).toEqual([]);
  });

  it('requires parent identifier', () => {
    const errors = validate(validParent({ identifier: '' }), [validMember()]);
    expect(errors).toContain('Parent organization identifier is required.');
  });

  it('requires at least one member', () => {
    const errors = validate(validParent(), []);
    expect(errors).toContain('At least one member organization is required.');
  });

  it('requires member identifier', () => {
    const errors = validate(validParent(), [validMember({ identifier: '' })]);
    expect(errors).toContain('Member 1: Identifier is required.');
  });

  it('requires member endpoint URL', () => {
    const errors = validate(validParent(), [validMember({ endpointUrl: '' })]);
    expect(errors).toContain('Member 1: DSF FHIR Server Endpoint URL is required.');
  });

  it('requires derivable endpoint identifier', () => {
    const errors = validate(validParent(), [validMember({ endpointUrl: 'not-a-url', endpointIdentifierOverride: '' })]);
    expect(errors).toContain('Member 1: Endpoint identifier could not be derived. Please enter the URL or override manually.');
  });

  it('accepts manual endpoint identifier override for invalid URL', () => {
    const errors = validate(validParent(), [validMember({ endpointUrl: 'not-a-url', endpointIdentifierOverride: 'my-endpoint' })]);
    expect(errors).not.toContain(expect.stringContaining('Endpoint identifier'));
  });

  it('requires at least one thumbprint', () => {
    const errors = validate(validParent(), [validMember({ thumbprints: [''] })]);
    expect(errors).toContain('Member 1: At least one certificate thumbprint is required.');
  });

  it('requires at least one role', () => {
    const errors = validate(validParent(), [validMember({ roles: [] })]);
    expect(errors).toContain('Member 1: At least one role must be selected.');
  });

  it('validates multiple members independently', () => {
    const members = [
      validMember(),
      validMember({ identifier: '', endpointUrl: '' }),
    ];
    const errors = validate(validParent(), members);
    expect(errors).toContain('Member 2: Identifier is required.');
    expect(errors).toContain('Member 2: DSF FHIR Server Endpoint URL is required.');
    expect(errors).not.toContain(expect.stringContaining('Member 1'));
  });
});

// =============================================
// buildParentOrganization
// =============================================
describe('buildParentOrganization', () => {
  it('uses organization-parent profile', () => {
    const org = buildParentOrganization(validParent());
    expect(org.meta.profile).toEqual(['http://dsf.dev/fhir/StructureDefinition/organization-parent']);
  });

  it('sets resourceType to Organization', () => {
    const org = buildParentOrganization(validParent());
    expect(org.resourceType).toBe('Organization');
  });

  it('sets identifier correctly', () => {
    const org = buildParentOrganization(validParent());
    expect(org.identifier[0].system).toBe('http://dsf.dev/sid/organization-identifier');
    expect(org.identifier[0].value).toBe('dsf.dev');
  });

  it('includes read-access-tag ALL', () => {
    const org = buildParentOrganization(validParent());
    expect(org.meta.tag).toEqual([{ system: 'http://dsf.dev/fhir/CodeSystem/read-access-tag', code: 'ALL' }]);
  });

  it('sets active to true', () => {
    const org = buildParentOrganization(validParent());
    expect(org.active).toBe(true);
  });

  it('includes name when provided', () => {
    const org = buildParentOrganization(validParent({ name: 'My Consortium' }));
    expect(org.name).toBe('My Consortium');
  });

  it('omits name when empty', () => {
    const org = buildParentOrganization(validParent({ name: '' }));
    expect(org.name).toBeUndefined();
  });

  it('has no endpoint reference', () => {
    const org = buildParentOrganization(validParent());
    expect(org.endpoint).toBeUndefined();
  });

  it('has no certificate thumbprint extensions', () => {
    const org = buildParentOrganization(validParent());
    expect(org.extension).toBeUndefined();
  });

  it('trims whitespace from identifier', () => {
    const org = buildParentOrganization(validParent({ identifier: '  dsf.dev  ' }));
    expect(org.identifier[0].value).toBe('dsf.dev');
  });
});

// =============================================
// buildMemberOrganization
// =============================================
describe('buildMemberOrganization', () => {
  it('uses organization profile (not organization-parent)', () => {
    const org = buildMemberOrganization(validMember(), 'ep-uuid');
    expect(org.meta.profile).toEqual(['http://dsf.dev/fhir/StructureDefinition/organization']);
  });

  it('includes certificate thumbprint extensions', () => {
    const org = buildMemberOrganization(validMember({ thumbprints: ['abc123', 'def456'] }), 'ep-uuid');
    expect(org.extension).toHaveLength(2);
    expect(org.extension[0].url).toBe('http://dsf.dev/fhir/StructureDefinition/extension-certificate-thumbprint');
    expect(org.extension[0].valueString).toBe('abc123');
    expect(org.extension[1].valueString).toBe('def456');
  });

  it('filters empty thumbprints', () => {
    const org = buildMemberOrganization(validMember({ thumbprints: ['abc123', '', '  '] }), 'ep-uuid');
    expect(org.extension).toHaveLength(1);
  });

  it('includes endpoint reference', () => {
    const org = buildMemberOrganization(validMember(), 'my-ep-id');
    expect(org.endpoint[0].reference).toBe('urn:uuid:my-ep-id');
    expect(org.endpoint[0].type).toBe('Endpoint');
  });

  it('includes read-access-tag ALL', () => {
    const org = buildMemberOrganization(validMember(), 'ep-uuid');
    expect(org.meta.tag[0].code).toBe('ALL');
  });
});

// =============================================
// buildEndpoint
// =============================================
describe('buildEndpoint', () => {
  it('sets resourceType to Endpoint', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.resourceType).toBe('Endpoint');
  });

  it('uses endpoint profile', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.meta.profile).toEqual(['http://dsf.dev/fhir/StructureDefinition/endpoint']);
  });

  it('derives endpoint identifier from URL', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.identifier[0].value).toBe('dsf.hospital.example.org-endpoint');
    expect(ep.identifier[0].system).toBe('http://dsf.dev/sid/endpoint-identifier');
  });

  it('uses override endpoint identifier when set', () => {
    const ep = buildEndpoint(validMember({ endpointIdentifierOverride: 'custom-ep' }), 'org-uuid');
    expect(ep.identifier[0].value).toBe('custom-ep');
  });

  it('sets connectionType to hl7-fhir-rest', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.connectionType.code).toBe('hl7-fhir-rest');
  });

  it('sets address to endpoint URL', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.address).toBe('https://dsf.hospital.example.org/fhir');
  });

  it('references managing organization', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid-123');
    expect(ep.managingOrganization.reference).toBe('urn:uuid:org-uuid-123');
    expect(ep.managingOrganization.type).toBe('Organization');
  });

  it('sets payloadType to Task', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.payloadType[0].coding[0].code).toBe('Task');
  });

  it('includes both FHIR MIME types', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.payloadMimeType).toContain('application/fhir+json');
    expect(ep.payloadMimeType).toContain('application/fhir+xml');
  });

  it('sets status to active', () => {
    const ep = buildEndpoint(validMember(), 'org-uuid');
    expect(ep.status).toBe('active');
  });
});

// =============================================
// buildAffiliation
// =============================================
describe('buildAffiliation', () => {
  it('sets resourceType to OrganizationAffiliation', () => {
    const aff = buildAffiliation('parent-id', 'member-id', 'ep-id', ['DIC']);
    expect(aff.resourceType).toBe('OrganizationAffiliation');
  });

  it('uses organization-affiliation profile', () => {
    const aff = buildAffiliation('parent-id', 'member-id', 'ep-id', ['DIC']);
    expect(aff.meta.profile).toEqual(['http://dsf.dev/fhir/StructureDefinition/organization-affiliation']);
  });

  it('references parent organization', () => {
    const aff = buildAffiliation('parent-id', 'member-id', 'ep-id', ['DIC']);
    expect(aff.organization.reference).toBe('urn:uuid:parent-id');
    expect(aff.organization.type).toBe('Organization');
  });

  it('references participating organization', () => {
    const aff = buildAffiliation('parent-id', 'member-id', 'ep-id', ['DIC']);
    expect(aff.participatingOrganization.reference).toBe('urn:uuid:member-id');
  });

  it('references endpoint', () => {
    const aff = buildAffiliation('parent-id', 'member-id', 'ep-id', ['DIC']);
    expect(aff.endpoint[0].reference).toBe('urn:uuid:ep-id');
  });

  it('maps roles to CodeSystem codes', () => {
    const aff = buildAffiliation('parent-id', 'member-id', 'ep-id', ['DIC', 'TTP']);
    expect(aff.code).toHaveLength(2);
    expect(aff.code[0].coding[0].system).toBe('http://dsf.dev/fhir/CodeSystem/organization-role');
    expect(aff.code[0].coding[0].code).toBe('DIC');
    expect(aff.code[1].coding[0].code).toBe('TTP');
  });

  it('sets active to true', () => {
    const aff = buildAffiliation('parent-id', 'member-id', 'ep-id', ['DIC']);
    expect(aff.active).toBe(true);
  });
});

// =============================================
// generateBundle
// =============================================
describe('generateBundle', () => {
  let uuidCounter;
  function deterministicUuid() {
    return `uuid-${uuidCounter++}`;
  }

  function setup() {
    uuidCounter = 0;
  }

  it('generates a transaction bundle', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    expect(bundle.resourceType).toBe('Bundle');
    expect(bundle.type).toBe('transaction');
  });

  it('creates correct number of entries for one member', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    // 1 parent org + 1 member org + 1 endpoint + 1 affiliation = 4
    expect(bundle.entry).toHaveLength(4);
  });

  it('creates correct number of entries for two members', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember(), validMember({ identifier: 'other.org' })], deterministicUuid);
    // 1 parent org + 2 * (member org + endpoint + affiliation) = 7
    expect(bundle.entry).toHaveLength(7);
  });

  it('first entry is parent organization with organization-parent profile', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    const parentEntry = bundle.entry[0];
    expect(parentEntry.resource.resourceType).toBe('Organization');
    expect(parentEntry.resource.meta.profile[0]).toContain('organization-parent');
    expect(parentEntry.fullUrl).toBe('urn:uuid:uuid-0');
  });

  it('parent org has no endpoint or extensions', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    const parentResource = bundle.entry[0].resource;
    expect(parentResource.endpoint).toBeUndefined();
    expect(parentResource.extension).toBeUndefined();
  });

  it('member organization uses organization profile', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    const memberEntry = bundle.entry[1];
    expect(memberEntry.resource.meta.profile[0]).toContain('/organization');
    expect(memberEntry.resource.meta.profile[0]).not.toContain('organization-parent');
  });

  it('member org references its endpoint', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    // uuid-0 = parent, uuid-1 = member org, uuid-2 = member endpoint
    const memberOrg = bundle.entry[1].resource;
    expect(memberOrg.endpoint[0].reference).toBe('urn:uuid:uuid-2');
  });

  it('endpoint references its managing organization', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    const endpoint = bundle.entry[2].resource;
    expect(endpoint.managingOrganization.reference).toBe('urn:uuid:uuid-1');
  });

  it('affiliation references parent and member', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    const aff = bundle.entry[3].resource;
    expect(aff.organization.reference).toBe('urn:uuid:uuid-0'); // parent
    expect(aff.participatingOrganization.reference).toBe('urn:uuid:uuid-1'); // member
    expect(aff.endpoint[0].reference).toBe('urn:uuid:uuid-2'); // endpoint
  });

  it('all PUT URLs use identifiers, not UUIDs', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    bundle.entry.forEach(entry => {
      expect(entry.request.method).toBe('PUT');
      // No URL should contain uuid- (all should use identifier-based search)
      expect(entry.request.url).not.toContain('uuid-');
    });
  });

  it('parent org PUT URL uses organization identifier', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    expect(bundle.entry[0].request.url).toBe(
      'Organization?identifier=http://dsf.dev/sid/organization-identifier|dsf.dev'
    );
  });

  it('member org PUT URL uses organization identifier', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    expect(bundle.entry[1].request.url).toBe(
      'Organization?identifier=http://dsf.dev/sid/organization-identifier|hospital.example.org'
    );
  });

  it('endpoint PUT URL uses endpoint identifier', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    expect(bundle.entry[2].request.url).toBe(
      'Endpoint?identifier=http://dsf.dev/sid/endpoint-identifier|dsf.hospital.example.org-endpoint'
    );
  });

  it('affiliation PUT URL uses primary and participating organization identifiers', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    const affUrl = bundle.entry[3].request.url;
    expect(affUrl).toContain('OrganizationAffiliation?');
    expect(affUrl).toContain('primary-organization:identifier=http://dsf.dev/sid/organization-identifier|dsf.dev');
    expect(affUrl).toContain('participating-organization:identifier=http://dsf.dev/sid/organization-identifier|hospital.example.org');
  });

  it('all resources have read-access-tag ALL', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember()], deterministicUuid);
    bundle.entry.forEach(entry => {
      const tag = entry.resource.meta.tag[0];
      expect(tag.system).toBe('http://dsf.dev/fhir/CodeSystem/read-access-tag');
      expect(tag.code).toBe('ALL');
    });
  });

  it('uses endpoint identifier override in PUT URL', () => {
    setup();
    const bundle = generateBundle(validParent(), [validMember({ endpointIdentifierOverride: 'my-custom-ep' })], deterministicUuid);
    expect(bundle.entry[2].request.url).toBe(
      'Endpoint?identifier=http://dsf.dev/sid/endpoint-identifier|my-custom-ep'
    );
  });

  it('encodes special characters in identifiers', () => {
    setup();
    const bundle = generateBundle(
      validParent({ identifier: 'org with spaces' }),
      [validMember({ identifier: 'member/special' })],
      deterministicUuid
    );
    expect(bundle.entry[0].request.url).toContain(encodeURIComponent('org with spaces'));
    expect(bundle.entry[1].request.url).toContain(encodeURIComponent('member/special'));
  });
});

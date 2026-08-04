---
title: Security Advisories
icon: safe
---

# Security Advisories

The following security advisories have been published as part of the {{release.tag}} release.

## Unbounded Memory Usage During Large File Decryption
CVE ID: [not yet assigned](https://github.com/datasharingframework/dsf/security/advisories/GHSA-xfv4-vhh2-m2j8)
CVSS Score: Moderate, 6.0 / 10
CVSS: 4.0/AV:N/AC:L/AT:P/PR:L/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N

### Affected Components
- DSF BPE Server

### Summary
API v2 process plugins using the included encryption/decryption service can create large files for transfer between DSF instances. An attacker can trigger unbounded memory usage by supplying a sufficiently large encrypted file for decryption, potentially causing the JVM of the DSF BPE to exhaust the available heap memory and resulting in a denial of service.

### Impact
The API v2 process plugin encryption/decryption service uses a hybrid cryptosystem with AES-GCM as the symmetric encryption algorithm. Plaintext is encrypted as a single chunk, resulting in unbounded memory consumption during GCM tag verification while decrypting. The unbound memory consumption within the DSF BPE can exhaust the available heap memory, causing the process engine to stop. To our knowledge, no API v2 process plugins using this feature are currently in public circulation.

### Fix (commit [a696810​](https://github.com/datasharingframework/dsf/commit/a696810))
A limit of 250 MiB for the max allowed plain-text length in the dev.dsf.bpe.v2.service.CryptoService.Kem encrypt and decrypt methods was added.


## Authorization Bypass Allows Authenticated Users to Access StructureDefinition Snapshots
CVE ID: [not yet assigned](https://github.com/datasharingframework/dsf/security/advisories/GHSA-xw2h-2xx5-j86q)
CVSS Score: Moderate, 5.3 / 10
CVSS: 4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N

### Affected Components
- DSF FHIR Server

### Summary
Authenticated users can access [StructureDefinition](https://hl7.org/fhir/R4/structuredefinition.html) snapshots via the [$snapshot](https://hl7.org/fhir/R4/structuredefinition-operation-snapshot.html) operation regardless of read-access configuration.

### Impact
[StructureDefinition](https://hl7.org/fhir/R4/structuredefinition.html) resources and their snapshots are typically configured to be readable by all authenticated users. However, setting a read-access tag to a subset of organizations or the local organization only has no effect on access via the [$snapshot](https://hl7.org/fhir/R4/structuredefinition-operation-snapshot.html) operation. Thus, a DSF FHIR Server may leak metadata that is intended to remain private to the organization.

### Fix (commit [d29e157​](https://github.com/datasharingframework/dsf/commit/d29e157))
Added missing read authorization rule checks.


## Authorization Check Partially Rendered Ineffective for Conditional Updates
CVE ID: [not yet assigned](https://github.com/datasharingframework/dsf/security/advisories/GHSA-448w-h27c-w53m)
CVSS Score: Moderate, 5.1 / 10
CVSS: 4.0/AV:N/AC:L/AT:N/PR:H/UI:N/VC:L/VI:L/VA:L/SC:N/SI:L/SA:N

### Affected Components
- DSF FHIR Server

### Summary
Authenticated local organization and practitioner users with [UPDATE](https://dsf.dev/operations/v2.1.1/fhir/access-control.html) role can bypass update authorization rules via conditional updates. The vulnerability can not be exploited by remote users.

### Impact
Authorization, integrity, and uniqueness rules can be bypassed via conditional updates of individual resources. This allows authenticated local organization and practitioner users with [UPDATE](https://dsf.dev/operations/v2.1.1/fhir/access-control.html) role to change the state of existing FHIR resources to some illegal values. Examples:

The `requester` organization of a `Task` resource can be changed to a new value, if the status of the updated Task resource is `in-progress`.
The `thumbprint` and `identifier` of an `Organization` resource could be changed to new values, a change that usually requires deleting an `Organization` resource and creating a new one.
Updates to resources guarded by [read-access tags](https://dsf.dev/fhir/ImplementationGuide/dev.dsf/readaccess.html) (e.g. `Organization`) still need to comply with the create rules for new resources, thereby mitigating the impact of this vulnerability.

### Fix (commit [22743e1​​](https://github.com/datasharingframework/dsf/commit/22743e1))
Fixed new resource being compared against itself when executing authorization rules for conditional updates.



### Affected Components
- DSF FHIR Server

### Summary
Authenticated local organization and practitioner users with UPDATE role can bypass update authorization rules via conditional updates. The vulnerability can not be exploited by remote users.

### Impact
Authorization, integrity and uniqueness rules can be bypassed via conditional updates of single resources. This allows authenticated local organization and practitioner users with UPDATE roles to change the state of existing FHIR resources to some illegal values. Examples:

 - The `requester` organization of a `Task` resource could be changed to a new value, if the status of the new version of the Task resource is `in-progress`.
 - The `thumbprint` and `identifier` of an `Organization` resource could be changed to new values, a change that usually requires deleting an `Organization` resource and creating a new one.

Updates of resources guarded by [read access tags](https://dsf.dev/fhir/ImplementationGuide/dev.dsf/readaccess.html) (e.g. `Organization`) still need to comply with the create rules for new resources, thus mitigating the impact of this vulnerability.

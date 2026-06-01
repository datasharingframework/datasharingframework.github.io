---
title: Release Notes (v2.1.0)
icon: note
---

## [Release Notes for v2.1.0](https://github.com/datasharingframework/dsf/releases/tag/v2.1.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 2.1.0 - Security and Performance
General remarks:

- This is a feature update for DSF 2.x with security and performance improvements.
- To Update from an existing 2.x installation, please see the [2.x -> 2.1.0 Upgrade Guide](https://dsf.dev/operations/v2.1.0/upgrade-from-2.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/operations/v2.1.0/install.html).

Security Advisories:
- Missing Session Timeout for OIDC Sessions: [GHSA-gj7p-595x-qwf5](https://github.com/datasharingframework/dsf/security/advisories/GHSA-gj7p-595x-qwf5)
- Inverted Time Comparison in OIDC JWKS and Token Cache: [GHSA-xmj9-7625-f634](https://github.com/datasharingframework/dsf/security/advisories/GHSA-xmj9-7625-f634)

Bug Fixes:
- In previous versions starting processes via the FHIR server front-end failed, if `Task` resources used input parameter codes (`Task.input.type`) that were substrings of other input parameter codes ([#442](https://github.com/datasharingframework/dsf/issues/442)). The front-end code was fixed to handle these edge-cases.
- Process instances started with DSF 1.x failed to continue on DSF 2.x ([#438](https://github.com/datasharingframework/dsf/issues/438)). Fallback code was added to correctly read the old DSF 1.x Task process variables.
- A configuration error in the `DsfClient` used by v2 process plugins via the [FHIR client connections API](https://dsf.dev/operations/v2.1.0/bpe/fhir-client-connections.html) resulted in bearer tokens and basic authentication credentials not being send ([#432](https://github.com/datasharingframework/dsf/issues/432)). The feature registration order was fixed to send authentication credentials in the `DsfClient` implementation.

Feature Summary:
- An identifier constraint rule was added to the `Task` base profile http://dsf.dev/fhir/StructureDefinition/task for resources with status `draft`. The constraint adds a rule to the base profile that was previously only enforced via the [TaskAuthorizationRule](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-server/src/main/java/dev/dsf/fhir/authorization/TaskAuthorizationRule.java#L357).
- The DSF FHIR server front-end was improved to display the `Binary` resource content inline. This feature is enabled for `Binary` resources with content-types: `text/html` and `text/plain`.
- The performance of allow-list and other bundle executions was improved by modifying the database schema and optimizing the FHIR server code base. A new `current` column was added to resource tables together with a number of new database indexes. A "not found" cache was added for metadata resources to reduce unnecessary database calls.
- Other security improvements were implemented and are detailed in the [DSF 2.1.0 hardening measures](https://dsf.dev/operations/v2.1.0/hardening-measures.html) document.
- Starting with this release our docker images are cryptographically signed. Take a look at the [Verify Image Signatures](https://dsf.dev/operations/latest/image-verification.html) document for details.

Docker images for this release can be accessed via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.1.0](https://github.com/datasharingframework/dsf/pkgs/container/bpe/796016761?tag=2.1.0)  
  Digest: sha256:3ee7ef0ac201fc3776273fbfc2569bdc4edf724a2bb9f1b4a889eb7e13ff4049
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.1.0](https://github.com/datasharingframework/dsf/pkgs/container/bpe_proxy/796013677?tag=2.1.0)  
    Digest: sha256:c67da4a1720ea75a383764db2bf25619fe70f57773b1069029f5b49588eb1ecc
* **fhir**: [ghcr.io/datasharingframework/fhir:2.1.0](https://github.com/datasharingframework/dsf/pkgs/container/fhir/796016727?tag=2.1.0)  
  Digest: sha256:71599af143f0262a7265aa2bc4ea5a9660f11de6248a053e060b5667070203fd
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.1.0](https://github.com/datasharingframework/dsf/pkgs/container/fhir_proxy/796013880?tag=2.1.0)  
  Digest: sha256:9f11a3580c970314532f5951808be6fe72f1de7d53348e625d2dd0c95bcf1d96

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.1.0</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.1.0</version>
</dependency>
```
DSF Maven Plugin on Maven Central:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.1.0</version>
</plugin>
```

Issues closed:
- Security Improvements / Defense-in-Depth [#453](https://github.com/datasharingframework/dsf/issues/453)
- Upgrade Dependencies [#448](https://github.com/datasharingframework/dsf/issues/448)
- Improve Allow-List Bundle Execution Performance [#443](https://github.com/datasharingframework/dsf/issues/443)
- Form.js builds invalid Task resource when submitting form [#442](https://github.com/datasharingframework/dsf/issues/442)
- Add Identifier Constraint to Task Profile [#440](https://github.com/datasharingframework/dsf/issues/440)
- Process Instances from DSF 1.x Fail to Continue on DSF 2.x [#438](https://github.com/datasharingframework/dsf/issues/438)
- Start New Development Cycle [#435](https://github.com/datasharingframework/dsf/issues/435)
- Automate Docker Image Builds and Maven Central Deploys [#434](https://github.com/datasharingframework/dsf/issues/434)
- ClientConfig in DsfClientJersey overwrites Authentication Features [#432](https://github.com/datasharingframework/dsf/issues/432)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).

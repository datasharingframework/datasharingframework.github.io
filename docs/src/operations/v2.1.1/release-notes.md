---
title: Release Notes (v2.1.1)
icon: note
---

## [Release Notes for v2.1.1](https://github.com/datasharingframework/dsf/releases/tag/v2.1.1)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 2.1.1 - Security and Maintenance Release
General remarks:

- This is a maintenance update for DSF 2.x with security improvements.
- To Update from an existing 2.x installation, please see the [2.x -> 2.1.1 Upgrade Guide](/operations/v2.1.1/upgrade-from-2.html).
- For a fresh deployment, follow the [installation instructions](/operations/v2.1.1/install.html).

Security Advisories:

- Unbounded Memory Usage During Large File Decryption: [GHSA-xfv4-vhh2-m2j8](https://github.com/datasharingframework/dsf/security/advisories/GHSA-xfv4-vhh2-m2j8)
- Authorization Bypass Allows Authenticated Users to Access StructureDefinition Snapshots: [GHSA-xw2h-2xx5-j86q](https://github.com/datasharingframework/dsf/security/advisories/GHSA-xw2h-2xx5-j86q)
- Authorization Check Partially Rendered Ineffective for Conditional Updates: [GHSA-448w-h27c-w53m](https://github.com/datasharingframework/dsf/security/advisories/GHSA-448w-h27c-w53m)

Bug Fixes:
- Error handling code in the BPE process plugin API v2 `MessageSendTaskDelegate` class was fixed, to allow for correct handling of Error Boundary Events on Send Tasks. [#509](https://github.com/datasharingframework/dsf/issues/509)
- An encoding error in the BPE client connections OIDC provider client was corrected, the fixed implementation now follows [Section 2.3.1 of RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1) correctly and allows`client-id` values to include colon characters. [#529](https://github.com/datasharingframework/dsf/issues/529)
- An incorrectly thrown `NullPointerException ` was fixed in the BPE process plugin API v2 `Variables#setJsonVariable` method, when called with a `null` value. [#535](https://github.com/datasharingframework/dsf/issues/535)
- Input fields of the FHIR server UI for draft Task resources are now correctly repopulated with already entered values, in case session expiration is only detected during upload of the Task to the FHIR server. [#547](https://github.com/datasharingframework/dsf/issues/547)

Docker images for this release can be accessed via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.1.1](https://github.com/datasharingframework/dsf/pkgs/container/bpe/1096774441?tag=2.1.1)  
  Digest: `sha256:cc88a676806e835b1b35ab7f1e5e231b537a10668b24bd8999180f6dc22b5513`
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.1.1](https://github.com/datasharingframework/dsf/pkgs/container/bpe_proxy/1096766410?tag=2.1.1)  
    Digest: `sha256:cabedb0ed04191ae82d9d64ad141ee9ef2a3420daba777ca223700a61cad9285`
* **fhir**: [ghcr.io/datasharingframework/fhir:2.1.1](https://github.com/datasharingframework/dsf/pkgs/container/fhir/1096772162?tag=2.1.1)  
  Digest: `sha256:708188c5f03224f4a5adf84ae2297c7161c86590d5b392eb7338a91e4fe7b5f3`
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.1.1](https://github.com/datasharingframework/dsf/pkgs/container/fhir_proxy/1096765684?tag=2.1.1)  
  Digest: `sha256:70792c0783b53a94a706ad671dae726e3a9b18bad1711042d700860edc544b36`

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.1.1</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.1.1</version>
</dependency>
```
DSF Maven Plugin on Maven Central:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.1.1</version>
</plugin>
```

Issues closed:
- Backport Bugfixes to 2.1.1 [#560](https://github.com/datasharingframework/dsf/issues/560)
- Task Input Autofill After Session Timeout Not Working [#547](https://github.com/datasharingframework/dsf/issues/547)
- NullPointerException when using setJsonVariable with null value [#535](https://github.com/datasharingframework/dsf/issues/535)
- OIDC identity provider receives wrong client-id for client-id containing colon [#529](https://github.com/datasharingframework/dsf/issues/529)
- MessageSendTaskDelegate does not throw BPMN Error if ExceptionToErrorBoundaryEventTranslationErrorHandler is used [#509](https://github.com/datasharingframework/dsf/issues/509)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).

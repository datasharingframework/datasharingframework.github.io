---
title: Release Notes (v2.1.2)
icon: note
---

## [Release Notes for v2.1.2](https://github.com/datasharingframework/dsf/releases/tag/v2.1.2)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 2.1.2 - Security and Maintenance Release
General remarks:

- This is a maintenance update for DSF 2.x with security improvements.
- To Update from an existing 2.x installation, please see the [2.x -> 2.1.2 Upgrade Guide](/operations/v2.1.2/upgrade-from-2.html).
- For a fresh deployment, follow the [installation instructions](/operations/v2.1.2/install.html).

Security Advisory:
- This release updates Java dependencies and Docker base images, including a fix for CVE-2026-114938.

Docker images for this release can be accessed via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.1.2](https://github.com/orgs/datasharingframework/packages/container/bpe/1589540915?tag=2.1.2)  
  Digest: `sha256:a900502e89f213d70745bde83c905c6ee5ca00528aff41ee75a2c9b5c8e9fbc8`
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.1.2](2.1.2)  
    Digest: `sha256:17078749f3fb3d2d489250221b7f6cca480d02e041d71abf4857aff72c924ae6`
* **fhir**: [ghcr.io/datasharingframework/fhir:2.1.2](https://github.com/orgs/datasharingframework/packages/container/fhir/1589536955?tag=2.1.2)  
  Digest: `sha256:e73aaa26310800c09d19eea93a1c77bde73bf4b7f95239214fd3a820a1c86e40`
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.1.2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/1589530320?tag=2.1.2)  
  Digest: `sha256:01f6a7cc28ad324a7764bcac02bf23344cb554a44df4ca294d91aba458bf8fbd`

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.1.2</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.1.2</version>
</dependency>
```
DSF Maven Plugin on Maven Central:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.1.2</version>
</plugin>
```

This release contains contributions from [@hhund](https://github.com/hhund) and [@schwzr](https://github.com/schwzr).

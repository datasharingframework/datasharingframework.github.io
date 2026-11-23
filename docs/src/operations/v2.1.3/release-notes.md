---
title: Release Notes (v2.1.3)
icon: note
---

## [Release Notes for v2.1.3](https://github.com/datasharingframework/dsf/releases/tag/v2.1.3)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 2.1.3 - Maintenance Release
General remarks:

- This is a maintenance update for DSF 2.x with security improvements.
- To Update from an existing 2.x installation, please see the [2.x -> 2.1.3 Upgrade Guide](/operations/v2.1.3/upgrade-from-2.html).
- For a fresh deployment, follow the [installation instructions](/operations/v2.1.3/install.html).

Bug Fixes:
- A jetty dependency upgrade in the 2.1.2 release was missing corresponding code changes in the `dsf-common-jetty` module (fc22889), resulting in failed OIDC logins (HTTP status 500). [#615](https://github.com/datasharingframework/dsf/issues/615)

Docker images for this release can be accessed via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.1.3](https://github.com/orgs/datasharingframework/packages/container/bpe/1619172005?tag=2.1.3)  
  Digest: `sha256:faea3800b035b0565f139b2c85fff3bb98fdba961dc4ad1759269e26fe63e703`
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.1.3](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/1619168829?tag=2.1.3)  
    Digest: `sha256:aaf8d6caad0a60f13885ed08d8f43431a552aeb7049eb8f1a93ff0c535719d2b`
* **fhir**: [ghcr.io/datasharingframework/fhir:2.1.3](https://github.com/orgs/datasharingframework/packages/container/fhir/1619171288?tag=2.1.3)  
  Digest: `sha256:8c411d26561544787e5cbe68a159b6cdf0f046d01e2b12960317164e4da357b8`
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.1.3](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/1619166219?tag=2.1.3)  
  Digest: `sha256:266d4dd4f080d2069fd57ff6691fc0819bd9c1c9ede472fcd5b4fc0c8d324e70`

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.1.3</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.1.3</version>
</dependency>
```
DSF Maven Plugin on Maven Central:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.1.3</version>
</plugin>
```

Issues closed:
- OIDC Login Fails [#615](https://github.com/datasharingframework/dsf/issues/615)

This release contains contributions from [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri) and [@schwzr](https://github.com/schwzr).

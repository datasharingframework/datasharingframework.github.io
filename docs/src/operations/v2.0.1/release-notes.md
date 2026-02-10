---
title: Release Notes (v2.0.1)
icon: note
---

## [Release Notes for v2.0.1](https://github.com/datasharingframework/dsf/releases/tag/v2.0.1)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 2.0.1 - Maintenance Release
General remarks:

- This is an update for DSF 2.0.0. A description of changes between the 1.9.0 and 2.0.0 releases can be found in the [2.0.0 release notes](https://github.com/datasharingframework/dsf/releases/tag/v2.0.0).
- To Update from an existing 1.x installation, please see the [1.x -> 2.0.1 Upgrade Guide](https://dsf.dev/operations/v2.0.1/upgrade-from-1.html). 
- To Update from an existing 2.x installation, please see the [2.x -> 2.0.1 Upgrade Guide](https://dsf.dev/operations/v2.0.1/upgrade-from-2.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/operations/v2.0.1/install.html).
- With this release a startup bug related to ECC client certificate was fixed.

Bug Fixes:
- Starting the DSF 2.0.0 FHIR or BPE server with an ECC client certificate without `keyEncipherment` extension, resulted in a `First certificate from '...' not a client certificate` error ([#405](https://github.com/datasharingframework/dsf/issues/405)). The requirement for the `keyEncipherment` extension was removed with this release.

Docker images for this release can be accessed via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.0.1](https://github.com/orgs/datasharingframework/packages/container/bpe/590707284?tag=2.0.1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.0.1](https://github.com/datasharingframework/dsf/pkgs/container/bpe_proxy/667793346?tag=2.0.1)
* **fhir**: [ghcr.io/datasharingframework/fhir:2.0.1](https://github.com/orgs/datasharingframework/packages/container/fhir/590702812?tag=2.0.1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.0.1](https://github.com/datasharingframework/dsf/pkgs/container/fhir_proxy/667792891?tag=2.0.1)

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.0.1</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.0.1</version>
</dependency>
```
DSF Maven Plugin on Maven Central:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.0.1</version>
</plugin>
```

Issues closed:
- Start New Development Cycle [#406](https://github.com/datasharingframework/dsf/issues/406)
- DSF Fails to Start with Certain ECC Client Certificates [#405](https://github.com/datasharingframework/dsf/issues/405)

This release contains contributions from [@hhund](https://github.com/hhund) and [@schwzr](https://github.com/schwzr).


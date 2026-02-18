---
title: Release Notes (v1.9.0)
icon: note
---

## [Release Notes for v1.9.0](https://github.com/datasharingframework/dsf/releases/tag/v1.9.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.9.0 - Dependency Upgrades and Non Root Reverse Proxy
General remarks:

- This is an update for the 1.x DSF and not compatible with 0.9.x and older versions developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.8.0 -> 1.9.0 Upgrade Guide](https://dsf.dev/operations/v1.9.0/upgrade-from-1.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/operations/v1.9.0/install.html).
- With this release library dependencies have been updated.
- The integrated camunda engine of the DSF BPE server was upgraded to version 7.24, requiring a small change to the database schema of the DSF BPE.

Features:
- The HARICA Client Authentication RSA and ECC Issuing CAs have been added to default accepted client issuing CAs. Visit dsf.dev for a full list of [default root and issuing CA](https://dsf.dev/operations/v1.9.0/root-certificates.html).
- The Apache httpd based reverse proxy docker images **fhir_proxy** and **bpe_proxy** now execute as non root users. The **fhir_proxy** container executes with uid/gid `4101`, the **bpe_proxy** container with uid/gid `4202`.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.9.0](https://github.com/orgs/datasharingframework/packages/container/bpe/551323729?tag=1.9.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.9.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/551313303?tag=1.9.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.9.0](https://github.com/orgs/datasharingframework/packages/container/fhir/551320314?tag=1.9.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.9.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/551312844?tag=1.9.0)

Issues closed:
- Add HARICA Client Authentication RSA and ECC Issuing CAs [#363](https://github.com/datasharingframework/dsf/issues/363)
- Upgrade Dependencies [#359](https://github.com/datasharingframework/dsf/issues/359)
- Start New Development Cycle [#358](https://github.com/datasharingframework/dsf/issues/358)
- Support for running the proxy containers as non-root by default [#352](https://github.com/datasharingframework/dsf/issues/352)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri) and [@schwzr](https://github.com/schwzr).


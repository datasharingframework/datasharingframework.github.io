---
title: Release Notes (v1.5.1)
icon: note
---

## [Release Notes for v1.5.1](https://github.com/datasharingframework/dsf/releases/tag/v1.5.1)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.5.1 - Maintenance Release
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.5.1 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.5.1 Upgrade Guide](https://dsf.dev/v1.5.1/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.5.1/maintain/install.html).
- With this maintenance release, library dependencies have been updated.

Bug Fixes:
- The DSF FHIR server now correctly shows the recipient organization within the Task details view.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.4](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.4)
- [MII Data Transfer v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.5.1](https://github.com/orgs/datasharingframework/packages/container/bpe/205087165?tag=1.5.1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.5.1](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/205059195?tag=1.5.1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.5.1](https://github.com/orgs/datasharingframework/packages/container/fhir/205085313?tag=1.5.1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.5.1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/205057772?tag=1.5.1)

Issues closed:
- Upgrade Dependencies [#193](https://github.com/datasharingframework/dsf/issues/193)
- Start New Development Cycle [#191](https://github.com/datasharingframework/dsf/issues/191)
- fhir-proxy | 3 apache vulnerabilities fixed in apache 2.4.59 [#190](https://github.com/datasharingframework/dsf/issues/190)
- FHIR Server GUI: Fix recipient in Task view [#189](https://github.com/datasharingframework/dsf/issues/189)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).


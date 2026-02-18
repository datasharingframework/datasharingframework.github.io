---
title: Release Notes (v1.3.2)
icon: note
---

## [Release Notes for v1.3.2](https://github.com/datasharingframework/dsf/releases/tag/v1.3.2)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.3.2 - Maintenance Release
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.3.2 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.3.2 Upgrade Guide](https://dsf.dev/v1.3.2/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.3.2/maintain/install.html).

Bug Fixes:
- Switches the database ID generation strategy for the BPE from `DbIdGenerator` to `StrongUuidGenerator`, as described in the [camunda documentation](https://docs.camunda.org/manual/7.20/user-guide/process-engine/id-generator).

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.1](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.1)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.3.2](https://github.com/orgs/datasharingframework/packages/container/bpe/154354379?tag=1.3.2)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.3.2](https://github.com/orgs/datasharingframework/packages/container/fhir/154351273?tag=1.3.2)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.3.2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/154349744?tag=1.3.2)

Issues closed:
- Use UUID generator instead of database id generator [#139](https://github.com/datasharingframework/dsf/issues/139)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@wetret](https://github.com/wetret), [@schwzr](https://github.com/schwzr) and [@hhund](https://github.com/hhund).


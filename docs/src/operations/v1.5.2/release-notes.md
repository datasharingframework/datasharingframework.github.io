---
title: Release Notes (v1.5.2)
icon: note
---

## [Release Notes for v1.5.2](https://github.com/datasharingframework/dsf/releases/tag/v1.5.2)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.5.2 - Maintenance Release
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.5.2 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.5.2 Upgrade Guide](https://dsf.dev/v1.5.2/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.5.2/maintain/install.html).
- With this maintenance release, library dependencies have been updated. The new builds of the bpe_proxy and fhir_proxy docker images are now based on Apache httpd 2.4.61 with amongst others a fix for CVE-2024-38477 mitigating potential denial-of-service attacks. 

Bug Fixes:
- Forms for FHIR Task and QuestionnaireResponse resource can now be submitted using the `Enter`-key.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Report v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.0.1)
- [MII Feasibility v1.0.0.5](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.5)
- [MII Data Transfer v1.0.1.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.1.0)
- [MII Data Sharing v1.0.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.1)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.5.2](https://github.com/orgs/datasharingframework/packages/container/bpe/241270645?tag=1.5.2)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.5.2](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/241262795?tag=1.5.2)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.5.2](https://github.com/orgs/datasharingframework/packages/container/fhir/241267527?tag=1.5.2)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.5.2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/241262265?tag=1.5.2)

Issues closed:
- Upgrade Dependencies [#215](https://github.com/datasharingframework/dsf/issues/215)
- fhir-proxy | 9 apache vulnerabilities fixed in apache 2.4.61 [#214](https://github.com/datasharingframework/dsf/issues/214)
- Fix "onSubmit" action on Task forms [#213](https://github.com/datasharingframework/dsf/issues/213)
- Start New Development Cycle [#198](https://github.com/datasharingframework/dsf/issues/198)

This release contains contributions from [@hhund](https://github.com/hhund) and [@wetret](https://github.com/wetret).


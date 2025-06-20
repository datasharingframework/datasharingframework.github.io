---
title: Release Notes (v1.3.0)
icon: note
---

## Release Notes for v1.3.0

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.3.0 - Validation Support
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.3.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.3.0 Upgrade Guide](https://dsf.dev/v1.3.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.3.0/maintain/install.html).

Features:
- Necessary library dependencies were added to the BPE to support for FHIR resource validation in process plugins.
- HTML views for Organization, OrganizationAffiliation and Endpoint resources and their search Bundles have been added.

Bug Fixes:
- An infinite loop condition in the OrganizationProvider class used by process plugins was fixed. #104
- For reverse proxies configured with a non standard context URL, an invalid redirect from the root url without a trailing slash was corrected. #85

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.3.0](https://github.com/orgs/datasharingframework/packages/container/bpe/136172848?tag=1.3.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.3.0](https://github.com/orgs/datasharingframework/packages/container/fhir/136172183?tag=1.3.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.3.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/136170954?tag=1.3.0)

Issues closed:
- Upgrade Dependencies #114 
- Add Validation Dependencies to BPE #111 
- Create HTML Views for Organization, OrganizationAffiliation and Endpoint Search Bundles #107 
- Search for organizations by parent organization and member role hangs in infinite loop #104
- Make FHIR proxy server context path customizable #85

This release contains contributions from @EmteZogaf, @wetret and @hhund.


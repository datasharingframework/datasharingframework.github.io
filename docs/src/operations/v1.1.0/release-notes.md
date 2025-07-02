---
title: Release Notes (v1.1.0)
icon: note
---

## [Release Notes for v1.1.0](https://github.com/datasharingframework/dsf/releases/tag/v1.1.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.1.0 - UI and Other Improvements
General remarks:
- This is an update for the new 1.0.0 DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.0.0 installation, please see the [1.0.0 -> 1.1.0 Upgrade Guide](https://dsf.dev/v1.1.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.1.0/maintain/install.html).

Features:
- Changes to the DSF FHIR server user interface (UI): While instantiating Task resources via the UI, input elements with cardinality 0..* or 1..* can now be added/removed dynamically. Placeholder attributes of input elements can be copied into the value attribute using a button. The user interface now supports dark and light themes selected based on operating system preferences or user selection. New UIs have been added for Task and QuestionnaireResponse search-bundle results.
- Search parameters can now beused more than once to perform AND queries. Descriptions for the history `_at` and `_since` parameters was added to the capability statement (/metadata) and help UIs.
- The unique criteria of the OrganizationAffiliation authorization rule was reworked. Different endpoint can now be configured for different roles of a member organization within a parent organization.
- For easier debugging, a custom User-Agent Header (DSF/${version}) is now send by the DSF webservice and websocket clients. 
- The access log pattern of the DSF FHIR reverse-proxy now includes the user-agent header and client certificate subject DN string. An environment variable to configure the mod_ssl parameter `SSLVerifyClient` has been added to the DSF FHIR reverse-proxy. This environment variable can be used to make client certificate non mandatory in order to used local OIDC authentication.
- Java dependency have been upgraded where possible.

Bug Fixes:
- Input elements are now always shown within the Task user interface of the DSF FHIR server.
- Process Plugin API: The Implementation of the OrganizationProvider.getOrganization(Identifier) method was fixed and now returns the correct results.
- Process Plugin Loader: A check for the existence of a NamingSystem version property was removed since NamingSystem resources in FHIR R4 do not support the version property.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.0.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.1.0](https://github.com/orgs/datasharingframework/packages/container/bpe/121017713?tag=1.1.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.1.0](https://github.com/orgs/datasharingframework/packages/container/fhir/121016922?tag=1.1.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.1.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/121014165?tag=1.1.0)

Issues closed:
- Upgrade Dependencies [#79](https://github.com/datasharingframework/dsf/issues/79)
- FHIR Server UI Dark Mode [#75](https://github.com/datasharingframework/dsf/issues/75)
- NamingSystem not deployable from Process Plugin [#72](https://github.com/datasharingframework/dsf/issues/72)
- Allow SSLVerifyClient Option in RevProxy to Be Configured Via Environment Variable [#70](https://github.com/datasharingframework/dsf/issues/70)
- Include Software Version in User-Agent for outgoing requests (BPE) [#68](https://github.com/datasharingframework/dsf/issues/68)
- Allow-List: Add Support for Specific Endpoints for Different Roles in a Parent Organization [#65](https://github.com/datasharingframework/dsf/issues/65)
- Add Support for Repeated Search Parameters to Define AND Queries [#63](https://github.com/datasharingframework/dsf/issues/63)
- OrganizationProvider Never Finds Organization by Identifier [#61](https://github.com/datasharingframework/dsf/issues/61)
- Start New Development Cycle [#58](https://github.com/datasharingframework/dsf/issues/58)
- Improve Task HTML view [#56](https://github.com/datasharingframework/dsf/issues/56)

This release contains contributions from [@wetret](https://github.com/wetret) and [@hhund](https://github.com/hhund).


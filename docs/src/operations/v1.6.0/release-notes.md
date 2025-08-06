---
title: Release Notes (v1.6.0)
icon: note
---

## [Release Notes for v1.6.0](https://github.com/datasharingframework/dsf/releases/tag/v1.6.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.6.0 - Improved Update Performance
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.x -> 1.6.0 Upgrade Guide](https://dsf.dev/v1.6.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.6.0/maintain/install.html).
- With this release, library dependencies have been updated, a number of bugs fixed and the execution of FHIR update operations for `Organization` and `OrganizationAffiliation` improved.

Known Issue:
- Duplicate `ActivityDefinition` resources in DSF FHIR server prevent processes from being executed, for more infos and a workaround see [#247](https://github.com/datasharingframework/dsf/issues/247)

Features:
- The execution performance of FHIR rest update operations for `Organization` and `OrganizationAffiliation` resource has been improved.

Bug Fixes:
- The DSF BPE missed `Task` and `QuestionnaireResponse` resources received by the DSF FHIR server during a connection outage between the DSF FHIR and DSF BPE servers. Missed `Task` and `QuestionnaireResponse` are now always downloded after the connection is reestablished. See [#233](https://github.com/datasharingframework/dsf/issues/233)
- The OIDC provider URL could not be configured as a "no proxy" URL if a general forward proxy was configured for the DSF FHIR or DSF BPE servers. The responsible logic error in the code was fixed. See [#232](https://github.com/datasharingframework/dsf/issues/232)
- `QuestionnaireResponse` and corresponding `Questionnaire` resource could not be created together in a `transaction` `Bundle`. The reference check for the `QuestionnaireResponse.questionnaire` canoncial reference was move to the correct `transaction` `Bundle` execution phase. See [#226](https://github.com/datasharingframework/dsf/issues/226)
- A wrong resource type in the `getLocalVersionlessAbsoluteUrl` method of the plugin API class `QuestionnaireResponseHelperImpl` was fixed. See [#224](https://github.com/datasharingframework/dsf/issues/224)

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.0.1)
- [MII Feasibility v1.0.0.7](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.7)
- [MII Data Transfer v1.0.1.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.1.0)
- [MII Data Sharing v1.0.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.1)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.6.0](https://github.com/orgs/datasharingframework/packages/container/bpe/289527794?tag=1.6.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.6.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/289517305?tag=1.6.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.6.0](https://github.com/orgs/datasharingframework/packages/container/fhir/289523073?tag=1.6.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.6.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/289517017?tag=1.6.0)

Issues closed:
- Upgrade Dependencies [#236](https://github.com/datasharingframework/dsf/issues/236)
- BPE Misses Task and QuestionnaireResponse Resources if Network Disconnects [#233](https://github.com/datasharingframework/dsf/issues/233)
- OIDC Provider Can’t Be Excluded From Configured Forwarding-Proxy [#232](https://github.com/datasharingframework/dsf/issues/232)
- Improve Performance of Organization and OrganizationAffiliation Updates [#230](https://github.com/datasharingframework/dsf/issues/230)
- A Questionnaire and corresponding QuestionnaireResponse resource cannot be posted to the FHIR server at the same time in a transaction Bundle [#226](https://github.com/datasharingframework/dsf/issues/226)
- QuestionnaireResponseHelperImpl Uses Wrong Resource Type in getLocalVersionlessAbsoluteUrl Method [#224](https://github.com/datasharingframework/dsf/issues/224)
- Start New Development Cycle [#219](https://github.com/datasharingframework/dsf/issues/219)

This release contains contributions from [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).

**Assets:** 
- [ZIP](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.6.0.zip)
- [TAR.GZ](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.6.0.tar.gz)



---
title: Release Notes (v1.7.1)
icon: note
---

## [Release Notes for v1.7.1](https://github.com/datasharingframework/dsf/releases/tag/v1.7.1)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.7.1 - Maintenance Release
General remarks:

- This is an update for the 1.x DSF and not compatible with 0.9.x and older versions developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.x -> 1.7.1 Upgrade Guide](https://dsf.dev/v1.7.1/maintain/upgrade-from-1.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.7.1/maintain/install.html).
- With this release, library dependencies have been updated and among others a bug fixed where the BPE did not connect the websocket on startup.

Bug Fixes:
- The Subscription `criteria` search parameter was not used with the `:exact` modifier, leading to manually created Subscription resources being overridden on startup if their `criteria` value stared with the same value as one of the standard Subscription resources. The `:exact` modifier is now used in the internal bundle for the standard DSF FHIR Subscription resources.
- The BPE server did not connect the websocket connection for `requested` Task resources, if Task resources downloaded on startup either belonged to processes no longer deployed or included references to FHIR resource no longer available. The error handling of the BPE TaskHandler was improved. In the DSF FHIR server updates to Task resources from status `requested` to `failed` are now allowed and validation rules were improved for Task resource updates with status `failed`.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.7.1](https://github.com/orgs/datasharingframework/packages/container/bpe/380821506?tag=1.7.1)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.7.1](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/380812987?tag=1.7.1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.7.1](https://github.com/orgs/datasharingframework/packages/container/fhir/380818455?tag=1.7.1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.7.1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/380812518?tag=1.7.1)

Issues closed:
- Upgrade Dependencies [#287](https://github.com/datasharingframework/dsf/issues/287)
- BPE Websocket Not Connected When In-Progress Update Fails for Old Tasks [#279](https://github.com/datasharingframework/dsf/issues/279)
- Subscription criteria Search Parameter Should Be Used With :exact Modifier [#272](https://github.com/datasharingframework/dsf/issues/272)
- Start New Development Cycle [#266](https://github.com/datasharingframework/dsf/issues/266)
- Modify Documentation Generator to Support SECRET_FILE Environment Variables [#265](https://github.com/datasharingframework/dsf/issues/265)

This release contains contributions from [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).

**Assets:** 
- [ZIP](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.7.1.zip)
- [TAR.GZ](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.7.1.tar.gz)



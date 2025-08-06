---
title: Release Notes (v1.8.0)
icon: note
---

## [Release Notes for v1.8.0](https://github.com/datasharingframework/dsf/releases/tag/v1.8.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.8.0 - Dependency Upgrades and UI Fixes
General remarks:

- This is an update for the 1.x DSF and not compatible with 0.9.x and older versions developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.7.1 -> 1.8.0 Upgrade Guide](https://dsf.dev/operations/v1.8.0/upgrade-from-1.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/operations/v1.8.0/install.html).
- With this release, library dependencies have been updated and small bugs in the UI of the DSF FHIR have been fixed.
- The integrated camunda engine of the DSF BPE server was upgraded to version 7.23, requiring a small change to the database schema of the DSF BPE and thus making this the 1.8.0 and not a 1.7.2 release.

Bug Fixes:
- Task resources with status `draft` were not correctly rendered if an optional input parameter was not defined in the Task resource ([#306](https://github.com/datasharingframework/dsf/issues/306)).
- Boolean input parameters of Task resource with status `draft`, were not included in the created Task resource with status `requested` if the `false` option was selected ([#323](https://github.com/datasharingframework/dsf/issues/323)).

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.8.0](https://github.com/orgs/datasharingframework/packages/container/bpe/428297252?tag=1.8.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.8.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/428292655?tag=1.8.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.8.0](https://github.com/orgs/datasharingframework/packages/container/fhir/428294010?tag=1.8.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.8.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/428292563?tag=1.8.0)

Issues closed:
- FHIR UI: Task Boolean Input Parameter With Value False Not Included in Created Task [#323](https://github.com/datasharingframework/dsf/issues/323)
- Upgrade Dependencies [#320](https://github.com/datasharingframework/dsf/issues/320)
- Start New Development Cycle [#312](https://github.com/datasharingframework/dsf/issues/312)
- Migrate OSSRH Namespace to Central Portal [#308](https://github.com/datasharingframework/dsf/issues/308)
- Fix Cardinality Handling on Draft Tasks (Templates) with Missing Optional Inputs [#306](https://github.com/datasharingframework/dsf/issues/306)
- Adapt Github Actions to build on pull request [#163](https://github.com/datasharingframework/dsf/issues/163)

This release contains contributions from [@hhund](https://github.com/hhund), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).

**Assets:** 
- [ZIP](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.8.0.zip)
- [TAR.GZ](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.8.0.tar.gz)



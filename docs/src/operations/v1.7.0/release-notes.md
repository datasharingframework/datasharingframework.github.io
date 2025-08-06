---
title: Release Notes (v1.7.0)
icon: note
---

## [Release Notes for v1.7.0](https://github.com/datasharingframework/dsf/releases/tag/v1.7.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.7.0 - Simplified Configuration and Duplicate Resources Fix
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older versions developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- To Update an existing 1.x installation, please see the [1.x -> 1.7.0 Upgrade Guide](https://dsf.dev/v1.7.0/maintain/upgrade-from-1.html). **Note:** Upgrading to 1.7.0 requires additional work beyond updating the version number.
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.7.0/maintain/install.html).
- With this release, library dependencies have been updated, a bug regarding duplicate FHIR resources fixed and a few features implemented to simplify the configuration.

Features:
- The default organization bookmarks in the FHIR server UI have been updated to reflect parent organizations supported by the allow list management application.
- New uniqueness criteria have been implemented for draft Task resources, enforcing unique resources based on identifiers.
- The integrated list of valid media types (CodeSystem urn:ietf:bcp:13) has been updated to reflect all published types by the [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml) and extended with the non standard mimetype `application/x-ndjson`.
- Default trusted root certificate authorities, previously published as part of the install guide resources, have been moved into the docker images. This simplifies the setup for MII/NUM users and still leaves the existing options to set custom CAs. For more details, see the [Default Root Certificates](https://dsf.dev/v1.7.0/maintain/root-certificates.html) page. **Note:** If not explicitly configured, optional connections to the OIDC provider and mail server previously used the default certificate trust store of the Java Virtual Machine (JVM). The new default trusts a limited number of certificate authorities only and thus may need to be manually overridden.
- The docker secrets reader has been extended to also work with environment variables ending in `_SECRET` enabling definition of these values via files. For additional information, see the [Passwords and Secrets](https://dsf.dev/v1.7.0/maintain/passwords-secrets.html) page.

Bug Fixes:
- Duplicate ActivityDefinition resources (same url and version) prevent processes from being executed in version 1.6.0. If inserts into the FHIR server fail during BPE startup (for example due to read timeouts), duplicate metadata resources like ActivityDefinition from process plugins can be created if the BPE container restarts too fast. Constraint trigger based unique criteria have been implemented for the database in 1.7.0 to prevent duplicate resources. The default transaction isolation level for modifying transactions was changed from "repeatable read" to "read committed", enabling dirty reads needed to allow constraint triggers to see inserts/updates executed by parallel running transactions. Serial execution of constraint triggers is realized by using exclusive transaction level advisory locks before executing the constraint trigger function.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.7.0](https://github.com/orgs/datasharingframework/packages/container/bpe/341515944?tag=1.7.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.7.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/341496484?tag=1.7.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.7.0](https://github.com/orgs/datasharingframework/packages/container/fhir/341502917?tag=1.7.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.7.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/341494817?tag=1.7.0)

Issues closed:
- Extend Secrets Reader for Environment Variables Ending in _SECRET_FILE [#261](https://github.com/datasharingframework/dsf/issues/261)
- Add Default Root CAs to Docker Images [#259](https://github.com/datasharingframework/dsf/issues/259)
- Update CodeSystem urn:ietf:bcp:13 [#256](https://github.com/datasharingframework/dsf/issues/256)
- Upgrade Dependencies maintenance [#253](https://github.com/datasharingframework/dsf/issues/253)
- Update Default Organization Bookmark List [#248](https://github.com/datasharingframework/dsf/issues/248)
- Duplicate ActivityDefinition Resources Prevent Processes From Being Executed [#247](https://github.com/datasharingframework/dsf/issues/247)
- Start New Development Cycle [#245](https://github.com/datasharingframework/dsf/issues/245) 

This release contains contributions from [@hhund](https://github.com/hhund), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).

**Assets:** 
- [ZIP](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.7.0.zip)
- [TAR.GZ](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.7.0.tar.gz)



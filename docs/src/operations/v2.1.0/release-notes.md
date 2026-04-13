---
title: Release Notes (v2.0.2)
icon: note
---

## [Release Notes for v2.0.2](https://github.com/datasharingframework/dsf/releases/tag/v2.0.2)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 2.0.2 - Maintenance Release
General remarks:

- This is an update for DSF 2.0.0 / 2.0.1.
- To Update from an existing 1.x installation, please see the [1.x -> 2.0.2 Upgrade Guide](https://dsf.dev/operations/v2.0.2/upgrade-from-1.html). 
- To Update from an existing 2.x installation, please see the [2.x -> 2.0.2 Upgrade Guide](https://dsf.dev/operations/v2.0.2/upgrade-from-2.html). 
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/operations/v2.0.2/install.html).
- With this release a number of bugs were fixed.

Bug Fixes:
- The property key `dev.dsf.bpe.fhir.client.connections.config.default.enable.debug.logging` was used for unrelated configuration values to specify the default EnableDebugLogging value for FHIR client connections and the default OidcVerifyAuthorizedParty value for OIDC Client-Credentials-Flow connections. A new property key `dev.dsf.bpe.fhir.client.connections.config.default.oidc.verify.authorized.party` was added.
- A NoClassDefFoundError was throw when executing the [num-process-dashboard-report](https://github.com/medizininformatik-initiative/dsf-plugin-numdashboard) process plugin in Version 1.0.0.0 and 1.1.0.0. Additional packages were added to the API v1 class allow list file.
- A process instance waiting for a timer event crashed on continuation if the process plugin was removed. The crash resulted in Task resources remaining in status `in-progress`. Additional error handling was implemented to update Task to a status `failed`.
- No debug log output was generated for code from the [mii-processes-common](https://github.com/medizininformatik-initiative/mii-processes-common) module used in some medical informatics initiative process plugins. A new config property `dev.dsf.log.min.level.loggers` with default value was added to restore the DSF 1.x behavior.
- The API v2 `setJsonVariable()` mechanism was unable to serialize date/time objects from the `java.time` package. The `ObjectMapper` configuration was fixed and the `JavaTimeModule` added.

Docker images for this release can be accessed via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.0.2](https://github.com/orgs/datasharingframework/packages/container/bpe/679531729?tag=2.0.2)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.0.2](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/679491992?tag=2.0.2)
* **fhir**: [ghcr.io/datasharingframework/fhir:2.0.2](https://github.com/orgs/datasharingframework/packages/container/fhir/679512827?tag=2.0.2)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.0.2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/679488712?tag=2.0.2)

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.0.2</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.0.2</version>
</dependency>
```
DSF Maven Plugin on Maven Central:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.0.2</version>
</plugin>
```

Issues closed:
- API v2 Variables Fails to Serialize java.time Types [#428](https://github.com/datasharingframework/dsf/issues/428)
- Incomplete Debug Logging for MII Process Plugins [#425](https://github.com/datasharingframework/dsf/issues/425)
- Add DFN Community-PKI as Trusted Client CA [#423](https://github.com/datasharingframework/dsf/issues/423)
- Crash on Timer Continuation After Process Plugin Removal Leaves Task In-Progress [#421](https://github.com/datasharingframework/dsf/issues/421)
- Remove Duplicated Thumbprint Calculations [#419](https://github.com/datasharingframework/dsf/issues/419)
- Upgrade Dependencies [#417](https://github.com/datasharingframework/dsf/issues/417)
- NoClassDefFoundError While Executing Plugin num-process-dashboard-report [#415](https://github.com/datasharingframework/dsf/issues/415)
- Start New Development Cycle [#412](https://github.com/datasharingframework/dsf/issues/412)
- Property dev.dsf.bpe.fhir.client.connections.config.default.enable.debug.logging Used for Unrelated Configuration Values [#411](https://github.com/datasharingframework/dsf/issues/411)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).


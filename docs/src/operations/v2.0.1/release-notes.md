---
title: Release Notes (v2.0.1)
icon: note
---

## [Release Notes for v2.0.1](https://github.com/datasharingframework/dsf/releases/tag/v2.0.1)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### Second Release Candidate for 2.0.0
General remarks:
- This is the second release candidate for the upcoming major version 2.0.0. Do not use this release in production.
- Two new default trusted server root CAs were added and a number of bugs fixed since the 2.0.0-RC1 release, for details see PRs: [#394](https://github.com/datasharingframework/dsf/issues/394) and [#396](https://github.com/datasharingframework/dsf/issues/396).

Feature Summary:
- With the 2.0.0 release the workflow engine for the **DSF BPE Server** was migrated from *Camunda 7* to the community-driven, open-source BPMN engine [Operaton](https://operaton.org). The migration includes a byte-code rewriting layer that allows existing v1 process plugins compiled against Camunda classes to continue running without recompilation.
- The release includes a new **Process Plugin API v2**, offering cleaner abstractions, new services and expanded metadata. The API introduces foundational support for FHIR validation services (planned to be fully activated in 2.1) and provides utilities such as data encryption, compression and new logging facilities. Using the new FHIR server connections API, credentials for local FHIR data servers can be shared between process plugins, with password, mTLS and OIDC based authentication supported.
 - Default FHIR profiles for all supported resources have been created for version 2.0.0 on the **DSF FHIR Server**, with automated data-migration to ensure compliance for existing installations. The authorization system now supports fine-grained, resource-specific roles and enhanced practitioner-based access control for `Task` and `QuestionnaireResponse` resources. Internal optimizations improve performance for `Binary` resources with a new size limit of resources constraint by PostgreSQL's 4TB limit of *Large Objects* (limits of forwarding- and reverse-proxies for uploads may be smaller).
 - Finally, the **user experience** has been modernized with a more responsive layout and a new statistics panels on the FHIR server visible to administrators. Extensive configuration cleanup and unified logging controls simplify administration across both the BPE and FHIR servers.
 - The DSF 2.0.0 code-base was upgraded to Java 25 and uses latest versions of Jetty and HAPI. A new [dsf-maven-plugin](https://repo1.maven.org/maven2/dev/dsf/dsf-maven-plugin/2.0.0-RC2) was created to automate build steps and help process plugins developers in generating configuration documentation and docker-compose based DSF development setups.

Docker images for this release can be accessed via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:2.0.0-RC2](https://github.com/orgs/datasharingframework/packages/container/bpe/581165653?tag=2.0.0-RC2)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:2.0.0-RC2](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/581150393?tag=2.0.0-RC2)
* **fhir**: [ghcr.io/datasharingframework/fhir:2.0.0-RC2](https://github.com/orgs/datasharingframework/packages/container/fhir/581159107?tag=2.0.0-RC2)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:2.0.0-RC2](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/581149400?tag=2.0.0-RC2)

Process Plugin API v1 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v1</artifactId>
    <version>2.0.0-RC2</version>
</dependency>
```
Process Plugin API v2 on Maven Central:
```xml
<dependency>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-bpe-process-api-v2</artifactId>
    <version>2.0.0-RC2</version>
</dependency>
```
DSF Maven Plugin on Maven Central:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.0.0-RC2</version>
</plugin>
```

Issues closed:
- Add New D-Trust Server Certificate Root CAs [#395](https://github.com/datasharingframework/dsf/issues/395)
- Fix 2.0.0-RC1 Bugs [#393](https://github.com/datasharingframework/dsf/issues/393)
- Add Licence Headers [#391](https://github.com/datasharingframework/dsf/issues/391)
- Improve FHIR Server UI [#388](https://github.com/datasharingframework/dsf/issues/388)
- Delete dsf-fhir-auth and Move Code to dsf-fhir-server [#387](https://github.com/datasharingframework/dsf/issues/387)
- Upgrade to PostgreSQL 18 [#385](https://github.com/datasharingframework/dsf/issues/385)
- Rename Test-Setups to Dev-Setups [#383](https://github.com/datasharingframework/dsf/issues/383)
- Add Methods for Additional Metadata to v2 ProcessPluginDefinition [#382](https://github.com/datasharingframework/dsf/issues/382)
- Add FHIR Profiles for All Supported Resource Types [#378](https://github.com/datasharingframework/dsf/issues/378)
- Allow Updates to Output Parameters of in-progress Tasks via Plugin API [#373](https://github.com/datasharingframework/dsf/issues/373)
- Add Service to Validate FHIR Resources via Plugin API [#372](https://github.com/datasharingframework/dsf/issues/372)
- Improve User to Task and QuestionnaireResponse Association [#367](https://github.com/datasharingframework/dsf/issues/367)
- Extended FHIR Server User Role Config - Role Per Resource [#365](https://github.com/datasharingframework/dsf/issues/365)
- Migrate Camunda 7 to Operaton 1 [#353](https://github.com/datasharingframework/dsf/issues/353)
- Add Service With Data Compression Functions to Plugin API [#349](https://github.com/datasharingframework/dsf/issues/349)
- Simplify Prototype Scoped Bean Definition for BPMN Activities [#347](https://github.com/datasharingframework/dsf/issues/347)
- Runtime Access to ProcessPluginDefinition via API [#346](https://github.com/datasharingframework/dsf/issues/346)
- Properly Display FHIR Duration Type in DSF FHIR Server UI [#344](https://github.com/datasharingframework/dsf/issues/344)
- Add Library.content to HTML View [#341](https://github.com/datasharingframework/dsf/issues/341)
- Simplify Specification of Name, Version and Release-Date of Process Plugins Using Values From Maven pom [#338](https://github.com/datasharingframework/dsf/issues/338)
- DSF Maven Plugin: Add ability to generate .password-files [#332](https://github.com/datasharingframework/dsf/issues/332)
- Add Validation Support for Process Plugins [#331](https://github.com/datasharingframework/dsf/issues/331)
- Add DocumentReference HTML View [#325](https://github.com/datasharingframework/dsf/issues/325)
- Improve Allow-List and Enable Thumbprints on Endpoint Resources [#317](https://github.com/datasharingframework/dsf/issues/317)
- Reorganize dsf-tools Modules [#315](https://github.com/datasharingframework/dsf/issues/315)
- Extend dsf-tools-documentation-generator Maven Plugin for v2 Process Plugins [#309](https://github.com/datasharingframework/dsf/issues/309)
- Create Target Provider [#307](https://github.com/datasharingframework/dsf/issues/307)
- Upgrade Dependencies [#301](https://github.com/datasharingframework/dsf/issues/301)
- Upgrade to HAPI 8.0.0 [#297](https://github.com/datasharingframework/dsf/issues/297)
- Optimize FHIR Binary Resource Handling [#296](https://github.com/datasharingframework/dsf/issues/296)
- Add Mechanism to the API for Modifying Process Plugin FHIR Resources During Startup [#292](https://github.com/datasharingframework/dsf/issues/292)
- Remove Camunda Dependency from Process Plugin API v2 [#284](https://github.com/datasharingframework/dsf/issues/284)
- Validator Ignores CodeSystem Version [#281](https://github.com/datasharingframework/dsf/issues/281)
- Add BPE Integration Tests [#271](https://github.com/datasharingframework/dsf/issues/271)
- Add Mechanism to Manage Connections to Local FHIR Servers [#270](https://github.com/datasharingframework/dsf/issues/270)
- Port Fixes and Features From 1.7.0 to 2.0.0 [#268](https://github.com/datasharingframework/dsf/issues/268)
- Complete Class and Resource Allow Lists for ProcessPluginApiClassLoader [#241](https://github.com/datasharingframework/dsf/issues/241)
- Port Fixes and Features From 1.6.0 to 2.0.0 [#239](https://github.com/datasharingframework/dsf/issues/239)
- Add Methods for Accessing "Local" BPMN Variables to the Plugin API [#210](https://github.com/datasharingframework/dsf/issues/210)
- Add Service to Log Debug Information Including Context Information via Plugin API [#209](https://github.com/datasharingframework/dsf/issues/209)
- Add Service to Log Sensitive Data if Enabled via Plugin API [#208](https://github.com/datasharingframework/dsf/issues/208)
- Add Service to Access Trusted Certificate Authorities via Plugin API [#207](https://github.com/datasharingframework/dsf/issues/207)
- Add Service to Encrypt and Decrypt Binary Data via Plugin API [#206](https://github.com/datasharingframework/dsf/issues/206)
- Add Service to Check Mime-Type of Binary Data via Plugin API [#205](https://github.com/datasharingframework/dsf/issues/205)
- Add Default Trusted Certificate Authorities to Docker Images [#204](https://github.com/datasharingframework/dsf/issues/204)
- Upgrade to Jetty 12 [#203](https://github.com/datasharingframework/dsf/issues/203)
- Upgrade to Java 25 [#202](https://github.com/datasharingframework/dsf/issues/202)
- Web Application Style Class Loading for Process Plugins [#201](https://github.com/datasharingframework/dsf/issues/201)
- Create API v2 Maven Module [#200](https://github.com/datasharingframework/dsf/issues/200)
- Process Plugin API v2 [#197](https://github.com/datasharingframework/dsf/issues/197)
- Don't require DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT [#177](https://github.com/datasharingframework/dsf/issues/177)
- Add Constants for organization-role and practitioner-role CodeSystems [#81](https://github.com/datasharingframework/dsf/issues/81)
- Improve DefaultUserTaskListener [#78](https://github.com/datasharingframework/dsf/issues/78)

This release contains contributions from [@alexanderkiel](https://github.com/alexanderkiel), [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@jaboehri](https://github.com/jaboehri), [@MadMax93](https://github.com/MadMax93), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).


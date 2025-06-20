---
title: Release Notes (v1.0.0)
icon: note
---

## Release Notes for v1.0.0

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.0.0 - Major Release
General remarks:
- This is a major DSF release not compatible with 0.9.x and older version developed at https://github.com/highmed/highmed-dsf

Features:
- OpenID Connect authentication for local users is now available for the FHIR server, which is acting as an OIDC client authenticating users for the HTML frontend via Authorization Code Flow.
- OAuth Bearer Token Authentication supports clients in directly interacting with the FHIR rest webservice.
- Authorization extensions were added to ActivityDefinition resources which allow plugins to configure execution of processes for users. 
- The FHIR `_summary` parameter is available as defined by the [specification](http://hl7.org/fhir/R4/search.html#summary).
- The DSF FHIR docker image contains a default "external" `bundle.xml` file to create the local Organization and Endpoint resources and therefore no longer needs to be mounted via a docker-volume.
- The process plugin API has been redesigned. Process plugins are now build for a specific API version that will be supported across future DSF versions.
- A new HTML view allows starting processes via Task resources with status `draft`.
- The authorization rule for `draft` Task resources was modified to allow creation of Tasks even if the Task would not be allowed to be executed.
- A `business-key` input parameter is automatically added via DSF BPE server TaskHandler if not set by user, so that executed processes can be traced better.
- Two new organization-roles are now available: `DTS`, `UAC`.
- The helper classes for Task and QuestionnaireResponse resources have been adapted to the new process plugin API.
- The documentation generator can now be used as a maven plugin using compile-time only annotations.
- The code base has been migrated to Java 17 and uses the new `dsf.dev` namespace.
- The Jetty config properties are now aligned with all other existing `dev.dsf...` properties.
- A common forward proxy server config with config parameters for: `url`, `username`, `password` and a `no-proxy` list is available and can be accessed via the process plugin API.
- The database migration steps have been streamlined as much as possible because there is no backwards 
compatibility with 0.9.x and older versions.
- Maven modules are now released via [maven central](https://repo.maven.apache.org/maven2/dev/dsf/).
- Self hosted runners are now provided to circumvent RAM and CPU shortages in GitHub hosted runners.

Removed:
- It is no longer possible to define dependencies between processes.
- It is no longer possible to deploy processes as folders.
- FHIR Metadata resources, profiles and authorization rules only needed for HiGHmed processes have been removed.
- Modules that are not considered as core modules of the DSF but are process specific have been removed: `dsf-consent`, `dsf-mpi`, `dsf-openehr`, `dsf-pseudonymization`, `dsf-bpe-webservice-client`
- The deprecated `organization-type` CodeSystem and ValueSet have been removed.
- The `plugin` folder has beed hidden from standard deployments. Processes should be released as fat-jars containing the "old" plugins.
- The VM-based test-setup has been removed in favor of the docker-based test-setup.

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.0.0](https://github.com/orgs/datasharingframework/packages/container/bpe/105302481?tag=1.0.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.0.0](https://github.com/orgs/datasharingframework/packages/container/fhir/105300858?tag=1.0.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.0.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/105293483?tag=1.0.0)

Issues closed:
- Rework Draft Task Authorization and Extend ActivityDefinition Task Authorization Rules #51
- Create a Task HTML view #50
- Add OAuth Bearer Token Authentication #47
- Simplify the DB Migration Scripts #45
- Better align organization roles with currently existing roles #43
- Add Default External bundle.xml to Docker Image #40
- Cleanup TaskHelper and Add JavaDoc #38
- Add Common Forward Proxy Server Config #36
- Switch to self hosted github runner #34
- Separate documentation-generator and -annotations #30
- Mandatory business-key input parameter #27
- Improve Process Plugin API #26
- Add Support for Query Parameter _summary #23
- Remove dependencies between processes #22
- Remove process deployments using folders #21
- Align Jetty Config Properties With Existing dev.dsf... Properties #18
- Remove FHIR Metadata resources, profiles and authorization rules only needed for HiGHmed processes #13
- Remove deprecated organization-type CodeSystem and ValueSet #12
- Hide/rename plugin folder from default deployments #11
- Remove process specific modules #9
- Add OpenID Connect Authentication for Local Users #7
- Remove VM-based Test-Setup #6
- Migrate to Java 17 #2
- Migrate to dsf.dev Namespace #1

This release contains contributions from @schwzr, @wetret and @hhund.


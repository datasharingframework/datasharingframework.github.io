---
title: Release Notes (v1.4.0)
icon: note
---

## [Release Notes for v1.4.0](https://github.com/datasharingframework/dsf/releases/tag/v1.4.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.4.0 - General Improvements and Bug Fixes
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.4.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.4.0 Upgrade Guide](https://dsf.dev/v1.4.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.4.0/maintain/install.html).

Features:
- HTML views for ActivityDefinition resources and searchset Bundle results have been added.
- The `name` search parameter was implemented for resources: CodeSystem, HealthcareService, Library, Location, Measure, Questionnaire, StructureDefinition and ValueSet. The `name` search parameter for Organization is now fully implemented and also works with the `Organization.alias` property.
- The Apache module `mod_proxy_wstunnel` is no longer needed and was removed from the fhir_proxy docker image.
- The maven `site` goal was configured to generate pmd, cpd and spotbugs with slf4j bug patterns static code analysis reports as well as javadoc html views. The maven goal `mvn site site:stage` can be used to create a combined report with working links at `\target\staging`.
- Changes suggested by static code analysis tools were implemented and a general code base cleanup was performed.
- Parallel maven builds with parallel execution of tests can now be performed, for example using `mvn install -T2C -DforkCount=4`.
- Release-candidate and milestone releases of process plugins are now treated like snapshot releases. During deployment metadata resources from these plugin types are created with status `draft` and updated on every startup.

Bug Fixes:
- Binary resources in JSON format exceeding length 20.000.000 previously resulted in a `ca.uhn.fhir.parser.DataFormatException`. Resources can now be up to max integer length (i.e. 2,14 GB) in size.
- A missing SLF4J placeholder was added to circumvent a `java.lang.IllegalArgumentException`.
- Reading a resource with the version after the current version, resulted in a HTTP 500 status code. The REST API now correctly answers with a HTTP 404 status code.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.1](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.3)
- [MII Data Transfer v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.4.0](https://github.com/orgs/datasharingframework/packages/container/bpe/159291561?tag=1.4.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.4.0](https://github.com/orgs/datasharingframework/packages/container/fhir/159288668?tag=1.4.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.4.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/159285465?tag=1.4.0)

Issues closed:
- Upgrade Dependencies [#155](https://github.com/datasharingframework/dsf/issues/155)
- Add HTML Views for ActivityDefinitions [#151](https://github.com/datasharingframework/dsf/issues/151)
- Remove mod_proxy_wstunnel From Apache Reverse Proxy [#145](https://github.com/datasharingframework/dsf/issues/145) 
- Configure Maven Site Goal [#142](https://github.com/datasharingframework/dsf/issues/142) 
- Increase maximum string length [#138](https://github.com/datasharingframework/dsf/issues/138) 
- Exception when logging audit information for resource without entity [#137](https://github.com/datasharingframework/dsf/issues/137) 
- Enable Parallel Maven Builds [#135](https://github.com/datasharingframework/dsf/issues/135)
- Start New Development Cycle [#133](https://github.com/datasharingframework/dsf/issues/133) 
- Prevent HTTP 500 Statuscode on non existent history element  [#132](https://github.com/datasharingframework/dsf/issues/132)  
- Treat RC releases similar to SNAPSHOT releases [#131](https://github.com/datasharingframework/dsf/issues/131)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).


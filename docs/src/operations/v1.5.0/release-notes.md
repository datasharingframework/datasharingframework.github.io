---
title: Release Notes (v1.5.0)
icon: note
---

## [Release Notes for v1.5.0](https://github.com/datasharingframework/dsf/releases/tag/v1.5.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.5.0 - UI and Questionnaire Improvements
General remarks:
- This is an update for the 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.5.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.5.0 Upgrade Guide](https://dsf.dev/v1.5.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.5.0/maintain/install.html).
- GitHub's [CodeQL](https://codeql.github.com) scanner was added to the suite of tools we used to regularly scan the repository for security vulnerabilities, inefficiencies and other bugs in Java and JavaScript code.
- Community guidelines including feature, issue and pull-request templates as well as security information and contribution guidelines have been added to the repository.

Features:
- Debug logging of DB queries, webservice request headers and the current (authenticated) user are now disabled by default and can be activated using config options.
- To improve the maintainability and robustness of the HTML generation code base, the DSF user interface is now generated using the [Thymeleaf](https://www.thymeleaf.org) templating engine.
- A visual indicator to differentiate between **dev**elopment, **test** and **prod**uction environments can now be configured using the [DEV_DSF_FHIR_SERVER_UI_THEME](https://dsf.dev/stable/maintain/fhir/configuration.html#dev-dsf-fhir-server-ui-theme) and [DEV_DSF_BPE_SERVER_UI_THEME](https://dsf.dev/stable/maintain/fhir/configuration.html#dev-dsf-bpe-server-ui-theme) environment variables. Additionally, the look and feel of the user interface can now be customized via CSS overrides.
- To show deployed processes and their BPMN diagrams as well as active process instances a user interface (UI) was added to the DSF BPE server application. The BPE UI is in _beta_ state and may change significantly in future releases.
- A database migration script has been added to cleanup old orphaned entries in the `read_access` table of the DSF FHIR database. In order to remove future corresponding entries from the `read_access` table ,if resources are permanently deleted, `BEFORE DELETE` database triggers have been added to resource tables.
- Questionnaire resources can now have optional items for BPMN user-tasks. The UI for displaying Task and QuestionnaireReponse Resources has been improved and now supports data-absent-reason extensions to create inputs without default values.
- Library dependencies were upgraded where possible and applicable.

Bug Fixes:
- The file-system readability of the client certificate private-key file in the BPE is now checked correctly.
- The `:below` name modifier has been configured for the ActivityDefinition.url search parameter.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.4](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.4)
- [MII Data Transfer v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.5.0](https://github.com/orgs/datasharingframework/packages/container/bpe/181872709?tag=1.5.0)
* **bpe_proxy**: [ghcr.io/datasharingframework/bpe_proxy:1.5.0](https://github.com/orgs/datasharingframework/packages/container/bpe_proxy/181867281?tag=1.5.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.5.0](https://github.com/orgs/datasharingframework/packages/container/fhir/181870747?tag=1.5.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.5.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/181866902?tag=1.5.0)

Issues closed:
- Add Config Options to Enable Debug Logging of DB Queries, Webservice Request Headers and the Current User  [#183](https://github.com/datasharingframework/dsf/issues/183)
- Upgrade Dependencies [#178](https://github.com/datasharingframework/dsf/issues/178)
- Template Engine for HTML UIs [#175](https://github.com/datasharingframework/dsf/issues/175)
- Cleanup and Prevent Orphaned read_access Entries for Permanently Deleted Resources [#170](https://github.com/datasharingframework/dsf/issues/170)
- Readability of Client Certificate PrivateKey Not Checked Correctly in BPE [#169](https://github.com/datasharingframework/dsf/issues/169)
- :below Modifier Not Configured for Search Parameter ActivityDefinition.url [#165](https://github.com/datasharingframework/dsf/issues/165)
- Enable GitHub CodeQL [#164](https://github.com/datasharingframework/dsf/issues/164)
- Allow Optional Elements in Questionnaire [#160](https://github.com/datasharingframework/dsf/issues/160)
- Start New Development Cycle [#158](https://github.com/datasharingframework/dsf/issues/158)
- Add community guidelines [#152](https://github.com/datasharingframework/dsf/issues/152)

This release contains contributions from [@EmteZogaf](https://github.com/EmteZogaf), [@hhund](https://github.com/hhund), [@jbellmann](https://github.com/jbellmann), [@schwzr](https://github.com/schwzr) and [@wetret](https://github.com/wetret).

**Assets:** 
- [ZIP](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.5.0.zip)
- [TAR.GZ](https://github.com/datasharingframework/dsf/archive/refs/tags/v1.5.0.tar.gz)



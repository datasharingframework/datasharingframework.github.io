---
title: Release Notes (v1.2.0)
icon: note
---

## [Release Notes for v1.2.0](https://github.com/datasharingframework/dsf/releases/tag/v1.2.0)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.2.0 - Improved Concurrency Support
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.2.0 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.2.0 Upgrade Guide](https://dsf.dev/v1.2.0/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.2.0/maintain/install.html).

Features:
- The BPE server config parameter `dev.dsf.bpe.fhir.server.organization.identifier.value` (environment variable `DEV_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE`) was not needed and has been removed.
- Start and continue events for processes are now executed on a separate thread pool enabling concurrent execution of processes using "non async" process tasks.
- Support for "async" processes has been improved and config parameter / environment variables have been added to configure the process engine job executor.
- The special java StatusClient used for docker health checks has been replaced with `curl`.
- A new environment variable `SERVER_CONTEXT_PATH` was added to the reverse proxy docker image. The new environment variable can be used to configure the reverse-proxy path that gets delegated to the DSF FHIR app server.
- The FHIR server config parameter `dev.dsf.fhir.server.roleConfig` (environment variable `DEV_DSF_FHIR_SERVER_ROLECONFIG` is now optional and the validation of the config YAML has been improved.
- Java dependency have been upgraded where possible.

Bug Fixes:
- Literal block scalars can now be used with the environment variable `DEV_DSF_PROXY_NOPROXY`.
- The websocket connection to the DSF FHIR server no longer disconnects if long-running "non async" process tasks are executed. By handing over incoming Task and QuenstionnaireResponse resources to a separate thread-pool, the websocket client thread is immediately freed and able respond to websocket ping-frames keeping the connection from timing out.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.2.0](https://github.com/orgs/datasharingframework/packages/container/bpe/127300257?tag=1.2.0)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.2.0](https://github.com/orgs/datasharingframework/packages/container/fhir/127299735?tag=1.2.0)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.2.0](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/127298803?tag=1.2.0)

Issues closed:
- Increase Camunda DefaultJobExecutor Queue Size and Expose Config Options [#101](https://github.com/datasharingframework/dsf/issues/101)
- Make FHIR Server Role Config Optional, Improve Role Config Validation [#96](https://github.com/datasharingframework/dsf/issues/96)
- Replace Java StatusClient With curl [#93](https://github.com/datasharingframework/dsf/issues/93)
- Modify the BPE to Enable Parallel Execution of Non Async Processes [#91](https://github.com/datasharingframework/dsf/issues/91)
- BPE Task Websocket Connection Fails During Long Running Processes [#90](https://github.com/datasharingframework/dsf/issues/90)
- Remove Not Needed Organization Identifier Config Parameter From BPE [#89](https://github.com/datasharingframework/dsf/issues/89)
- DEV_DSF_PROXY_NOPROXY Not Working With Literal Block Scalar [#87](https://github.com/datasharingframework/dsf/issues/87)
- Start New Development Cycle [#86](https://github.com/datasharingframework/dsf/issues/86)
- Make FHIR proxy server context path customizable [#85](https://github.com/datasharingframework/dsf/issues/85)

This release contains contributions from [@wetret](https://github.com/wetret) and [@hhund](https://github.com/hhund).


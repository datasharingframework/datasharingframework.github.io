---
title: Logging
icon: config
---

## 1. Introduction
The DSF BPE executes distributed workflows and provides three logging channels: **Standard Logs**, 
a **Data Logger** for introspection purposes, and **BPMN Debug Logs** for process plugin developers.

---

## Standard Logging

| Purpose | Property Key | Environment Variable | Default |
|---------|--------------|----------------------|---------|
| External Log4j2 config | [`dev.dsf.log.config`](../bpe/configuration.md#dev-dsf-log-config) | [`DEV_DSF_LOG_CONFIG`](../bpe/configuration.md#dev-dsf-log-config) | `conf/log4j2.xml` |
| Enable stderr logging | [`dev.dsf.log.console.err.enabled`](../bpe/configuration.md#dev-dsf-log-console-err-enabled) | [`DEV_DSF_LOG_CONSOLE_ERR_ENABLED`](../bpe/configuration.md#dev-dsf-log-console-err-enabled) | `false` |
| Level for stderr | [`dev.dsf.log.console.err.level`](../bpe/configuration.md#dev-dsf-log-console-err-level) | [`DEV_DSF_LOG_CONSOLE_ERR_LEVEL`](../bpe/configuration.md#dev-dsf-log-console-err-level) | `INFO` |
| Style for stderr | [`dev.dsf.log.console.err.style`](../bpe/configuration.md#dev-dsf-log-console-err-style) | [`DEV_DSF_LOG_CONSOLE_ERR_STYLE`](../bpe/configuration.md#dev-dsf-log-console-err-style) | `TEXT_COLOR` |
| Enable stdout logging | [`dev.dsf.log.console.out.enabled`](../bpe/configuration.md#dev-dsf-log-console-out-enabled) | [`DEV_DSF_LOG_CONSOLE_OUT_ENABLED`](../bpe/configuration.md#dev-dsf-log-console-out-enabled) | `true` |
| Level for stdout | [`dev.dsf.log.console.out.level`](../bpe/configuration.md#dev-dsf-log-console-out-level) | [`DEV_DSF_LOG_CONSOLE_OUT_LEVEL`](../bpe/configuration.md#dev-dsf-log-console-out-level) | `INFO` |
| Style for stdout | [`dev.dsf.log.console.out.style`](../bpe/configuration.md#dev-dsf-log-console-out-style) | [`DEV_DSF_LOG_CONSOLE_OUT_STYLE`](../bpe/configuration.md#dev-dsf-log-console-out-style) | `TEXT_COLOR` |
| Enable file logging | [`dev.dsf.log.file.enabled`](../bpe/configuration.md#dev-dsf-log-file-enabled) | [`DEV_DSF_LOG_FILE_ENABLED`](../bpe/configuration.md#dev-dsf-log-file-enabled) | `true` |
| File log level | [`dev.dsf.log.file.level`](../bpe/configuration.md#dev-dsf-log-file-level) | [`DEV_DSF_LOG_FILE_LEVEL`](../bpe/configuration.md#dev-dsf-log-file-level) | `DEBUG` |
| File log style | [`dev.dsf.log.file.style`](../bpe/configuration.md#dev-dsf-log-file-style) | [`DEV_DSF_LOG_FILE_STYLE`](../bpe/configuration.md#dev-dsf-log-file-style) | `TEXT_MDC` |

---

## Data Logger

| Purpose | Property Key | Environment Variable | Default |
|---------|--------------|----------------------|---------|
| Enable data log file | [`dev.dsf.log.data.file.enabled`](../bpe/configuration.md#dev-dsf-log-data-file-enabled) | [`DEV_DSF_LOG_DATA_FILE_ENABLED`](../bpe/configuration.md#dev-dsf-log-data-file-enabled) | `false` |
| Data file style | [`dev.dsf.log.data.file.style`](../bpe/configuration.md#dev-dsf-log-data-file-style) | [`DEV_DSF_LOG_DATA_FILE_STYLE`](../bpe/configuration.md#dev-dsf-log-data-file-style) | `TEXT` |
| Enable data logs on stdout | [`dev.dsf.log.data.console.out.enabled`](../bpe/configuration.md#dev-dsf-log-data-console-out-enabled) | [`DEV_DSF_LOG_DATA_CONSOLE_OUT_ENABLED`](../bpe/configuration.md#dev-dsf-log-data-console-out-enabled) | `false` |
| Style for stdout | [`dev.dsf.log.data.console.out.style`](../bpe/configuration.md#dev-dsf-log-data-console-out-style) | [`DEV_DSF_LOG_DATA_CONSOLE_OUT_STYLE`](../bpe/configuration.md#dev-dsf-log-data-console-out-style) | `TEXT` |
| Enable data logs on stderr | [`dev.dsf.log.data.console.err.enabled`](../bpe/configuration.md#dev-dsf-log-data-console-err-enabled) | [`DEV_DSF_LOG_DATA_CONSOLE_ERR_ENABLED`](../bpe/configuration.md#dev-dsf-log-data-console-err-enabled) | `false` |
| Style for stderr | [`dev.dsf.log.data.console.err.style`](../bpe/configuration.md#dev-dsf-log-data-console-err-style) | [`DEV_DSF_LOG_DATA_CONSOLE_ERR_STYLE`](../bpe/configuration.md#dev-dsf-log-data-console-err-style) | `TEXT` |

---

## BPMN Debug Logging

| Purpose | Property Key | Environment Variable | Default |
|---------|--------------|----------------------|---------|
| Log current DSF user | [`dev.dsf.bpe.debug.log.message.currentUser`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-currentuser) | [`DEV_DSF_BPE_DEBUG_LOG_MESSAGE_CURRENTUSER`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-currentuser) | `false` |
| Log SQL statements | [`dev.dsf.bpe.debug.log.message.dbStatement`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-dbstatement) | [`DEV_DSF_BPE_DEBUG_LOG_MESSAGE_DBSTATEMENT`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-dbstatement) | `false` |
| Log activity start | [`dev.dsf.bpe.debug.log.message.onActivityStart`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-onactivitystart) | [`DEV_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYSTART`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-onactivitystart) | `false` |
| Log activity end | [`dev.dsf.bpe.debug.log.message.onActivityEnd`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-onactivityend) | [`DEV_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYEND`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-onactivityend) | `false` |
| Log all variables | [`dev.dsf.bpe.debug.log.message.variables`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-variables) | [`DEV_DSF_BPE_DEBUG_LOG_MESSAGE_VARIABLES`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-variables) | `false` |
| Log local variables only | [`dev.dsf.bpe.debug.log.message.variablesLocal`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-variableslocal) | [`DEV_DSF_BPE_DEBUG_LOG_MESSAGE_VARIABLESLOCAL`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-variableslocal) | `false` |
| Log webservice requests | [`dev.dsf.bpe.debug.log.message.webserviceRequest`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-webservicerequest) | [`DEV_DSF_BPE_DEBUG_LOG_MESSAGE_WEBSERVICEREQUEST`](../bpe/configuration.md#dev-dsf-bpe-debug-log-message-webservicerequest) | `false` |


## Logging Styles
The DSF logging system supports multiple output styles that can be selected independently for each logging channel (console, file, audit, data).
Every logger exposes a *.style property and a corresponding environment variable.

### Text-Based Logging Styles
#### TEXT

Plain, unformatted text output (default for console output, used before DSF 2).

Use when:
- You want minimal overhead and simple logging
- Logs are read directly on the system

Avoid when:
- A log aggregation system is used

#### TEXT_MDC

Plain text with MDC (Mapped Diagnostic Context) fields, such as:

- correlationId
- processInstanceId
- user
- requestId

Use when:
- You want to log production environments without aggregation systems
- You want to debug distributed workflows with correlation IDs

Avoid when:
- A log aggregation system is used

#### TEXT_COLOR and TEXT_COLOR_MDC

ANSI-colored text output for terminals.

Use when:
- You want to develop locally
- You want to view docker logs directly with `docker logs` command
- You want a fast visual distinction between INFO/WARN/ERROR

Avoid when:
- A log aggregation system is used
- Consoles without ANSI escape code support are used


### JSON-Based Logging Styles
We support the structured logging formats `JSON_LOGSTASH`, `JSON_ECS`(Elastic Common Schema), `JSON_GELF`(Graylog Extended Log Format), and `JSON_GCP` (Google Cloud Platform Logging). They all include Mapped Diagnostic Context information (e.g., process names, ids, ...) and should be used in combination with the log aggreation system of your choice.
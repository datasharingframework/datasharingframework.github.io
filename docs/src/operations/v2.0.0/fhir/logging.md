---
title: Logging
icon: config
---

## Introduction
The DSF FHIR Server provides two logging mechanisms: a **Standard Application Logger** and a dedicated 
**Audit Logger** for compliance-relevant access events. DSF 2.0.0 introduces unified `*.enabled` flags, 
extended output styles, and improved environment variable support.



## Audit Logging



| Purpose | Property Key | Environment Variable | Default |
|---------|--------------|----------------------|---------|
| Enable audit logs on stderr | [`dev.dsf.log.audit.console.err.enabled`](./configuration.md#dev-dsf-log-audit-console-err-enabled) | [`DEV_DSF_LOG_AUDIT_CONSOLE_ERR_ENABLED`](./configuration.md#dev-dsf-log-audit-console-err-enabled) | `false` |
| Style for stderr | [`dev.dsf.log.audit.console.err.style`](./configuration.md#dev-dsf-log-audit-console-err-style) | [`DEV_DSF_LOG_AUDIT_CONSOLE_ERR_STYLE`](./configuration.md#dev-dsf-log-audit-console-err-style) | `TEXT` |
| Enable audit logs on stdout | [`dev.dsf.log.audit.console.out.enabled`](./configuration.md#dev-dsf-log-audit-console-out-enabled) | [`DEV_DSF_LOG_AUDIT_CONSOLE_OUT_ENABLED`](./configuration.md#dev-dsf-log-audit-console-out-enabled) | `false` |
| Style for stdout | [`dev.dsf.log.audit.console.out.style`](./configuration.md#dev-dsf-log-audit-console-out-style) | [`DEV_DSF_LOG_AUDIT_CONSOLE_OUT_STYLE`](./configuration.md#dev-dsf-log-audit-console-out-style) | `TEXT` |
| Enable audit log file | [`dev.dsf.log.audit.file.enabled`](./configuration.md#dev-dsf-log-audit-file-enabled) | [`DEV_DSF_LOG_AUDIT_FILE_ENABLED`](./configuration.md#dev-dsf-log-audit-file-enabled) | `true` |
| Style for audit log file | [`dev.dsf.log.audit.file.style`](./configuration.md#dev-dsf-log-audit-file-style) | [`DEV_DSF_LOG_AUDIT_FILE_STYLE`](./configuration.md#dev-dsf-log-audit-file-style) | `TEXT_MDC` |

---

## Standard Application Logging

| Purpose | Property Key | Environment Variable | Default |
|---------|--------------|----------------------|---------|
| External Log4j2 config | [`dev.dsf.log.config`](./configuration.md#dev-dsf-log-config) | [`DEV_DSF_LOG_CONFIG`](./configuration.md#dev-dsf-log-config) | `conf/log4j2.xml` |
| Enable stderr logging | [`dev.dsf.log.console.err.enabled`](./configuration.md#dev-dsf-log-console-err-enabled) | [`DEV_DSF_LOG_CONSOLE_ERR_ENABLED`](./configuration.md#dev-dsf-log-console-err-enabled) | `false` |
| Level for stderr | [`dev.dsf.log.console.err.level`](./configuration.md#dev-dsf-log-console-err-level) | [`DEV_DSF_LOG_CONSOLE_ERR_LEVEL`](./configuration.md#dev-dsf-log-console-err-level) | `INFO` |
| Style for stderr | [`dev.dsf.log.console.err.style`](./configuration.md#dev-dsf-log-console-err-style) | [`DEV_DSF_LOG_CONSOLE_ERR_STYLE`](./configuration.md#dev-dsf-log-console-err-style) | `TEXT_COLOR` |
| Enable stdout logging | [`dev.dsf.log.console.out.enabled`](./configuration.md#dev-dsf-log-console-out-enabled) | [`DEV_DSF_LOG_CONSOLE_OUT_ENABLED`](./configuration.md#dev-dsf-log-console-out-enabled) | `true` |
| Level for stdout | [`dev.dsf.log.console.out.level`](./configuration.md#dev-dsf-log-console-out-level) | [`DEV_DSF_LOG_CONSOLE_OUT_LEVEL`](./configuration.md#dev-dsf-log-console-out-level) | `INFO` |
| Style for stdout | [`dev.dsf.log.console.out.style`](./configuration.md#dev-dsf-log-console-out-style) | [`DEV_DSF_LOG_CONSOLE_OUT_STYLE`](./configuration.md#dev-dsf-log-console-out-style) | `TEXT_COLOR` |
| Enable file logging | [`dev.dsf.log.file.enabled`](./configuration.md#dev-dsf-log-file-enabled) | [`DEV_DSF_LOG_FILE_ENABLED`](./configuration.md#dev-dsf-log-file-enabled) | `true` |
| File log level | [`dev.dsf.log.file.level`](./configuration.md#dev-dsf-log-file-level) | [`DEV_DSF_LOG_FILE_LEVEL`](./configuration.md#dev-dsf-log-file-level) | `DEBUG` |
| File log style | [`dev.dsf.log.file.style`](./configuration.md#dev-dsf-log-file-style) | [`DEV_DSF_LOG_FILE_STYLE`](./configuration.md#dev-dsf-log-file-style) | `TEXT_MDC` |

## Logging Styles
The DSF logging system supports multiple output styles that can be selected independently for each logging channel (console, file, audit, data).
Every logger exposes a *.style property and a corresponding environment variable.

### Text-Based Logging Styles
#### TEXT

Plain, unformatted text output (default for console output, used before DSF 2).

Use when:
- You want minimal overhead and simple logging.
- Logs are read directly on the system.

Avoid when:
- A log aggregation system is used.

#### TEXT_MDC

Plain text with MDC (Mapped Diagnostic Context) fields, such as:

- correlationId
- processInstanceId
- user
- requestId

Recommended for:
- Production file logs
- Debugging distributed workflows with correlation IDs

Not ideal for:
- A log aggregation system is used.

#### TEXT_COLOR and TEXT_COLOR_MDC

ANSI-colored text output for terminals.

Recommended for:
- Local development
- Docker logs viewed directly with docker logs
- Developers who want fast visual distinction between INFO/WARN/ERROR

Avoid for:
- Log ingestion systems
- Consoles without ANSI escape code support


### JSON-Based Logging Styles
We support the structured logging formats `JSON_LOGSTASH`, `JSON_ECS`(Elastic Common Schema), `JSON_GELF`(Graylog Extended Log Format), and `JSON_GCP` (Google Cloud Platform Logging). They all include Mapped Diagnostic Context information (e.g., process names, ids, ...) and should be used in combination with your log aggreation system of your choice.
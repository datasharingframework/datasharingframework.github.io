---
title: Changelog
icon: code
---
## Version 0.1.3 (Latest)

Released as GitHub artifact `linter-cli-0.1.3.jar` and Maven Central module `dev.dsf.linter:linter-core:0.1.3`. DSF integrates this release as a dependency of `dsf-maven-plugin` for the `lint` goal.

### Features

- **Lint exclusions** — Suppress selected findings via `dsf-linter-exclusions.json` (CLI `--exclusions` / Maven `dsf.lint.exclusionsFile`, plus auto-discovery).
- **HTML report source navigation** — Embedded BPMN/FHIR sources with a viewer modal and highlighting.
- **Remote JAR extraction lifecycle** — Extracted remote JAR directories are persisted across runs.
- **BPMN: process-level message start event** — Processes must have a message start event as a direct child of `<process>` (`BPMN_MESSAGE_START_EVENT_NOT_FOUND`).
- **BPMN: finer-grained empty-name types** — Per-element lint types instead of a single generic empty-name type where applicable.
- **Spring / API v2: `ActivityPrototypeBeanCreator`** — Spring checks recognize APBC-registered activities and warn on V2 activities registered only as `@Bean` (or twice).
- **Spring bean scope checks** — Prototype vs singleton / mutable-state validation for BPMN-referenced beans.
- **Additional validation rules** — BPMN class references against Spring config, Task input coding (CodeSystem/ValueSet), and related BPMN/FHIR checks.

### Integration

- **`dsf-maven-plugin:lint`** — DSF depends on `linter-core` **0.1.3** and exposes build-time linting (default phase `verify`) with the same exclusion format as the CLI. See [Maven Plugin Integration](./linter-tool.md#maven-plugin-integration).

### Bug Fixes

- **Missing `ProcessPluginDefinition` no longer aborts** — Emits ERROR `PLUGIN_DEFINITION_NO_PLUGIN_FOUND` and still writes regular HTML/JSON reports (`--no-fail` / `dsf.lint.failOnErrors=false` control exit status).
- **False positives for API v2 Spring beans** — Correct handling when activities are registered via `ActivityPrototypeBeanCreator`.
- **FHIR Task input coding false positive** — Fixed incorrect “coding system not in value set” findings on valid ping tasks.
- **Message event implementation checks** — Aligned with DSF API v1/v2; Camunda field injection expressions allowed for API v2.
- **Lint type / message corrections** — Fixed incorrect types/messages for start/end events not part of a subprocess and related BPMN findings.

### Severity Adjustments

- Empty user-task name and empty inclusive-gateway name (multiple outgoing flows): **ERROR → WARN**
- `QUESTIONNAIRE_INVALID_META_PROFILE`: severity downgraded
- Message intermediate throw event message reference: reported as **INFO** (`BPMN_MESSAGE_INTERMEDIATE_THROW_EVENT_HAS_MESSAGE_REFERENCE`)

### Build & Publishing

- Maven Central publishing alignment and GitHub Release workflow (JAR + checksum)
- CI improvements (CodeQL, JavaDoc, Java 25 publish action) and dependency cleanups

**Upgrade is recommended for all users of v0.1.2**, especially when linting API v2 plugins, using HTML reports, exclusions, or hitting abort-on-missing-plugin behavior.

## Version 0.1.2

### Bug Fixes

- **Fixed false positive class hierarchy checks for V1 plugins** — The linter incorrectly reported that implementation classes did not implement `JavaDelegate`, did not extend `AbstractServiceDelegate` / `AbstractTaskMessageSend`, or that execution listeners did not implement `ExecutionListener`. This was caused by missing Spring Framework classes in the shaded CLI JAR, which prevented the JVM from resolving plugin class hierarchies at runtime. Spring artifacts (`spring-beans`, `spring-core`, `spring-jcl`) are now explicitly included in the shade configuration.

- **Fixed version mismatch between `linter-cli` and `linter-core`** — `linter-cli` referenced a hardcoded dependency on `linter-core:0.1.0` instead of the current project version, causing stale artifacts to be used during the build. The version is now derived from `${project.version}`.

**Upgrade is strongly recommended for all users of v0.1.1.**


### Version 0.1.1 
- **Bugfix: DSF API v2 Plugin Discovery (`CLASS_LOADING_FAILED`)**:
  - Fixed a bug where linting a JAR built against **DSF API v2** (`dev.dsf.bpe.v2.ProcessPluginDefinition`) failed with `CLASS_LOADING_FAILED` and the message `Failed to load plugin class: dev/dsf/bpe/v2/AbstractProcessPluginDefinition`
  - **Root Cause**: The linter's shaded JAR only included `dsf-bpe-process-api-v1`; the v2 API classes were absent at runtime
  - **Fix**: Added `dsf-bpe-process-api-v2` as a runtime dependency and included it in the shaded CLI JAR
  - Plugins built against API v1 are unaffected
  - The "no plugins found" error message now explicitly references both service-loader files:
    - `META-INF/services/dev.dsf.bpe.v1.ProcessPluginDefinition`
    - `META-INF/services/dev.dsf.bpe.v2.ProcessPluginDefinition`

### Version 0.1.0
- Initial release
- BPMN validation:
  - Process ID pattern validation (`BPMN_PROCESS_ID_PATTERN_MISMATCH`, `BPMN_PROCESS_ID_EMPTY`)
  - Process count validation (`BPMN_FILE_NO_PROCESS`, `BPMN_FILE_MULTIPLE_PROCESSES`)
  - Process history time-to-live validation (`BPMN_PROCESS_HISTORY_TIME_TO_LIVE_MISSING`)
  - Process executable validation (`BPMN_PROCESS_NOT_EXECUTABLE`)
  - Task Listener TaskOutput field injections validation for API v2
  - Task Listener input parameter (`practitionerRole`, `practitioners`) validation for API v2
- FHIR validation:
  - ActivityDefinition URL pattern validation (`ACTIVITY_DEFINITION_INVALID_URL_PATTERN`)
  - Task identifier system and value format validation (`FHIR_TASK_IDENTIFIER_MISSING_SYSTEM`, `FHIR_TASK_IDENTIFIER_INVALID_SYSTEM`, `FHIR_TASK_IDENTIFIER_INVALID_FORMAT`)
- Plugin configuration validation:
  - Plugin resource version validation (`PLUGIN_DEFINITION_RESOURCE_VERSION_NULL`)
- HTML and JSON report generation

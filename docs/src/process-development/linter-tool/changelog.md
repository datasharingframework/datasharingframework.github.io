---
title: Changelog
icon: code
---
## Version 0.1.2 (Latest)

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
---
title: Validation Rules
icon: note
---
The linter performs comprehensive validation across multiple dimensions. This section details all validation rules organized by resource type.

## Table of Contents

1. [BPMN Validation](#bpmn-validation)
2. [FHIR Validation](#fhir-resource-validation)
3. [Plugin Configuration](#plugin-configuration-validation)

### BPMN Validation
The linter performs comprehensive validation on BPMN 2.0 process definitions using the Camunda BPMN model API.

![BPMN Linting](/assets/linter/bpmn-linting.svg)

**Important:** The linter automatically detects the DSF API version (V1 or V2) from the plugin configuration and applies version-specific validation rules. Many validation rules differ between V1 and V2 API, particularly for:
- Service Task and Send Task implementation classes
- Execution Listeners
- Task Listeners (User Tasks)
- Message Events (Intermediate Throw and End Events)

#### Process Validation

##### Process ID Pattern Validation

- **Pattern Requirement**:
  - Process ID must follow the pattern: `domain_processname`
  - Domain and process name must consist only of alphanumeric characters (a-z, A-Z, 0-9) and hyphens (-)
  - Exactly one underscore must separate domain and process name
  - Error: `BPMN_PROCESS_ID_PATTERN_MISMATCH`
  - Error: `BPMN_PROCESS_ID_EMPTY`
  - Success: `SUCCESS` when the pattern is matched

- **Valid Examples**:
  - ✅ `testorg_myprocess`
  - ✅ `dsf-dev_download-allowlist`
  - ✅ `example123_process456`

- **Invalid Examples**:
  - ❌ `myProcess` (missing underscore)
  - ❌ `test.org_myprocess` (dots not allowed)
  - ❌ `test_my_process` (multiple underscores not allowed)
  - ❌ `test_process_name` (only one underscore allowed)

- **Pattern Definition**:
  ```regex
  ^(?<domainNoDots>[a-zA-Z0-9-]+)_(?<processName>[a-zA-Z0-9-]+)$
  ```

- **DSF Framework Reference**:
  - This validation is based on the DSF Framework requirement defined in:
  - `dsf-bpe/dsf-bpe-process-api/src/main/java/dev/dsf/bpe/api/plugin/AbstractProcessPlugin.java`

##### Process Count Validation

- **Requirement**:
  - Each BPMN file must contain **exactly one** process definition
  - Error: `BPMN_FILE_NO_PROCESS` (when no process is found)
  - Error: `BPMN_FILE_MULTIPLE_PROCESSES` (when more than one process is found)
  - Success: `SUCCESS` when exactly one process is found

- **Valid Examples**:
  - ✅ BPMN file with 1 process definition

- **Invalid Examples**:
  - ❌ BPMN file with 0 process definitions
  - ❌ BPMN file with 2 or more process definitions

- **DSF Framework Reference**:
  - This validation is based on the DSF Framework requirement defined in:
  - `dsf-bpe/dsf-bpe-process-api/src/main/java/dev/dsf/bpe/api/plugin/AbstractProcessPlugin.java`
  - DSF validates: `if (processes.size() != 1) { return false; }`

##### Process History Time To Live Validation

- **Requirement**:
  - Process should have `camunda:historyTimeToLive` attribute set
  - If not set (null or empty), DSF automatically uses default value `P30D` (30 days)
  - Warning: `BPMN_PROCESS_HISTORY_TIME_TO_LIVE_MISSING`
  - Success: `SUCCESS` when historyTimeToLive is explicitly set

- **Valid Examples**:
  - ✅ `<process id="myprocess" camunda:historyTimeToLive="P30D">`
  - ✅ `<process id="myprocess" camunda:historyTimeToLive="P7D">`

- **Warning Example**:
  - ⚠️ `<process id="myprocess">` (no historyTimeToLive attribute)

- **DSF Framework Reference**:
  - DSF Framework sets default at runtime if not specified:
  - `process.setOperatonHistoryTimeToLiveString("P30D")`
  - Best practice: Set explicitly in BPMN file

##### Process Executable Validation

- **Requirement**:
  - Process must have `isExecutable="true"` attribute set
  - Processes without this attribute cannot be deployed and executed by the process engine
  - Error: `BPMN_PROCESS_NOT_EXECUTABLE`
  - Success: `SUCCESS` when isExecutable is true

- **Valid Examples**:
  - ✅ `<process id="myprocess" isExecutable="true">`

- **Invalid Examples**:
  - ❌ `<process id="myprocess">` (no isExecutable attribute, defaults to false)
  - ❌ `<process id="myprocess" isExecutable="false">`

- **Reason**:
  - The process engine only deploys and executes processes marked as executable
  - Non-executable processes are typically used for documentation or as templates

##### Process Version Tag Validation

- **Requirement**:
  - Process must define `camunda:versionTag`
  - Expected placeholder value in DSF process plugins: `#{version}`
  - Error: `BPMN_PROCESS_VERSION_TAG_MISSING_OR_EMPTY` (missing, empty/blank, or literal `"null"`)
  - Warning: `BPMN_PROCESS_VERSION_TAG_NO_PLACEHOLDER` (present but without `#{version}`)
  - Success: `SUCCESS` when `camunda:versionTag` contains `#{version}`

- **Valid Example**:
  - ✅ `<process id="example_process" isExecutable="true" camunda:versionTag="#{version}">`

- **Error Examples**:
  - ❌ `<process id="example_process" isExecutable="true">` (missing `camunda:versionTag`)
  - ❌ `<process id="example_process" isExecutable="true" camunda:versionTag="">` (empty value)
  - ❌ `<process id="example_process" isExecutable="true" camunda:versionTag="null">` (literal `null`)

- **Warning Examples**:
  - ⚠️ `<process id="example_process" isExecutable="true" camunda:versionTag="1.0.0">`
  - ⚠️ `<process id="example_process" isExecutable="true" camunda:versionTag="some-fixed-version">`


#### Task Validation

##### Service Tasks

- **Name Validation**:
  - Task must have a non-empty name
  - Error: `BPMN_SERVICE_TASK_NAME_EMPTY`

- **Implementation Class Validation**:
  - `camunda:class` or `camunda:delegateExpression` must be specified
  - Error: `BPMN_SERVICE_TASK_IMPLEMENTATION_NOT_EXIST`
  - Error: `BPMN_SERVICE_TASK_IMPLEMENTATION_CLASS_EMPTY`
  - Implementation class must exist in the classpath
  - Error: `BPMN_SERVICE_TASK_IMPLEMENTATION_CLASS_NOT_FOUND`

- **API Version-Specific Requirements**:
  - **V1 API**:
    - Both checks are performed separately:
      - Class must extend `dev.dsf.bpe.v1.activity.AbstractServiceDelegate`
        - Error: `BPMN_SERVICE_TASK_IMPLEMENTATION_CLASS_NOT_EXTENDING_ABSTRACT_SERVICE_DELEGATE` (if not extending)
      - Class must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
        - Error: `BPMN_SERVICE_TASK_IMPLEMENTATION_CLASS_NOT_IMPLEMENTING_JAVA_DELEGATE` (if not implementing)
    - Note: Both conditions are checked independently. A class should ideally satisfy both, but the linter reports separate errors for each missing requirement.
  - **V2 API**:
    - Class must implement `dev.dsf.bpe.v2.activity.ServiceTask`
    - Error: `BPMN_SERVICE_TASK_NO_INTERFACE_CLASS_IMPLEMENTING`

##### User Tasks

- **Name Validation**:
  - Task must have a non-empty name
  - Error: `BPMN_USER_TASK_NAME_EMPTY`

- **Form Key Validation**:
  - `camunda:formKey` must be present and non-empty
  - Error: `BPMN_USER_TASK_FORM_KEY_EMPTY`
  - Must reference an external form (starting with "external:", "http://", or "https://")
  - Error: `BPMN_USER_TASK_FORM_KEY_IS_NOT_AN_EXTERNAL_FORM`
  - Must reference a valid Questionnaire resource
  - Referenced Questionnaire must exist in the plugin
  - Error: `BPMN_USER_TASK_QUESTIONNAIRE_NOT_FOUND`

- **Listener Validation**:
  - Listener classes must exist
  - Error: `BPMN_USER_TASK_LISTENER_JAVA_CLASS_NOT_FOUND`
  - Listener must have class attribute
  - Error: `BPMN_USER_TASK_LISTENER_MISSING_CLASS_ATTRIBUTE`

- **API Version-Specific Requirements**:
  - **V1 API**:
    - Listener must extend `dev.dsf.bpe.v1.activity.DefaultUserTaskListener` OR implement `org.camunda.bpm.engine.delegate.TaskListener`
    - Error: `BPMN_USER_TASK_LISTENER_NOT_EXTENDING_OR_IMPLEMENTING_REQUIRED_CLASS`
  - **V2 API**:
    - Listener must extend `dev.dsf.bpe.v2.activity.DefaultUserTaskListener` OR implement `dev.dsf.bpe.v2.activity.UserTaskListener`
    - Error: `BPMN_USER_TASK_LISTENER_NOT_EXTENDING_OR_IMPLEMENTING_REQUIRED_CLASS`

- **Task Listener Input Parameter Validation (V2 API only)**:
  - Validates input parameters (`camunda:inputParameter`) within task listeners for API v2
  - Applies to all task listeners in API v2, with severity based on whether the listener extends `DefaultUserTaskListener`
  
  - **`practitionerRole` Parameter**:
    - If a `practitionerRole` input parameter is defined in the task listener's `extensionElements`, its value must not be null or empty
    - **Severity**:
      - **ERROR**: When the task listener extends `dev.dsf.bpe.v2.activity.DefaultUserTaskListener`
      - **WARN**: When the task listener does not extend `DefaultUserTaskListener`
    - Error/Warning: `BPMN_PRACTITIONER_ROLE_HAS_NO_VALUE_OR_NULL`
    - Success: `SUCCESS` (when value is present and non-empty)
  
  - **`practitioners` Parameter**:
    - If a `practitioners` input parameter is defined in the task listener's `extensionElements`, its value must not be null or empty
    - **Severity**:
      - **ERROR**: When the task listener extends `dev.dsf.bpe.v2.activity.DefaultUserTaskListener`
      - **WARN**: When the task listener does not extend `DefaultUserTaskListener`
    - Error/Warning: `BPMN_PRACTITIONERS_HAS_NO_VALUE_OR_NULL`
    - Success: `SUCCESS` (when value is present and non-empty)
  
  - **Validation Behavior**:
    - Only validates input parameters if they are explicitly defined in the BPMN file
    - Supports various value formats: direct text content, `<camunda:string>`, or `<camunda:list>` with `<camunda:value>` elements
    - Validation is skipped if the input parameter is not present (no lint items generated)
    - Validation only applies to API v2 task listeners

- **Task Listener TaskOutput Field Injections Validation (V2 API only)**:
  - Validates the taskOutput field injections (`taskOutputSystem`, `taskOutputCode`, `taskOutputVersion`) used to configure output parameters for UserTask listeners
  - Applies to all task listeners in API v2
  
  - **Completeness Check**:
    - If any of the three fields (`taskOutputSystem`, `taskOutputCode`, `taskOutputVersion`) is set, all three must be set
    - Error: `BPMN_USER_TASK_LISTENER_INCOMPLETE_TASK_OUTPUT_FIELDS`
    - Message: "If taskOutputSystem, taskOutputCode, or taskOutputVersion is set, all three must be set"
    - Validation is skipped if none of the fields are set
  
  - **FHIR Resource Validation**:
    - **`taskOutputSystem`**: Should reference a valid CodeSystem URL
      - Uses `FhirAuthorizationCache.containsSystem()` to check if the CodeSystem exists
      - Error: `BPMN_USER_TASK_LISTENER_TASK_OUTPUT_SYSTEM_INVALID_FHIR_RESOURCE` if CodeSystem is unknown
      - Success: `SUCCESS` when CodeSystem is valid
    
    - **`taskOutputCode`**: Should be a valid code in the referenced CodeSystem
      - Uses `FhirAuthorizationCache.isUnknown()` to check if the code exists in the CodeSystem
      - Error: `BPMN_USER_TASK_LISTENER_TASK_OUTPUT_CODE_INVALID_FHIR_RESOURCE` if code is unknown
      - Success: `SUCCESS` when code is valid
    
    - **`taskOutputVersion`**: Must contain a placeholder (e.g., `#{version}`)
      - Uses `LintingUtils.containsPlaceholder()` to check for placeholders
      - Warning: `BPMN_USER_TASK_LISTENER_TASK_OUTPUT_VERSION_NO_PLACEHOLDER` if no placeholder found
      - Success: `SUCCESS` when placeholder is present
  
  - **Validation Behavior**:
    - Only validates field injections if they are explicitly defined in the task listener's `extensionElements`
    - Field values are read from `camunda:field` elements with `camunda:stringValue` or nested `<camunda:string>` elements
    - Validation is skipped if none of the fields are set (no lint items generated)
    - Validation only applies to API v2 task listeners
    - FHIR resource validation is only performed if all three fields are set (completeness check passes)

##### Send Tasks

- **Name Validation**:
  - Task must have a non-empty name

- **Implementation Class Validation**:
  - Implementation class must exist
  - Error: `BPMN_MESSAGE_SEND_TASK_IMPLEMENTATION_CLASS_EMPTY`
  - Error: `BPMN_MESSAGE_SEND_TASK_IMPLEMENTATION_CLASS_NOT_FOUND`
  
- **API Version-Specific Requirements**:
  - **V1 API**:
    - Both checks are performed separately:
      - Class must extend `dev.dsf.bpe.v1.activity.AbstractTaskMessageSend`
        - Error: `BPMN_SEND_TASK_IMPLEMENTATION_CLASS_NOT_EXTENDING_ABSTRACT_TASK_MESSAGE_SEND` (if not extending)
      - Class must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
        - Error: `BPMN_MESSAGE_SEND_EVENT_IMPLEMENTATION_CLASS_NOT_IMPLEMENTING_JAVA_DELEGATE` (if not implementing)
    - Note: Both conditions are checked independently. A class should ideally satisfy both, but the linter reports separate errors for each missing requirement.
  - **V2 API**:
    - Class must implement `dev.dsf.bpe.v2.activity.MessageSendTask`
    - Error: `BPMN_SEND_TASK_NO_INTERFACE_CLASS_IMPLEMENTING`

- **Field Injection Validation**:
  - Same field injections as Message Send Events are validated: `profile`, `messageName`, and `instantiatesCanonical`
  - `profile` field injection:
    - Must be non-empty
    - Error: `BPMN_FIELD_INJECTION_PROFILE_EMPTY`
    - Must contain version placeholder `#{version}`
    - Error: `BPMN_FIELD_INJECTION_PROFILE_NO_VERSION_PLACEHOLDER`
    - Must reference existing StructureDefinition
    - Error: `BPMN_NO_STRUCTURE_DEFINITION_FOUND_FOR_MESSAGE`
  - `messageName` field injection:
    - Must be non-empty
    - Error: `BPMN_FIELD_INJECTION_MESSAGE_VALUE_EMPTY`
    - Must be a string literal
    - Error: `BPMN_FIELD_INJECTION_NOT_STRING_LITERAL`
  - `instantiatesCanonical` field injection:
    - Must be non-empty
    - Error: `BPMN_FIELD_INJECTION_INSTANTIATES_CANONICAL_EMPTY`
    - Must end with version placeholder `|#{version}`
    - Error: `BPMN_FIELD_INJECTION_INSTANTIATES_CANONICAL_NO_VERSION_PLACEHOLDER`
    - Must reference existing ActivityDefinition
    - Error: `BPMN_NO_ACTIVITY_DEFINITION_FOUND_FOR_MESSAGE`
  - Unknown field injections are reported
    - Error: `BPMN_UNKNOWN_FIELD_INJECTION`

##### Receive Tasks

- **Name Validation**:
  - Task must have a non-empty name
  - Warning: `BPMN_EVENT_NAME_EMPTY`

- **Message Definition Validation**:
  - Message definition must be present and have a non-empty message name
  - Error: `BPMN_MESSAGE_START_EVENT_MESSAGE_NAME_EMPTY`

- **FHIR Resource Validation**:
  - Message name must reference an existing ActivityDefinition
  - Error: `BPMN_NO_ACTIVITY_DEFINITION_FOUND_FOR_MESSAGE`
  - Message name must reference an existing StructureDefinition
  - Error: `BPMN_NO_STRUCTURE_DEFINITION_FOUND_FOR_MESSAGE`

#### Event Validation

##### Message Events (Start/Intermediate/End)

- **Event Name Validation**:
  - Event must have a non-empty name
  - Error: `BPMN_EVENT_NAME_EMPTY`
  - Error: `BPMN_MESSAGE_START_EVENT_MESSAGE_NAME_EMPTY`
  - Error: `BPMN_MESSAGE_INTERMEDIATE_CATCH_EVENT_NAME_EMPTY`
  - Error: `BPMN_MESSAGE_INTERMEDIATE_CATCH_EVENT_MESSAGE_NAME_EMPTY`
  - Error: `BPMN_MESSAGE_BOUNDARY_EVENT_NAME_EMPTY`

- **Implementation Class Validation**:
  - For send events, implementation class must exist
  - Error: `BPMN_MESSAGE_SEND_EVENT_IMPLEMENTATION_CLASS_EMPTY`
  - Error: `BPMN_MESSAGE_SEND_EVENT_IMPLEMENTATION_CLASS_NOT_FOUND`
  - Intermediate throw events should not have message definitions
  - Error: `BPMN_MESSAGE_INTERMEDIATE_THROW_EVENT_HAS_MESSAGE`
  
- **API Version-Specific Requirements**:
  - **V1 API**:
    - Class must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
    - Error: `BPMN_MESSAGE_SEND_EVENT_IMPLEMENTATION_CLASS_NOT_IMPLEMENTING_JAVA_DELEGATE`
    - Throw events must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
    - Error: `BPMN_END_EVENT_NO_INTERFACE_CLASS_IMPLEMENTING`
  - **V2 API**:
    - Message Intermediate Throw Events must implement `dev.dsf.bpe.v2.activity.MessageIntermediateThrowEvent`
    - Message End Events must implement `dev.dsf.bpe.v2.activity.MessageEndEvent`
    - Error: `BPMN_END_EVENT_NO_INTERFACE_CLASS_IMPLEMENTING`

- **Field Injection Validation**:
  - `profile` field injection:
    - Must be non-empty
    - Error: `BPMN_FIELD_INJECTION_PROFILE_EMPTY`
    - Must contain version placeholder `#{version}`
    - Error: `BPMN_FIELD_INJECTION_PROFILE_NO_VERSION_PLACEHOLDER`
    - Must reference existing StructureDefinition
    - Error: `BPMN_NO_STRUCTURE_DEFINITION_FOUND_FOR_MESSAGE`
  
  - `messageName` field injection:
    - Must be non-empty
    - Error: `BPMN_FIELD_INJECTION_MESSAGE_VALUE_EMPTY`
    - Must be a string literal
    - Error: `BPMN_FIELD_INJECTION_NOT_STRING_LITERAL`
  
  - `instantiatesCanonical` field injection:
    - Must be non-empty
    - Error: `BPMN_FIELD_INJECTION_INSTANTIATES_CANONICAL_EMPTY`
    - Must end with version placeholder `|#{version}`
    - Error: `BPMN_FIELD_INJECTION_INSTANTIATES_CANONICAL_NO_VERSION_PLACEHOLDER`
    - Must reference existing ActivityDefinition
    - Error: `BPMN_NO_ACTIVITY_DEFINITION_FOUND_FOR_MESSAGE`

##### Timer Events

- **Timer Type Validation**:
  - At least one of `timeDate`, `timeCycle`, or `timeDuration` must be set
  - Error: `BPMN_FLOATING_ELEMENT` (`TIMER_TYPE_IS_EMPTY`)

- **Fixed Date Warning**:
  - `timeDate` expressions are flagged with an informational message to verify if a fixed date is intended
  - Info: `BPMN_FLOATING_ELEMENT` (`TIMER_TYPE_IS_A_FIXED_DATE_TIME`)

- **Placeholder Validation**:
  - `timeCycle` and `timeDuration` values should contain a placeholder (e.g., `#{interval}`)
  - Warning: `BPMN_FLOATING_ELEMENT` (`TIMER_VALUE_APPEARS_FIXED_NO_PLACEHOLDER_FOUND`)

##### Error Boundary Events

- **Error Configuration Validation**:
  - Error reference must be present
  - Error code must not be empty
  - Error: `BPMN_ERROR_BOUNDARY_EVENT_ERROR_CODE_EMPTY`
  - Error name must not be empty (warning)
  - Error: `BPMN_ERROR_BOUNDARY_EVENT_ERROR_NAME_EMPTY`
  - Error: `BPMN_ERROR_BOUNDARY_EVENT_NAME_EMPTY`
  - Error code variable must not be empty
  - Error: `BPMN_ERROR_BOUNDARY_EVENT_ERROR_CODE_VARIABLE_EMPTY`

##### Signal Events

- **Signal Definition Validation**:
  - Signal end events must have a non-empty name
  - Error: `BPMN_SIGNAL_END_EVENT_NAME_EMPTY`
  - Signal end events must have a signal definition
  - Error: `BPMN_SIGNAL_END_EVENT_SIGNAL_EMPTY`
  - Signal intermediate throw events must have a non-empty name
  - Error: `BPMN_SIGNAL_INTERMEDIATE_THROW_EVENT_NAME_EMPTY`
  - Signal intermediate throw events must have a signal definition
  - Error: `BPMN_SIGNAL_INTERMEDIATE_THROW_EVENT_SIGNAL_EMPTY`
  - Signal definitions must be valid
  - Signal references must be correct

##### Conditional Events

- **Event Name Validation**:
  - Conditional Intermediate Catch Event should have a non-empty name
  - Warning: `BPMN_FLOATING_ELEMENT` (`CONDITIONAL_INTERMEDIATE_CATCH_EVENT_NAME_IS_EMPTY`)

- **Variable Name Validation**:
  - `camunda:variableName` attribute must not be empty
  - Error: `BPMN_FLOATING_ELEMENT` (`CONDITIONAL_INTERMEDIATE_CATCH_EVENT_VARIABLE_NAME_IS_EMPTY`)

- **Variable Events Validation**:
  - `camunda:variableEvents` attribute must not be empty
  - Error: `BPMN_FLOATING_ELEMENT` (`CONDITIONAL_INTERMEDIATE_CATCH_EVENT_VARIABLE_EVENTS_IS_EMPTY`)

- **Condition Type Validation**:
  - `camunda:conditionType` must be set, or a condition expression must be provided (in which case `"expression"` is assumed)
  - Error: `BPMN_FLOATING_ELEMENT` (`CONDITIONAL_INTERMEDIATE_CATCH_EVENT_CONDITION_TYPE_IS_EMPTY`)

- **Condition Expression Validation**:
  - When condition type is `"expression"`, the condition expression must not be empty
  - Error: `BPMN_FLOATING_ELEMENT` (`CONDITIONAL_INTERMEDIATE_CATCH_EVENT_CONDITION_TYPE_IS_NOT_EXPRESSION`)

#### Gateway and Flow Validation

##### Flow Structure

- **Message Start Event**:
    - Message-triggered processes must have a message start event
    - Error: `BPMN_MESSAGE_START_EVENT_NOT_FOUND`

##### Exclusive Gateways

- **Sequence Flow Validation**:
  - Outgoing sequence flows must have appropriate names
  - When multiple outgoing flows exist, gateway must have a name
  - Error: `BPMN_EXCLUSIVE_GATEWAY_HAS_MULTIPLE_OUTGOING_FLOWS_BUT_NAME_IS_EMPTY`
  - Conditional expressions required when multiple paths exist
  - Default flow validation

##### Inclusive Gateways

- **Sequence Flow Validation**:
  - Similar requirements as exclusive gateways
  - When multiple outgoing flows exist, gateway must have a name
  - Error: `BPMN_INCLUSIVE_GATEWAY_HAS_MULTIPLE_OUTGOING_FLOWS_BUT_NAME_IS_EMPTY`
  - Multiple path handling

##### Event-Based Gateways

- **Configuration Validation**:
  - Proper configuration required
  - Outgoing flow setup validation

##### Sequence Flows

- **Naming and Conditions**:
  - Naming conventions
  - Conditional expressions for non-default flows from splitting gateways
  - Error: `BPMN_FLOW_ELEMENT`

#### SubProcess Validation

##### Multi-Instance SubProcesses

- **Asynchronous Execution**:
  - `asyncBefore` must be set to `true` for proper asynchronous execution
  - Required for multi-instance subprocesses
  - Error: `BPMN_SUB_PROCESS_HAS_MULTI_INSTANCE_BUT_IS_NOT_ASYNC_BEFORE_TRUE`

##### Start/End Events in SubProcesses

- **Structural Validation**:
  - Start events must be part of subprocess
  - Error: `BPMN_START_EVENT_NOT_PART_OF_SUB_PROCESS`
  - End events must be part of subprocess
  - Error: `BPMN_END_EVENT_NOT_PART_OF_SUB_PROCESS`
  - End events inside subprocesses should have `asyncAfter` set to `true`
  - Error: `BPMN_END_EVENT_INSIDE_SUB_PROCESS_SHOULD_HAVE_ASYNC_AFTER_TRUE`

#### Floating Elements

- **Element Placement**:
  - Elements must be properly connected
  - Error: `BPMN_FLOATING_ELEMENT`

#### Execution Listeners

- **Execution Listener Validation**:
  - Execution listener classes must exist in the classpath
  - Error: `BPMN_EXECUTION_LISTENER_CLASS_NOT_FOUND`

- **API Version-Specific Requirements**:
  - **V1 API**:
    - Execution listener classes must implement `org.camunda.bpm.engine.delegate.ExecutionListener`
    - Error: `BPMN_EXECUTION_LISTENER_NOT_IMPLEMENTING_REQUIRED_INTERFACE`
  - **V2 API**:
    - Execution listener classes must implement `dev.dsf.bpe.v2.activity.ExecutionListener`
    - Error: `BPMN_EXECUTION_LISTENER_NOT_IMPLEMENTING_REQUIRED_INTERFACE`

#### Unknown Field Injections

- **Field Injection Validation**:
  - Only known field injections are allowed
  - Error: `BPMN_UNKNOWN_FIELD_INJECTION`

### FHIR Resource Validation

The linter validates FHIR resources against DSF-specific profiles and HL7 FHIR specifications.

![FHIR Linting](/assets/linter/fhir-linting.svg)

#### Unparsable FHIR Resources

- **Resource Parsing**:
  - FHIR resources must be valid XML or JSON
  - Error: `PLUGIN_DEFINITION_UNPARSABLE_FHIR_RESOURCE`

#### Task Resources

Task resources are validated against the DSF Task base profile (`http://dsf.dev/fhir/StructureDefinition/dsf-task-base`).

##### Metadata and Profile Validation

- **Profile Validation**:
  - `meta.profile` must be present and point to a DSF Task profile
  - Error: `FHIR_TASK_MISSING_PROFILE`
  - Profile must be loadable
  - Error: `FHIR_TASK_COULD_NOT_LOAD_PROFILE`

- **InstantiatesCanonical Validation**:
  - `instantiatesCanonical` must be present
  - Error: `FHIR_TASK_MISSING_INSTANTIATES_CANONICAL`
  - Must end with version placeholder `|#{version}`
  - Error: `FHIR_TASK_INSTANTIATES_CANONICAL_PLACEHOLDER`
  - Must reference existing ActivityDefinition
  - Error: `FHIR_TASK_UNKNOWN_INSTANTIATES_CANONICAL`

##### Fixed Elements

- **Status Validation**:
  - `status` must be present
  - Error: `FHIR_TASK_MISSING_STATUS`
  - Must be `"draft"` for template Task instances
  - Error: `FHIR_TASK_STATUS_NOT_DRAFT`
  - Must be a valid TaskStatus value
  - Error: `FHIR_TASK_UNKNOWN_STATUS`

- **Intent Validation**:
  - `intent` must be `"order"`
  - Error: `FHIR_TASK_VALUE_IS_NOT_SET_AS_ORDER`

- **Requester Validation**:
  - Requester must be present
  - Error: `FHIR_TASK_MISSING_REQUESTER`
  - `requester.identifier.system` must be `http://dsf.dev/sid/organization-identifier`
  - Error: `FHIR_TASK_INVALID_REQUESTER`
  - `requester.identifier.value` must be `#{organization}` (development)
  - Error: `FHIR_TASK_REQUESTER_ORGANIZATION_NO_PLACEHOLDER`
  - Error: `FHIR_TASK_REQUESTER_ID_NO_PLACEHOLDER`
  - Error: `FHIR_TASK_REQUESTER_ID_NOT_EXIST`

- **Recipient Validation**:
  - Recipient must be present
  - Error: `FHIR_TASK_MISSING_RECIPIENT`
  - `restriction.recipient.identifier.system` must be `http://dsf.dev/sid/organization-identifier`
  - Error: `FHIR_TASK_INVALID_RECIPIENT`
  - `restriction.recipient.identifier.value` must be `#{organization}` (development)
  - Error: `FHIR_TASK_RECIPIENT_ORGANIZATION_NO_PLACEHOLDER`
  - Error: `FHIR_TASK_RECIPIENT_ID_NO_PLACEHOLDER`
  - Error: `FHIR_TASK_RECIPIENT_ID_NOT_EXIST`

##### Development Placeholders

- **Date Placeholder**:
  - `authoredOn` must contain `#{date}`
  - Error: `FHIR_TASK_DATE_NO_PLACEHOLDER`

##### Task Identifier Validation

- **System Validation**:
  - Task identifiers must have a valid system element
  - Expected system: `http://dsf.dev/sid/task-identifier`
  - Error: `FHIR_TASK_IDENTIFIER_MISSING_SYSTEM` (when system is missing or empty)
  - Error: `FHIR_TASK_IDENTIFIER_INVALID_SYSTEM` (when system is set but incorrect)
  - Success: When the system is correctly set to `http://dsf.dev/sid/task-identifier`

- **Value Format Validation**:
  - Task identifiers with system `http://dsf.dev/sid/task-identifier` must follow a specific format
  - Format: `{process-url}/{process-version}/{task-example-name}`
  - Example: `http://test.org/bpe/Process/someProcessName/1.0/someExampleName`
  - Error: `FHIR_TASK_IDENTIFIER_INVALID_FORMAT`
  - Success: When the identifier format is valid

- **Pattern Definition**:
  ```regex
  ^https?://[^/]+/bpe/Process/[a-zA-Z0-9-]+/(?:\d+\.\d+|#{version})/.+$
  ```
  The pattern accepts both actual version numbers (e.g., `1.0`) and placeholders (e.g., `#{version}`) for development-time validation.

- **Valid Examples**:
  - ✅ System: `http://dsf.dev/sid/task-identifier`
  - ✅ Value: `http://test.org/bpe/Process/someProcessName/1.0/someExampleName` (with actual version)
  - ✅ Value: `http://test.org/bpe/Process/someProcessName/#{version}/someExampleName` (with placeholder)
  - ✅ Value: `https://dsf.dev/bpe/Process/myProcess/2.5/startTask`
  - ✅ Value: `http://medizininformatik-initiative.de/bpe/Process/coordinateDataSharing/#{version}/coordinateDataSharing`

- **Invalid Examples**:
  - ❌ System missing or empty
  - ❌ System: `http://wrong.system/identifier` (wrong system URL)
  - ❌ Value: `http://test.org/someProcessName/1.0/taskName` (missing `/bpe/Process/` segment)
  - ❌ Value: `http://test.org/bpe/Process/myProcess/1/taskName` (version must be in `X.Y` format, e.g. `1.0`)
  - ❌ Empty or blank identifier value

- **DSF Framework Reference**:
  - Based on the DSF NamingSystem definition: `http://dsf.dev/sid/task-identifier`
  - See: [DSF Framework Repository](https://github.com/datasharingframework/dsf)

##### Task.input Validation

- **Input Presence**:
  - `Task.input` must not be empty
  - Error: `FHIR_TASK_MISSING_INPUT`

- **Structural Validation**:
  - Each input must have `type.coding.system` and `type.coding.code`
  - Error: `FHIR_TASK_INPUT_REQUIRED_CODING_SYSTEM_AND_CODING_CODE`
  - Each input must have a `value[x]` element
  - Error: `FHIR_TASK_INPUT_MISSING_VALUE`

- **Duplicate Detection**:
  - No two inputs may share the same `system#code` combination
  - Error: `FHIR_TASK_INPUT_DUPLICATE_SLICE`

- **BPMN Slice Validation**:
  - `message-name` slice: Required (min=1, max=1)
    - Error: `FHIR_TASK_REQUIRED_INPUT_WITH_CODE_MESSAGE_NAME`
  - `business-key` slice:
    - Required when status is "in-progress", "completed", or "failed"
    - Error: `FHIR_TASK_STATUS_REQUIRED_INPUT_BUSINESS_KEY`
    - Must be absent when status is "draft"
    - Error: `FHIR_TASK_BUSINESS_KEY_EXISTS`
    - Business key validation may be skipped in certain conditions
    - Warning: `FHIR_TASK_BUSINESS_KEY_CHECK_IS_SKIPPED`
  - `correlation-key` slice:
    - Validated against StructureDefinition cardinality
    - Error: `FHIR_TASK_CORRELATION_EXISTS`
    - Error: `FHIR_TASK_CORRELATION_MISSING_BUT_REQUIRED`

- **Cardinality Validation**:
  - Total input count validated against base cardinality
  - Error: `FHIR_TASK_INPUT_INSTANCE_COUNT_BELOW_MIN`
  - Error: `FHIR_TASK_INPUT_INSTANCE_COUNT_EXCEEDS_MAX`
  - Slice occurrence counts validated against slice-specific cardinality
  - Error: `FHIR_TASK_INPUT_SLICE_COUNT_BELOW_SLICE_MIN`
  - Error: `FHIR_TASK_INPUT_SLICE_COUNT_EXCEEDS_SLICE_MAX`

- **Terminology Validation**:
  - Code/system combinations validated against DSF CodeSystems
  - Error: `FHIR_TASK_UNKNOWN_CODE`

#### StructureDefinition Resources

StructureDefinition resources are validated against DSF-specific constraints.

##### Metadata Validation

- **Read Access Tag**:
  - Must contain valid read-access tag
  - Error: `STRUCTURE_DEFINITION_READ_ACCESS_TAG_MISSING`

- **URL Validation**:
  - `url` must be present and non-empty
  - Error: `STRUCTURE_DEFINITION_URL_MISSING`

- **Status Validation**:
  - `status` must be `"unknown"` (DSF convention)
  - Error: `STRUCTURE_DEFINITION_INVALID_STATUS`

##### Placeholder Validation

- **Version Placeholder**:
  - `version` must contain exactly `#{version}`
  - Error: `STRUCTURE_DEFINITION_VERSION_NO_PLACEHOLDER`

- **Date Placeholder**:
  - `date` must contain exactly `#{date}`
  - Error: `STRUCTURE_DEFINITION_DATE_NO_PLACEHOLDER`

##### Structure Validation

- **Differential**:
  - `differential` element must exist
  - Error: `STRUCTURE_DEFINITION_DIFFERENTIAL_MISSING`

- **Snapshot**:
  - `snapshot` element should not be present (warning)
  - Error: `STRUCTURE_DEFINITION_SNAPSHOT_PRESENT`

- **Element IDs**:
  - Every `element` must have an `@id` attribute
  - Error: `STRUCTURE_DEFINITION_ELEMENT_ID_MISSING`
  - Element IDs must be unique
  - Error: `STRUCTURE_DEFINITION_ELEMENT_ID_DUPLICATE`

##### Slice Cardinality Validation

According to FHIR profiling specification §5.1.0.14:

- **SHOULD Rule**:
  - Sum of all slice minimum cardinalities should be ≤ base element's minimum
  - Error: `STRUCTURE_DEFINITION_SLICE_MIN_SUM_ABOVE_BASE_MIN`

- **MUST Rule (Min Sum)**:
  - Sum of all slice minimum cardinalities must not exceed base element's maximum
  - Error: `STRUCTURE_DEFINITION_SLICE_MIN_SUM_EXCEEDS_MAX`

- **MUST Rule (Slice Max)**:
  - No individual slice's maximum cardinality may exceed base element's maximum
  - Error: `STRUCTURE_DEFINITION_SLICE_MAX_TOO_HIGH`

#### ValueSet Resources

ValueSet resources are validated against the DSF ValueSet base profile.

##### Metadata Validation

- **Read Access Tags**:
  - Must contain at least one read-access tag (ALL or LOCAL)
  - Error: `FHIR_VALUE_SET_MISSING_READ_ACCESS_TAG_ALL_OR_LOCAL`
  - Organization role codes must be valid
  - Error: `FHIR_VALUE_SET_ORGANIZATION_ROLE_MISSING_VALID_CODE_VALUE`

- **Required Elements**:
  - `url` must be present
  - Error: `FHIR_VALUE_SET_MISSING_URL`
  - `name` must be present
  - Error: `FHIR_VALUE_SET_MISSING_NAME`
  - `title` must be present
  - Error: `FHIR_VALUE_SET_MISSING_TITLE`
  - `publisher` must be present
  - Error: `FHIR_VALUE_SET_MISSING_PUBLISHER`
  - `description` must be present
  - Error: `FHIR_VALUE_SET_MISSING_DESCRIPTION`

##### Placeholder Validation

- **Version Placeholder**:
  - `version` must be `#{version}`
  - Error: `FHIR_VALUE_SET_VERSION_NO_PLACEHOLDER`

- **Date Placeholder**:
  - `date` must be `#{date}`
  - Error: `FHIR_VALUE_SET_DATE_NO_PLACEHOLDER`

- **Include Version Placeholder**:
  - `compose.include.version` must be `#{version}`
  - Error: `FHIR_VALUE_SET_INCLUDE_VERSION_NO_PLACEHOLDER`

##### Compose Structure Validation

- **Include Elements**:
  - At least one `compose.include` required
  - Error: `FHIR_VALUE_SET_MISSING_COMPOSE_INCLUDE`
  - Each include must have a `system` attribute
  - Error: `FHIR_VALUE_SET_INCLUDE_MISSING_SYSTEM`

- **Concept Validation**:
  - Concept codes must be non-blank
  - Error: `FHIR_VALUE_SET_CONCEPT_MISSING_CODE`
  - Duplicate codes detected
  - Error: `FHIR_VALUE_SET_DUPLICATE_CONCEPT_CODE`

##### Terminology Compliance

- **CodeSystem Validation**:
  - CodeSystem URLs validated against DSF terminology cache
  - Warn: `FHIR_VALUE_SET_UNKNOWN_CODE`
  - Code exists but in different CodeSystem
  - Error: `FHIR_VALUE_SET_FALSE_URL_REFERENCED`

#### ActivityDefinition Resources

##### Profile Validation

- **Profile**:
  - Must have valid profile
  - Error: `ACTIVITY_DEFINITION_MISSING_PROFILE`
  - Profile must not have version number
  - Error: `ACTIVITY_DEFINITION_PROFILE_NO_PLACEHOLDER`

##### URL Validation

- **URL Presence**:
  - URL must be present and non-empty
  - Error: `INVALID_FHIR_URL`

- **URL Pattern Validation**:
  - ActivityDefinition URL must follow a specific pattern
  - Format: `http[s]://domain/bpe/Process/processName`
  - Example: `http://dsf.dev/bpe/Process/test`
  - Error: `ACTIVITY_DEFINITION_INVALID_URL_PATTERN`
  - Success: When the URL pattern is valid

- **Pattern Definition**:
  ```regex
  ^http[s]{0,1}://(?<domain>(?:(?:[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])\.)+(?:[a-zA-Z0-9]{1,63}))/bpe/Process/(?<processName>[a-zA-Z0-9-]+)$
  ```

- **Valid Examples**:
  - ✅ `http://dsf.dev/bpe/Process/test`
  - ✅ `https://example.org/bpe/Process/my-process`
  - ✅ `http://test.example.com/bpe/Process/process123`

- **Invalid Examples**:
  - ❌ `http://dsf.dev/Process/test` (missing `/bpe/`)
  - ❌ `http://dsf.dev/bpe/Process/test_invalid` (underscore not allowed in processName)
  - ❌ `http://dsf.dev/bpe/Process/` (missing processName)
  - ❌ `ftp://dsf.dev/bpe/Process/test` (only http/https allowed)

- **DSF Framework Reference**:
  - Based on the DSF Framework requirement defined in:
  - `dsf-bpe/dsf-bpe-process-api/src/main/java/dev/dsf/bpe/api/plugin/AbstractProcessPlugin.java`
  - See: [DSF Framework Repository](https://github.com/datasharingframework/dsf)

##### Status Validation

- **Status**:
  - Status must be valid
  - Error: `INVALID_FHIR_STATUS`

##### Authorization Validation

- **Requester**:
  - Requester entry must be present
  - Error: `ACTIVITY_DEFINITION_ENTRY_MISSING_REQUESTER`
  - Requester entry must be valid
  - Error: `ACTIVITY_DEFINITION_ENTRY_INVALID_REQUESTER`

- **Recipient**:
  - Recipient entry must be present
  - Error: `ACTIVITY_DEFINITION_ENTRY_MISSING_RECIPIENT`
  - Recipient entry must be valid
  - Error: `ACTIVITY_DEFINITION_ENTRY_INVALID_RECIPIENT`

#### CodeSystem Resources

##### Metadata Validation

- **Read Access Tag**:
  - Must have read access tag
  - Error: `MISSING_READ_ACCESS_TAG`

- **Required Elements**:
  - Required elements must be present
  - Error: `CODE_SYSTEM_MISSING_ELEMENT`

##### URL Validation

- **URL Format**:
  - URL must be valid
  - Error: `INVALID_FHIR_URL`

##### Status Validation

- **Status**:
  - Status must be valid
  - Error: `CODE_SYSTEM_INVALID_STATUS`

##### Concept Validation

- **Concepts**:
  - Must have at least one concept
  - Error: `CODE_SYSTEM_MISSING_CONCEPT`
  - Concepts must have code
  - Error: `CODE_SYSTEM_CONCEPT_MISSING_CODE`
  - Concepts must have display
  - Error: `CODE_SYSTEM_CONCEPT_MISSING_DISPLAY`
  - Duplicate codes detected
  - Error: `CODE_SYSTEM_DUPLICATE_CODE`

##### Placeholder Validation

- **Version Placeholder**:
  - Version must be `#{version}`
  - Error: `CODE_SYSTEM_VERSION_NO_PLACEHOLDER`

- **Date Placeholder**:
  - Date must be `#{date}`
  - Error: `CODE_SYSTEM_DATE_NO_PLACEHOLDER`

#### Questionnaire Resources

##### Metadata Validation

- **Meta Profile**:
  - Must have meta profile
  - Error: `QUESTIONNAIRE_MISSING_META_PROFILE`
  - Meta profile must be valid
  - Error: `QUESTIONNAIRE_INVALID_META_PROFILE`

- **Read Access Tag**:
  - Must have read access tag
  - Error: `QUESTIONNAIRE_MISSING_READ_ACCESS_TAG`

##### Status Validation

- **Status**:
  - Status must be valid
  - Error: `QUESTIONNAIRE_INVALID_STATUS`

##### Item Validation

- **Items**:
  - Must have at least one item
  - Error: `QUESTIONNAIRE_MISSING_ITEM`
  - Items must have linkId
  - Error: `QUESTIONNAIRE_ITEM_MISSING_ATTRIBUTES_LINK_ID`
  - Items must have text
  - Error: `QUESTIONNAIRE_ITEM_MISSING_ATTRIBUTES_TEXT`
  - Items must have type
  - Error: `QUESTIONNAIRE_ITEM_MISSING_ATTRIBUTES_TYPE`
  - Link IDs must be unique
  - Error: `QUESTIONNAIRE_DUPLICATE_LINK_ID`
  - Unusual link IDs detected
  - Error: `QUESTIONNAIRE_UNUSUAL_LINK_ID`

##### Mandatory Item Validation

- **Required Items**:
  - Mandatory items must be required
  - Error: `QUESTIONNAIRE_MANDATORY_ITEM_NOT_REQUIRED`
  - Mandatory items must have valid type
  - Error: `QUESTIONNAIRE_MANDATORY_ITEM_INVALID_TYPE`

##### Placeholder Validation

- **Version Placeholder**:
  - Version must be `#{version}`
  - Error: `QUESTIONNAIRE_VERSION_NO_PLACEHOLDER`

- **Date Placeholder**:
  - Date must be `#{date}`
  - Error: `QUESTIONNAIRE_DATE_NO_PLACEHOLDER`

#### Common FHIR Validations

##### Access Tag Validation

- **Read Access Tag**:
  - Must have read access tag
  - Error: `MISSING_FHIR_ACCESS_TAG`
  - Access tag must be valid
  - Error: `INVALID_FHIR_ACCESS_TAG`

##### Kind Validation

- **Kind**:
  - Kind must be present
  - Error: `INVALID_FHIR_KIND`
  - Kind must be "Task" for Task resources
  - Error: `FHIR_KIND_NOT_SET_AS_TASK`

##### Status Validation

- **Status**:
  - Status must be "unknown" (DSF convention)
  - Error: `FHIR_STATUS_IS_NOT_SET_AS_UNKNOWN`

##### Extension Validation

- **Process Authorization Extension**:
  - Must have process authorization extension
  - Error: `NO_EXTENSION_PROCESS_AUTHORIZATION_FOUND`

### Plugin Configuration Validation

#### ServiceLoader Registration

- **Registration File**:
  - **V1 API**: Must be registered in `META-INF/services/dev.dsf.bpe.v1.ProcessPluginDefinition`
  - **V2 API**: Must be registered in `META-INF/services/dev.dsf.bpe.v2.ProcessPluginDefinition`
  - Error: `PLUGIN_DEFINITION_MISSING_SERVICE_LOADER_REGISTRATION`
  - Plugin class must be loadable
  - Error: `PLUGIN_DEFINITION_PROCESS_PLUGIN_RESOURCE_NOT_LOADED`

#### Resource References

- **BPMN File References**:
  - BPMN files referenced in plugin must exist
  - Error: `PLUGIN_DEFINITION_BPMN_FILE_NOT_FOUND`
  - BPMN files must be in expected root
  - Error: `PLUGIN_DEFINITION_BPMN_FILE_OUTSIDE_ROOT`
  - BPMN files must be parsable
  - Error: `PLUGIN_DEFINITION_UNPARSABLE_BPMN_RESOURCE`

- **FHIR File References**:
  - FHIR resources referenced in BPMN must exist
  - Error: `PLUGIN_DEFINITION_FHIR_RESOURCE_NOT_FOUND`
  - FHIR resources must be in expected root
  - Error: `PLUGIN_DEFINITION_FHIR_FILE_OUTSIDE_ROOT`
  - FHIR resources must be parsable
  - Error: `PLUGIN_DEFINITION_UNPARSABLE_FHIR_RESOURCE`

#### Resource Presence

- **BPMN Processes**:
  - At least one BPMN process must be defined
  - Error: `PLUGIN_DEFINITION_NO_PROCESS_MODEL_DEFINED`

- **FHIR Resources**:
  - At least one FHIR resource must be defined
  - Error: `PLUGIN_DEFINITION_NO_FHIR_RESOURCES_DEFINED`

#### Version Validation

##### Resource Version Validation

- **Version Pattern Requirement**:
  - Plugin version must follow the pattern: `d.d.d.d` (e.g., `1.0.0.1`, `2.5.3.10`)
  - Resource version is derived from the first two numbers (e.g., `1.0` from `1.0.0.1`)
  - Error: `PLUGIN_DEFINITION_RESOURCE_VERSION_NULL`

- **Valid Examples**:
  - ✅ Version `1.0.0.1` → Resource Version `1.0`
  - ✅ Version `2.5.3.10` → Resource Version `2.5`

- **Invalid Examples**:
  - ❌ Version `1.0.0` (missing fourth number)
  - ❌ Version `1.0` (only two numbers)
  - ❌ Version `invalid` (non-numeric)

- **Pattern Definition**:
  ```regex
  (?<resourceVersion>\d+\.\d+)\.\d+\.\d+
  ```

- **DSF Framework Reference**:
  - This validation is based on the DSF Framework requirement defined in:
  - `dsf-bpe/dsf-bpe-process-api-v2/src/main/java/dev/dsf/bpe/v2/ProcessPluginDefinition.java`
  - The `getResourceVersion()` method extracts the resource version from the plugin version

#### Leftover Resource Detection

The linter performs project-level analysis to identify unreferenced resources:

- **Unreferenced BPMN Files**:
  - BPMN files that are not referenced by any plugin
  - Reported as warnings

- **Unreferenced FHIR Resources**:
  - FHIR resources that are not referenced by any BPMN process
  - Reported as warnings

This analysis works uniformly for single-plugin and multi-plugin projects.
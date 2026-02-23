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

#### Task Validation

##### Service Tasks

- **Name Validation**:
  - Task must have a non-empty name
  - Error: `BpmnServiceTaskNameEmptyLintItem`

- **Implementation Class Validation**:
  - `camunda:class` or `camunda:delegateExpression` must be specified
  - Error: `BpmnServiceTaskImplementationNotExistLintItem`
  - Error: `BpmnServiceTaskImplementationClassEmptyLintItem`
  - Implementation class must exist in the classpath
  - Error: `BpmnServiceTaskImplementationClassNotFoundLintItem`
  
- **API Version-Specific Requirements**:
  - **V1 API**:
    - Both checks are performed separately:
      - Class must extend `dev.dsf.bpe.v1.activity.AbstractServiceDelegate`
        - Error: `BpmnServiceTaskNotExtendingAbstractServiceDelegateLintItem` (if not extending)
      - Class must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
        - Error: `BpmnServiceTaskImplementationClassNotImplementingJavaDelegateLintItem` (if not implementing)
    - Note: Both conditions are checked independently. A class should ideally satisfy both, but the linter reports separate errors for each missing requirement.
  - **V2 API**:
    - Class must implement `dev.dsf.bpe.v2.activity.ServiceTask`
    - Error: `BpmnServiceTaskNoInterfaceClassImplementingLintItem`

##### User Tasks

- **Name Validation**:
  - Task must have a non-empty name
  - Error: `BpmnUserTaskNameEmptyLintItem`

- **Form Key Validation**:
  - `camunda:formKey` must be present and non-empty
  - Error: `BpmnUserTaskFormKeyEmptyLintItem`
  - Must reference an external form (starting with "external:", "http://", or "https://")
  - Error: `BpmnUserTaskFormKeyIsNotAnExternalFormLintItem`
  - Must reference a valid Questionnaire resource

- **Listener Validation**:
  - Listener classes must exist
  - Error: `BpmnUserTaskListenerJavaClassNotFoundLintItem`
  - Listener must have class attribute
  - Error: `BpmnUserTaskListenerMissingClassAttributeLintItem`
  
- **API Version-Specific Requirements**:
  - **V1 API**:
    - Listener must extend `dev.dsf.bpe.v1.activity.DefaultUserTaskListener` OR implement `org.camunda.bpm.engine.delegate.TaskListener`
    - Error: `BpmnUserTaskListenerNotExtendingOrImplementingRequiredClassLintItem`
  - **V2 API**:
    - Listener must extend `dev.dsf.bpe.v2.activity.DefaultUserTaskListener` OR implement `dev.dsf.bpe.v2.activity.UserTaskListener`
    - Error: `BpmnUserTaskListenerNotExtendingOrImplementingRequiredClassLintItem`

- **Task Listener Input Parameter Validation (V2 API only)**:
  - Validates input parameters (`camunda:inputParameter`) within task listeners for API v2
  - Applies to all task listeners in API v2, with severity based on whether the listener extends `DefaultUserTaskListener`
  
  - **`practitionerRole` Parameter**:
    - If a `practitionerRole` input parameter is defined in the task listener's `extensionElements`, its value must not be null or empty
    - **Severity**:
      - **ERROR**: When the task listener extends `dev.dsf.bpe.v2.activity.DefaultUserTaskListener`
      - **WARN**: When the task listener does not extend `DefaultUserTaskListener`
    - Error/Warning: `BpmnPractitionerRolehasNoValueOrNullLintItem`
    - Success: `BpmnElementLintItemSuccess` (when value is present and non-empty)
  
  - **`practitioners` Parameter**:
    - If a `practitioners` input parameter is defined in the task listener's `extensionElements`, its value must not be null or empty
    - **Severity**:
      - **ERROR**: When the task listener extends `dev.dsf.bpe.v2.activity.DefaultUserTaskListener`
      - **WARN**: When the task listener does not extend `DefaultUserTaskListener`
    - Error/Warning: `BpmnPractitionershasNoValueOrNullLintItem`
    - Success: `BpmnElementLintItemSuccess` (when value is present and non-empty)
  
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
    - Error: `BpmnUserTaskListenerIncompleteTaskOutputFieldsLintItem`
    - Message: "If taskOutputSystem, taskOutputCode, or taskOutputVersion is set, all three must be set"
    - Validation is skipped if none of the fields are set
  
  - **FHIR Resource Validation**:
    - **`taskOutputSystem`**: Should reference a valid CodeSystem URL
      - Uses `FhirAuthorizationCache.containsSystem()` to check if the CodeSystem exists
      - Error: `BpmnUserTaskListenerTaskOutputSystemInvalidFhirResourceLintItem` if CodeSystem is unknown
      - Success: `BpmnElementLintItemSuccess` when CodeSystem is valid
    
    - **`taskOutputCode`**: Should be a valid code in the referenced CodeSystem
      - Uses `FhirAuthorizationCache.isUnknown()` to check if the code exists in the CodeSystem
      - Error: `BpmnUserTaskListenerTaskOutputCodeInvalidFhirResourceLintItem` if code is unknown
      - Success: `BpmnElementLintItemSuccess` when code is valid
    
    - **`taskOutputVersion`**: Must contain a placeholder (e.g., `#{version}`)
      - Uses `LintingUtils.containsPlaceholder()` to check for placeholders
      - Warning: `BpmnUserTaskListenerTaskOutputVersionNoPlaceholderLintItem` if no placeholder found
      - Success: `BpmnElementLintItemSuccess` when placeholder is present
  
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
  - Error: `BpmnMessageSendTaskImplementationClassEmptyLintItem`
  - Error: `BpmnMessageSendTaskImplementationClassNotFoundLintItem`
  
- **API Version-Specific Requirements**:
  - **V1 API**:
    - Both checks are performed separately:
      - Class must extend `dev.dsf.bpe.v1.activity.AbstractTaskMessageSend`
        - Error: `BpmnSendTaskNotExtendingAbstractTaskMessageSendLintItem` (if not extending)
      - Class must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
        - Error: `BpmnMessageSendEventImplementationClassNotImplementingJavaDelegateLintItem` (if not implementing)
    - Note: Both conditions are checked independently. A class should ideally satisfy both, but the linter reports separate errors for each missing requirement.
  - **V2 API**:
    - Class must implement `dev.dsf.bpe.v2.activity.MessageSendTask`
    - Error: `BpmnSendTaskNoInterfaceClassImplementingLintItem`

- **Field Injection Validation**:
  - Same field injections as Message Send Events are validated: `profile`, `messageName`, and `instantiatesCanonical`
  - `profile` field injection:
    - Must be non-empty
    - Error: `BpmnFieldInjectionProfileEmptyLintItem`
    - Must contain version placeholder `#{version}`
    - Error: `BpmnFieldInjectionProfileNoVersionPlaceholderLintItem`
    - Must reference existing StructureDefinition
    - Error: `BpmnNoStructureDefinitionFoundForMessageLintItem`
  - `messageName` field injection:
    - Must be non-empty
    - Error: `BpmnFieldInjectionMessageValueEmptyLintItem`
    - Must be a string literal
    - Error: `BpmnFieldInjectionNotStringLiteralLintItem`
  - `instantiatesCanonical` field injection:
    - Must be non-empty
    - Error: `BpmnFieldInjectionInstantiatesCanonicalEmptyLintItem`
    - Must end with version placeholder `|#{version}`
    - Error: `BpmnFieldInjectionInstantiatesCanonicalNoVersionPlaceholderLintItem`
    - Must reference existing ActivityDefinition
    - Error: `BpmnNoActivityDefinitionFoundForMessageLintItem`
  - Unknown field injections are reported
    - Error: `BpmnUnknownFieldInjectionLintItem`

##### Receive Tasks

- **Name Validation**:
  - Task must have a non-empty name
  - Warning: `BpmnEventNameEmptyLintItem`

- **Message Definition Validation**:
  - Message definition must be present and have a non-empty message name
  - Error: `BpmnMessageStartEventMessageNameEmptyLintItem`

- **FHIR Resource Validation**:
  - Message name must reference an existing ActivityDefinition
  - Error: `BpmnNoActivityDefinitionFoundForMessageLintItem`
  - Message name must reference an existing StructureDefinition
  - Error: `BpmnNoStructureDefinitionFoundForMessageLintItem`

#### Event Validation

##### Message Events (Start/Intermediate/End)

- **Event Name Validation**:
  - Event must have a non-empty name
  - Error: `BpmnEventNameEmptyLintItem`
  - Error: `BpmnMessageStartEventMessageNameEmptyLintItem`
  - Error: `BpmnMessageIntermediateCatchEventNameEmptyLintItem`
  - Error: `BpmnMessageIntermediateCatchEventMessageNameEmptyLintItem`
  - Error: `BpmnMessageBoundaryEventNameEmptyLintItem`

- **Implementation Class Validation**:
  - For send events, implementation class must exist
  - Error: `BpmnMessageSendEventImplementationClassEmptyLintItem`
  - Error: `BpmnMessageSendEventImplementationClassNotFoundLintItem`
  - Intermediate throw events should not have message definitions
  - Error: `BpmnMessageIntermediateThrowEventHasMessageLintItem`
  
- **API Version-Specific Requirements**:
  - **V1 API**:
    - Class must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
    - Error: `BpmnMessageSendEventImplementationClassNotImplementingJavaDelegateLintItem`
    - Throw events must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
    - Error: `BpmnEndOrIntermediateThrowEventMissingInterfaceLintItem`
  - **V2 API**:
    - Message Intermediate Throw Events must implement `dev.dsf.bpe.v2.activity.MessageIntermediateThrowEvent`
    - Message End Events must implement `dev.dsf.bpe.v2.activity.MessageEndEvent`
    - Error: `BpmnEndOrIntermediateThrowEventMissingInterfaceLintItem`

- **Field Injection Validation**:
  - `profile` field injection:
    - Must be non-empty
    - Error: `BpmnFieldInjectionProfileEmptyLintItem`
    - Must contain version placeholder `#{version}`
    - Error: `BpmnFieldInjectionProfileNoVersionPlaceholderLintItem`
    - Must reference existing StructureDefinition
    - Error: `BpmnNoStructureDefinitionFoundForMessageLintItem`
  
  - `messageName` field injection:
    - Must be non-empty
    - Error: `BpmnFieldInjectionMessageValueEmptyLintItem`
    - Must be a string literal
    - Error: `BpmnFieldInjectionNotStringLiteralLintItem`
  
  - `instantiatesCanonical` field injection:
    - Must be non-empty
    - Error: `BpmnFieldInjectionInstantiatesCanonicalEmptyLintItem`
    - Must end with version placeholder `|#{version}`
    - Error: `BpmnFieldInjectionInstantiatesCanonicalNoVersionPlaceholderLintItem`
    - Must reference existing ActivityDefinition
    - Error: `BpmnNoActivityDefinitionFoundForMessageLintItem`

##### Timer Events

- **Timer Type Validation**:
  - At least one of `timeDate`, `timeCycle`, or `timeDuration` must be set
  - Error: `BpmnFloatingElementLintItem` ("Timer type is empty")

- **Fixed Date Warning**:
  - `timeDate` expressions are flagged with an informational message to verify if a fixed date is intended
  - Info: `BpmnFloatingElementLintItem` ("Timer type is a fixed date/time (timeDate)")

- **Placeholder Validation**:
  - `timeCycle` and `timeDuration` values should contain a placeholder (e.g., `#{interval}`)
  - Warning: `BpmnFloatingElementLintItem` ("Timer value appears fixed (no placeholder found)")

##### Error Boundary Events

- **Error Configuration Validation**:
  - Error reference must be present
  - Error code must not be empty
  - Error: `BpmnErrorBoundaryEventErrorCodeEmptyLintItem`
  - Error name must not be empty (warning)
  - Error: `BpmnErrorBoundaryEventErrorNameEmptyLintItem`
  - Error: `BpmnErrorBoundaryEventNameEmptyLintItem`
  - Error code variable must not be empty
  - Error: `BpmnErrorBoundaryEventErrorCodeVariableEmptyLintItem`

##### Signal Events

- **Signal Definition Validation**:
  - Signal end events must have a non-empty name
  - Error: `BpmnSignalEndEventNameEmptyLintItem`
  - Signal end events must have a signal definition
  - Error: `BpmnSignalEndEventSignalEmptyLintItem`
  - Signal intermediate throw events must have a non-empty name
  - Error: `BpmnSignalIntermediateThrowEventNameEmptyLintItem`
  - Signal intermediate throw events must have a signal definition
  - Error: `BpmnSignalIntermediateThrowEventSignalEmptyLintItem`
  - Signal definitions must be valid
  - Signal references must be correct

##### Conditional Events

- **Event Name Validation**:
  - Conditional Intermediate Catch Event should have a non-empty name
  - Warning: `BpmnFloatingElementLintItem` ("Conditional Intermediate Catch Event name is empty")

- **Variable Name Validation**:
  - `camunda:variableName` attribute must not be empty
  - Error: `BpmnFloatingElementLintItem` ("Conditional Intermediate Catch Event variable name is empty")

- **Variable Events Validation**:
  - `camunda:variableEvents` attribute must not be empty
  - Error: `BpmnFloatingElementLintItem` ("Conditional Intermediate Catch Event variableEvents is empty")

- **Condition Type Validation**:
  - `camunda:conditionType` must be set, or a condition expression must be provided (in which case `"expression"` is assumed)
  - Error: `BpmnFloatingElementLintItem` ("Conditional Intermediate Catch Event condition type is empty")

- **Condition Expression Validation**:
  - When condition type is `"expression"`, the condition expression must not be empty
  - Error: `BpmnFloatingElementLintItem` ("Conditional Intermediate Catch Event condition expression is empty")

#### Gateway and Flow Validation

##### Exclusive Gateways

- **Sequence Flow Validation**:
  - Outgoing sequence flows must have appropriate names
  - When multiple outgoing flows exist, gateway must have a name
  - Error: `BpmnExclusiveGatewayHasMultipleOutgoingFlowsButNameIsEmptyLintItem`
  - Conditional expressions required when multiple paths exist
  - Default flow validation

##### Inclusive Gateways

- **Sequence Flow Validation**:
  - Similar requirements as exclusive gateways
  - When multiple outgoing flows exist, gateway must have a name
  - Error: `BpmnInclusiveGatewayHasMultipleOutgoingFlowsButNameIsEmptyLintItem`
  - Multiple path handling

##### Event-Based Gateways

- **Configuration Validation**:
  - Proper configuration required
  - Outgoing flow setup validation

##### Sequence Flows

- **Naming and Conditions**:
  - Naming conventions
  - Conditional expressions for non-default flows from splitting gateways
  - Error: `BpmnFlowElementLintItem`

#### SubProcess Validation

##### Multi-Instance SubProcesses

- **Asynchronous Execution**:
  - `asyncBefore` must be set to `true` for proper asynchronous execution
  - Required for multi-instance subprocesses
  - Error: `BpmnSubProcessHasMultiInstanceButIsNotAsyncBeforeTrueLintItem`

##### Start/End Events in SubProcesses

- **Structural Validation**:
  - Start events must be part of subprocess
  - Error: `BpmnStartEventNotPartOfSubProcessLintItem`
  - End events must be part of subprocess
  - Error: `BpmnEndEventNotPartOfSubProcessLintItem`
  - End events inside subprocesses should have `asyncAfter` set to `true`
  - Error: `BpmnEndEventInsideSubProcessShouldHaveAsyncAfterTrueLintItem`

#### Floating Elements

- **Element Placement**:
  - Elements must be properly connected
  - Error: `BpmnFloatingElementLintItem`

#### Execution Listeners

- **Execution Listener Validation**:
  - Execution listener classes must exist in the classpath
  - Error: `BpmnExecutionListenerClassNotFoundLintItem`
  
- **API Version-Specific Requirements**:
  - **V1 API**:
    - Execution listener classes must implement `org.camunda.bpm.engine.delegate.ExecutionListener`
    - Error: `BpmnExecutionListenerNotImplementingRequiredInterfaceLintItem`
  - **V2 API**:
    - Execution listener classes must implement `dev.dsf.bpe.v2.activity.ExecutionListener`
    - Error: `BpmnExecutionListenerNotImplementingRequiredInterfaceLintItem`

#### Unknown Field Injections

- **Field Injection Validation**:
  - Only known field injections are allowed
  - Error: `BpmnUnknownFieldInjectionLintItem`

### FHIR Resource Validation

The linter validates FHIR resources against DSF-specific profiles and HL7 FHIR specifications.

![FHIR Linting](/assets/linter/fhir-linting.svg)

#### Unparsable FHIR Resources

- **Resource Parsing**:
  - FHIR resources must be valid XML or JSON
  - Error: `UnparsableFhirResourceLintItem`

#### Task Resources

Task resources are validated against the DSF Task base profile (`http://dsf.dev/fhir/StructureDefinition/dsf-task-base`).

##### Metadata and Profile Validation

- **Profile Validation**:
  - `meta.profile` must be present and point to a DSF Task profile
  - Error: `FhirTaskMissingProfileLintItem`
  - Profile must be loadable
  - Error: `FhirTaskCouldNotLoadProfileLintItem`

- **InstantiatesCanonical Validation**:
  - `instantiatesCanonical` must be present
  - Error: `FhirTaskMissingInstantiatesCanonicalLintItem`
  - Must end with version placeholder `|#{version}`
  - Error: `FhirTaskInstantiatesCanonicalPlaceholderLintItem`
  - Must reference existing ActivityDefinition
  - Error: `FhirTaskUnknownInstantiatesCanonicalLintItem`

##### Fixed Elements

- **Status Validation**:
  - `status` must be present
  - Error: `FhirTaskMissingStatusLintItem`
  - Must be `"draft"` for template Task instances
  - Error: `FhirTaskStatusNotDraftLintItem`
  - Must be a valid TaskStatus value
  - Error: `FhirTaskUnknownStatusLintItem`

- **Intent Validation**:
  - `intent` must be `"order"`
  - Error: `FhirTaskValueIsNotSetAsOrderLintItem`

- **Requester Validation**:
  - Requester must be present
  - Error: `FhirTaskMissingRequesterLintItem`
  - `requester.identifier.system` must be `http://dsf.dev/sid/organization-identifier`
  - Error: `FhirTaskInvalidRequesterLintItem`
  - `requester.identifier.value` must be `#{organization}` (development)
  - Error: `FhirTaskRequesterOrganizationNoPlaceholderLintItem`
  - Error: `FhirTaskRequesterIdNoPlaceholderLintItem`
  - Error: `FhirTaskRequesterIdNotExistLintItem`

- **Recipient Validation**:
  - Recipient must be present
  - Error: `FhirTaskMissingRecipientLintItem`
  - `restriction.recipient.identifier.system` must be `http://dsf.dev/sid/organization-identifier`
  - Error: `FhirTaskInvalidRecipientLintItem`
  - `restriction.recipient.identifier.value` must be `#{organization}` (development)
  - Error: `FhirTaskRecipientOrganizationNoPlaceholderLintItem`
  - Error: `FhirTaskRecipientIdNoPlaceholderLintItem`
  - Error: `FhirTaskRecipientIdNotExistLintItem`

##### Development Placeholders

- **Date Placeholder**:
  - `authoredOn` must contain `#{date}`
  - Error: `FhirTaskDateNoPlaceholderLintItem`

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
  - Error: `FhirTaskMissingInputLintItem`

- **Structural Validation**:
  - Each input must have `type.coding.system` and `type.coding.code`
  - Error: `FhirTaskInputRequiredCodingSystemAndCodingCodeLintItem`
  - Each input must have a `value[x]` element
  - Error: `FhirTaskInputMissingValueLintItem`

- **Duplicate Detection**:
  - No two inputs may share the same `system#code` combination
  - Error: `FhirTaskInputDuplicateSliceLintItem`

- **BPMN Slice Validation**:
  - `message-name` slice: Required (min=1, max=1)
    - Error: `FhirTaskRequiredInputWithCodeMessageNameLintItem`
  - `business-key` slice:
    - Required when status is "in-progress", "completed", or "failed"
    - Error: `FhirTaskStatusRequiredInputBusinessKeyLintItem`
    - Must be absent when status is "draft"
    - Error: `FhirTaskBusinessKeyExistsLintItem`
    - Business key validation may be skipped in certain conditions
    - Warning: `FhirTaskBusinessKeyCheckIsSkippedLintItem`
  - `correlation-key` slice:
    - Validated against StructureDefinition cardinality
    - Error: `FhirTaskCorrelationExistsLintItem`
    - Error: `FhirTaskCorrelationMissingButRequiredLintItem`

- **Cardinality Validation**:
  - Total input count validated against base cardinality
  - Error: `FhirTaskInputInstanceCountBelowMinLintItem`
  - Error: `FhirTaskInputInstanceCountExceedsMaxLintItem`
  - Slice occurrence counts validated against slice-specific cardinality
  - Error: `FhirTaskInputSliceCountBelowSliceMinLintItem`
  - Error: `FhirTaskInputSliceCountExceedsSliceMaxLintItem`

- **Terminology Validation**:
  - Code/system combinations validated against DSF CodeSystems
  - Error: `FhirTaskUnknownCodeLintItem`

#### StructureDefinition Resources

StructureDefinition resources are validated against DSF-specific constraints.

##### Metadata Validation

- **Read Access Tag**:
  - Must contain valid read-access tag
  - Error: `FhirStructureDefinitionMissingReadAccessTagLintItem`

- **URL Validation**:
  - `url` must be present and non-empty
  - Error: `FhirStructureDefinitionMissingUrlLintItem`

- **Status Validation**:
  - `status` must be `"unknown"` (DSF convention)
  - Error: `FhirStructureDefinitionInvalidStatusLintItem`

##### Placeholder Validation

- **Version Placeholder**:
  - `version` must contain exactly `#{version}`
  - Error: `FhirStructureDefinitionVersionNoPlaceholderLintItem`

- **Date Placeholder**:
  - `date` must contain exactly `#{date}`
  - Error: `FhirStructureDefinitionDateNoPlaceholderLintItem`

##### Structure Validation

- **Differential**:
  - `differential` element must exist
  - Error: `FhirStructureDefinitionMissingDifferentialLintItem`

- **Snapshot**:
  - `snapshot` element should not be present (warning)
  - Error: `FhirStructureDefinitionSnapshotPresentLintItem`

- **Element IDs**:
  - Every `element` must have an `@id` attribute
  - Error: `FhirStructureDefinitionElementWithoutIdLintItem`
  - Element IDs must be unique
  - Error: `FhirStructureDefinitionDuplicateElementIdLintItem`

##### Slice Cardinality Validation

According to FHIR profiling specification §5.1.0.14:

- **SHOULD Rule**:
  - Sum of all slice minimum cardinalities should be ≤ base element's minimum
  - Error: `FhirStructureDefinitionSliceMinSumAboveBaseMinLintItem`

- **MUST Rule (Min Sum)**:
  - Sum of all slice minimum cardinalities must not exceed base element's maximum
  - Error: `FhirStructureDefinitionSliceMinSumExceedsMaxLintItem`

- **MUST Rule (Slice Max)**:
  - No individual slice's maximum cardinality may exceed base element's maximum
  - Error: `FhirStructureDefinitionSliceMaxExceedsBaseMaxLintItem`

#### ValueSet Resources

ValueSet resources are validated against the DSF ValueSet base profile.

##### Metadata Validation

- **Read Access Tags**:
  - Must contain at least one read-access tag (ALL or LOCAL)
  - Error: `FhirValueSetMissingReadAccessTagAllOrLocalLintItem`
  - Organization role codes must be valid
  - Error: `FhirValueSetOrganizationRoleMissingValidCodeValueLintItem`

- **Required Elements**:
  - `url` must be present
  - Error: `FhirValueSetMissingUrlLintItem`
  - `name` must be present
  - Error: `FhirValueSetMissingNameLintItem`
  - `title` must be present
  - Error: `FhirValueSetMissingTitleLintItem`
  - `publisher` must be present
  - Error: `FhirValueSetMissingPublisherLintItem`
  - `description` must be present
  - Error: `FhirValueSetMissingDescriptionLintItem`

##### Placeholder Validation

- **Version Placeholder**:
  - `version` must be `#{version}`
  - Error: `FhirValueSetVersionNoPlaceholderLintItem`

- **Date Placeholder**:
  - `date` must be `#{date}`
  - Error: `FhirValueSetDateNoPlaceholderLintItem`

- **Include Version Placeholder**:
  - `compose.include.version` must be `#{version}`
  - Error: `FhirValueSetIncludeVersionPlaceholderLintItem`

##### Compose Structure Validation

- **Include Elements**:
  - At least one `compose.include` required
  - Error: `FhirValueSetMissingComposeIncludeLintItem`
  - Each include must have a `system` attribute
  - Error: `FhirValueSetIncludeMissingSystemLintItem`

- **Concept Validation**:
  - Concept codes must be non-blank
  - Error: `FhirValueSetConceptMissingCodeLintItem`
  - Duplicate codes detected
  - Error: `FhirValueSetDuplicateConceptCodeLintItem`

##### Terminology Compliance

- **CodeSystem Validation**:
  - CodeSystem URLs validated against DSF terminology cache
  - Warn: `FhirValueSetUnknownCodeLintItem`
  - Code exists but in different CodeSystem
  - Error: `FhirValueSetFalseUrlReferencedLintItem`

#### ActivityDefinition Resources

##### Profile Validation

- **Profile**:
  - Must have valid profile
  - Error: `FhirActivityDefinitionMissingProfileLintItem`
  - Profile must not have version number
  - Error: `FhirActivityDefinitionProfileHasVersionNumberLintItem`

##### URL Validation

- **URL Presence**:
  - URL must be present and non-empty
  - Error: `FhirActivityDefinitionInvalidFhirUrlLintItem`

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
  - Error: `FhirActivityDefinitionInvalidFhirStatusLintItem`

##### Authorization Validation

- **Requester**:
  - Requester entry must be present
  - Error: `FhirActivityDefinitionEntryMissingRequesterLintItem`
  - Requester entry must be valid
  - Error: `FhirActivityDefinitionEntryInvalidRequesterLintItem`

- **Recipient**:
  - Recipient entry must be present
  - Error: `FhirActivityDefinitionEntryMissingRecipientLintItem`
  - Recipient entry must be valid
  - Error: `FhirActivityDefinitionEntryInvalidRecipientLintItem`

#### CodeSystem Resources

##### Metadata Validation

- **Read Access Tag**:
  - Must have read access tag
  - Error: `FhirCodeSystemMissingReadAccessTagLintItem`

- **Required Elements**:
  - Required elements must be present
  - Error: `FhirCodeSystemMissingElementLintItem`

##### URL Validation

- **URL Format**:
  - URL must be valid
  - Error: `FhirCodeSystemInvalidUrlLintItem`

##### Status Validation

- **Status**:
  - Status must be valid
  - Error: `FhirCodeSystemInvalidStatusLintItem`

##### Concept Validation

- **Concepts**:
  - Must have at least one concept
  - Error: `FhirCodeSystemMissingConceptLintItem`
  - Concepts must have code
  - Error: `FhirCodeSystemConceptMissingCodeLintItem`
  - Concepts must have display
  - Error: `FhirCodeSystemConceptMissingDisplayLintItem`
  - Duplicate codes detected
  - Error: `FhirCodeSystemDuplicateCodeLintItem`

##### Placeholder Validation

- **Version Placeholder**:
  - Version must be `#{version}`
  - Error: `FhirCodeSystemVersionNoPlaceholderLintItem`

- **Date Placeholder**:
  - Date must be `#{date}`
  - Error: `FhirCodeSystemDateNoPlaceholderLintItem`

#### Questionnaire Resources

##### Metadata Validation

- **Meta Profile**:
  - Must have meta profile
  - Error: `FhirQuestionnaireMissingMetaProfileLintItem`
  - Meta profile must be valid
  - Error: `FhirQuestionnaireInvalidMetaProfileLintItem`

- **Read Access Tag**:
  - Must have read access tag
  - Error: `FhirQuestionnaireMissingReadAccessTagLintItem`

##### Status Validation

- **Status**:
  - Status must be valid
  - Error: `FhirQuestionnaireInvalidStatusLintItem`

##### Item Validation

- **Items**:
  - Must have at least one item
  - Error: `FhirQuestionnaireMissingItemLintItem`
  - Items must have linkId
  - Error: `FhirQuestionnaireItemMissingAttributesLinkIdLintItem`
  - Items must have text
  - Error: `FhirQuestionnaireItemMissingAttributesTextLintItem`
  - Items must have type
  - Error: `FhirQuestionnaireItemMissingAttributesTypeLintItem`
  - Link IDs must be unique
  - Error: `FhirQuestionnaireDuplicateLinkIdLintItem`
  - Unusual link IDs detected
  - Error: `FhirQuestionnaireUnusualLinkIdLintItem`

##### Mandatory Item Validation

- **Required Items**:
  - Mandatory items must be required
  - Error: `FhirQuestionnaireMandatoryItemNotRequiredLintItem`
  - Mandatory items must have valid type
  - Error: `FhirQuestionnaireMandatoryItemInvalidTypeLintItem`

##### Definition Validation

- **Definition**:
  - Definition must be valid
  - Error: `FhirQuestionnaireDefinitionLintItem`

##### Placeholder Validation

- **Version Placeholder**:
  - Version must be `#{version}`
  - Error: `FhirQuestionnaireVersionNoPlaceholderLintItem`

- **Date Placeholder**:
  - Date must be `#{date}`
  - Error: `FhirQuestionnaireDateNoPlaceholderLintItem`

#### Common FHIR Validations

##### Access Tag Validation

- **Read Access Tag**:
  - Must have read access tag
  - Error: `FhirMissingFhirAccessTagLintItem`
  - Access tag must be valid
  - Error: `FhirInvalidFhirAccessTagLintItem`

##### Kind Validation

- **Kind**:
  - Kind must be present
  - Error: `FhirKindIsMissingOrEmptyLintItem`
  - Kind must be "Task" for Task resources
  - Error: `FhirKindNotSetAsTaskLintItem`

##### Status Validation

- **Status**:
  - Status must be "unknown" (DSF convention)
  - Error: `FhirStatusIsNotSetAsUnknownLintItem`

##### Extension Validation

- **Process Authorization Extension**:
  - Must have process authorization extension
  - Error: `FhirNoExtensionProcessAuthorizationFoundLintItem`

### Plugin Configuration Validation

#### ServiceLoader Registration

- **Registration File**:
  - **V1 API**: Must be registered in `META-INF/services/dev.dsf.bpe.v1.ProcessPluginDefinition`
  - **V2 API**: Must be registered in `META-INF/services/dev.dsf.bpe.v2.ProcessPluginDefinition`
  - Error: `PluginDefinitionMissingServiceLoaderRegistrationLintItem`
  - Plugin class must be loadable
  - Error: `PluginDefinitionProcessPluginResourceNotLoadedLintItem`

#### Resource References

- **BPMN File References**:
  - BPMN files referenced in plugin must exist
  - Error: `PluginDefinitionBpmnFileReferencedButNotFoundLintItem`
  - BPMN files must be in expected root
  - Error: `PluginDefinitionBpmnFileReferencedFoundOutsideExpectedRootLintItem`
  - BPMN files must be parsable
  - Error: `PluginDefinitionUnparsableBpmnResourceLintItem`

- **FHIR File References**:
  - FHIR resources referenced in BPMN must exist
  - Error: `PluginDefinitionFhirFileReferencedButNotFoundLintItem`
  - FHIR resources must be in expected root
  - Error: `PluginDefinitionFhirFileReferencedFoundOutsideExpectedRootLintItem`
  - FHIR resources must be parsable
  - Error: `PluginDefinitionUnparsableFhirResourceLintItem`

#### Resource Presence

- **BPMN Processes**:
  - At least one BPMN process must be defined
  - Error: `PluginDefinitionNoProcessModelDefinedLintItem`

- **FHIR Resources**:
  - At least one FHIR resource must be defined
  - Error: `PluginDefinitionNoFhirResourcesDefinedLintItem`

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
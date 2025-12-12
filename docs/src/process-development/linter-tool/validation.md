---
title: Validation Rules
---

The linter performs comprehensive validation across multiple dimensions. This section details all validation rules organized by resource type.

### BPMN Validation

The linter performs comprehensive validation on BPMN 2.0 process definitions using the Camunda BPMN model API.

#### Task Validation

##### Service Tasks

- **Name Validation**:
  - Task must have a non-empty name
  - Error: `BpmnServiceTaskNameEmptyLintItem`

- **Implementation Class Validation**:
  - `camunda:class` or `camunda:delegateExpression` must be specified
  - Error: `BpmnServiceTaskImplementationClassEmptyLintItem`
  - Implementation class must exist in the classpath
  - Error: `BpmnServiceTaskImplementationClassNotFoundLintItem`
  - Class must implement `org.camunda.bpm.engine.delegate.JavaDelegate`
  - Error: `BpmnServiceTaskImplementationClassNotImplementingJavaDelegateLintItem`
  - Class must implement DSF-specific task interface (if applicable)
  - Error: `BpmnServiceTaskNoInterfaceClassImplementingLintItem`

##### User Tasks

- **Name Validation**:
  - Task must have a non-empty name

- **Form Key Validation**:
  - `camunda:formKey` must be present and valid
  - Must reference a valid Questionnaire resource

- **Listener Validation**:
  - Listener classes must exist
  - Error: `BpmnUserTaskListenerJavaClassNotFoundLintItem`
  - Listener must have class attribute
  - Error: `BpmnUserTaskListenerMissingClassAttributeLintItem`
  - Listener must extend/implement required class
  - Error: `BpmnUserTaskListenerNotExtendingOrImplementingRequiredClassLintItem`

##### Send Tasks

- **Name Validation**:
  - Task must have a non-empty name

- **Implementation Class Validation**:
  - Implementation class must exist
  - Error: `BpmnMessageSendTaskImplementationClassEmptyLintItem`
  - Error: `BpmnMessageSendTaskImplementationClassNotFoundLintItem`
  - Class must implement required interface
  - Error: `BpmnSendTaskNoInterfaceClassImplementingLintItem`

- **Field Injection Validation**:
  - Message-related field injections must be valid
  - FHIR resource references must be correct

##### Receive Tasks

- **Name Validation**:
  - Task must have a non-empty name

- **Message Definition Validation**:
  - Message definition must be valid
  - FHIR message name cross-checks

#### Event Validation

##### Message Events (Start/Intermediate/End)

- **Event Name Validation**:
  - Event must have a non-empty name
  - Error: `BpmnEventNameEmptyLintItem`
  - Error: `BpmnMessageStartEventMessageNameEmptyLintItem`
  - Error: `BpmnMessageIntermediateCatchEventNameEmptyLintItem`
  - Error: `BpmnMessageBoundaryEventNameEmptyLintItem`

- **Implementation Class Validation**:
  - For send events, implementation class must exist
  - Error: `BpmnMessageSendEventImplementationClassEmptyLintItem`
  - Error: `BpmnMessageSendEventImplementationClassNotFoundLintItem`
  - Class must implement JavaDelegate
  - Error: `BpmnMessageSendEventImplementationClassNotImplementingJavaDelegateLintItem`
  - Intermediate throw events should not have message definitions
  - Error: `BpmnMessageIntermediateThrowEventHasMessageLintItem`
  - Throw events must implement required interface
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

- **Time Expression Validation**:
  - Time cycle/date/duration expressions must be valid
  - Placeholder usage validation

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
  - Signal definitions must be valid
  - Signal references must be correct

##### Conditional Events

- **Condition Expression Validation**:
  - Condition expressions must be valid

#### Gateway and Flow Validation

##### Exclusive Gateways

- **Sequence Flow Validation**:
  - Outgoing sequence flows must have appropriate names
  - Conditional expressions required when multiple paths exist
  - Default flow validation

##### Inclusive Gateways

- **Sequence Flow Validation**:
  - Similar requirements as exclusive gateways
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

##### Start/End Events in SubProcesses

- **Structural Validation**:
  - Start events must be part of subprocess
  - Error: `BpmnStartEventNotPartOfSubProcessLintItem`
  - End events must be part of subprocess
  - Error: `BpmnEndEventNotPartOfSubProcessLintItem`

#### Floating Elements

- **Element Placement**:
  - Elements must be properly connected
  - Error: `BpmnFloatingElementLintItem`

#### Unknown Field Injections

- **Field Injection Validation**:
  - Only known field injections are allowed
  - Error: `BpmnUnknownFieldInjectionLintItem`

### FHIR Resource Validation

The linter validates FHIR resources against DSF-specific profiles and HL7 FHIR specifications.

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
  - Error: `FhirValueSetUnknownCodeLintItem`
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

- **URL Format**:
  - URL must be valid
  - Error: `FhirActivityDefinitionInvalidFhirUrlLintItem`

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
  - Must be registered in `META-INF/services/dev.dsf.bpe.process.ProcessPlugin` (v1) or equivalent (v2)
  - Error: `PluginDefinitionMissingServiceLoaderRegistrationLintItem`
  - Plugin class must be loadable
  - Error: `PluginDefinitionProcessPluginRessourceNotLoadedLintItem`

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

#### Leftover Resource Detection

The linter performs project-level analysis to identify unreferenced resources:

- **Unreferenced BPMN Files**:
  - BPMN files that are not referenced by any plugin
  - Reported as warnings

- **Unreferenced FHIR Resources**:
  - FHIR resources that are not referenced by any BPMN process
  - Reported as warnings

This analysis works uniformly for single-plugin and multi-plugin projects.

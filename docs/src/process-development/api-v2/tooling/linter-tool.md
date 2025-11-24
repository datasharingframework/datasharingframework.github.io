---
title: DSF Linter
icon: operate
---
# DSF Linter - Complete Documentation

A comprehensive linting tool for DSF (Data Sharing Framework) process plugins. Validates BPMN processes, FHIR resources, and plugin configurations from JAR files.

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Installation](#installation)
4. [Usage](#usage)
5. [CLI Options](#cli-options)
6. [Validation Rules](#validation-rules)
7. [Report Generation](#report-generation)
8. [Architecture](#architecture)
9. [Development](#development)
10. [Troubleshooting](#troubleshooting)
11. [API Reference](#api-reference)

## Overview

The DSF Linter is a static analysis tool designed to validate DSF process plugins before deployment. It performs comprehensive checks on:

- **BPMN Process Definitions**: Validates Camunda BPMN 2.0 models, task implementations, event configurations, and FHIR resource references
- **FHIR Resources**: Validates ActivityDefinition, Task, StructureDefinition, ValueSet, CodeSystem, and Questionnaire resources
- **Plugin Configuration**: Verifies ServiceLoader registrations, resource references, and plugin structure

### Key Features

- ✅ Validates BPMN processes against DSF conventions
- ✅ Validates FHIR resources against DSF profiles and HL7 specifications
- ✅ Detects unreferenced (leftover) resources
- ✅ Generates detailed HTML and JSON reports
- ✅ Supports local and remote JAR file input
- ✅ Multi-plugin project support
- ✅ CI/CD integration ready
- ✅ Comprehensive error reporting with severity levels
- ✅ Extensible architecture for custom validation rules

### What is DSF?

The Data Sharing Framework (DSF) is a framework for implementing interoperable healthcare data sharing processes. DSF process plugins contain:

- **BPMN Processes**: Business process definitions using Camunda BPMN 2.0
- **FHIR Resources**: Healthcare data resources conforming to HL7 FHIR specifications
- **Plugin Classes**: Java classes implementing the DSF ProcessPlugin interface

## Quick Start

### Build the Project

```bash
# Full build with tests
mvn clean package

# Skip tests for faster build
mvn clean package -DskipTests

# Verbose output
mvn clean package -X
```

### Basic Usage

```bash
# Lint a local JAR file
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path your-plugin.jar --html

# Lint a remote JAR file
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path https://github.com/datasharingframework/dsf-process-ping-pong/releases/download/v2.0.0.1/dsf-process-ping-pong-2.0.0.1.jar --html

# View report at: /tmp/dsf-linter-report-<name>/dsf-linter-report/index.html
```

## Installation

### Requirements

- **Java**: 17 or higher
- **Maven**: 3.6 or higher
- **Operating System**: Windows, Linux, or macOS

### Building from Source

```bash
# Clone the repository
git clone <repository-url>
cd dsf-linter

# Build the project
mvn clean package

# The executable JAR will be at:
# linter-cli/target/linter-cli-1.0-SNAPSHOT.jar
```

### Distribution

The linter is distributed as a single executable JAR file that includes all dependencies. After building, the JAR can be used standalone:

```bash
# Copy to a convenient location
cp linter-cli/target/linter-cli-1.0-SNAPSHOT.jar ~/bin/dsf-linter.jar

# Use from anywhere
java -jar ~/bin/dsf-linter.jar --path plugin.jar --html
```

## Usage

### Input Types

The linter accepts only **JAR files** as input:

| Input Type | Example | Description |
|------------|---------|-------------|
| Local JAR | `--path C:\path\to\plugin.jar` | JAR file in local filesystem |
| Remote JAR | `--path https://example.com/plugin.jar` | JAR file via HTTP/HTTPS URL |

**Important:** Maven projects must first be built with `mvn clean package` before the resulting JAR file can be linted.

### Expected JAR Structure

The linter expects the following structure in the JAR file:

```
plugin.jar
├── META-INF/
│   └── services/
│       ├── dev.dsf.bpe.process.ProcessPlugin (v1)
│       └── dev.dsf.bpe.process.v2.ProcessPlugin (v2)
├── bpe/
│   └── *.bpmn (BPMN process definitions)
└── fhir/
    ├── ActivityDefinition/
    │   └── *.xml or *.json
    ├── Task/
    │   └── *.xml or *.json
    ├── StructureDefinition/
    │   └── *.xml or *.json
    ├── ValueSet/
    │   └── *.xml or *.json
    ├── CodeSystem/
    │   └── *.xml or *.json
    └── Questionnaire/
        └── *.xml or *.json
```

### Usage Examples

#### Basic Linting

```bash
# Local JAR file
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path C:\path\to\plugin.jar --html

# Remote JAR file
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path https://github.com/datasharingframework/dsf-process-ping-pong/releases/download/v2.0.0.1/dsf-process-ping-pong-2.0.0.1.jar --html
```

#### Advanced Configuration

```bash
# Multiple report formats with custom path
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --json --report-path ./reports

# Verbose output with colored console
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --verbose --color

# Lint Maven project (two-step process)
# Step 1: Build the project
cd /path/to/project && mvn clean package

# Step 2: Lint the resulting JAR
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path /path/to/project/target/my-plugin-1.0.0.jar --html
```

#### CI/CD Integration

```bash
# GitHub Actions / GitLab CI
FORCE_COLOR=1 java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --json --verbose

# Jenkins (fail on errors)
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html
# Exit code: 0 = success, 1 = errors

# Don't fail build (gradual adoption)
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --no-fail
```

## CLI Options

| Option | Short | Description | Required |
|--------|-------|-------------|----------|
| `--path <input>` | `-p` | Path to JAR file (local or remote URL) | Yes |
| `--html` | | Generate HTML report | No |
| `--json` | | Generate JSON report | No |
| `--report-path <dir>` | `-r` | Custom report directory (default: temp directory) | No |
| `--verbose` | `-v` | Enable verbose logging output | No |
| `--color` | | Enable colored console output | No |
| `--no-fail` | | Exit with code 0 even if linter errors are found | No |
| `--help` | `-h` | Display help message | No |
| `--version` | | Display version information | No |

### Environment Variables

| Variable | Effect |
|----------|--------|
| `NO_COLOR` | Disables colored output |
| `FORCE_COLOR` | Forces colored output (useful in CI) |
| `TERM=dumb` | Disables colored output |
| `WT_SESSION`, `ANSICON` | Windows color detection |

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success (no errors, or `--no-fail` was used) |
| 1 | Failure (errors found, or fatal error occurred) |

## Validation Rules

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

## Report Generation

### Report Structure

Reports are generated in the following structure:

```
<report-path>/
├── index.html              # Summary report (all plugins)
├── plugin-name.html        # Detailed report for each plugin
└── plugin-name.json        # JSON report (if --json specified)
```

### HTML Report

The HTML report provides a comprehensive, human-readable view of all linting results.

#### Summary Page (`index.html`)

The summary page includes:

- **Header**:
  - DSF Linter version
  - Execution timestamp
  - Project path

- **Overall Statistics**:
  - Total number of plugins
  - Total errors
  - Total warnings
  - Execution time

- **Plugin Summary Table**:
  - Plugin name
  - API version
  - Error count
  - Warning count
  - Link to detailed report

- **Leftover Resource Summary**:
  - Unreferenced BPMN files
  - Unreferenced FHIR resources

#### Plugin Report (`plugin-name.html`)

Each plugin has a detailed report page containing:

- **Plugin Metadata**:
  - Plugin name
  - Plugin class name
  - API version (v1 or v2)

- **BPMN Validation Results**:
  - List of all BPMN files
  - Errors and warnings per file
  - Detailed error messages with file and line references

- **FHIR Validation Results**:
  - List of all FHIR resources by type
  - Errors and warnings per resource
  - Detailed error messages with element paths

- **Plugin Configuration Results**:
  - ServiceLoader registration status
  - Resource reference validation results

- **Leftover Resource Analysis**:
  - Unreferenced BPMN files
  - Unreferenced FHIR resources

- **Severity Indicators**:
  - Color-coded severity levels (ERROR, WARNING, INFO, SUCCESS)
  - Expandable/collapsible sections

### JSON Report

The JSON report provides machine-readable output for CI/CD integration and automated processing.

#### Structure

```json
{
  "version": "1.0.0",
  "timestamp": "2024-01-15T10:30:00Z",
  "projectPath": "/path/to/plugin.jar",
  "executionTimeMs": 2300,
  "success": true,
  "summary": {
    "totalPlugins": 1,
    "totalErrors": 0,
    "totalWarnings": 1,
    "totalLeftoverBpmn": 0,
    "totalLeftoverFhir": 0
  },
  "plugins": {
    "plugin-name": {
      "name": "plugin-name",
      "class": "dev.dsf.bpe.plugin.ExamplePlugin",
      "apiVersion": "V1",
      "errors": 0,
      "warnings": 1,
      "bpmnFiles": [
        {
          "path": "bpe/process.bpmn",
          "errors": 0,
          "warnings": 1,
          "items": [...]
        }
      ],
      "fhirResources": {
        "ActivityDefinition": [...],
        "Task": [...],
        "StructureDefinition": [...]
      },
      "pluginConfig": {
        "serviceLoaderRegistered": true,
        "items": [...]
      }
    }
  },
  "leftoverAnalysis": {
    "unreferencedBpmn": [],
    "unreferencedFhir": []
  }
}
```

#### Lint Item Structure

Each lint item in the JSON report has the following structure:

```json
{
  "severity": "ERROR",
  "type": "BpmnServiceTaskNameEmptyLintItem",
  "message": "Service task must have a non-empty name",
  "file": "bpe/process.bpmn",
  "element": "ServiceTask_1",
  "line": 42,
  "column": 10
}
```

### Example Console Output

```
DSF Linter v1.0.0
=================================================================
Project: /path/to/plugin.jar
Report:  /tmp/dsf-linter-report-plugin/dsf-linter-report
=================================================================

Phase 1: Project Setup
✓ JAR file validated
✓ Resources extracted

Phase 2: Resource Discovery
✓ Found 1 plugin(s)
✓ Plugin: my-process-plugin
  - BPMN: 2 files
  - FHIR: 15 resources

Phase 3: Linting
✓ BPMN validation: 0 errors, 1 warning
✓ FHIR validation: 0 errors, 0 warnings
✓ Plugin validation: 0 errors

Phase 4: Report Generation
✓ HTML report generated

Summary
=================================================================
✓ SUCCESS - No errors found
  Plugins: 1
  Errors: 0
  Warnings: 1
  Execution time: 2.3s
=================================================================
```

## Architecture

### Project Structure

```
dsf-linter/
├── linter-core/                              # Core linting logic
│   ├── src/main/java/dev/dsf/linter/
│   │   ├── analysis/                         # Resource analysis
│   │   │   └── LeftoverResourceDetector.java
│   │   ├── bpmn/                             # BPMN parsing & validation
│   │   │   ├── BpmnLinter.java
│   │   │   ├── BpmnModelLinter.java
│   │   │   ├── BpmnTaskLinter.java
│   │   │   ├── BpmnEventLinter.java
│   │   │   ├── BpmnGatewayAndFlowLinter.java
│   │   │   └── BpmnSubProcessLinter.java
│   │   ├── fhir/                             # FHIR parsing & validation
│   │   │   ├── FhirResourceLinter.java
│   │   │   ├── FhirTaskLinter.java
│   │   │   ├── FhirStructureDefinitionLinter.java
│   │   │   ├── FhirValueSetLinter.java
│   │   │   ├── FhirActivityDefinitionLinter.java
│   │   │   ├── FhirCodeSystemLinter.java
│   │   │   └── FhirQuestionnaireLinter.java
│   │   ├── service/                          # Linting services
│   │   │   ├── BpmnLintingService.java
│   │   │   ├── FhirLintingService.java
│   │   │   ├── PluginLintingService.java
│   │   │   └── PluginLintingOrchestrator.java
│   │   ├── output/                           # Lint item definitions
│   │   │   └── item/                         # Specific lint items (200+ classes)
│   │   ├── report/                           # Report generation
│   │   │   └── LintingReportGenerator.java
│   │   ├── input/                            # Input handling & JAR processing
│   │   │   └── InputResolver.java
│   │   ├── setup/                            # Project setup & building
│   │   │   └── ProjectSetupHandler.java
│   │   ├── plugin/                           # Plugin definition discovery
│   │   │   └── PluginDefinitionDiscovery.java
│   │   ├── classloading/                     # Dynamic class loading
│   │   │   ├── ProjectClassLoaderFactory.java
│   │   │   └── ClassInspector.java
│   │   ├── logger/                           # Logging infrastructure
│   │   │   ├── Logger.java
│   │   │   ├── ConsoleLogger.java
│   │   │   └── Console.java
│   │   ├── constants/                        # Constants & configuration
│   │   │   └── DsfApiConstants.java
│   │   ├── exception/                        # Custom exceptions
│   │   │   ├── ResourceLinterException.java
│   │   │   └── MissingServiceRegistrationException.java
│   │   └── util/                             # Utilities
│   │       ├── api/                          # API version detection
│   │       ├── cache/                        # Caching utilities
│   │       ├── converter/                    # Format converters
│   │       ├── linting/                      # Linting utilities
│   │       ├── loader/                       # Class/service loading
│   │       ├── maven/                        # Maven utilities
│   │       └── resource/                     # Resource management
│   ├── src/main/resources/
│   │   ├── logback.xml                       # Logging configuration
│   │   ├── logback-verbose.xml               # Verbose logging configuration
│   │   └── templates/                        # HTML report templates
│   │       ├── logo.svg
│   │       ├── single_plugin_report.html
│   │       └── summary_report.html
│   └── src/test/                             # Unit tests
│       ├── java/
│       └── resources/                        # Test fixtures
└── linter-cli/                               # CLI interface
    └── src/main/java/dev/dsf/linter/
        ├── Main.java                         # CLI entry point
        ├── LinterExecutor.java               # Execution wrapper
        └── ResultPrinter.java                # Result formatting
```

### Key Components

| Component | Purpose |
|-----------|---------|
| `DsfLinter` | Main orchestrator coordinating all linting phases |
| `ProjectSetupHandler` | Handles JAR extraction and classloader setup |
| `ResourceDiscoveryService` | Discovers plugins, BPMN files, and FHIR resources |
| `BpmnLintingService` | Orchestrates BPMN validation |
| `FhirLintingService` | Orchestrates FHIR resource validation |
| `PluginLintingService` | Validates plugin configuration and ServiceLoader registration |
| `PluginLintingOrchestrator` | Coordinates per-plugin linting workflow |
| `LeftoverResourceDetector` | Identifies unreferenced resources |
| `LintingReportGenerator` | Generates HTML and JSON reports |
| `InputResolver` | Resolves and downloads remote JAR files |
| `BpmnModelLinter` | Validates BPMN model structure and elements |
| `FhirResourceLinter` | Validates FHIR resources using pluggable linters |

### Linting Phases

The linter executes in five phases:

#### Phase 1: Project Setup

1. **Input Validation**:
   - Validates that input is a JAR file
   - Checks file existence or URL accessibility

2. **JAR Extraction**:
   - Downloads remote JAR files if needed
   - Extracts JAR contents to temporary directory
   - Preserves directory structure

3. **Classloader Setup**:
   - Creates project-specific classloader
   - Loads plugin classes and dependencies
   - Sets up context classloader for resource access

#### Phase 2: Resource Discovery

1. **Plugin Discovery**:
   - Scans `META-INF/services/` for plugin registrations
   - Loads plugin classes
   - Detects API version (v1 or v2)

2. **BPMN Discovery**:
   - Scans `bpe/` directory for BPMN files
   - Parses BPMN files to extract process definitions
   - Maps BPMN files to plugins

3. **FHIR Discovery**:
   - Scans `fhir/` directory for FHIR resources
   - Organizes resources by type
   - Maps FHIR resources to plugins

4. **Reference Mapping**:
   - Extracts BPMN references to FHIR resources
   - Maps FHIR resource references
   - Identifies cross-references

#### Phase 3: Linting

1. **Per-Plugin Linting**:
   - For each discovered plugin:
     - Validates BPMN processes
     - Validates FHIR resources
     - Validates plugin configuration
     - Collects lint items

2. **Project-Level Analysis**:
   - Performs leftover resource analysis
   - Aggregates referenced resources across all plugins
   - Identifies unreferenced resources

3. **Result Aggregation**:
   - Combines results from all plugins
   - Calculates totals (errors, warnings)
   - Determines overall success status

#### Phase 4: Report Generation

1. **HTML Report Generation**:
   - Generates summary page
   - Generates detailed plugin pages
   - Applies templates and styling

2. **JSON Report Generation** (if requested):
   - Serializes all results to JSON
   - Includes metadata and statistics
   - Provides machine-readable format

#### Phase 5: Summary

1. **Console Output**:
   - Displays execution summary
   - Shows error and warning counts
   - Reports execution time

2. **Exit Code Determination**:
   - Sets exit code based on results
   - Respects `--no-fail` flag
   - Returns appropriate status code

### Design Patterns

The linter uses several design patterns:

- **Template Method Pattern**: Abstract base classes define linting algorithm structure
- **Strategy Pattern**: Pluggable linters for different resource types
- **Factory Pattern**: Classloader and service creation
- **Service Locator Pattern**: Plugin discovery via ServiceLoader
- **Builder Pattern**: Configuration and result objects

### Thread Safety

- Most components are stateless and thread-safe
- Classloader isolation ensures no cross-plugin interference
- Temporary context classloader used for resource access
- Result objects are immutable

## Development

### Requirements

- **Java**: 17 or higher
- **Maven**: 3.6 or higher
- **IDE**: IntelliJ IDEA, Eclipse, or VS Code (optional)

### IDE Setup

1. **Import Project**:
   - Import as Maven project
   - Set JDK to 17 or higher
   - Ensure Maven dependencies are resolved

2. **Code Style** (optional):
   - Configure code formatter
   - Set up import organization
   - Configure line endings

3. **Run Configuration**:
   - Create run configuration for `Main.java`
   - Set program arguments: `--path <jar-file> --html --verbose`
   - Configure working directory

### Building

```bash
# Full build with tests
mvn clean package

# Skip tests for faster iteration
mvn clean package -DskipTests

# Verbose Maven output
mvn clean package -X

# Build only specific module
mvn clean package -pl linter-core

# Install to local Maven repository
mvn clean install
```

### Testing

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=BpmnLoadingTest

# Run specific test method
mvn test -Dtest=BpmnLoadingTest#testLoadBpmn

# Run tests with verbose output
mvn test -X

# Skip tests during build
mvn clean package -DskipTests

# Run tests with coverage (if configured)
mvn test jacoco:report
```

### Development Workflow

```bash
# 1. Make changes to source code
vim linter-core/src/main/java/dev/dsf/linter/service/BpmnLintingService.java

# 2. Build the project
mvn clean package -DskipTests

# 3. Test with a sample plugin
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path test-plugin.jar --html --verbose

# 4. Check the generated report
open /tmp/dsf-linter-report-test-plugin/dsf-linter-report/index.html

# 5. Run unit tests
mvn test

# 6. Commit changes
git add .
git commit -m "Description of changes"
```

### Debugging

#### Remote Debugging

```bash
# Start the linter with debugger enabled
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005 \
  -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --verbose

# Attach debugger from IDE to localhost:5005
```

#### Logging

The linter uses Logback for logging. Configuration files:

- `logback.xml`: Standard logging (INFO level)
- `logback-verbose.xml`: Verbose logging (DEBUG level, activated with `--verbose`)

Log levels:
- **ERROR**: Fatal errors and exceptions
- **WARN**: Warnings and non-fatal issues
- **INFO**: General information and progress
- **DEBUG**: Detailed debugging information (verbose mode only)

#### Common Debugging Scenarios

1. **Plugin Not Found**:
   - Enable verbose logging
   - Check ServiceLoader registration
   - Verify classpath

2. **Resource Not Found**:
   - Check JAR structure
   - Verify resource paths
   - Enable verbose logging

3. **Class Loading Issues**:
   - Check classloader setup
   - Verify dependencies
   - Check API version compatibility

### Code Style Guidelines

- Follow Java naming conventions
- Use meaningful variable and method names
- Add JavaDoc comments for public APIs
- Keep methods focused and small
- Use immutable objects where possible
- Handle exceptions appropriately
- Write unit tests for new features

## Troubleshooting

### "Input must be a JAR file" Error

**Problem**: The linter only accepts JAR files as input.

**Solution**:
```bash
# Wrong - Maven project directly
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path /path/to/project --html

# Correct - Build first, then lint JAR
cd /path/to/project && mvn clean package
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path /path/to/project/target/my-plugin-1.0.0.jar --html
```

### JAR File Not Found

**Problem**: The specified JAR file path cannot be found.

**Solution**: Verify the path and use absolute paths if needed:

```bash
# Windows
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path "C:\Users\Username\project\target\plugin.jar" --html

# Linux/Mac
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path /home/username/project/target/plugin.jar --html
```

### Missing Dependencies

**Problem**: ClassNotFoundException or similar errors during linting.

**Solution**:
```bash
# Check Maven settings
ls ~/.m2/settings.xml

# Use verbose mode to see detailed error messages
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --verbose

# Check if dependencies are in the JAR
jar -tf plugin.jar | grep -i "class"
```

### Report Not Generated

**Problem**: No report files are created.

**Solution**:
```bash
# --html or --json flag must be set
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html  # ← Required

# Use absolute path for report directory
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html --report-path $(pwd)/reports

# Check write permissions
ls -ld /tmp/dsf-linter-report-*
```

### Remote JAR Download Error

**Problem**: Cannot download JAR from remote URL.

**Solution**:
```bash
# Test download separately
curl -L -o test.jar https://example.com/plugin.jar

# Verify the download
ls -lh test.jar

# Check network connectivity
ping example.com

# Then use the local file
java -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path test.jar --html
```

### Plugin Not Found

**Problem**: "No plugins found" message.

**Solution**:
- Verify ServiceLoader registration exists in `META-INF/services/`
- Check that plugin class is in the JAR file
- Ensure plugin class implements the correct interface
- Use `--verbose` to see detailed discovery logs
- Check API version compatibility

### Out of Memory Errors

**Problem**: `OutOfMemoryError` during linting.

**Solution**:
```bash
# Increase heap size
java -Xmx2g -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html

# For very large projects
java -Xmx4g -Xms1g -jar linter-cli/target/linter-cli-1.0-SNAPSHOT.jar \
  --path plugin.jar --html
```

### Slow Performance

**Problem**: Linting takes too long.

**Solution**:
- Use `-DskipTests` during build
- Disable verbose logging in production
- Check network latency for remote JARs
- Consider increasing heap size
- Profile with JVM tools if needed

### Class Loading Issues

**Problem**: Classes cannot be loaded from plugin JAR.

**Solution**:
- Verify JAR structure
- Check classpath configuration
- Ensure dependencies are included
- Use verbose mode to see classloader logs
- Check API version compatibility

## API Reference

### Core Classes

#### `DsfLinter`

Main orchestrator class for the linting process.

**Constructor**:
```java
DsfLinter(Config config)
```

**Methods**:
```java
OverallLinterResult lint() throws IOException
```

**Usage**:
```java
DsfLinter.Config config = new DsfLinter.Config(
    projectPath,
    reportPath,
    generateHtmlReport,
    generateJsonReport,
    failOnErrors,
    logger
);

DsfLinter linter = new DsfLinter(config);
DsfLinter.OverallLinterResult result = linter.lint();
```

#### `DsfLinter.Config`

Configuration record for the linter.

**Fields**:
- `Path projectPath`: Path to the project root
- `Path reportPath`: Path for report generation
- `boolean generateHtmlReport`: Whether to generate HTML report
- `boolean generateJsonReport`: Whether to generate JSON report
- `boolean failOnErrors`: Whether to fail on errors
- `Logger logger`: Logger instance

#### `DsfLinter.OverallLinterResult`

Result record containing all linting results.

**Fields**:
- `Map<String, PluginLinter> pluginLinter`: Results per plugin
- `LeftoverResourceDetector.AnalysisResult leftoverAnalysis`: Leftover resource analysis
- `Path masterReportPath`: Path to master report
- `long executionTimeMs`: Execution time in milliseconds
- `boolean success`: Whether linting succeeded

**Methods**:
- `int getPluginErrors()`: Total error count from plugins
- `int getPluginWarnings()`: Total warning count from plugins
- `int getLeftoverCount()`: Count of leftover resources
- `int getTotalErrors()`: Total errors including leftovers

#### `DsfLinter.PluginLinter`

Linting result for a single plugin.

**Fields**:
- `String pluginName`: Name of the plugin
- `String pluginClass`: Fully qualified class name
- `ApiVersion apiVersion`: DSF API version (V1 or V2)
- `LintingOutput output`: Detailed linting output
- `Path reportPath`: Path to generated report

### Linting Services

#### `BpmnLintingService`

Service for linting BPMN files.

**Constructor**:
```java
BpmnLintingService(Logger logger)
```

**Methods**:
```java
LintingResult lint(
    String pluginName,
    List<File> bpmnFiles,
    List<String> missingRefs,
    Map<String, ResourceResolutionResult> outsideRoot,
    Map<String, ResourceResolutionResult> fromDependencies,
    File pluginResourceRoot
)
```

#### `FhirLintingService`

Service for linting FHIR resources.

**Constructor**:
```java
FhirLintingService(Logger logger)
```

**Methods**:
```java
LintingResult lint(
    String pluginName,
    List<File> fhirFiles,
    List<String> missingRefs,
    Map<String, ResourceResolutionResult> outsideRoot,
    Map<String, ResourceResolutionResult> fromDependencies,
    File pluginResourceRoot
)
```

#### `PluginLintingService`

Service for linting plugin configuration.

**Constructor**:
```java
PluginLintingService(Logger logger)
```

**Methods**:
```java
LintingResult lintPlugin(
    Path projectPath,
    PluginAdapter pluginAdapter,
    ApiVersion apiVersion,
    List<AbstractLintItem> collectedPluginItems
) throws MissingServiceRegistrationException
```

### Lint Items

All lint items extend `AbstractLintItem` and implement specific interfaces.

#### Base Classes

- `AbstractLintItem`: Base class for all lint items
- `BpmnElementLintItem`: Base class for BPMN-specific lint items
- `FhirElementLintItem`: Base class for FHIR-specific lint items
- `PluginLintItem`: Base class for plugin-specific lint items

#### Severity Levels

- `ERROR`: Critical issues that must be fixed
- `WARNING`: Issues that should be addressed
- `INFO`: Informational messages
- `SUCCESS`: Validation passed successfully

#### Common Lint Item Methods

```java
LinterSeverity getSeverity()
String getMessage()
File getFile()
String getElement()
```

### Utility Classes

#### `Logger`

Interface for logging functionality.

**Methods**:
```java
void error(String message)
void error(String message, Throwable throwable)
void warn(String message)
void info(String message)
void debug(String message)
```

#### `InputResolver`

Resolves and processes input JAR files.

**Methods**:
```java
Optional<ResolutionResult> resolve(String inputPath)
String extractInputName(String inputPath, InputType inputType)
void cleanup(ResolutionResult resolution)
```

#### `ResourceDiscoveryService`

Discovers plugins and resources.

**Methods**:
```java
DiscoveryResult discover(ProjectContext context)
```

## Changelog

### Version 1.0.0
- Initial release
- BPMN validation
- FHIR validation
- Plugin configuration validation
- HTML report generation


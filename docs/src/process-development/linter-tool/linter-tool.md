---
title: DSF Linter Tool
icon: customize
---
# DSF Linter - Complete Documentation

A comprehensive linting tool for DSF (Data Sharing Framework) process plugins. Validates BPMN processes, FHIR resources, and plugin configurations from JAR files.

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Installation](#installation)
4. [Usage](#usage)
5. [CLI Options](#cli-options)
6. [Report Generation](#report-generation)
7. [Architecture](#architecture)
8. [API Reference](#api-reference)

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
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path your-plugin.jar --html

# Lint a remote JAR file
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path https://github.com/datasharingframework/dsf-process-ping-pong/releases/download/v2.0.0.1/dsf-process-ping-pong-2.0.0.1.jar --html

# View report at: /tmp/dsf-linter-report-<name>/dsf-linter-report/index.html
```

## Installation

### Requirements

- **Java**: 17 or higher (Java 25+ required for API Version 2 validation)
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
# linter-cli/target/linter-cli-0.1.1.jar
```

### Distribution

The linter is distributed as a single executable JAR file that includes all dependencies. After building, the JAR can be used standalone:

```bash
# Copy to a convenient location
cp linter-cli/target/linter-cli-0.1.1.jar ~/bin/dsf-linter.jar

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
│       ├── dev.dsf.bpe.v1.ProcessPluginDefinition (v1)
│       └── dev.dsf.bpe.v2.ProcessPluginDefinition (v2)
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
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path C:\path\to\plugin.jar --html

# Remote JAR file
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path https://github.com/datasharingframework/dsf-process-ping-pong/releases/download/v2.0.0.1/dsf-process-ping-pong-2.0.0.1.jar --html
```

#### Advanced Configuration

```bash
# Multiple report formats with custom path
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path plugin.jar --html --json --report-path ./reports

# Verbose output (colors enabled by default, use --no-color to disable)
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path plugin.jar --html --verbose

# Lint Maven project (two-step process)
# Step 1: Build the project
cd /path/to/project && mvn clean package

# Step 2: Lint the resulting JAR
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path /path/to/project/target/my-plugin-1.0.0.jar --html
```

#### CI/CD Integration

```bash
# GitHub Actions / GitLab CI
FORCE_COLOR=1 java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path plugin.jar --html --json --verbose

# Jenkins (fail on errors)
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path plugin.jar --html
# Exit code: 0 = success, 1 = errors

# Don't fail build (gradual adoption)
java -jar linter-cli/target/linter-cli-0.1.1.jar \
  --path plugin.jar --html --no-fail
```

## CLI Options

| Option | Short | Description | Required |
|--------|-------|-------------|----------|
| `--path <input>` | `-p` | Path to JAR file (local or remote URL) | Yes |
| `--html` | | Generate HTML report | No |
| `--json` | | Generate JSON report | No |
| `--report-path <dir>` | `-r` | Custom report directory (default: `<temp-dir>/dsf-linter-report-<name>/dsf-linter-report`) | No |
| `--verbose` | `-v` | Enable verbose logging output | No |
| `--no-color` | | Disable colored console output (default: enabled) | No |
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


## Report Generation

### Report Structure

Reports are generated in the following structure:

```
<report-path>/
├── index.html              # Summary report (all plugins)
├── plugin-name.html        # Detailed report for each plugin
└── plugin-name.json        # JSON report (if --json specified)
```

The default `<report-path>` resolves to `<temp-dir>/dsf-linter-report-<name>/dsf-linter-report`, for example:

```
/tmp/dsf-linter-report-my-plugin/dsf-linter-report/
├── index.html
├── my-plugin.html
└── my-plugin.json
```

Use `--report-path` to override this location.

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
  "version": "0.1.1",
  "timestamp": "2025-06-15T10:30:00Z",
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
DSF Linter v0.1.1
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
│   │   ├── DsfLinter.java                    # Main orchestrator
│   │   ├── analysis/                         # Resource analysis
│   │   │   └── LeftoverResourceDetector.java
│   │   ├── bpmn/                             # BPMN parsing & validation
│   │   │   ├── BpmnLinter.java
│   │   │   ├── BpmnModelLinter.java
│   │   │   ├── BpmnElementLinter.java
│   │   │   ├── BpmnProcessLinter.java
│   │   │   ├── BpmnTaskLinter.java
│   │   │   ├── BpmnEventLinter.java
│   │   │   ├── BpmnFieldInjectionLinter.java
│   │   │   ├── BpmnGatewayAndFlowLinter.java
│   │   │   └── BpmnSubProcessLinter.java
│   │   ├── classloading/                     # Dynamic class loading
│   │   │   ├── ProjectClassLoaderFactory.java
│   │   │   └── ClassInspector.java
│   │   ├── constants/                        # Constants & configuration
│   │   │   ├── BpmnElementType.java
│   │   │   └── DsfApiConstants.java
│   │   ├── exception/                        # Custom exceptions
│   │   │   ├── ApiVersionUnknownException.java
│   │   │   ├── MissingServiceRegistrationException.java
│   │   │   └── ResourceLinterException.java
│   │   ├── fhir/                             # FHIR parsing & validation
│   │   │   ├── FhirResourceLinter.java
│   │   │   ├── FhirFileLinter.java
│   │   │   ├── FhirTaskLinter.java
│   │   │   ├── FhirStructureDefinitionLinter.java
│   │   │   ├── FhirValueSetLinter.java
│   │   │   ├── FhirActivityDefinitionLinter.java
│   │   │   ├── FhirCodeSystemLinter.java
│   │   │   └── FhirQuestionnaireLinter.java
│   │   ├── input/                            # Input handling & JAR processing
│   │   │   ├── InputResolver.java
│   │   │   ├── InputType.java
│   │   │   └── JarHandler.java
│   │   ├── logger/                           # Logging infrastructure
│   │   │   ├── Logger.java
│   │   │   ├── ConsoleLogger.java
│   │   │   ├── Console.java
│   │   │   ├── LogDecorators.java
│   │   │   └── LogUtils.java
│   │   ├── output/                           # Lint item definitions & types
│   │   │   ├── FloatingElementType.java
│   │   │   ├── FlowElementType.java
│   │   │   ├── LinterSeverity.java
│   │   │   ├── LintingType.java
│   │   │   ├── ProcessingLevel.java
│   │   │   └── item/                         # Lint item base classes
│   │   │       ├── AbstractLintItem.java
│   │   │       ├── BpmnElementLintItem.java
│   │   │       ├── BpmnFlowElementLintItem.java
│   │   │       ├── BpmnLintItem.java
│   │   │       ├── FhirElementLintItem.java
│   │   │       ├── FhirLintItem.java
│   │   │       ├── LintItem.java
│   │   │       └── PluginLintItem.java
│   │   ├── plugin/                           # Plugin definition discovery
│   │   │   ├── EnhancedPluginDefinitionDiscovery.java
│   │   │   ├── PluginDefinitionDiscovery.java
│   │   │   └── PluginDiscoveryError.java
│   │   ├── report/                           # Report generation
│   │   │   ├── HtmlReportGenerator.java
│   │   │   ├── JsonReportGenerator.java
│   │   │   ├── LintConsolePrinter.java
│   │   │   └── LintingReportGenerator.java
│   │   ├── service/                          # Linting services
│   │   │   ├── AbstractResourceLintingService.java
│   │   │   ├── BpmnLintingService.java
│   │   │   ├── FhirLintingService.java
│   │   │   ├── LintingResult.java
│   │   │   ├── PluginLintingOrchestrator.java
│   │   │   ├── PluginLintingService.java
│   │   │   ├── PluginMetadataLinter.java
│   │   │   └── ResourceDiscoveryService.java
│   │   ├── setup/                            # Project setup & JAR extraction
│   │   │   └── ProjectSetupHandler.java
│   │   └── util/                             # Utilities
│   │       ├── api/                          # API version detection
│   │       │   ├── ApiVersion.java
│   │       │   ├── ApiVersionDetector.java
│   │       │   ├── ApiVersionHolder.java
│   │       │   ├── DetectedVersion.java
│   │       │   ├── DetectionSource.java
│   │       │   └── PluginVersionUtils.java
│   │       ├── bpmn/                         # BPMN utilities
│   │       │   ├── BpmnModelUtils.java
│   │       │   └── linters/                  # Element-specific BPMN linters
│   │       │       ├── BpmnBoundaryEventLinter.java
│   │       │       ├── BpmnEndEventLinter.java
│   │       │       ├── BpmnEventLinter.java
│   │       │       ├── BpmnIntermediateCatchEventLinter.java
│   │       │       ├── BpmnIntermediateThrowEventLinter.java
│   │       │       ├── BpmnListenerLinter.java
│   │       │       ├── BpmnMessageEventImplementationLinter.java
│   │       │       ├── BpmnMessageLinter.java
│   │       │       ├── BpmnStartEventLinter.java
│   │       │       └── BpmnTimerLinter.java
│   │       ├── cache/                        # Caching utilities
│   │       │   └── ConcurrentCache.java
│   │       ├── converter/                    # Format converters
│   │       │   └── JsonXmlConverter.java
│   │       ├── linting/                      # Linting utilities
│   │       │   ├── AbstractFhirInstanceLinter.java
│   │       │   ├── LintingOutput.java
│   │       │   ├── LintingUtils.java
│   │       │   └── PluginLintingUtils.java
│   │       ├── loader/                       # Class/service loading
│   │       │   ├── ClassLoaderUtils.java
│   │       │   └── ServiceLoaderUtils.java
│   │       └── resource/                     # Resource management
│   │           ├── CompositeResourceProvider.java
│   │           ├── FhirAuthorizationCache.java
│   │           ├── FhirFileUtils.java
│   │           ├── FhirResourceEntry.java
│   │           ├── FhirResourceExtractor.java
│   │           ├── FhirResourceLocator.java
│   │           ├── FhirResourceParser.java
│   │           ├── FileSystemResourceProvider.java
│   │           ├── JarResourceProvider.java
│   │           ├── ResourceDiscoveryUtils.java
│   │           ├── ResourceEntryFactory.java
│   │           ├── ResourcePathNormalizer.java
│   │           ├── ResourceProvider.java
│   │           ├── ResourceResolutionResult.java
│   │           ├── ResourceResolutionService.java
│   │           ├── ResourceRootResolver.java
│   │           └── ResourceType.java
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

- `ERROR`: Critical issue that **must be fixed**. Will cause the plugin to fail at deployment or runtime.
- `WARNING`: Violation of DSF best practices, or something that **could be an error depending on context**.
- `INFO`: Technically valid, but something looks unusual or incomplete. Worth a second look — no immediate action required.
- `SUCCESS`: Validation passed. Shown to confirm what was checked and give confidence in the covered areas.

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
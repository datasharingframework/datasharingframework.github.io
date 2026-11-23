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
5. [Maven Plugin Integration](#maven-plugin-integration)
6. [CLI Options](#cli-options)
7. [Exclusion Rules](#exclusion-rules)
8. [Report Generation](#report-generation)
9. [Architecture](#architecture)
10. [API Reference](#api-reference)

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
- ✅ Configurable exclusion rules (`dsf-linter-exclusions.json`) for CLI and Maven
- ✅ Maven plugin integration (`dsf-maven-plugin:lint`) via `linter-core` dependency in DSF

### What is DSF?

The Data Sharing Framework (DSF) is a framework for implementing interoperable healthcare data sharing processes. DSF process plugins contain:

- **BPMN Processes**: Business process definitions using Camunda BPMN 2.0
- **FHIR Resources**: Healthcare data resources conforming to HL7 FHIR specifications
- **Plugin Classes**: Java classes implementing the DSF ProcessPlugin interface

## Quick Start

### Option A: Maven plugin (recommended for process plugin projects)

DSF ships `dsf-maven-plugin` with a `lint` goal that depends on `dev.dsf.linter:linter-core` **0.1.3**. Bind the goal to validate the built plugin JAR during `verify` / `install`:

```xml
<plugin>
  <groupId>dev.dsf</groupId>
  <artifactId>dsf-maven-plugin</artifactId>
  <executions>
    <execution>
      <id>lint-plugin</id>
      <goals>
        <goal>lint</goal>
      </goals>
    </execution>
  </executions>
</plugin>
```

```bash
mvn verify
# or directly:
mvn dsf-maven-plugin:lint
```

Details: [Maven Plugin Integration](#maven-plugin-integration).

### Option B: Download pre-built CLI JAR

Download the latest `linter-cli-0.1.3.jar` from the [GitHub Releases page](https://github.com/datasharingframework/dsf-linter/releases) and run:

```bash
# Lint a local JAR file
java -jar linter-cli-0.1.3.jar --path your-plugin.jar --html

# Lint a remote JAR file
java -jar linter-cli-0.1.3.jar \
  --path https://github.com/datasharingframework/dsf-process-ping-pong/releases/download/v2.0.0.1/dsf-process-ping-pong-2.0.0.1.jar --html

# View report at: /tmp/dsf-linter-report-<name>/dsf-linter-report/report.html
```

### Option C: Build CLI from source

```bash
git clone https://github.com/datasharingframework/dsf-linter.git
cd dsf-linter
mvn clean package

java -jar linter-cli/target/linter-cli-0.1.3.jar --path your-plugin.jar --html
```

## Installation

### Requirements

- **Java**: 25 or higher (required to build and run the linter)
- **Maven**: 3.6 or higher (only when building from source or using the Maven plugin)
- **Operating System**: Windows, Linux, or macOS

> **Note:** DSF API v1 and v2 refer to the **plugin target API**, not the JVM version. The linter itself requires Java 25.

### Distribution

| Artifact | Use case |
|----------|----------|
| `dev.dsf.linter:linter-core:0.1.3` (Maven Central) | Consumed by DSF `dsf-maven-plugin` for the `lint` goal |
| `linter-cli-0.1.3.jar` ([GitHub Releases](https://github.com/datasharingframework/dsf-linter/releases)) | Standalone executable CLI (all dependencies shaded) |

```bash
# CLI: copy to a convenient location
cp linter-cli-0.1.3.jar ~/bin/dsf-linter.jar
java -jar ~/bin/dsf-linter.jar --path plugin.jar --html
```

Process plugin projects should prefer the Maven goal; the CLI remains useful for ad-hoc linting of local or remote JARs.

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
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path C:\path\to\plugin.jar --html

# Remote JAR file
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path https://github.com/datasharingframework/dsf-process-ping-pong/releases/download/v2.0.0.1/dsf-process-ping-pong-2.0.0.1.jar --html
```

#### Advanced Configuration

```bash
# Multiple report formats with custom path
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path plugin.jar --html --json --report-path ./reports

# Verbose output (colors enabled by default, use --no-color to disable)
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path plugin.jar --html --verbose

# Lint Maven project (two-step process)
# Step 1: Build the project
cd /path/to/project && mvn clean package

# Step 2: Lint the resulting JAR
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path /path/to/project/target/my-plugin-1.0.0.jar --html
```

#### CI/CD Integration

```bash
# GitHub Actions / GitLab CI
FORCE_COLOR=1 java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path plugin.jar --html --json --verbose

# Jenkins (fail on errors)
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path plugin.jar --html
# Exit code: 0 = success, 1 = errors

# Don't fail build (gradual adoption)
java -jar linter-cli/target/linter-cli-0.1.3.jar \
  --path plugin.jar --html --no-fail
```

## Maven Plugin Integration

The DSF Maven plugin (`dsf-maven-plugin`) integrates the linter into the Maven build lifecycle. This is the **recommended approach** for DSF process plugin projects: it validates the **built plugin JAR** automatically, fails the build on ERROR findings by default, and supports **exclusion rules** out of the box.

**How it is wired:** DSF declares `dev.dsf.linter:linter-core` (**0.1.3**) as a dependency of `dsf-maven-plugin`. The `lint` goal (`LintPluginMojo`, default phase `verify`) resolves `${project.build.directory}/${project.build.finalName}.jar`, runs `DsfLinter`, and writes reports under `target/dsf-linter-report` by default.

### Enable in `pom.xml`

```xml
<plugin>
  <groupId>dev.dsf</groupId>
  <artifactId>dsf-maven-plugin</artifactId>
  <executions>
    <execution>
      <id>lint-plugin</id>
      <goals>
        <goal>lint</goal>
      </goals>
    </execution>
  </executions>
</plugin>
```

### Run

The `lint` goal runs automatically during:

- `mvn verify`
- `mvn install`
- `mvn deploy`

Or invoke it directly:

```bash
mvn dsf-maven-plugin:lint
```

### Maven Parameters

| Property | Default | Description |
|----------|---------|-------------|
| `dsf.lint.skip` | `false` | Skip linting entirely |
| `dsf.lint.failOnErrors` | `true` | Fail the build when ERROR-severity findings exist |
| `dsf.lint.html` | `false` | Generate HTML report |
| `dsf.lint.json` | `false` | Generate JSON report |
| `dsf.lint.verbose` | `false` | Enable verbose logging |
| `dsf.lint.reportPath` | `target/dsf-linter-report` | Report output directory |
| `dsf.lint.exclusionsFile` | *(auto-discover)* | Path to exclusion JSON file |

**Examples:**

```bash
# Lint with HTML report, do not fail build
mvn verify -Ddsf.lint.html=true -Ddsf.lint.failOnErrors=false

# Use explicit exclusion file
mvn verify -Ddsf.lint.exclusionsFile=ci/dsf-linter-exclusions.json
```

### Permanent configuration in `pom.xml`

```xml
<plugin>
  <groupId>dev.dsf</groupId>
  <artifactId>dsf-maven-plugin</artifactId>
  <configuration>
    <html>true</html>
    <reportPath>${project.build.directory}/dsf-linter-report</reportPath>
    <exclusionsFile>${project.basedir}/dsf-linter-exclusions.json</exclusionsFile>
  </configuration>
  <executions>
    <execution>
      <id>lint-plugin</id>
      <goals><goal>lint</goal></goals>
    </execution>
  </executions>
</plugin>
```

Exclusion file format and rule semantics are described in [Exclusion Rules](#exclusion-rules).

## CLI Options

| Option | Short | Description | Required |
|--------|-------|-------------|----------|
| `--path <input>` | `-p` | Path to JAR file (local or remote URL) | Yes |
| `--html` | | Generate HTML report | No |
| `--json` | | Generate JSON report | No |
| `--report-path <dir>` | `-r` | Custom report directory (default: `<temp-dir>/dsf-linter-report-<name>/dsf-linter-report`) | No |
| `--exclusions <file>` | | Path to a JSON exclusion config (see [Exclusion Rules](#exclusion-rules)) | No |
| `--verbose` | `-v` | Enable verbose logging output | No |
| `--no-color` | | Disable colored console output (default: enabled) | No |
| `--no-fail` | | Exit with code 0 even if linter errors are found | No |
| `--help` | `-h` | Display help message | No |
| `--version` | | Display version information | No |

When `--exclusions` is omitted, the CLI auto-discovers `dsf-linter-exclusions.json` in the project/extracted root if present.

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


## Exclusion Rules

The exclusion feature allows you to suppress specific lint findings from reports and optionally from the build/CLI exit status. This is useful for accepting known issues, ignoring findings in legacy files, or gradually rolling out stricter linting rules.

**Where exclusions are supported (v0.1.3):**

| Integration | How to configure |
|-------------|------------------|
| `dsf-maven-plugin:lint` | `-Ddsf.lint.exclusionsFile=...` or auto-discovery of `dsf-linter-exclusions.json` |
| Standalone CLI | `--exclusions <file>` or auto-discovery of `dsf-linter-exclusions.json` |

### Configuration File

Exclusion rules are defined in a JSON file named `dsf-linter-exclusions.json`. When no explicit path is set, the loader auto-discovers that file in the **resolved project root** (extracted JAR contents). Explicit configuration always wins and is the reliable choice for Maven module roots that are not packaged into the JAR:

```bash
# CLI
java -jar linter-cli-0.1.3.jar --path plugin.jar --html \
  --exclusions path/to/dsf-linter-exclusions.json

# Maven (recommended: point at the module basedir)
mvn verify -Ddsf.lint.exclusionsFile=${project.basedir}/dsf-linter-exclusions.json
```


```json
{
  "affectsExitStatus": false,
  "rules": [
    { "type": "BPMN_PROCESS_HISTORY_TIME_TO_LIVE_MISSING" },
    { "severity": "WARN", "file": "update-allow-list.bpmn" },
    { "messageContains": "optional field" }
  ]
}
```

### Top-Level Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `affectsExitStatus` | `boolean` | `false` | When `false`, excluded items are fully suppressed — they do not contribute to error/warning counts or the exit code. When `true`, items are hidden from reports but still count toward the exit status. |
| `rules` | `array` | `[]` | List of exclusion rules. An item is excluded if it matches **any** rule. |

### Rule Fields

All fields within a single rule are **AND-combined** — all specified criteria must match for the item to be suppressed. Multiple rules are **OR-combined**.

| Field | Match Semantics | Example |
|-------|-----------------|---------|
| `type` | Exact, case-insensitive match against the lint item's `LintingType` name | `"BPMN_PROCESS_HISTORY_TIME_TO_LIVE_MISSING"` |
| `severity` | Exact, case-insensitive match against `LinterSeverity` name | `"WARN"`, `"ERROR"`, `"INFO"` |
| `file` | Case-insensitive **substring** match against the item's file name | `"update-allow-list.bpmn"` |
| `messageContains` | Case-insensitive **substring** match against the item's message | `"optional field"` |

Each rule must have **at least one** non-blank field. An empty rule is rejected.

### Examples

```json
{
  "affectsExitStatus": false,
  "rules": [
    { "type": "BPMN_PROCESS_HISTORY_TIME_TO_LIVE_MISSING" },

    { "severity": "WARN", "file": "legacy-process.bpmn" },

    { "messageContains": "optional field" },

    { "type": "BPMN_END_EVENT_NOT_PART_OF_SUB_PROCESS", "file": "subprocess.bpmn" }
  ]
}
```

### Using Exclusions in CI/CD

```bash
# Maven plugin with explicit exclusion file
mvn verify -Ddsf.lint.exclusionsFile=ci-exclusions.json -Ddsf.lint.html=true

# Standalone CLI with exclusions
java -jar linter-cli-0.1.3.jar --path plugin.jar --html --json \
  --exclusions ci-exclusions.json
```

## Report Generation

### Report Structure

Reports are generated in the following structure:

```
<report-path>/
├── report.html             # Master summary report (all plugins)
├── report.json             # Master JSON report (if --json specified)
└── <plugin-name>/
    ├── lints.html          # Detailed HTML report for the plugin
    └── lints.json          # Detailed JSON report (if --json specified)
```

The default `<report-path>` resolves to `<temp-dir>/dsf-linter-report-<name>/dsf-linter-report`, for example:

```
/tmp/dsf-linter-report-my-plugin/dsf-linter-report/
├── report.html
├── report.json
└── my-plugin/
    ├── lints.html
    └── lints.json
```

Use `--report-path` to override this location.

### HTML Report

The HTML report provides a comprehensive, human-readable view of all linting results.

#### Master Report (`report.html`)

The master report includes:

- **Header**:
    - DSF Linter version
    - Execution timestamp
    - Project path

- **Overall Statistics**:
    - Total number of plugins
    - Total errors, warnings, info, and success counts
    - Resource discovery summary

- **Plugin Summary Table**:
    - Plugin name
    - API version
    - Error and warning counts
    - Link to per-plugin report (`<plugin-name>/lints.html`)

- **Leftover Resource Summary**:
    - Unreferenced BPMN files
    - Unreferenced FHIR resources

- **Source navigation** (v0.1.3+):
    - Embedded BPMN and FHIR source files
    - Source viewer modal with highlighting of the affected location
    - Jump from a finding to the corresponding source context

#### Plugin Report (`<plugin-name>/lints.html`)

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
    - Color-coded severity levels (ERROR, WARN, INFO, SUCCESS)
    - Expandable/collapsible sections
    - Back link to master report (`report.html`)

### JSON Report

The JSON report provides machine-readable output for CI/CD integration and automated processing.

#### Master Report Structure (`report.json`)

```json
{
  "projectName": "my-plugin.jar",
  "projectPath": "/path/to/my-plugin.jar",
  "timestamp": "2026-06-15T10:30:00Z",
  "summary": {
    "totalPlugins": 1,
    "totalErrors": 0,
    "totalWarnings": 1,
    "totalInfos": 0,
    "totalSuccesses": 42
  },
  "discovery": {
    "bpmnFilesFound": 2,
    "fhirFilesFound": 15,
    "missingBpmn": 0,
    "missingFhir": 0
  },
  "leftoverAnalysis": {
    "totalLeftovers": 0,
    "leftoverBpmn": [],
    "leftoverFhir": []
  },
  "plugins": [
    {
      "pluginName": "my-plugin",
      "pluginClass": "dev.dsf.bpe.plugin.ExamplePlugin",
      "apiVersion": "V1",
      "errorCount": 0,
      "warningCount": 1,
      "reportPath": "./my-plugin/lints.json"
    }
  ]
}
```

#### Plugin Report Structure (`<plugin-name>/lints.json`)

```json
{
  "pluginName": "my-plugin",
  "pluginClass": "dev.dsf.bpe.plugin.ExamplePlugin",
  "apiVersion": "V1",
  "timestamp": "2026-06-15T10:30:00Z",
  "summary": {
    "errorCount": 0,
    "warningCount": 1,
    "infoCount": 0,
    "successCount": 42,
    "totalItems": 43
  },
  "items": {
    "ERROR": [],
    "WARN": [ { "...": "..." } ],
    "INFO": [],
    "SUCCESS": [ { "...": "..." } ]
  }
}
```

#### Lint Item Structure

Each lint item in the JSON report has the following structure (fields vary by item type):

```json
{
  "severity": "WARN",
  "type": "BpmnElementLintItem",
  "elementId": "ServiceTask_1",
  "processId": "testorg_myprocess",
  "description": "Service task name is empty.",
  "bpmnFile": "bpe/process.bpmn",
  "issueType": "BPMN_SERVICE_TASK_NAME_EMPTY",
  "fullMessage": "..."
}
```

`BPMN_FLOW_ELEMENT` items additionally include `flowElementType` (the sequence-flow subtype, e.g. `SEQUENCE_FLOW_HAS_NO_SOURCE_NODE`).

### Example Console Output

```
DSF Linter v0.1.3
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

Phase 5: Summary
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
├── linter-core/                              # Core linting logic (Maven artifact: linter-core)
│   ├── src/main/java/dev/dsf/linter/
│   │   ├── DsfLinter.java                    # Main orchestrator
│   │   ├── analysis/                         # Resource analysis
│   │   │   └── LeftoverResourceDetector.java
│   │   ├── exclusion/                        # Exclusion config & filter
│   │   │   ├── ExclusionConfig.java
│   │   │   ├── ExclusionConfigLoader.java
│   │   │   ├── ExclusionFilter.java
│   │   │   └── ExclusionRule.java
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
| `ExclusionConfigLoader` / `ExclusionFilter` | Loads `dsf-linter-exclusions.json` and filters matched findings (CLI + Maven) |
| `SpringConfigurationLinter` | Validates Spring `@Bean` / `ActivityPrototypeBeanCreator` registration and bean scope |

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
    exclusionConfig, // nullable — null means no exclusions
    logger
);

DsfLinter linter = new DsfLinter(config);
DsfLinter.OverallLinterResult result = linter.lint();
```

A backward-compatible constructor without `exclusionConfig` still exists (passes `null`).

#### `DsfLinter.Config`

Configuration record for the linter.

**Fields**:
- `Path projectPath`: Path to the project root (extracted JAR directory)
- `Path reportPath`: Path for report generation
- `boolean generateHtmlReport`: Whether to generate HTML report
- `boolean generateJsonReport`: Whether to generate JSON report
- `boolean failOnErrors`: Whether to fail on errors
- `ExclusionConfig exclusionConfig`: Optional exclusion rules (`null` = none)
- `Logger logger`: Logger instance

#### `DsfLinter.OverallLinterResult`

Result record containing all linting results.

**Fields**:
- `Map<String, PluginLinter> pluginLinter`: Results per plugin
- `LeftoverResourceDetector.AnalysisResult leftoverAnalysis`: Leftover resource analysis
- `Path masterReportPath`: Path to master report
- `long executionTimeMs`: Execution time in milliseconds
- `boolean success`: Whether linting succeeded (`false` only when `failOnErrors` is set and errors remain after exclusions)

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
- `LintingOutput output`: Detailed linting output **after** exclusions have been applied
- `int excludedErrorCount`: Number of ERROR items suppressed by exclusion rules
- `Path reportPath`: Path to generated report

### No plugin found

If no `ProcessPluginDefinition` is discovered (empty/broken JAR, missing or invalid `META-INF/services` registration), the linter does **not** abort. It emits ERROR `PLUGIN_DEFINITION_NO_PLUGIN_FOUND`, still writes the regular HTML/JSON reports, and sets `success = !failOnErrors` (CLI: exit 1 by default, exit 0 with `--no-fail`).
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
)
```

Missing or invalid ServiceLoader registrations are reported as ERROR lint items (e.g. `PLUGIN_DEFINITION_MISSING_SERVICE_LOADER_REGISTRATION`, `PLUGIN_DEFINITION_NO_PLUGIN_FOUND`) rather than aborting the run.

### Lint Items

All lint items extend `AbstractLintItem` and implement specific interfaces.

#### Base Classes

- `AbstractLintItem`: Base class for all lint items
- `BpmnElementLintItem`: Base class for BPMN-specific lint items
- `FhirElementLintItem`: Base class for FHIR-specific lint items
- `PluginLintItem`: Base class for plugin-specific lint items

#### Severity Levels

- `ERROR`: Critical issue that **must be fixed**. Will cause the plugin to fail at deployment or runtime.
- `WARN`: Violation of DSF best practices, or something that **could be an error depending on context**.
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

### Exclusion Configuration

Exclusion rules are configured via `dsf-linter-exclusions.json` (or an explicit path). See [Exclusion Rules](#exclusion-rules) for the file format.

- Maven: `dsf.lint.exclusionsFile` / auto-discovery
- CLI: `--exclusions` / auto-discovery

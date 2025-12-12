---
title: Linting Phases
icon: config
---
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
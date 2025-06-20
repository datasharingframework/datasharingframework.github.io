# DSF Validator v 1.3.0
## 1  Introduction

The **DSF Validator** is a quality‑assurance tool for Digital Sample Framework (DSF) process plugins. Version **1.3.0** extends the 1.2.0 release by adding 

* a dedicated **FHIR *Task* validator** for the base profile `dsf-task-base`,
* a **StructureDefinition validator** with slice‑aware cardinality checks, 
* enhanced terminology look‑ups via **FhirAuthorizationCache**, and
* a streamlined **CLI & Maven plugin** that share the same validation core.

The validator now supports end‑to‑end consistency checks across BPMN models and all core FHIR artefacts used in the DSF platform. It targets **Java 21** and can be embedded in CI/CD pipelines, local project builds, or executed as a standalone JAR.


## 2  Project Overview

| Component               | Purpose                                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **BPMN analysis**       | Verifies Camunda‑compatible workflows (tasks, events, gateways, multi‑instance sub‑processes, field injections).                                       |
| **FHIR analysis**       | Validates XML/JSON resources against DSF profiles (ActivityDefinition, CodeSystem, Questionnaire, Task, ValueSet, *Task (base)*, StructureDefinition). |
| **Aggregator**          | `FhirInstanceValidatorAggregator` discovers concrete validators and produces a single `ValidationOutput`.                                              |
| **Authorization cache** | `FhirAuthorizationCache` holds all known DSF `CodeSystem` codes in a thread‑safe map for high‑performance terminology look‑ups.                        |
| **Report generator**    | Writes structured JSON reports under `report/` (CLI) or `target/dsf-validation-reports/` (Maven plugin).                                               |

Camunda models are parsed with the **Camunda BPMN Model API** ([github.com](https://github.com/camunda/camunda-bpm-platform/blob/master/model-api/bpmn-model/README.asciidoc?utm_source=chatgpt.com)), while FHIR resources are processed via standard DOM/XPath and validated by custom DSF-specific validators augmented by DSF‑specific rule sets.



## 3  Validation Scope

### 3.1 BPMN Model Validation (module `validator‑core`)

| Validator                     | BPMN elements inspected                                                      | Key DSF rules enforced                                                                                                                                                                                                                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BpmnTaskValidator`           | `ServiceTask`, `UserTask`, `SendTask`, `ReceiveTask`                         | \* camunda\:class/expression must reference a Java class implementing `JavaDelegate`.<br>\* Field injections validated against DSF profiles (`profile`, `message-name`, `instantiatesCanonical`).<br>\* `UserTask → camunda:formKey` must resolve to an existing `Questionnaire` file. |
| `BpmnEventValidator`          | `StartEvent`, `EndEvent`, `IntermediateCatch`, `ThrowEvent`, `BoundaryEvent` | \* Message events require a non‑blank `<bpmn:message name>` and `<bpmn:messageRef>` pointing to an `ActivityDefinition.url`.<br>\* Timer/signal events: ISO‑8601 expressions and registered signal definitions.                                                                        |
| `BpmnGatewayAndFlowValidator` | `ExclusiveGateway`, `EventBasedGateway`, `SequenceFlow`                      | \* Exclusive gateways: every outgoing `SequenceFlow` needs `name + conditionExpression`.<br>\* Event‑based gateways: exactly one incoming flow; only allowed outgoing event types.                                                                                                     |
| `BpmnFieldInjectionValidator` | Camunda `<camunda:field>`                                                    | \* `profile` must reference a `StructureDefinition` in `src/main/resources/fhir/StructureDefinition`.<br>\* `message-name` must exist as an `input` slice in a `Task`.<br>\* `instantiatesCanonical` must match an existing `ActivityDefinition`.                                      |                                                                                                    | -------------------------------------------------------------------------------------------------------------------------- |
| `BpmnSubProcessValidator` | `SubProcess` (+ `MultiInstanceLoopCharacteristics`) | • Requires `camunda:asyncBefore="true"` for multi-instance subprocesses. • Checks loop cardinality and clean termination. |

### 3.2 FHIR Resource Validation (module `validator‑core`)

| DSF Profile & Class                                                                       | Mandatory elements                                              | DSF‑specific checks                                                                                                                                                                                                                                                                                                                                                                  | Shared checks                                                                                            |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **ActivityDefinition 1.0.0**  `FhirActivityDefinitionValidator`                           | `url`, `status="unknown"`, `kind="Task"`                        | \* First `meta.tag` = system `…/read-access-tag`, code `ALL`.<br>\* `extension-process-authorization`: every requester/recipient coding must be known to the authorization cache.                                                                                                                                                                                                    | Placeholder enforcement (`#{version}`, `#{date}`)                                                        |
| **CodeSystem 1.0.0**  `FhirCodeSystemValidator`                                           | `url`, `name`, `title`, `publisher`, `content`, `caseSensitive` | \* `status="unknown"`.<br>\* `url` must start with `http://dsf.dev/fhir/CodeSystem/`.<br>\* All `concept.code` values unique; each concept needs `code + display`.                                                                                                                                                                                                                   | Placeholder enforcement; read‑access tag                                                                 |
| **Questionnaire 1.5.0**  `FhirQuestionnaireValidator`                                     | `meta.profile`, `url`, `version`, `date`, `status`              | \* Mandatory items `business-key` & `user-task-id` (type string, `required=true`).<br>\* Ensures unique `linkId`; warns on non‑conformant patterns.                                                                                                                                                                                                                                  | Placeholder enforcement; read‑access tag                                                                 |
| **Task 1.0.0**  `FhirTaskValidator`                                                       | `id`, `instantiatesCanonical`, `intent`, `status`               | \* Required `input` slices `message-name`, `business-key`; optional `correlation-key`.<br>\* Duplicate `input` slices detected via `Map<String,Integer>` counter.<br>\* Output slice rules: if `status=failed` → must contain `error` slice.                                                                                                                                         | Placeholder enforcement (`#{date}`, `#{organization}`); terminology look‑ups via the authorization cache |
| **ValueSet 1.0.0**  `FhirValueSetValidator`                                               | `url`, `name`, `title`, `publisher`, `description`              | \* Enforces read‑access tag.<br>\* `compose.include`: each `system` present; `concept.code` non‑blank and known.<br>\* Flags duplicate concepts within the same `include` block.                                                                                                                                                                                                     | Placeholder enforcement (`#{version}`, `#{date}`)                                                        |
| **StructureDefinition 1.0.0**  `FhirStructureDefinitionValidator` <br>(**NEW in v1.3.0**) | `meta.profile`, `differential`, `url`                           | \* Must contain `meta.tag` & `meta.profile`.<br>\* `version` and `date` fields require `#{version}` / `#{date}` placeholders.<br>\* No `snapshot` allowed; all element `@id`s unique.<br>\* **Slice cardinality**: min/max constraints are verified for each slice using rules from FHIR §5.1.0.14 ([build.fhir.org](https://build.fhir.org/profiling.html?utm_source=chatgpt.com)). | Placeholder enforcement; read‑access tag                                                                 |

### 3.3 Cross‑resource Consistency

*The validator resolves every `<bpmn:messageRef>` to its canonical URL and verifies that a corresponding `ActivityDefinition.url` exists. Field injections (`profile`, `message-name`, `instantiatesCanonical`) are likewise cross-checked against the available FHIR artefacts to ensure that referenced canonicals exist. **Slice-level conformity to the referenced `StructureDefinition` is not evaluated.***


## 4  Validation Approach

1. **File discovery** – Recursively searches for either full Maven-style paths (e.g., `src/main/resources/bpe`) or flat folder names (e.g., `bpe`). Supports both Maven projects and unpacked JARs in CI.
2. **BPMN pass** – Camunda Model API parses the model; validators run sequentially.
3. **FHIR pass** – XML/JSON files stream through `FhirInstanceValidatorAggregator`, which delegates to each concrete validator.
4. **Slice cardinality checks** – For every `StructureDefinition`, the validator loads min/max values of the base and sliced elements and enforces them according to FHIR profiling rules §5.1.0.14 ([build.fhir.org](https://build.fhir.org/profiling.html?utm_source=chatgpt.com)).
5. **Terminology** – `FhirAuthorizationCache` accelerates terminology look-ups (read-access tags, concept codes). Authorization checks for requester/recipient organisations rely on these look-ups at run time but are not cached.*
6. **Output generation** – All validation items are collected, sorted, and written to JSON reports.



## 5  Implementation & Components

```
validator-core
 ├─ BpmnModelValidator
 │   ├─ BpmnEventValidator
 │   ├─ BpmnGatewayAndFlowValidator
 │   ├─ BpmnTaskValidator
 │   ├─ BpmnFieldInjectionValidator
 │   └─ BpmnSubProcessValidator
 ├─ AbstractFhirInstanceValidator           (base class)
 │   ├─ FhirActivityDefinitionValidator
 │   ├─ FhirCodeSystemValidator
 │   ├─ FhirQuestionnaireValidator
 │   ├─ FhirTaskValidator
 │   ├─ FhirValueSetValidator
 │   ├─ FhirStructureDefinitionValidator     ← NEW
 ├─ FhirResourceValidator
 ├─ FhirInstanceValidatorAggregator
 ├─ FhirAuthorizationCache
 ├─ ValidationOutput                         (print + JSON export)
 ├─ ReportCleaner
 ├─ ApiVersionDetector / ApiVersionHolder
 ├─ MavenBuilder
 └─ DsfValidatorImpl
validator-cli
 └─ Main (Picocli CLI entry point)
validator-maven-plugin
 └─ ValidateMojo (goal bound to *verify* phase)
```



## 6  Build System & Dependencies

* **Apache Maven** – multi‑module build (`dsf-validator`, `validator-core`, `validator-api`, `validator-cli`).
* **Java 21** target, **Byte Buddy** for test instrumentation.
* External libraries: Camunda BPMN Model API ([github.com](https://github.com/camunda/camunda-bpm-platform/blob/master/model-api/bpmn-model/README.asciidoc?utm_source=chatgpt.com)), **Picocli**, **JGit**, **Jackson**, **JUnit 5**, **Mockito**.




## 7 Running the Validator

The DSF Validator supports multiple execution environments:

| **Scenario**              | **Command / Configuration**                                                                                                                                                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CLI – local folder**    | `java -jar dsf-validator-1.3.0.jar --localPath /path/to/project`                                                                                                                                                                                                                                                       |
| **CLI – remote Git repo** | `java -jar dsf-validator-1.3.0.jar --remoteRepo https://gitlab.com/org/repo.git`                                                                                                                                                                                                                                       |
| **Maven (one-shot)**      | `mvn dev.dsf.utils.validator:validator-maven-plugin:verify`                                                                                                                                                                                                                                                            |
| **Maven (POM snippet)**   | `xml<br><plugin><br>  <groupId>dev.dsf.utils.validator</groupId><br>  <artifactId>validator-maven-plugin</artifactId><br>  <version>1.2</version><br>  <executions><br>    <execution><br>      <phase>verify</phase><br>      <goals><goal>verify</goal></goals><br>    </execution><br>  </executions><br></plugin>` |
| **CI Pipeline (GitLab)**  | See below – fully automated GitLab CI validation pipeline using containerized validator image                                                                                                                                                                                                                          |

---

### Maven Plugin Features

* Runs during `verify`, `compile`, or `install` phase.
* Validates BPMN models (`src/main/resources/bpe`) and FHIR resources (`src/main/resources/fhir`).
* Reports are written to:
  `target/dsf-validation-reports/`

**Example Output Structure:**

```
target/dsf-validation-reports/
├── bpmnReports/
│   ├── success/
│   ├── other/
│   └── bpmn_issues_aggregated.json
├── fhirReports/
│   ├── success/
│   ├── other/
│   └── fhir_issues_aggregated.json
└── aggregated.json
```
The validator automatically runs
`mvn clean package dependency:copy-dependencies` before analysis.

---

### GitLab CI Pipeline Features

The DSF validation pipeline enables automated quality checks of submitted plugins using Dockerized jobs.

#### **Pipeline Overview**

```yaml
# Example job in .gitlab-ci.yml
analyze-dsf-validator:
  stage: analyze
  image:
    name: registry.it.hs-heilbronn.de/dsf/qs/hub-qa-pipeline/dsf-validator:1.2-3
    entrypoint: [""]
  dependencies: [build1]
  script:
    - java -jar /opt/validator/validator.jar --localPath output
    - mkdir -p "$CI_PROJECT_DIR/reports/dsf-validator"
    - cp -r report/* "$CI_PROJECT_DIR/reports/dsf-validator/" || true
```

#### **Features**

* **Input:** Validated plugin is extracted from the submitted JAR.
* **Execution flow:**

    * `build1` stage prepares the plugin.
    * `analyze-dsf-validator` performs static validation of BPMN and FHIR resources.
    * `collect-reports` aggregates results from all analyzers into `final-reports/`.

#### **Outputs**

All JSON-formatted validation results are stored as GitLab artifacts under:

```
final-reports/
└── dsf-validator/
    ├── bpmnReports/
    ├── fhirReports/
    └── aggregated.json
```

#### **Requirements**

* Internet access (for downloading dependencies and validator image)
* Maven-compatible environment
* Container image:
  `registry.it.hs-heilbronn.de/dsf/qs/hub-qa-pipeline/dsf-validator:1.2-3`


---

## 8  Data Processing & Storage

Validation items are materialised as `BpmnElementValidationItem` or `FhirElementValidationItem` and serialised to JSON. The **top‑level `aggregated.json`** summarises overall status (`ERROR` / `WARN` / `INFO` / `SUCCESS`).


## 9  Execution Workflow

1. **RepositoryManager** clones remote sources if requested.
2. **MavenBuilder** compiles the project.
3. **BpmnModelValidator** & **FhirInstanceValidatorAggregator** perform analysis.
4. **ReportCleaner** purges previous results; writers store fresh reports.
5. **ApiVersionDetector** prints the detected DSF BPE API version (v1 or v2).


## 10  Expected Output

* **Errors** – fatal; block deployment.
* **Warnings** – non‑fatal but may break runtime paths.
* **Info** – best‑practice hints (e.g. missing `display` in `CodeSystem.concept`).

Developers review `report/aggregated.json` or per‑file reports under `success/` and `other/`.

## 11  Conclusion

Version **1.3.0** turns the DSF Validator into a *profile‑aware* verification tool:

* It validates every BPMN construct and all core FHIR artefacts *plus* the DSF‑specific `dsf-task-base` profile and StructureDefinitions.
* It caches authorised `CodeSystem` codes, enforces slice cardinalities ([build.fhir.org](https://build.fhir.org/profiling.html?utm_source=chatgpt.com)), and guards core metadata placeholders.
* It can be launched via an intuitive CLI or a zero‑configuration Maven plugin, making it an early quality gate that helps DSF process authors catch structural, semantic, and interoperability issues long before deployment.


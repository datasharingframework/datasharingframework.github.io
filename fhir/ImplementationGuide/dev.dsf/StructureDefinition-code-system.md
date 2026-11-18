# CodeSystem - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **CodeSystem**

## Resource Profile: CodeSystem 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/code-system | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:CodeSystem |

**Usages:**

* Examples for this Profile: [DsfBpmnMessage](CodeSystem-bpmn-message.md), [DSF_Organization_Role](CodeSystem-organization-role.md), [DSF_Practitioner_Role](CodeSystem-practitioner-role.md), [DSF_Process_Authorization](CodeSystem-process-authorization.md) and [DSF_Read_Access_Tag](CodeSystem-read-access-tag.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/code-system)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-code-system.csv), [Excel](StructureDefinition-code-system.xlsx), [Schematron](StructureDefinition-code-system.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "code-system",
  "meta" : {
    "profile" : [
      "http://dsf.dev/fhir/StructureDefinition/structure-definition"
    ],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/StructureDefinition/code-system",
  "version" : "2.0.0",
  "name" : "CodeSystem",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-11-26",
  "publisher" : "DSF Community",
  "contact" : [
    {
      "name" : "DSF Community",
      "telecom" : [
        {
          "system" : "url",
          "value" : "https://dsf.dev"
        }
      ]
    }
  ],
  "fhirVersion" : "4.0.1",
  "mapping" : [
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    },
    {
      "identity" : "workflow",
      "uri" : "http://hl7.org/fhir/workflow",
      "name" : "Workflow Pattern"
    },
    {
      "identity" : "w5",
      "uri" : "http://hl7.org/fhir/fivews",
      "name" : "FiveWs Pattern Mapping"
    },
    {
      "identity" : "objimpl",
      "uri" : "http://hl7.org/fhir/object-implementation",
      "name" : "Object Implementation Information"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "CodeSystem",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/CodeSystem",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "CodeSystem",
        "path" : "CodeSystem"
      },
      {
        "id" : "CodeSystem.meta",
        "path" : "CodeSystem.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "CodeSystem.url",
        "path" : "CodeSystem.url",
        "min" : 1
      },
      {
        "id" : "CodeSystem.version",
        "path" : "CodeSystem.version",
        "min" : 1
      },
      {
        "id" : "CodeSystem.date",
        "path" : "CodeSystem.date",
        "min" : 1
      }
    ]
  }
}

```

# ActivityDefinition - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ActivityDefinition**

## Resource Profile: ActivityDefinition 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/activity-definition | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:ActivityDefinition |

 
A DSF Process with it's messages and corresponding Authorization Rules. 

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/activity-definition)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-activity-definition.csv), [Excel](StructureDefinition-activity-definition.xlsx), [Schematron](StructureDefinition-activity-definition.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "activity-definition",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/activity-definition",
  "version" : "2.0.0",
  "name" : "ActivityDefinition",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-10-27",
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
  "description" : "A DSF Process with it's messages and corresponding Authorization Rules.",
  "fhirVersion" : "4.0.1",
  "mapping" : [
    {
      "identity" : "workflow",
      "uri" : "http://hl7.org/fhir/workflow",
      "name" : "Workflow Pattern"
    },
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
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
  "type" : "ActivityDefinition",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "ActivityDefinition",
        "path" : "ActivityDefinition"
      },
      {
        "id" : "ActivityDefinition.meta",
        "path" : "ActivityDefinition.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "ActivityDefinition.extension",
        "path" : "ActivityDefinition.extension",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "url"
            }
          ],
          "rules" : "open"
        },
        "min" : 1
      },
      {
        "id" : "ActivityDefinition.extension:process-authorization",
        "path" : "ActivityDefinition.extension",
        "sliceName" : "process-authorization",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "Extension",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization|2.0.0"
            ]
          }
        ]
      },
      {
        "id" : "ActivityDefinition.url",
        "path" : "ActivityDefinition.url",
        "min" : 1
      },
      {
        "id" : "ActivityDefinition.version",
        "path" : "ActivityDefinition.version",
        "min" : 1
      },
      {
        "id" : "ActivityDefinition.date",
        "path" : "ActivityDefinition.date",
        "min" : 1
      },
      {
        "id" : "ActivityDefinition.kind",
        "path" : "ActivityDefinition.kind",
        "min" : 1,
        "fixedCode" : "Task"
      }
    ]
  }
}

```

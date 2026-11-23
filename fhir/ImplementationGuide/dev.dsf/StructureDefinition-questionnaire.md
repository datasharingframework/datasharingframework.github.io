# Questionnaire - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Questionnaire**

## Resource Profile: Questionnaire 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/questionnaire | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:Questionnaire |

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/questionnaire)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-questionnaire.csv), [Excel](StructureDefinition-questionnaire.xlsx), [Schematron](StructureDefinition-questionnaire.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "questionnaire",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/questionnaire",
  "version" : "2.0.0",
  "name" : "Questionnaire",
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
    },
    {
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Questionnaire",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Questionnaire",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Questionnaire",
        "path" : "Questionnaire"
      },
      {
        "id" : "Questionnaire.meta",
        "path" : "Questionnaire.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "Questionnaire.url",
        "path" : "Questionnaire.url",
        "min" : 1
      },
      {
        "id" : "Questionnaire.version",
        "path" : "Questionnaire.version",
        "min" : 1
      },
      {
        "id" : "Questionnaire.date",
        "path" : "Questionnaire.date",
        "min" : 1
      },
      {
        "id" : "Questionnaire.item",
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
            "valueString" : "Parameter"
          }
        ],
        "path" : "Questionnaire.item",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "linkId"
            }
          ],
          "rules" : "closed"
        },
        "min" : 1,
        "constraint" : [
          {
            "key" : "type-code",
            "severity" : "error",
            "human" : "Constrains available types from ValueSet 'http://hl7.org/fhir/item-type'",
            "expression" : "(type = 'display') or        (type = 'string') or        (type = 'text') or        (type = 'integer') or        (type = 'decimal') or        (type = 'boolean') or        (type = 'date') or        (type = 'time') or        (type = 'dateTime') or        (type = 'reference') or        (type = 'url') or        (type = 'choice') or       (type = 'quantity') "
          },
          {
            "key" : "required-exists",
            "severity" : "error",
            "human" : "Required field must be set if type is not display",
            "expression" : "(type != 'display') implies required.exists()"
          }
        ]
      },
      {
        "id" : "Questionnaire.item:user-task-id",
        "path" : "Questionnaire.item",
        "sliceName" : "user-task-id",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Questionnaire.item:user-task-id.linkId",
        "path" : "Questionnaire.item.linkId",
        "fixedString" : "user-task-id"
      },
      {
        "id" : "Questionnaire.item:user-task-id.definition",
        "path" : "Questionnaire.item.definition",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:user-task-id.code",
        "path" : "Questionnaire.item.code",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:user-task-id.prefix",
        "path" : "Questionnaire.item.prefix",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:user-task-id.text",
        "path" : "Questionnaire.item.text",
        "min" : 1,
        "fixedString" : "The user-task-id of the process execution"
      },
      {
        "id" : "Questionnaire.item:user-task-id.type",
        "path" : "Questionnaire.item.type",
        "fixedCode" : "string"
      },
      {
        "id" : "Questionnaire.item:user-task-id.enableWhen",
        "path" : "Questionnaire.item.enableWhen",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:user-task-id.required",
        "path" : "Questionnaire.item.required",
        "fixedBoolean" : true
      },
      {
        "id" : "Questionnaire.item:user-task-id.answerOption",
        "path" : "Questionnaire.item.answerOption",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:user-task-id.initial",
        "path" : "Questionnaire.item.initial",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:user-task-id.item",
        "path" : "Questionnaire.item.item",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:business-key",
        "path" : "Questionnaire.item",
        "sliceName" : "business-key",
        "min" : 0,
        "max" : "1"
      },
      {
        "id" : "Questionnaire.item:business-key.linkId",
        "path" : "Questionnaire.item.linkId",
        "fixedString" : "business-key"
      },
      {
        "id" : "Questionnaire.item:business-key.definition",
        "path" : "Questionnaire.item.definition",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:business-key.code",
        "path" : "Questionnaire.item.code",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:business-key.prefix",
        "path" : "Questionnaire.item.prefix",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:business-key.text",
        "path" : "Questionnaire.item.text",
        "min" : 1,
        "fixedString" : "The business-key of the process execution"
      },
      {
        "id" : "Questionnaire.item:business-key.type",
        "path" : "Questionnaire.item.type",
        "fixedCode" : "string"
      },
      {
        "id" : "Questionnaire.item:business-key.enableWhen",
        "path" : "Questionnaire.item.enableWhen",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:business-key.required",
        "path" : "Questionnaire.item.required",
        "fixedBoolean" : true
      },
      {
        "id" : "Questionnaire.item:business-key.answerOption",
        "path" : "Questionnaire.item.answerOption",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:business-key.initial",
        "path" : "Questionnaire.item.initial",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:business-key.item",
        "path" : "Questionnaire.item.item",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:@default",
        "path" : "Questionnaire.item",
        "sliceName" : "@default",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "Questionnaire.item:@default.definition",
        "path" : "Questionnaire.item.definition",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:@default.code",
        "path" : "Questionnaire.item.code",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:@default.prefix",
        "path" : "Questionnaire.item.prefix",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:@default.text",
        "path" : "Questionnaire.item.text",
        "min" : 1
      },
      {
        "id" : "Questionnaire.item:@default.type",
        "path" : "Questionnaire.item.type",
        "min" : 1
      },
      {
        "id" : "Questionnaire.item:@default.enableWhen",
        "path" : "Questionnaire.item.enableWhen",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:@default.answerOption",
        "path" : "Questionnaire.item.answerOption",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:@default.initial",
        "path" : "Questionnaire.item.initial",
        "max" : "0"
      },
      {
        "id" : "Questionnaire.item:@default.item",
        "path" : "Questionnaire.item.item",
        "max" : "0"
      }
    ]
  }
}

```

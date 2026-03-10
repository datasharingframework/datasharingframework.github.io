# QuestionnaireResponse - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **QuestionnaireResponse**

## Resource Profile: QuestionnaireResponse 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/questionnaire-response | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:QuestionnaireResponse |

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/questionnaire-response)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-questionnaire-response.csv), [Excel](StructureDefinition-questionnaire-response.xlsx), [Schematron](StructureDefinition-questionnaire-response.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "questionnaire-response",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/questionnaire-response",
  "version" : "2.0.0",
  "name" : "QuestionnaireResponse",
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
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "QuestionnaireResponse",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "QuestionnaireResponse",
        "path" : "QuestionnaireResponse",
        "constraint" : [
          {
            "key" : "authored-if-completed-or-amended",
            "severity" : "error",
            "human" : "Authored must be set if QuestionnaireResponse.status equals completed or amended",
            "expression" : "(%resource.status = 'completed' or %resource.status = 'amended') implies authored.exists()"
          },
          {
            "key" : "author-if-completed-or-amended",
            "severity" : "error",
            "human" : "Author must be set if QuestionnaireResponse.status equals completed or amended",
            "expression" : "((%resource.status = 'completed' or %resource.status = 'amended') implies author.exists()) and                        ((%resource.status = 'completed' or %resource.status = 'amended') implies author.identifier.exists())"
          }
        ]
      },
      {
        "id" : "QuestionnaireResponse.extension",
        "path" : "QuestionnaireResponse.extension",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "url"
            }
          ],
          "rules" : "open"
        },
        "min" : 0
      },
      {
        "id" : "QuestionnaireResponse.extension:questionnaire-authorization",
        "path" : "QuestionnaireResponse.extension",
        "sliceName" : "questionnaire-authorization",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "Extension",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/extension-questionnaire-authorization|2.0.0"
            ]
          }
        ]
      },
      {
        "id" : "QuestionnaireResponse.questionnaire",
        "path" : "QuestionnaireResponse.questionnaire",
        "min" : 1
      },
      {
        "id" : "QuestionnaireResponse.author",
        "path" : "QuestionnaireResponse.author",
        "min" : 0,
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : ["http://dsf.dev/fhir/StructureDefinition/organization|2.0.0"]
          }
        ],
        "constraint" : [
          {
            "key" : "author-identifier-type-organization",
            "severity" : "error",
            "human" : "QuestionnaireResponse.author.identifier.type must be 'Organization' if QuestionnaireResponse.author.identifier.system is http://dsf.dev/sid/organization-identifier",
            "expression" : "identifier.system = 'http://dsf.dev/sid/organization-identifier' implies type.empty() or type = 'Organization'"
          },
          {
            "key" : "author-identifier-type-practitioner",
            "severity" : "error",
            "human" : "QuestionnaireResponse.author.identifier.type must be 'Practitioner' if QuestionnaireResponse.author.identifier.system is http://dsf.dev/sid/practitioner-identifier",
            "expression" : "identifier.system = 'http://dsf.dev/sid/practitioner-identifier' implies type.empty() or type = 'Practitioner'"
          }
        ]
      },
      {
        "id" : "QuestionnaireResponse.author.reference",
        "path" : "QuestionnaireResponse.author.reference",
        "min" : 0
      },
      {
        "id" : "QuestionnaireResponse.author.identifier",
        "path" : "QuestionnaireResponse.author.identifier",
        "min" : 1
      },
      {
        "id" : "QuestionnaireResponse.author.identifier.system",
        "path" : "QuestionnaireResponse.author.identifier.system",
        "min" : 1,
        "constraint" : [
          {
            "key" : "author-identifier-system",
            "severity" : "error",
            "human" : "QuestionnaireResponse.author.identifier.system must be 'http://dsf.dev/sid/organization-identifier' or 'http://dsf.dev/sid/practitioner-identifier'",
            "expression" : "$this = 'http://dsf.dev/sid/organization-identifier' or $this = 'http://dsf.dev/sid/practitioner-identifier'"
          }
        ]
      },
      {
        "id" : "QuestionnaireResponse.author.identifier.value",
        "path" : "QuestionnaireResponse.author.identifier.value",
        "min" : 1
      },
      {
        "id" : "QuestionnaireResponse.item",
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
            "valueString" : "Parameter"
          }
        ],
        "path" : "QuestionnaireResponse.item",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "linkId"
            }
          ],
          "rules" : "closed"
        },
        "min" : 1
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id",
        "path" : "QuestionnaireResponse.item",
        "sliceName" : "user-task-id",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id.linkId",
        "path" : "QuestionnaireResponse.item.linkId",
        "fixedString" : "user-task-id"
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id.definition",
        "path" : "QuestionnaireResponse.item.definition",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id.text",
        "path" : "QuestionnaireResponse.item.text",
        "min" : 1,
        "fixedString" : "The user-task-id of the process execution"
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id.answer",
        "path" : "QuestionnaireResponse.item.answer",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id.answer.value[x]",
        "path" : "QuestionnaireResponse.item.answer.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id.answer.item",
        "path" : "QuestionnaireResponse.item.answer.item",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:user-task-id.item",
        "path" : "QuestionnaireResponse.item.item",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:business-key",
        "path" : "QuestionnaireResponse.item",
        "sliceName" : "business-key",
        "min" : 0,
        "max" : "1"
      },
      {
        "id" : "QuestionnaireResponse.item:business-key.linkId",
        "path" : "QuestionnaireResponse.item.linkId",
        "fixedString" : "business-key"
      },
      {
        "id" : "QuestionnaireResponse.item:business-key.definition",
        "path" : "QuestionnaireResponse.item.definition",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:business-key.text",
        "path" : "QuestionnaireResponse.item.text",
        "min" : 1,
        "fixedString" : "The business-key of the process execution"
      },
      {
        "id" : "QuestionnaireResponse.item:business-key.answer",
        "path" : "QuestionnaireResponse.item.answer",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "QuestionnaireResponse.item:business-key.answer.value[x]",
        "path" : "QuestionnaireResponse.item.answer.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "QuestionnaireResponse.item:business-key.answer.item",
        "path" : "QuestionnaireResponse.item.answer.item",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:business-key.item",
        "path" : "QuestionnaireResponse.item.item",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:@default",
        "path" : "QuestionnaireResponse.item",
        "sliceName" : "@default",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "QuestionnaireResponse.item:@default.definition",
        "path" : "QuestionnaireResponse.item.definition",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:@default.text",
        "path" : "QuestionnaireResponse.item.text",
        "min" : 1
      },
      {
        "id" : "QuestionnaireResponse.item:@default.answer",
        "path" : "QuestionnaireResponse.item.answer",
        "min" : 0,
        "max" : "1"
      },
      {
        "id" : "QuestionnaireResponse.item:@default.answer.value[x]",
        "path" : "QuestionnaireResponse.item.answer.value[x]",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          },
          {
            "code" : "integer"
          },
          {
            "code" : "decimal"
          },
          {
            "code" : "boolean"
          },
          {
            "code" : "date"
          },
          {
            "code" : "time"
          },
          {
            "code" : "dateTime"
          },
          {
            "code" : "uri"
          },
          {
            "code" : "Reference"
          },
          {
            "code" : "Coding"
          },
          {
            "code" : "Quantity"
          }
        ]
      },
      {
        "id" : "QuestionnaireResponse.item:@default.answer.item",
        "path" : "QuestionnaireResponse.item.answer.item",
        "max" : "0"
      },
      {
        "id" : "QuestionnaireResponse.item:@default.item",
        "path" : "QuestionnaireResponse.item.item",
        "max" : "0"
      }
    ]
  }
}

```

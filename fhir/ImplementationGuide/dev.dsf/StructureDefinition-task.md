# Task - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Task**

## Resource Profile: Task ( Abstract ) 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/task | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:Task |

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/task)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-task.csv), [Excel](StructureDefinition-task.xlsx), [Schematron](StructureDefinition-task.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "task",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/task",
  "version" : "2.0.0",
  "name" : "Task",
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
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    }
  ],
  "kind" : "resource",
  "abstract" : true,
  "type" : "Task",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Task",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Task",
        "path" : "Task",
        "constraint" : [
          {
            "key" : "business-key-if-status-inprogress-completed-failed",
            "severity" : "error",
            "human" : "Business key must be set if Task.status = {in-progress, completed, failed}",
            "expression" : "((%resource.status = 'in-progress') or                             (%resource.status = 'completed') or                             (%resource.status = 'failed'))                               implies                             input.type.coding.where(                               system = 'http://dsf.dev/fhir/CodeSystem/bpmn-message' and                               code = 'business-key')                             .exists()"
          }
        ]
      },
      {
        "id" : "Task.instantiatesCanonical",
        "path" : "Task.instantiatesCanonical",
        "min" : 1
      },
      {
        "id" : "Task.intent",
        "path" : "Task.intent",
        "fixedCode" : "order"
      },
      {
        "id" : "Task.authoredOn",
        "path" : "Task.authoredOn",
        "min" : 1
      },
      {
        "id" : "Task.requester",
        "path" : "Task.requester",
        "min" : 1,
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : [
              "http://dsf.dev/fhir/StructureDefinition/organization|2.0.0",
              "http://hl7.org/fhir/StructureDefinition/Practitioner"
            ]
          }
        ],
        "constraint" : [
          {
            "key" : "requester-identifier-type-organization",
            "severity" : "error",
            "human" : "Task.requester.identifier.type must be 'Organization' if Task.requester.identifier.system is http://dsf.dev/sid/organization-identifier",
            "expression" : "identifier.system = 'http://dsf.dev/sid/organization-identifier' implies type.empty() or type = 'Organization'"
          },
          {
            "key" : "requester-identifier-type-practitioner",
            "severity" : "error",
            "human" : "Task.requester.identifier.type must be 'Practitioner' if Task.requester.identifier.system is http://dsf.dev/sid/practitioner-identifier",
            "expression" : "identifier.system = 'http://dsf.dev/sid/practitioner-identifier' implies type.empty() or type = 'Practitioner'"
          }
        ]
      },
      {
        "id" : "Task.requester.reference",
        "path" : "Task.requester.reference",
        "max" : "0"
      },
      {
        "id" : "Task.requester.identifier",
        "path" : "Task.requester.identifier",
        "min" : 1
      },
      {
        "id" : "Task.requester.identifier.system",
        "path" : "Task.requester.identifier.system",
        "min" : 1,
        "constraint" : [
          {
            "key" : "requester-identifier-system",
            "severity" : "error",
            "human" : "Task.requester.identifier.system must be 'http://dsf.dev/sid/organization-identifier' or 'http://dsf.dev/sid/practitioner-identifier'",
            "expression" : "$this = 'http://dsf.dev/sid/organization-identifier' or $this = 'http://dsf.dev/sid/practitioner-identifier'"
          }
        ]
      },
      {
        "id" : "Task.requester.identifier.value",
        "path" : "Task.requester.identifier.value",
        "min" : 1
      },
      {
        "id" : "Task.restriction",
        "path" : "Task.restriction",
        "min" : 1
      },
      {
        "id" : "Task.restriction.recipient",
        "path" : "Task.restriction.recipient",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : ["http://dsf.dev/fhir/StructureDefinition/organization|2.0.0"]
          }
        ],
        "constraint" : [
          {
            "key" : "restriction-recipient-identifier-type-organization",
            "severity" : "error",
            "human" : "Task.restriction.recipient.identifier.type must be 'Organization' if Task.restriction.recipient.identifier.system is http://dsf.dev/sid/organization-identifier",
            "expression" : "identifier.system = 'http://dsf.dev/sid/organization-identifier' implies type.empty() or type = 'Organization'"
          }
        ]
      },
      {
        "id" : "Task.restriction.recipient.reference",
        "path" : "Task.restriction.recipient.reference",
        "max" : "0"
      },
      {
        "id" : "Task.restriction.recipient.identifier",
        "path" : "Task.restriction.recipient.identifier",
        "min" : 1
      },
      {
        "id" : "Task.restriction.recipient.identifier.system",
        "path" : "Task.restriction.recipient.identifier.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/sid/organization-identifier"
      },
      {
        "id" : "Task.restriction.recipient.identifier.value",
        "path" : "Task.restriction.recipient.identifier.value",
        "min" : 1
      },
      {
        "id" : "Task.input",
        "path" : "Task.input",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "type.coding.system"
            },
            {
              "type" : "value",
              "path" : "type.coding.code"
            }
          ],
          "rules" : "openAtEnd"
        },
        "min" : 1
      },
      {
        "id" : "Task.input:message-name",
        "path" : "Task.input",
        "sliceName" : "message-name",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Task.input:message-name.type",
        "path" : "Task.input.type",
        "binding" : {
          "strength" : "required",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/bpmn-message"
        }
      },
      {
        "id" : "Task.input:message-name.type.coding",
        "path" : "Task.input.type.coding",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Task.input:message-name.type.coding.system",
        "path" : "Task.input.type.coding.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/bpmn-message"
      },
      {
        "id" : "Task.input:message-name.type.coding.code",
        "path" : "Task.input.type.coding.code",
        "min" : 1,
        "fixedCode" : "message-name"
      },
      {
        "id" : "Task.input:message-name.value[x]",
        "path" : "Task.input.value[x]",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "Task.input:business-key",
        "path" : "Task.input",
        "sliceName" : "business-key",
        "max" : "1"
      },
      {
        "id" : "Task.input:business-key.type",
        "path" : "Task.input.type",
        "binding" : {
          "strength" : "required",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/bpmn-message"
        }
      },
      {
        "id" : "Task.input:business-key.type.coding",
        "path" : "Task.input.type.coding",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Task.input:business-key.type.coding.system",
        "path" : "Task.input.type.coding.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/bpmn-message"
      },
      {
        "id" : "Task.input:business-key.type.coding.code",
        "path" : "Task.input.type.coding.code",
        "min" : 1,
        "fixedCode" : "business-key"
      },
      {
        "id" : "Task.input:business-key.value[x]",
        "path" : "Task.input.value[x]",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "Task.input:correlation-key",
        "path" : "Task.input",
        "sliceName" : "correlation-key",
        "max" : "1"
      },
      {
        "id" : "Task.input:correlation-key.type",
        "path" : "Task.input.type",
        "binding" : {
          "strength" : "required",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/bpmn-message"
        }
      },
      {
        "id" : "Task.input:correlation-key.type.coding",
        "path" : "Task.input.type.coding",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Task.input:correlation-key.type.coding.system",
        "path" : "Task.input.type.coding.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/bpmn-message"
      },
      {
        "id" : "Task.input:correlation-key.type.coding.code",
        "path" : "Task.input.type.coding.code",
        "min" : 1,
        "fixedCode" : "correlation-key"
      },
      {
        "id" : "Task.input:correlation-key.value[x]",
        "path" : "Task.input.value[x]",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "Task.output",
        "path" : "Task.output",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "type.coding.system"
            },
            {
              "type" : "value",
              "path" : "type.coding.code"
            }
          ],
          "rules" : "openAtEnd"
        }
      },
      {
        "id" : "Task.output:error",
        "path" : "Task.output",
        "sliceName" : "error"
      },
      {
        "id" : "Task.output:error.type",
        "path" : "Task.output.type",
        "binding" : {
          "strength" : "required",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/bpmn-message"
        }
      },
      {
        "id" : "Task.output:error.type.coding",
        "path" : "Task.output.type.coding",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Task.output:error.type.coding.system",
        "path" : "Task.output.type.coding.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/bpmn-message"
      },
      {
        "id" : "Task.output:error.type.coding.code",
        "path" : "Task.output.type.coding.code",
        "min" : 1,
        "fixedCode" : "error"
      },
      {
        "id" : "Task.output:error.value[x]",
        "path" : "Task.output.value[x]",
        "type" : [
          {
            "code" : "string"
          }
        ]
      }
    ]
  }
}

```

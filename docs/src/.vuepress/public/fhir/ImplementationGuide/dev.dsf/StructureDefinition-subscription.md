# Subscription - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Subscription**

## Resource Profile: Subscription 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/subscription | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:Subscription |

**Usages:**

* Examples for this Profile: [Subscription/dsf-bpmn-questionnaire-response-subscription](Subscription-dsf-bpmn-questionnaire-response-subscription.md) and [Subscription/dsf-bpmn-task-subscription](Subscription-dsf-bpmn-task-subscription.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/subscription)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-subscription.csv), [Excel](StructureDefinition-subscription.xlsx), [Schematron](StructureDefinition-subscription.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "subscription",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/subscription",
  "version" : "2.0.0",
  "name" : "Subscription",
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
  "fhirVersion" : "4.0.1",
  "mapping" : [
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
  "type" : "Subscription",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Subscription",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Subscription",
        "path" : "Subscription"
      },
      {
        "id" : "Subscription.meta",
        "path" : "Subscription.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "Subscription.channel.type",
        "path" : "Subscription.channel.type",
        "fixedCode" : "websocket"
      },
      {
        "id" : "Subscription.channel.payload",
        "path" : "Subscription.channel.payload",
        "constraint" : [
          {
            "key" : "payload-fhir-json-or-xml",
            "severity" : "error",
            "human" : "Subscription.channel.payload must be 'application/fhir+json' or 'application/fhir+xml'",
            "expression" : "$this.empty().not() implies ($this = 'application/fhir+json' or $this = 'application/fhir+xml')"
          }
        ]
      }
    ]
  }
}

```

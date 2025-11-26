# NamingSystem - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **NamingSystem**

## Resource Profile: NamingSystem 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/naming-system | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:NamingSystem |

**Usages:**

* Examples for this Profile: [DsfEndpointIdentifier](NamingSystem-dsf-endpoint.md), [DsfOrganizationIdentifier](NamingSystem-dsf-organization.md), [DsfPractitionerIdentifier](NamingSystem-dsf-practitioner.md) and [DsfTaskIdentifier](NamingSystem-dsf-task.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/naming-system)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-naming-system.csv), [Excel](StructureDefinition-naming-system.xlsx), [Schematron](StructureDefinition-naming-system.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "naming-system",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/naming-system",
  "version" : "2.0.0",
  "name" : "NamingSystem",
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
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    },
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
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "NamingSystem",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/NamingSystem",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "NamingSystem",
        "path" : "NamingSystem"
      },
      {
        "id" : "NamingSystem.meta",
        "path" : "NamingSystem.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "NamingSystem.name",
        "path" : "NamingSystem.name",
        "min" : 1
      },
      {
        "id" : "NamingSystem.date",
        "path" : "NamingSystem.date",
        "min" : 1
      }
    ]
  }
}

```

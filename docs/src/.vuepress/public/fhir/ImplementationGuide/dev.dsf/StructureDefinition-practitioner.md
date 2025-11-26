# Practitioner - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Practitioner**

## Resource Profile: Practitioner 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/practitioner | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:Practitioner |

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/practitioner)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-practitioner.csv), [Excel](StructureDefinition-practitioner.xlsx), [Schematron](StructureDefinition-practitioner.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "practitioner",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/practitioner",
  "version" : "2.0.0",
  "name" : "Practitioner",
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
      "identity" : "servd",
      "uri" : "http://www.omg.org/spec/ServD/1.0/",
      "name" : "ServD"
    },
    {
      "identity" : "w5",
      "uri" : "http://hl7.org/fhir/fivews",
      "name" : "FiveWs Pattern Mapping"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Practitioner",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Practitioner",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Practitioner",
        "path" : "Practitioner"
      },
      {
        "id" : "Practitioner.meta",
        "path" : "Practitioner.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      }
    ]
  }
}

```

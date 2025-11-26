# MeasureReport - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **MeasureReport**

## Resource Profile: MeasureReport 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/measure-report | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:MeasureReport |

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/measure-report)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-measure-report.csv), [Excel](StructureDefinition-measure-report.xlsx), [Schematron](StructureDefinition-measure-report.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "measure-report",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/measure-report",
  "version" : "2.0.0",
  "name" : "MeasureReport",
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
      "identity" : "w5",
      "uri" : "http://hl7.org/fhir/fivews",
      "name" : "FiveWs Pattern Mapping"
    },
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "MeasureReport",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/MeasureReport",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "MeasureReport",
        "path" : "MeasureReport"
      },
      {
        "id" : "MeasureReport.meta",
        "path" : "MeasureReport.meta",
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

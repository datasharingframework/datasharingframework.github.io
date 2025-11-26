# CheckLogicalReference - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **CheckLogicalReference**

## Extension: CheckLogicalReference 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/extension-check-logical-reference | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:CheckLogicalReference |

**Context of Use**

**Usage info**

**Usages:**

* This Extension is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/extension-check-logical-reference)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-extension-check-logical-reference.csv), [Excel](StructureDefinition-extension-check-logical-reference.xlsx), [Schematron](StructureDefinition-extension-check-logical-reference.sch) 

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "extension-check-logical-reference",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/extension-check-logical-reference",
  "version" : "2.0.0",
  "name" : "CheckLogicalReference",
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
    }
  ],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [
    {
      "type" : "element",
      "expression" : "NamingSystem.uniqueId"
    }
  ],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Extension",
        "path" : "Extension",
        "isModifier" : true,
        "isModifierReason" : "Determines if logical references will be checked"
      },
      {
        "id" : "Extension.url",
        "path" : "Extension.url",
        "type" : [
          {
            "code" : "uri"
          }
        ],
        "fixedUri" : "http://dsf.dev/fhir/StructureDefinition/extension-check-logical-reference"
      },
      {
        "id" : "Extension.value[x]",
        "path" : "Extension.value[x]",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ]
      }
    ]
  }
}

```

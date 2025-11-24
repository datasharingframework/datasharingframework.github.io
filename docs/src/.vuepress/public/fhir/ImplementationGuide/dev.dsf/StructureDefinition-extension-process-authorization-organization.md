# ProcessAuthorizationOrganization - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ProcessAuthorizationOrganization**

## Extension: ProcessAuthorizationOrganization 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:ProcessAuthorizationOrganization |

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [ProcessAuthorizationLocalOrganization](StructureDefinition-coding-process-authorization-local-organization.md) and [ProcessAuthorizationRemoteOrganization](StructureDefinition-coding-process-authorization-remote-organization.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/extension-process-authorization-organization)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-extension-process-authorization-organization.csv), [Excel](StructureDefinition-extension-process-authorization-organization.xlsx), [Schematron](StructureDefinition-extension-process-authorization-organization.sch) 

#### Terminology Bindings

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "extension-process-authorization-organization",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization",
  "version" : "2.0.0",
  "name" : "ProcessAuthorizationOrganization",
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
      "expression" : "Coding"
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
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Extension.url",
        "path" : "Extension.url",
        "fixedUri" : "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization"
      },
      {
        "id" : "Extension.value[x]",
        "path" : "Extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "Identifier"
          }
        ]
      },
      {
        "id" : "Extension.value[x].system",
        "path" : "Extension.value[x].system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/sid/organization-identifier"
      },
      {
        "id" : "Extension.value[x].value",
        "path" : "Extension.value[x].value",
        "min" : 1
      }
    ]
  }
}

```

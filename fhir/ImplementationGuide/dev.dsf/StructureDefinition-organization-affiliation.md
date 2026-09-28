# OrganizationAffiliation - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OrganizationAffiliation**

## Resource Profile: OrganizationAffiliation 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/organization-affiliation | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:OrganizationAffiliation |

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/organization-affiliation)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-organization-affiliation.csv), [Excel](StructureDefinition-organization-affiliation.xlsx), [Schematron](StructureDefinition-organization-affiliation.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "organization-affiliation",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/organization-affiliation",
  "version" : "2.0.0",
  "name" : "OrganizationAffiliation",
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
  "type" : "OrganizationAffiliation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "OrganizationAffiliation",
        "path" : "OrganizationAffiliation"
      },
      {
        "id" : "OrganizationAffiliation.meta",
        "path" : "OrganizationAffiliation.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "OrganizationAffiliation.active",
        "path" : "OrganizationAffiliation.active",
        "min" : 1
      },
      {
        "id" : "OrganizationAffiliation.organization",
        "path" : "OrganizationAffiliation.organization",
        "min" : 1,
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : [
              "http://dsf.dev/fhir/StructureDefinition/organization-parent|2.0.0"
            ]
          }
        ]
      },
      {
        "id" : "OrganizationAffiliation.organization.reference",
        "path" : "OrganizationAffiliation.organization.reference",
        "min" : 1
      },
      {
        "id" : "OrganizationAffiliation.participatingOrganization",
        "path" : "OrganizationAffiliation.participatingOrganization",
        "min" : 1,
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : ["http://dsf.dev/fhir/StructureDefinition/organization|2.0.0"]
          }
        ]
      },
      {
        "id" : "OrganizationAffiliation.participatingOrganization.reference",
        "path" : "OrganizationAffiliation.participatingOrganization.reference",
        "min" : 1
      },
      {
        "id" : "OrganizationAffiliation.code",
        "path" : "OrganizationAffiliation.code",
        "min" : 1
      },
      {
        "id" : "OrganizationAffiliation.code.coding",
        "path" : "OrganizationAffiliation.code.coding",
        "min" : 1,
        "binding" : {
          "strength" : "preferred",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/organization-role|2.0.0"
        }
      },
      {
        "id" : "OrganizationAffiliation.code.coding.system",
        "path" : "OrganizationAffiliation.code.coding.system",
        "min" : 1
      },
      {
        "id" : "OrganizationAffiliation.code.coding.code",
        "path" : "OrganizationAffiliation.code.coding.code",
        "min" : 1
      },
      {
        "id" : "OrganizationAffiliation.endpoint",
        "path" : "OrganizationAffiliation.endpoint",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : ["http://dsf.dev/fhir/StructureDefinition/endpoint|2.0.0"]
          }
        ]
      },
      {
        "id" : "OrganizationAffiliation.endpoint.reference",
        "path" : "OrganizationAffiliation.endpoint.reference",
        "min" : 1
      }
    ]
  }
}

```

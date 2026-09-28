# DSF Organization Role - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DSF Organization Role**

## CodeSystem: DSF Organization Role 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/CodeSystem/organization-role | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:DSF_Organization_Role |

 
CodeSystem with DSF organization roles used in OrganizationAffiliation resources 

 This Code system is referenced in the content logical definition of the following value sets: 

* [DSF_Organization_Role](ValueSet-organization-role.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "organization-role",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/code-system"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/CodeSystem/organization-role",
  "version" : "2.0.0",
  "name" : "DSF_Organization_Role",
  "title" : "DSF Organization Role",
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
  "description" : "CodeSystem with DSF organization roles used in OrganizationAffiliation resources",
  "caseSensitive" : true,
  "hierarchyMeaning" : "grouped-by",
  "versionNeeded" : false,
  "content" : "complete",
  "count" : 14,
  "concept" : [
    {
      "code" : "UAC",
      "display" : "Use-and-Access Committee"
    },
    {
      "code" : "COS",
      "display" : "Coordinating Site"
    },
    {
      "code" : "CRR",
      "display" : "Central Research Repository"
    },
    {
      "code" : "DIC",
      "display" : "Data Integration Center"
    },
    {
      "code" : "DMS",
      "display" : "Data Management Site"
    },
    {
      "code" : "DTS",
      "display" : "Data Transfer Site"
    },
    {
      "code" : "HRP",
      "display" : "Health Research Platform"
    },
    {
      "code" : "TTP",
      "display" : "Trusted Third Party"
    },
    {
      "code" : "AMS",
      "display" : "Allowlist Management Site"
    },
    {
      "code" : "ASP",
      "display" : "Analysis Service Provider"
    },
    {
      "code" : "SPR",
      "display" : "Service Provider Registry"
    },
    {
      "code" : "TSP",
      "display" : "Terminology Service Provider"
    },
    {
      "code" : "PPH",
      "display" : "Process Plugin Hub"
    },
    {
      "code" : "BIO",
      "display" : "Biobank"
    }
  ]
}

```

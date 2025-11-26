# DSF Practitioner Role - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DSF Practitioner Role**

## CodeSystem: DSF Practitioner Role 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/CodeSystem/practitioner-role | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:DSF_Practitioner_Role |

 
CodeSystem with DSF practitioner roles 

 This Code system is referenced in the content logical definition of the following value sets: 

* [DSF_Practitioner_Role](ValueSet-practitioner-role.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "practitioner-role",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/code-system"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/CodeSystem/practitioner-role",
  "version" : "2.0.0",
  "name" : "DSF_Practitioner_Role",
  "title" : "DSF Practitioner Role",
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
  "description" : "CodeSystem with DSF practitioner roles",
  "caseSensitive" : true,
  "hierarchyMeaning" : "grouped-by",
  "versionNeeded" : false,
  "content" : "complete",
  "count" : 15,
  "concept" : [
    {
      "code" : "UAC_USER",
      "display" : "Use-and-Access Committee User"
    },
    {
      "code" : "COS_USER",
      "display" : "Coordinating Site User"
    },
    {
      "code" : "CRR_USER",
      "display" : "Central Research Repository User"
    },
    {
      "code" : "DIC_USER",
      "display" : "Data Integration Center User"
    },
    {
      "code" : "DMS_USER",
      "display" : "Data Management Site User"
    },
    {
      "code" : "DTS_USER",
      "display" : "Data Transfer Site User"
    },
    {
      "code" : "HRP_USER",
      "display" : "Health Research Platform User"
    },
    {
      "code" : "TTP_USER",
      "display" : "Trusted Third Party User"
    },
    {
      "code" : "AMS_USER",
      "display" : "Allowlist Management Site User"
    },
    {
      "code" : "ASP_USER",
      "display" : "Analysis Service Provider User"
    },
    {
      "code" : "SPR_USER",
      "display" : "Service Provider Registry User"
    },
    {
      "code" : "TSP_USER",
      "display" : "Terminology Service Provider User"
    },
    {
      "code" : "PPH_USER",
      "display" : "Process Plugin Hub User"
    },
    {
      "code" : "BIO_USER",
      "display" : "Biobank User"
    },
    {
      "code" : "DSF_ADMIN",
      "display" : "DSF Administrator"
    }
  ]
}

```

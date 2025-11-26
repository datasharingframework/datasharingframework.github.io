# DSF Read Access Tag - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DSF Read Access Tag**

## CodeSystem: DSF Read Access Tag 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/CodeSystem/read-access-tag | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:DSF_Read_Access_Tag |

 
CodeSystem with read access tags 

 This Code system is referenced in the content logical definition of the following value sets: 

* [DSF_Read_Access_Tag](ValueSet-read-access-tag.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "read-access-tag",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/code-system"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
  "version" : "2.0.0",
  "name" : "DSF_Read_Access_Tag",
  "title" : "DSF Read Access Tag",
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
  "description" : "CodeSystem with read access tags",
  "caseSensitive" : true,
  "hierarchyMeaning" : "grouped-by",
  "versionNeeded" : false,
  "content" : "complete",
  "count" : 4,
  "concept" : [
    {
      "code" : "LOCAL",
      "display" : "Local",
      "definition" : "Read access for local users"
    },
    {
      "code" : "ORGANIZATION",
      "display" : "Organization",
      "definition" : "Read access for organization specified via extension http://dsf.dev/fhir/StructureDefinition/extension-read-access-organization"
    },
    {
      "code" : "ROLE",
      "display" : "Role",
      "definition" : "Read access for member organizations with role in consortium (parent organization) specified via extension http://dsf.dev/fhir/StructureDefinition/extension-read-access-consortium-role"
    },
    {
      "code" : "ALL",
      "display" : "All",
      "definition" : "Read access for remote and local users"
    }
  ]
}

```

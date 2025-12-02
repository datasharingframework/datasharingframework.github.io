# DSF Process Authorization - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DSF Process Authorization**

## CodeSystem: DSF Process Authorization 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/CodeSystem/process-authorization | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:DSF_Process_Authorization |

 
CodeSystem with proces authorization codes 

 This Code system is referenced in the content logical definition of the following value sets: 

* [DSF_Process_Authorization_Recipient](ValueSet-process-authorization-recipient.md)
* [DSF_Process_Authorization_Requester](ValueSet-process-authorization-requester.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "process-authorization",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/code-system"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/CodeSystem/process-authorization",
  "version" : "2.0.0",
  "name" : "DSF_Process_Authorization",
  "title" : "DSF Process Authorization",
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
  "description" : "CodeSystem with proces authorization codes",
  "caseSensitive" : true,
  "hierarchyMeaning" : "grouped-by",
  "versionNeeded" : false,
  "content" : "complete",
  "count" : 9,
  "concept" : [
    {
      "code" : "LOCAL_ORGANIZATION",
      "display" : "LOCAL_ORGANIZATION",
      "definition" : "Process authorization for a local organization specified via extension http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization"
    },
    {
      "code" : "LOCAL_ORGANIZATION_PRACTITIONER",
      "display" : "LOCAL_ORGANIZATION_PRACTITIONER",
      "definition" : "Process authorization for local users with a specific practitioner role in an organization specified via extension http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner"
    },
    {
      "code" : "REMOTE_ORGANIZATION",
      "display" : "REMOTE_ORGANIZATION",
      "definition" : "Process authorization for a remote organization specified via extension http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization"
    },
    {
      "code" : "LOCAL_ROLE",
      "display" : "LOCAL_ROLE",
      "definition" : "Process authorization for a local parent organization member with a role specified via extension http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-parent-organization-role"
    },
    {
      "code" : "LOCAL_ROLE_PRACTITIONER",
      "display" : "LOCAL_ROLE_PRACTITIONER",
      "definition" : "Process authorization for local users with a specific practitioner role in a parent organization member with a role specified via extension http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-parent-organization-role-practitioner"
    },
    {
      "code" : "REMOTE_ROLE",
      "display" : "REMOTE_ROLE",
      "definition" : "Process authorization for a remote parent organization member with a role specified via extension http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-parent-organization-role"
    },
    {
      "code" : "LOCAL_ALL",
      "display" : "LOCAL_ALL",
      "definition" : "Process authorization for all local organizations"
    },
    {
      "code" : "LOCAL_ALL_PRACTITIONER",
      "display" : "LOCAL_ALL_PRACTITIONER",
      "definition" : "Process authorization for all local users with a specific practitioner role specified via extension http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-practitioner"
    },
    {
      "code" : "REMOTE_ALL",
      "display" : "REMOTE_ALL",
      "definition" : "Process authorization for all remote organizations"
    }
  ]
}

```

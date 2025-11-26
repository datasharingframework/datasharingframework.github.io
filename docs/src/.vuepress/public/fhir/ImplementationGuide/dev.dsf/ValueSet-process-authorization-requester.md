# DSF Process Authorization Requester - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DSF Process Authorization Requester**

## ValueSet: DSF Process Authorization Requester 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/ValueSet/process-authorization-requester | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:DSF_Process_Authorization_Requester |

 
ValueSet with proces authorization codes for requesters 

 **References** 

* [ProcessAuthorization](StructureDefinition-extension-process-authorization.md)

### Logical Definition (CLD)

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "process-authorization-requester",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/value-set"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/ValueSet/process-authorization-requester",
  "version" : "2.0.0",
  "name" : "DSF_Process_Authorization_Requester",
  "title" : "DSF Process Authorization Requester",
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
  "description" : "ValueSet with proces authorization codes for requesters",
  "immutable" : true,
  "compose" : {
    "include" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/process-authorization",
        "version" : "2.0.0",
        "concept" : [
          {
            "code" : "LOCAL_ORGANIZATION",
            "display" : "LOCAL_ORGANIZATION"
          },
          {
            "code" : "LOCAL_ORGANIZATION_PRACTITIONER",
            "display" : "LOCAL_ORGANIZATION_PRACTITIONER"
          },
          {
            "code" : "REMOTE_ORGANIZATION",
            "display" : "REMOTE_ORGANIZATION"
          },
          {
            "code" : "LOCAL_ROLE",
            "display" : "LOCAL_ROLE"
          },
          {
            "code" : "LOCAL_ROLE_PRACTITIONER",
            "display" : "LOCAL_ROLE_PRACTITIONER"
          },
          {
            "code" : "REMOTE_ROLE",
            "display" : "REMOTE_ROLE"
          },
          {
            "code" : "LOCAL_ALL",
            "display" : "LOCAL_ALL"
          },
          {
            "code" : "LOCAL_ALL_PRACTITIONER",
            "display" : "LOCAL_ALL_PRACTITIONER"
          },
          {
            "code" : "REMOTE_ALL",
            "display" : "REMOTE_ALL"
          }
        ]
      }
    ]
  }
}

```

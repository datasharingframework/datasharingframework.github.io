# DsfOrganizationIdentifier - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DsfOrganizationIdentifier**

## NamingSystem: DsfOrganizationIdentifier 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/NamingSystem/dsf-organization | *Version*: |
| Active as of 2025-10-27 | *Computable Name*:DsfOrganizationIdentifier |

 
Shortest DNS that resolves the homepage of the organization, e.g. hs-heilbronn.de, ukhd.de, uksh.de 

Profile: [NamingSystem](StructureDefinition-naming-system.md)

Tag: All (Details: DSF Read Access Tag code ALL = 'All')

### Summary

| | |
| :--- | :--- |
| Defining URL | http://dsf.dev/fhir/NamingSystem/dsf-organization |
| Name | DsfOrganizationIdentifier |
| Status | active |
| Definition | Shortest DNS that resolves the homepage of the organization, e.g. hs-heilbronn.de, ukhd.de, uksh.de |
| Publisher | DSF Community |

### Identifiers

* **Type**: Other
  * **Value**: http://dsf.dev/sid/organization-identifier



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "dsf-organization",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/naming-system"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
      "valueUri" : "http://dsf.dev/fhir/NamingSystem/dsf-organization"
    }
  ],
  "name" : "DsfOrganizationIdentifier",
  "status" : "active",
  "kind" : "identifier",
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
  "description" : "Shortest DNS that resolves the homepage of the organization, e.g. hs-heilbronn.de, ukhd.de, uksh.de",
  "usage" : "Used withing the DSF to identify organizations",
  "uniqueId" : [
    {
      "modifierExtension" : [
        {
          "url" : "http://dsf.dev/fhir/StructureDefinition/extension-check-logical-reference",
          "valueBoolean" : true
        }
      ],
      "type" : "other",
      "value" : "http://dsf.dev/sid/organization-identifier"
    }
  ]
}

```

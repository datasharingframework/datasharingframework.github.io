# DsfPractitionerIdentifier - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DsfPractitionerIdentifier**

## NamingSystem: DsfPractitionerIdentifier 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/NamingSystem/dsf-practitioner | *Version*: |
| Active as of 2025-10-27 | *Computable Name*:DsfPractitionerIdentifier |

 
E-mail address identifying a practitioner 

Profile: [NamingSystem](StructureDefinition-naming-system.md)

Tag: All (Details: DSF Read Access Tag code ALL = 'All')

### Summary

| | |
| :--- | :--- |
| Defining URL | http://dsf.dev/fhir/NamingSystem/dsf-practitioner |
| Name | DsfPractitionerIdentifier |
| Status | active |
| Definition | E-mail address identifying a practitioner |
| Publisher | DSF Community |

### Identifiers

* **Type**: Other
  * **Value**: http://dsf.dev/sid/practitioner-identifier



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "dsf-practitioner",
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
      "valueUri" : "http://dsf.dev/fhir/NamingSystem/dsf-practitioner"
    }
  ],
  "name" : "DsfPractitionerIdentifier",
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
  "description" : "E-mail address identifying a practitioner",
  "usage" : "Used withing the DSF to identify practitioners",
  "uniqueId" : [
    {
      "type" : "other",
      "value" : "http://dsf.dev/sid/practitioner-identifier"
    }
  ]
}

```

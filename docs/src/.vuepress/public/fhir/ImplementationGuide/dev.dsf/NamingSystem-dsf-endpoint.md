# DsfEndpointIdentifier - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DsfEndpointIdentifier**

## NamingSystem: DsfEndpointIdentifier 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/NamingSystem/dsf-endpoint | *Version*: |
| Active as of 2025-10-27 | *Computable Name*:DsfEndpointIdentifier |

 
Shortest DNS that resolves a DSF endpoint, typically the domain name used in endpoint.address 

Profile: [NamingSystem](StructureDefinition-naming-system.md)

Tag: All (Details: DSF Read Access Tag code ALL = 'All')

### Summary

| | |
| :--- | :--- |
| Defining URL | http://dsf.dev/fhir/NamingSystem/dsf-endpoint |
| Name | DsfEndpointIdentifier |
| Status | active |
| Definition | Shortest DNS that resolves a DSF endpoint, typically the domain name used in endpoint.address |
| Publisher | DSF Community |

### Identifiers

* **Type**: Other
  * **Value**: http://dsf.dev/sid/endpoint-identifier



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "dsf-endpoint",
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
      "valueUri" : "http://dsf.dev/fhir/NamingSystem/dsf-endpoint"
    }
  ],
  "name" : "DsfEndpointIdentifier",
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
  "description" : "Shortest DNS that resolves a DSF endpoint, typically the domain name used in endpoint.address",
  "usage" : "Used withing the DSF to identify endpoints",
  "uniqueId" : [
    {
      "modifierExtension" : [
        {
          "url" : "http://dsf.dev/fhir/StructureDefinition/extension-check-logical-reference",
          "valueBoolean" : true
        }
      ],
      "type" : "other",
      "value" : "http://dsf.dev/sid/endpoint-identifier"
    }
  ]
}

```

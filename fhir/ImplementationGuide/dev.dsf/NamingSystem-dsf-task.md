# DsfTaskIdentifier - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DsfTaskIdentifier**

## NamingSystem: DsfTaskIdentifier 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/NamingSystem/dsf-task | *Version*: |
| Active as of 2025-11-26 | *Computable Name*:DsfTaskIdentifier |

 
Name identifying a draft Task resource 

Profile: [NamingSystem](StructureDefinition-naming-system.md)

Tag: All (Details: DSF Read Access Tag code ALL = 'All')

### Summary

| | |
| :--- | :--- |
| Defining URL | http://dsf.dev/fhir/NamingSystem/dsf-task |
| Name | DsfTaskIdentifier |
| Status | active |
| Definition | Name identifying a draft Task resource |
| Publisher | DSF Community |

### Identifiers

* **Type**: Other
  * **Value**: http://dsf.dev/sid/task-identifier



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "dsf-task",
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
      "valueUri" : "http://dsf.dev/fhir/NamingSystem/dsf-task"
    }
  ],
  "name" : "DsfTaskIdentifier",
  "status" : "active",
  "kind" : "identifier",
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
  "description" : "Name identifying a draft Task resource",
  "usage" : "Used withing the DSF to identify draft Task resources, created as examples using process plugins. Values must be defined in the form {process-url}/{process-version}/{task-example-name} e.g. http://test.org/bpe/Process/someProcessName/1.0/someExampleName",
  "uniqueId" : [
    {
      "type" : "other",
      "value" : "http://dsf.dev/sid/task-identifier"
    }
  ]
}

```

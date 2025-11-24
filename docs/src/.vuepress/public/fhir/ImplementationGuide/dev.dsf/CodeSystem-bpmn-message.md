# DSF BPMN message values - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DSF BPMN message values**

## CodeSystem: DSF BPMN message values 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/CodeSystem/bpmn-message | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:DsfBpmnMessage |

 
CodeSystem with standard BPMN message values for Task resources 

 This Code system is referenced in the content logical definition of the following value sets: 

* [DsfBpmnMessage](ValueSet-bpmn-message.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "bpmn-message",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/code-system"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/CodeSystem/bpmn-message",
  "version" : "2.0.0",
  "name" : "DsfBpmnMessage",
  "title" : "DSF BPMN message values",
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
  "description" : "CodeSystem with standard BPMN message values for Task resources",
  "caseSensitive" : true,
  "hierarchyMeaning" : "grouped-by",
  "versionNeeded" : false,
  "content" : "complete",
  "count" : 4,
  "concept" : [
    {
      "code" : "message-name",
      "display" : "Message Name",
      "definition" : "BPMN 2.0 message event name"
    },
    {
      "code" : "business-key",
      "display" : "Business Key",
      "definition" : "Workflow engine business key used to identify process instances"
    },
    {
      "code" : "correlation-key",
      "display" : "Correlation Key",
      "definition" : "DSF BPE correlation key used to identify multi-instance instances used for messaging multiple targets"
    },
    {
      "code" : "error",
      "display" : "Error",
      "definition" : "Explaining why this task failed"
    }
  ]
}

```

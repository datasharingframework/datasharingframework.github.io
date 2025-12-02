# Example Subscription - dsf-bpmn-task-subscription - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example Subscription - dsf-bpmn-task-subscription**

## Example Subscription: Example Subscription - dsf-bpmn-task-subscription

Profile: [Subscription](StructureDefinition-subscription.md)

Tag: Local (Details: DSF Read Access Tag code LOCAL = 'Local')

**status**: Active

**reason**: Businness Process Engine

**criteria**: Task?status=requested

### Channels

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Payload** |
| * | Websocket | application/fhir+json |



## Resource Content

```json
{
  "resourceType" : "Subscription",
  "id" : "dsf-bpmn-task-subscription",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/subscription"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "LOCAL"
      }
    ]
  },
  "status" : "active",
  "reason" : "Businness Process Engine",
  "criteria" : "Task?status=requested",
  "channel" : {
    "type" : "websocket",
    "payload" : "application/fhir+json"
  }
}

```

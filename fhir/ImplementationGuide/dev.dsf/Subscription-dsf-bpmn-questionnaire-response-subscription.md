# Example Subscription - dsf-bpmn-questionnaire-response-subscription - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Example Subscription - dsf-bpmn-questionnaire-response-subscription**

## Example Subscription: Example Subscription - dsf-bpmn-questionnaire-response-subscription

Profile: [Subscription](StructureDefinition-subscription.md)

Tag: Local (Details: DSF Read Access Tag code LOCAL = 'Local')

**status**: Active

**reason**: Businness Process Engine

**criteria**: QuestionnaireResponse?status=completed

### Channels

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Payload** |
| * | Websocket | application/fhir+json |



## Resource Content

```json
{
  "resourceType" : "Subscription",
  "id" : "dsf-bpmn-questionnaire-response-subscription",
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
  "criteria" : "QuestionnaireResponse?status=completed",
  "channel" : {
    "type" : "websocket",
    "payload" : "application/fhir+json"
  }
}

```

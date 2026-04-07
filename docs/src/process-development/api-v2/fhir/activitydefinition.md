---
title: ActivityDefinition
icon: creative
---

## ActivityDefinition

[ActivityDefinitions](http://hl7.org/fhir/R4/activitydefinition.html) are used by the DSF to advertise which processes are available at any given instance and who is allowed to request and who is allowed to execute a process. The DSF defined elements for this purpose in the [dsf-activity-definition](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-activity-definition-2.0.0.xml) profile.


The most important elements in ActivityDefinitions are:
- `message-name`
- `task-profile`
- `requester`
- `recipient`

The `message-name` element contains the name of the [BPMN message start event](../bpmn/messaging.md#message-start-event) or [BPMN message intermediate catching event](../bpmn/messaging.md#message-intermediate-catching-event) which expects a [Task](task.md) resource complying to the profile defined by `task-profile`.

The `requester` and `recipient` elements define the organisation(s) or person(s) who are allowed to request or receive the message specified by `message-name`. The receiving DSF instance is the one who will execute the process connected to the message. A list of examples for all possible `requester` and `recipient` elements is located [here](../dsf/requester-and-recipient.md).

Creating [ActivityDefinitions](activitydefinition.md) is part of developing a process plugin. Readers fluent in understanding XML FHIR definitions and translating them into resources may take a look at the DSF's profile for ActivityDefinitions [here](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-activity-definition-2.0.0.xml). ActivityDefinitions also reference other resource definitions. Depending on the resource they are located in one of [these folders](https://github.com/datasharingframework/dsf/tree/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir). There is also the guide on [creating ActivityDefinitions](../guides/creating-activity-definitions.md) for more in-depth information.

## Related Topics
[Requester and Recipient](../dsf/requester-and-recipient.md), [Read Access Tag](../dsf/read-access-tag.md), [Task](task.md)

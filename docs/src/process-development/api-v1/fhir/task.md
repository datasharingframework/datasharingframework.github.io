---
title: Task
icon: creative
---

## Task

The [FHIR Task](https://www.hl7.org/fhir/R4/task.html) resource enables the DSF's distributed communication. Whenever a BPMN process instance communicates with a different process instance, the DSF will create a Task resource based on parameters set in the BPMN model and during execution. It will then automatically send the Task resource to the recipient to start or continue whatever process the Task resource referred to. All Task resources used in the DSF derive from the [dsf-task-base](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml). This profile includes a splicing for `Task.input` with three additional [Input Parameters](task.md#task-input-parameters):
- `message-name`
- `business-key`
- `correlation-key`

When creating a process plugin, it is usually necessary to create new profiles based on the [dsf-task-base](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml) and put them into `src/resources/fhir/StructureDefinition`.

### Task Input Parameters

Task Input Parameters allow adding additional information to [Task](task.md#task) resources. For example, if a particular data exchange requires additional medical data, one would add a slice to the Task profile in the same way the [dsf-task-base](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml) adds slices to the original [FHIR Task](https://www.hl7.org/fhir/R4/task.html) resource. It is import to know that this also requires creating a [CodeSystem](codesystem.md) and including it in a [ValueSet](valueset.md) to be able to use it in the Task resource.

## Related Topics
[ActivityDefinition](activitydefinition.md), [Adding Task Input Parameter to Task Profiles](../guides/adding-task-input-parameters-to-task-profiles.md)

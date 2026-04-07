---
title: Task
icon: creative
---

## Task

The [FHIR Task](https://www.hl7.org/fhir/R4/task.html) resource enables the DSF's distributed communication. Whenever a BPMN process instance communicates with a different process instance, the DSF will create a Task resource based on parameters set in the BPMN model and during execution. It will then automatically send the Task resource to the recipient to start or continue whatever process the Task resource referred to. All Task resources used in the DSF derive from the [DSF Task base definition](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-2.0.0.xml). This profile includes a splicing for `Task.input` with three additional [Input Parameters](task.md#task-input-parameters):
- `message-name`
- `business-key`
- `correlation-key`

When creating a process plugin, it is usually necessary to create new profiles based on the [DSF Task base definition](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-2.0.0.xml) and put them into `src/resources/fhir/StructureDefinition`.

### Task Input Parameters

Task Input Parameters allow adding additional information to [Task](task.md#task) resources before they are starting a process. For example, if a particular process requires an additional string value, one would add a slice to the Task profile in the same way the [DSF Task base definition](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-2.0.0.xml) adds slices to the original [FHIR Task](https://www.hl7.org/fhir/R4/task.html) resource in the `message-name` slice. It is import to know that this also requires creating a [CodeSystem](codesystem.md) and including it in a [ValueSet](valueset.md) to be able to use it in the Task resource.

### Task Output Parameter
Task Output Parameters function the same way as Input Parameters but are used to add information when a process has finished executing. This is usually used to display the result of the executed process. If the process fails because an uncaught exception is thrown, the DSF will update a Task to status `failed` and include the exception as an Output Parameter.

## Related Topics
[ActivityDefinition](activitydefinition.md), [Adding Task Parameters to Task Profiles](../guides/adding-task-parameters-to-task-profiles.md)

# Task - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* **Task**

## Task

The [FHIR Task](https://www.hl7.org/fhir/R4/task.html) resource enables the DSF's distributed communication. Whenever a BPMN process instance communicates with a different process instance, the DSF will create a Task resource based on parameters you set in the BPMN model and during execution. It will then automatically send the Task resource to the recipient to start or continue whatever process the Task resource referred to. All Task resources used in the DSF derive from the [dsf-task-base](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml). This profile includes a splicing for `Task.input` with three additional Input Parameters:

* `message-name`
* `business-key`
* `correlation-key`

When creating your own plugin, you will want to create your own profiles based on the [dsf-task-base](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml) and put them into `src/resources/fhir/StructureDefinition`.

#### Task Input Parameters

Task Input Parameters allow you to add additional information to Task resources. For example, if your particular data exchange requires additional medical data, you would add a slice to your Task profile in the same way the [dsf-task-base](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml) adds slices to the original [FHIR Task](https://www.hl7.org/fhir/R4/task.html) resource. Notice that this also requires creating a CodeSystem and including it in a ValueSet to be able to use it in the Task resource.

#### Task Output Parameters

Task Output Parameters server a similar purpose to Task Input Parameters. They add additional information to a Task resource, but for a different context. While Task Input Parameters provide additional information which is required to process the Task, Task Output Parameters provide information on the Task's completion. For example, in the context of a voting process, you might add the results of the vote as a Task Output Parameter. You would add a slice to your Task profile in the same way the [dsf-task-base](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml) adds slices to the original [FHIR Task](https://www.hl7.org/fhir/R4/task.html) resource. Notice that this also requires creating a CodeSystem and including it in a ValueSet to be able to use it in the Task resource.


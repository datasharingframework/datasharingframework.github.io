---
title: Messaging
icon: creative
---

### Messaging

BPMN does not provide an implementation for its [messaging](../bpmn/messaging.md) model, nor does the Business Process Engines the DSF is currently built upon. The DSF implements messaging through FHIR [Task](../fhir/task.md) resources. Sending a message is thus equivalent to making an HTTP POST request including a [Task](../fhir/task.md) resource to another (DSF) FHIR server. This step is done by the DSF automatically if the required prerequisites are met.

### Messaging Prerequisites

After modelling communication using [BPMN message elements](../bpmn/messaging.md), the DSF will create a [Task](../fhir/task.md) resource based on the field injection values `profile`, `messageName` and `instantiatesCanonical` of the [BPMN message element](../bpmn/messaging.md) and the additional input parameters provided by the [activity's](message-activities.md) `getAdditionalInputParameters` method. The [Task](../fhir/task.md) is then sent to the recipient specified by the [Target](target-and-targets.md) instance set in the current process execution as a [process variable](bpmn-process-variables.md).

## Related Topics
[Activities](activities.md), [Message Activities](message-activities.md), [Process Plugin API](process-plugin-api.md), [Task](../fhir/task.md)
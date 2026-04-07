---
title: Message Activities
icon: creative
---

### Message Activities

Compared to other [Activities](activities.md), Message Activities additionally extend the [Message Activity](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-bpe/dsf-bpe-process-api-v2/src/main/java/dev/dsf/bpe/v2/activity/MessageActivity.java) interface. It provides additional methods which are specific to messaging:

- `getTaskSender`: Overriding this method allows fine control over how the message should be sent as a [Task](../fhir/task.md) resource by returning a custom [`TaskSender`](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-bpe/dsf-bpe-process-api-v2/src/main/java/dev/dsf/bpe/v2/activity/task/TaskSender.java) implementation
- `getBusinessKeyStrategy`: Overriding this method allows setting a different [`BusinessKeyStrategy`](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-bpe/dsf-bpe-process-api-v2/src/main/java/dev/dsf/bpe/v2/activity/task/BusinessKeyStrategies.java)
- `getAdditionalInputParameters`: If the message should contain additional information beyond what the DSF automatically sets, like the `business-key`, this method needs to be overridden to return that information in the form of [Task Input Parameters](../fhir/task.md#task-input-parameters)

## Related Topics
[Messaging](messaging.md)
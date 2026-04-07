---
title: Message Correlation
icon: creative
---

## Message Correlation

Having messages arrive at the correct process instance requires a mechanism to link them to their rightful process instance. This mechanism is called Message Correlation and attaches a unique identifier to every process instance. This identifier is called the `business-key`. The `business-key` will get attached to every outgoing message automatically. A message can then be sent back to the organization which initiated the communication and have it arrive at the same process instance that initially sent the message since the returning message will have the same `business-key` attached.

It is possible that the `business-key` is insufficient to map messages to the correct process instance. Like when using subprocesses in the BPMN model which all expect messages to be sent to them, not the parent process. To solve this issue, [Task](../fhir/task.md) resources also come with an [Input Parameter](../fhir/task.md#task-input-parameters) called `correlation-key`. This is a secondary identifier attachable to all messages if they need to arrive at a specific subprocess. The [`Variables`](bpmn-process-variables.md) class provides methods to create `Targets` with a `correlation-key` value. The value is usually given as a UUID. When using the [Process Plugin API's](process-plugin-api.md) `TargetProvider` to create targets for messages, its builder offers the option to decide whether a `correlation-key` should be part of each `Target` instance. If set, the [Task](../fhir/task.md) will automatically have a `correlation-key` set when it is sent to the target.
---
title: Message Correlation
icon: creative
---

### Message Correlation

In order for messages to be able to be sent back and forth between organizations with potentially multiple of the same process plugin instances running at the same time and still arriving at the correct process instance, we need some mechanism to map messages to their rightful process instance. This mechanism is called Message Correlation and requires attaching a unique identifier to every process instance. This identifier is called the `business-key`. The `business-key` will get attached to every outgoing message automatically.

It is possible that the `business-key` is insufficient to map messages to the correct process instance. This happens when you use subprocesses in your BPMN model which all expect messages to be sent to them, not the parent process. To solve this issue, [Task](../fhir/task.md) resources also come with an [Input Parameter](../fhir/task.md#task-input-parameters) called `correlation-key`. This is a secondary identifier you can attach to all messages if you need them to arrive at a specific subprocess. You can learn more about how `correlation-keys` are used by studying the [Ping-Pong Process](https://github.com/datasharingframework/dsf-process-ping-pong).
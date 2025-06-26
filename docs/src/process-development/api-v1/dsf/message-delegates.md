---
title: Message Delegates
icon: creative
---

## Message Delegates

Message Delegates are the Java representation of the [Message Events](../bpmn/messaging.md) in a BPMN model. Message Delegates are linked to a certain [Message Event](../bpmn/messaging.md) by selecting the Message Event in the [Camunda Modeler](https://camunda.com/download/modeler/) and adding a Java class to the `Implementation` field. This uses the fully qualified class name. For example:
```
org.package.MyClass
```

Message Delegates are only needed for [Message Send Events](../bpmn/messaging.md). Incoming messages will be resolved to the correct [BPMN process execution](bpmn-process-execution.md) automatically using [Message Correlation](message-correlation.md) and the message inputs will be added to that execution's [process variables](bpmn-process-variables.md).

To make a Message Delegate for [Message Send Events](../bpmn/messaging.md), the Java class needs to extend `AbstractTaskMessageSend`. Most of the time, there will not be any processing logic inside Message Delegates, therefore the `execute` method will not be overridden like with [Service Delegates](../dsf/service-delegates.md). Although there might be cases where this is necessary. Instead, Message Delegates should be used to aggregate previously computed data and attach it to the message. This is done by overriding the `getAdditionalInputParamters` method. The DSF translates BPMN messages into FHIR [Task](../fhir/task.md) resources to execute the communication modeled in BPMN diagrams. The information being sent to another BPMN process is specified in the Task.input elements a.k.a. [Input Parameters](../fhir/task.md#task-input-parameters), hence the name of the method. The constructor of your delegate class should also forward a `ProcessPluginApi` instance to its superclass constructor.


## Related Topics
[Messaging](../bpmn/messaging.md), [Input Parameters](../fhir/task.md#task-input-parameters), [Adding Input Parameter to Task Profiles](../guides/adding-task-input-parameters-to-task-profiles.md)
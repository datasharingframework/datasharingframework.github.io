---
title: Message Delegates
icon: creative
---

### Message Delegates

Message Delegates are the Java representation of the [Message Events](../bpmn/messaging.md) in your BPMN model. You link a Message Delegate to a certain [Message Event](../bpmn/messaging.md) by selecting the Message Event in the [Camunda Modeler](https://camunda.com/download/modeler/) and adding a Java class to the `Implementation` field. Make sure you use the fully qualified class name. Like this:
```
org.package.myClass
```

You will only need Message Delegates for [Message Send Events](../bpmn/messaging.md). Incoming messages will be resolved to the correct [BPMN process execution](bpmn-process-execution.md) automatically using [Message Correlation](message-correlation.md) and the message inputs will be added to that execution's [process variables](bpmn-process-variables.md).

To make a Message Delegate for [Message Send Events](../bpmn/messaging.md), your Java class needs to extend `AbstractTaskMessageSend`. Most of the time, you will not be adding any processing logic to your Message Delegates, therefore you usually won't be overwriting the `doExecute` method like with [Service Delegates](service-delegates.md). Instead, you most likely want to aggregate the information you processed in earlier steps and attach it to a message. For this you need to overwrite the `getAdditionalInputParamters` method. The DSF translates BPMN messages into FHIR [Task](../fhir/task.md) resources to execute the communication modeled by your BPMN diagrams. The information you are sending to another BPMN process is specified in the Task.input elements a.k.a. [Input Parameters](../fhir/task.md#task-input-parameters), hence the name of the method. The constructor of your delegate class should also forward a `ProcessPluginApi` instance to its superclass constructor. You can learn more about the `ProcessPluginApi` [here](process-plugin-api.md).

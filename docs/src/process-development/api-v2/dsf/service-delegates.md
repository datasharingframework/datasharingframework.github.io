---
title: Service Delegates
icon: creative
---

## Service Delegates

Service Delegates are the Java representation of the [Service Tasks](../bpmn/service-tasks.md) in a BPMN model. Service Delegates are linked to a certain [Service Task](../bpmn/service-tasks.md) by selecting the [Service Task](../bpmn/service-tasks.md) in the [Camunda Modeler](https://camunda.com/download/modeler/) and adding a Java class to the `Implementation` field. This uses the fully qualified class name:
```
org.package.MyClass
```
Java classes need to implement the `ServiceTask` interface and override the `execute` method. This method holds the actual business logic. The method will be called when the [BPMN process execution](../dsf/bpmn-process-execution.md) arrives at the [Service Task](../bpmn/service-tasks.md) a Service Delegate is linked to.

## Related Topics
[BPMN Process Execution](../dsf/bpmn-process-execution.md), [Message Delegates](message-delegates.md), [Service Tasks](../bpmn/service-tasks.md)

---
title: Service Delegates
icon: creative
---

## Service Delegates

Service Delegates are the Java representation of the [Service Tasks](../bpmn/service-tasks.md) in a BPMN model. Service Delegates are linked to a certain [Service Task](../bpmn/service-tasks.md) by selecting the [Service Task](../bpmn/service-tasks.md) in the [Camunda Modeler](https://camunda.com/download/modeler/) and adding a Java class to the `Implementation` field. This uses the fully qualified class name:
```
org.package.MyClass
```
Java classes need to extend `AbstractServiceDelegate` and override the `doExecute` method. This method holds the actual business logic. The method will be called when the [BPMN process execution](../dsf/bpmn-process-execution.md) arrives at the [Service Task](../bpmn/service-tasks.md) a Service Delegate is linked to. The constructor of delegate classes also has to forward a `ProcessPluginApi` instance to its superclass constructor. An instance of the API can be [autowired](https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired.html) in the plugin's Spring configuration class when registering the delegate as a [Spring Bean](https://docs.spring.io/spring-framework/reference/core/beans/introduction.html).

## Related Topics
[BPMN Process Execution](../dsf/bpmn-process-execution.md), [Message Delegates](message-delegates.md), [Process Plugin API](process-plugin-api.md), [Service Tasks](../bpmn/service-tasks.md)
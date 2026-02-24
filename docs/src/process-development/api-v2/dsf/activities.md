---
title: Activities
icon: creative
---

### Activities

Activities are Java interfaces in the DSF API v2 that represent certain BPMN elements which can/need to specify a Java class as their `Implementation` value. Implementing Activity interfaces and [registering them as Spring beans](spring-framework-integration.md) causes the DSF to execute the code provided by the implementation when the process execution reaches the corresponding flow element. The value for the `Implementation` field of BPMN elements expects the fully qualified class name:
```
org.package.myClass
```

### List of Activities
- ExecutionListener
- MessageEndEvent
- MessageIntermediateThrowEvent
- MessageSendTask
- ServiceTask
- UserTaskListener

### ExecutionListener
`ExecutionListener` is the interface to be implemented for a class set as the Java implementation for [Execution Listeners](../bpmn/execution-listeners.md) attached to certain flow elements.

### MessageEndEvent
`MessageEndEvent` is the interface to be implemented for a class set as the Java implementation for Message End Events. It inherits from the `MessageActivity` interface which specifies additional methods specific to [messaging](messaging.md).

### MessageIntermediateThrowEvent
`MessageIntermediateThrowEvent` is the interface to be implemented for a class set as the Java implementation for Message Intermediate Throw Events. It inherits from the `MessageActivity` interface which specifies additional methods specific to [messaging](messaging.md).

### MessageSendTask
`MessageSendTask` is the interface to be implemented for a class set as the Java implementation for Message Send Tasks. It inherits from the `MessageActivity` interface which specifies additional methods specific to [messaging](messaging.md).

### ServiceTask
`ServiceTask` is the interface to be implemented for a class set as the Java implementation for Service Tasks.

### UserTaskListener
`ServiceTask` is the interface to be implemented for a class set as the Java implementation for Service Tasks's Task Listener. Task Listeners have properties that separate them from [Execution Listeners](../bpmn/execution-listeners.md). More on Task Listeners in the guide on [User Tasks in the DSF](../guides/user-tasks-in-the-dsf.md)
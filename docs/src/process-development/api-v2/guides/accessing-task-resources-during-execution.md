---
title: Accessing Task Resources During Execution
icon: creative
---

## Accessing Task Resources During Execution

Access to the [Task](../fhir/task.md) resources in [Activities](../dsf/activities.md) is provided by the `Variables` class. It comes with methods which return certain kinds of [Task](../fhir/task.md) resources. The most commonly used ones are the start [Task](../fhir/task.md), referring to the [Task](../fhir/task.md) / [Message Start Event](../bpmn/messaging.md#message-start-event) responsible for starting the process, and the latest [Task](../fhir/task.md), referring to most recently received [Task](../fhir/task.md) / Message.  
In principle, this is sufficient to access all information in a [Task](../fhir/task.md) resource, since there is access to the full in-memory representation of the [Task](../fhir/task.md) resource. This however can be very cumbersome to use and produces a lot of boilerplate when traversing the resource tree to access certain common elements.
Instead of navigating the [Task](../fhir/task.md) resource's element tree, it is recommended to use the [ProcessPluginApi's](../dsf/process-plugin-api.md) `TaskHelper` in conjunction with the method above. The `TaskHelper` class offers specific methods related to [Task](../fhir/task.md) resources.  
The most common use case for this is retrieving data from a [Task's](../fhir/task.md) [Input Parameter](../fhir/task.md#task-input-parameters) or creating a new [Input Parameter](../fhir/task.md#task-input-parameters) for a [Message Activity's](../dsf/message-activities.md) `getAdditionalInputParameters` method. 

### Retrieving Data from Input Parameters
1. Know the [CodeSystem](../fhir/codesystem.md) and Code of the `type` element of the [Input Parameter](../fhir/task.md#task-input-parameters) to extract data from. This depends on the [Task's](../fhir/task.md) [StructureDefinition](https://www.hl7.org/fhir/R4/structuredefinition.html). Example:  
```xml
<element id="Task.input:timer-interval.type.coding.system">
    <path value="Task.input.type.coding.system" />
    <min value="1" />
    <fixedUri value="http://dsf.dev/fhir/CodeSystem/dsf-monitor-status" />  <!-- system value -->
</element>
<element id="Task.input:timer-interval.type.coding.version">
    <path value="Task.input.type.coding.version"/>
    <min value="1"/>
    <max value="1"/>
    <fixedString value="#{version}"/>
</element>
<element id="Task.input:timer-interval.type.coding.code">
    <path value="Task.input.type.coding.code" />
    <min value="1" />
    <fixedCode value="timer-interval" />                                    <!-- code value -->
</element>
```
2. Know the [FHIR Datatype](https://www.hl7.org/fhir/R4/datatypes.html) of the [Input Parameter](../fhir/task.md#task-input-parameters) defined by its `value[x]` element. This also depends on the [Task's](../fhir/task.md) [StructureDefinition](https://www.hl7.org/fhir/R4/structuredefinition.html). Example:  
```xml
<element id="Task.input:timer-interval.value[x]">
    <path value="Task.input.value[x]" />
    <type>
        <code value="string" />                                             <!-- string -->
    </type>
</element>
```
3. The `TaskHelper's` getters for [Input Parameters](../fhir/task.md#task-input-parameters) should be used depending on the information available. The methods will try to match the provided [CodeSystem](../fhir/codesystem.md) and Code to any [Input Parameter](../fhir/task.md#task-input-parameters) of the provided [Task](../fhir/task.md) resource. Depending on the method it is possible to receive all matches or just the first one. There are also methods immediately returning the value of the [Input Parameter](../fhir/task.md#task-input-parameters) if the [FHIR Datatype](https://www.hl7.org/fhir/R4/datatypes.html) is provided. The `string` datatype is used often enough to have its own method immediately returning the String value of the matched [Input Parameter](../fhir/task.md#task-input-parameters).

## Related Topics
[Accessing BPMN Process Variables](accessing-bpmn-process-variables.md), [Activities](../dsf/activities.md), [Task](../fhir/task.md)
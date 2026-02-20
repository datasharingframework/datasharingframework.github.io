---
title: Creating Task Resources Based on a Definition
icon: creative
---

## Creating Task Resources Based on a Definition

This short guide provides an overview of how to create [Task](../fhir/task.md) resources for use in [Starting A Process Via Task Resources](../guides/starting-a-process-via-task-resources.md). As an example, a [Task](../fhir/task.md) resource based on the [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) profile is created.

Like all Task resources created for process plugins, the [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) is based on the [DSF's base definition for Task resources](https://dsf.dev/fhir/ImplementationGuide/dev.dsf/StructureDefinition-task.html). This base definition specifies mandatory elements for all Tasks in the DSF. This results in the following base template for all Tasks:
```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://my.org/fhir/StructureDefinition/my-task|1.0"/>  <!-- dummy value -->
    </meta>
    <instantiatesCanonical value="http://my.org/bpe/Process/myProcess|1.0"/>   <!-- dummy value -->
    <status value="draft"/>
    <intent value="order"/>
    <authoredOn value="2024-02-08T10:00:00+00:00"/>
    <requester>
        <type value="Organization"/>
        <identifier>
            <system value="http://dsf.dev/sid/organization-identifier"/>
            <value value="my.org" />                                      <!-- dummy value -->
        </identifier>
    </requester>
    <restriction>
        <recipient>
            <type value="Organization"/>
            <identifier>
                <system value="http://dsf.dev/sid/organization-identifier" />
                <value value="my.org" />                                  <!-- dummy value -->
            </identifier>
        </recipient>
    </restriction>
    <input>
        <type>
            <coding>
                <system value="http://dsf.dev/fhir/CodeSystem/bpmn-message" />
                <code value="message-name" />
            </coding>
        </type>
        <valueString value="myMessage"/>                                              <!-- dummy value -->
    </input>
</Task>
```

Start out by replacing dummy values with values appropriate for the [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml):

```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0"/>
    <status value="requested"/>
    <intent value="order"/>
    <authoredOn value="#{date}"/>
    <requester>
        <type value="Organization"/>
        <identifier>
            <system value="http://dsf.dev/sid/organization-identifier"/>
            <value value="dic.dsf.test" />
        </identifier>
    </requester>
    <restriction>
        <recipient>
            <type value="Organization"/>
            <identifier>
                <system value="http://dsf.dev/sid/organization-identifier" />
                <value value="dic.dsf.test" />
            </identifier>
        </recipient>
    </restriction>
    <input>
        <type>
            <coding>
                <system value="http://dsf.dev/fhir/CodeSystem/bpmn-message" />
                <code value="message-name" />
            </coding>
        </type>
        <valueString value="startDicProcess"/>
    </input>
</Task>
```
The `profile` will be the StructureDefinition the Task is based on, which in this case is the url of the [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) including the version of the plugin that should be targeted.

The `instantiatesCanonical` value is the same value as the one defined by the StructureDefinition [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml):
```xml
<element id="Task.instantiatesCanonical">
    <path value="Task.instantiatesCanonical" />
    <fixedCanonical value="http://dsf.dev/bpe/Process/dicProcess|#{version}" />
</element>
```

The `requester` element usually holds the identifier of the local organization but may be replaced by the `http://dsf.dev/sid/practitioner-identifier` CodeSystem, `requester.type` with value `Practitioner` and a practitioner identifier while the `recipient` element always holds the identifier of an organization.

The StructureDefinition [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) also mandates the string value for the [input](../fhir/task.md#task-input-parameters) to be fixed as `startDicProcess`:
```xml
<element id="Task.input:message-name.value[x]">
    <path value="Task.input.value[x]" />
    <fixedString value="startDicProcess" />
</element>
```

Depending on the StructureDefinition of the [Task](../fhir/task.md) resource, there may be more [input parameters](../fhir/task.md#task-input-parameters) of varying [FHIR data types](https://hl7.org/fhir/R4/datatypes.html) and including extensions.

## Related Topics
[Draft Task Resources](../dsf/draft-task-resources.md), [Task](../fhir/task.md)

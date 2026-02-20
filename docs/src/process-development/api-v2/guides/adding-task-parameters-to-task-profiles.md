---
title: Adding Task Parameters to Task Profiles
icon: creative
---

## Adding Task Parameters to Task Profiles
This guide will demonstrate adding Input Parameters to a Task profile but can be used analogously for Output Parameters as well by replacing instances of `input` with `output`

When adding a new [Input Parameter](../fhir/task.md#task-input-parameters) to a [Task](../fhir/task.md) profile,  a new slice is added to `Task.input`. [Slicing](https://www.hl7.org/fhir/R4/profiling.html#slicing) is part of [profiling](https://www.hl7.org/fhir/R4/profiling.html) in FHIR. Profiling lets you create your own FHIR definitions based on pre-existing FHIR definitions. A slicing defines constraints on element lists like `Task.input` e.g. by only allowing the elements to be of certain types. 
For example, there might be a list of fruits in a `FruitBasket` resource. Constraining that list to only include fruits of type `Apple`, `Banana` and `Orange` would be considered [slicing](https://www.hl7.org/fhir/R4/profiling.html#slicing).  
This guide will not cover how slicing works in general, only for the case presented by the DSF FHIR resource context. The goal will be to add a new [Input Parameter](../fhir/task.md#task-input-parameters) of type `example-input` to the `task-start-dic-process.xml` profile which will be used to submit `integer` values to a process called `dicProcess`.

As a first step, a slice to `task-start-dic-process.xml` is added. Since there is already a slicing defined on `Task.input` by `task-start-dic-process.xml`'s `baseDefinition`, this resource has to be looked at first. As a part of the [differential](https://www.hl7.org/fhir/R4/profiling.html#snapshot) statement, slicing also uses [Element Definitions](https://www.hl7.org/fhir/R4/elementdefinition.html).
The slicing for `Task.input` is defined in this part of the `baseDefinition`:
```xml
<element id="Task.input">
    <extension url="http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name">
        <valueString value="Parameter" />
    </extension>
    <path value="Task.input" />
    <slicing>
        <discriminator>
            <type value="value" />
            <path value="type.coding.system" />
        </discriminator>
        <discriminator>
            <type value="value" />
            <path value="type.coding.code" />
        </discriminator>
        <rules value="openAtEnd" />
    </slicing>
    <min value="1" />
</element>
```
*The resource can be found [here](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-2.0.0.xml)*

First look at the `discriminator` tag. Discriminators define the elements a FHIR processor needs to distinguish slices by. In this case, a processor would look at the values for `type.coding.system` and `type.coding.code` to determine which slice this element belongs to. The discriminator type `value` implies that `type.coding.system` and `type.coding.code` have to be present in all slices and need to have a fixed value. There is more information about discriminators in the [official FHIR documentation](https://www.hl7.org/fhir/R4/profiling.html#discriminator).

Now revisit `task-start-dic-process.xml` and start adding a slice called `example-input` to it:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Task.input:example-input">
            <path value="Task.input" />
            <sliceName value="example-input" />
            <min value="1" />
            <max value="1" />
        </element>
    </differential>
</StructureDefinition>
```
*Irrelevant elements for this guide are hidden by ... placeholders.*

There is now a slice defined on `Task.input` with the name and id of `example-input` and cardinality of `1..1`. The name and cardinality depend on the use case. It is recommended to also take a look at the documentation for [ElementDefinition.id](https://www.hl7.org/fhir/R4/elementdefinition.html#id) and [ElementDefinition.path](https://www.hl7.org/fhir/R4/elementdefinition.html#path). They explain how to create the proper values for these elements. Cardinality is also part of the [element definition](https://www.hl7.org/fhir/R4/elementdefinition.html) hierarchy (see [ElementDefinition.min](https://www.hl7.org/fhir/R4/elementdefinition-definitions.html#ElementDefinition.min) and [ElementDefinition.max](https://www.hl7.org/fhir/R4/elementdefinition-definitions.html#ElementDefinition.max)).

Next up is the binding for `Task.input:example-input.type`. Because `Task.input.type` is a `CodeableConcept` which uses codings from a [ValueSet](../fhir/valueset.md), the [discriminator](https://www.hl7.org/fhir/R4/profiling.html#discriminator) requires the use of `required` as the binding strength:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Task.input:example-input">
            <path value="Task.input" />
            <sliceName value="example-input" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Task.input:example-input.type">
            <path value="Task.input.type" />
            <binding>
                <strength value="required"/>
                <valueSet value="http://my.org/fhir/ValueSet/example" />
            </binding>
        </element>
    </differential>
</StructureDefinition>
```
The binding now references a [ValueSet](../fhir/valueset.md). Moving beyond this example will require referencing an existing [ValueSet](../fhir/valueset.md) resource or create a new one. A guide on how to create them can be found [here](../guides/creating-valuesets-for-dsf-processes.md).

Since the [discriminator](https://www.hl7.org/fhir/R4/profiling.html#discriminator) requires `Task.input.coding.code` and `Task.input.coding.system` to be present, `Task.input.coding` will be marked as mandatory as well:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Task.input:example-input">
            <path value="Task.input" />
            <sliceName value="example-input" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Task.input:example-input.type">
            <path value="Task.input.type" />
            <binding>
                <strength value="required"/>
                <valueSet value="http://my.org/fhir/ValueSet/example" />
            </binding>
        </element>
        <element id="Task.input:example-input.type.coding">
            <path value="Task.input.type.coding"/>
            <min value="1" />
        </element>
    </differential>
</StructureDefinition>
```

The beginning mentioned how `Task.input.type.coding.system` and `Task.input.type.coding.code` have to use fixed values. Here is how this is accomplished:

```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Task.input:example-input">
            <path value="Task.input" />
            <sliceName value="example-input" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Task.input:example-input.type">
            <path value="Task.input.type" />
            <binding>
                <strength value="required"/>
                <valueSet value="http://my.org/fhir/ValueSet/example" />
            </binding>
        </element>
        <element id="Task.input:example-input.type.coding">
            <path value="Task.input.type.coding"/>
            <min value="1" />
        </element>
        <element id="Task.input:example-input.type.coding.system">
            <path value="Task.input.type.coding.system"/>
            <min value="1"/>
            <fixedUri value="http://my.org/fhir/CodeSystem/example"/>
        </element>
        <element id="Task.input:example-input.type.coding.code">
            <path value="Task.input.type.coding.code"/>
            <min value="1"/>
            <fixedCode value="example-input" />
        </element>
    </differential>
</StructureDefinition>
```
*Notice the two new elements were marked as mandatory because they are required by the discriminator.*

The `type.coding.system` element references a [CodeSystem](../fhir/codesystem.md). The `type.coding.code` element uses a code from this [CodeSystem](../fhir/codesystem.md) called `example-input`. This is the mechanism by which  [Input Parameter](../fhir/task.md#task-input-parameters) are "named". The `type.coding.code` value will identify the [Input Parameter](../fhir/task.md#task-input-parameters) when it is used in an actual [Task](../fhir/task.md#task-input-parameters) resource. Here is how this would look like:

```xml
<Task xmlns="http://hl7.org/fhir">
    ...
    <input>
        <type>
            <coding>
                <system value="http://my.org/fhir/CodeSystem/example"/>
                <code value="example-input" />
            </coding>
        </type>
     ...
    </input>
</Task>
```

Adding a slice in a different use case will also require to reference an existing [CodeSystem](../fhir/codesystem.md) resource or create a new one to reference. A guide on how to create them can be found [here](../guides/creating-codesystems-for-dsf-processes.md).

`Task.input.value[x]` is the actual value submitted when using the Input Parameter. They may be any of [these](https://www.hl7.org/fhir/R4/datatypes.html#open) data types. This is because `Type.input.value[x]` refers to `*` instead of any particular type in its [definition](https://www.hl7.org/fhir/R4/task-definitions.html#Task.input.value_x_). In this case, let it be an `integer` type`:

```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Task.input:example-input">
            <path value="Task.input" />
            <sliceName value="example-input" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Task.input:example-input.type">
            <path value="Task.input.type" />
            <binding>
                <strength value="required"/>
                <valueSet value="http://my.org/fhir/ValueSet/example" />
            </binding>
        </element>
        <element id="Task.input:example-input.type.coding">
            <path value="Task.input.type.coding"/>
            <min value="1" />
        </element>
        <element id="Task.input:example-input.type.coding.system">
            <path value="Task.input.type.coding.system"/>
            <min value="1"/>
            <fixedUri value="http://my.org/fhir/CodeSystem/example"/>
        </element>
        <element id="Task.input:example-input.type.coding.code">
            <path value="Task.input.type.coding.code"/>
            <min value="1"/>
            <fixedCode value="example-input" />
        </element>
        <element id="Task.input:example-input.value[x]">
            <path value="Task.input.value[x]"/>
            <type>
                <code value="integer"/>
            </type>
        </element>
    </differential>
</StructureDefinition>
```

There is now a new Input Parameter of type `example-input` which accepts any `integer` as its value.

## Related Topics
[Creating CodeSystems for DSF processes](creating-codesystems-for-dsf-processes.md), [Creating ValueSets for DSF processes](creating-valuesets-for-dsf-processes.md), [Task](../fhir/task.md)

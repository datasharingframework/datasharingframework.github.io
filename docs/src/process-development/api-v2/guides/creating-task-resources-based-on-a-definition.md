---
title: Creating Task Resources Based on a Definition
icon: creative
---

## Creating Task Resources Based on a Definition

This short guide provides an overview of how to create [Task](../fhir/task.md) resources for use in [Starting A Process Via Task Resources](../guides/starting-a-process-via-task-resources.md). The free version of [Forge](https://simplifier.net/forge?utm_source=firely-forge) is used to support visualization. A free account can be created to follow the process directly; however, screenshots of relevant views are included for reference. Note that the free version of Forge [must not be used commercially](https://simplifier.net/pricing). As an example, a [Task](../fhir/task.md) resource based on the [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) profile is created.


### 1st Step: Removing Placeholders
[`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) includes placeholders for the `version` and `date` elements. For the purpose of this guide, these elements can either be removed or commented out to prevent Forge from performing type checking on them, which would otherwise result in an error and cause Forge to not load the file.

### 2nd Step: Differential Chain
If the resource profile is only available as a [differential](https://www.hl7.org/fhir/R4/profiling.html#snapshot), as in this case, it is helpful to aggregate the changes made to the base resource (in this case [Task](../fhir/task.md)) by all profiles to improve readability. To accomplish this, all relevant profiles are required. The [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) file is already present. This file lists a resource called `task-base` in its `baseDefinition` element. The `task-base` resource is part of the DSF and can be found [here](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-task-base-1.0.0.xml). It should also be placed in the same folder as [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml). Since `task-base` uses the original FHIR Task as its `baseDefinition` element, no additional resources are needed to complete this chain. In Forge, opening the folder containing both resources and selecting the [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) profile should display a view similar to the following:


![Forge overview](/photos/developer-documentation/forge_overview.png)

### 3rd Step: Building the Task Resource
Each element will now be reviewed and included in the [Task](../fhir/task.md) resource if it is mandatory (cardinality of at least `1..1`) according to the profile. Placeholders such as `#{version}` must not be used for resources that are not read by the DSF BPE server. This applies when creating a [Task](../fhir/task.md) resource intended for use with [cURL](../guides/starting-a-process-via-task-resources.md#using-curl). In contrast, placeholders should be used in [Draft Task Resources](../dsf/draft-task-resources.md) instead of actual values wherever possible, as these resources are read by the DSF BPE server. This guide demonstrates the creation of a [Task](../fhir/task.md) resource without placeholders, beginning with the base element required for all [Task](../fhir/task.md) resources:
```xml
<Task xmlns="http://hl7.org/fhir">

</Task>
```

Before adding any elements listed in Forge's element tree, the `Task.meta.profile` element must be included. Its requirement is not visible in the element tree, which is why it is mentioned explicitly. This is the only instance where it does not appear in the element tree. It should look like this:
```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
</Task>
```

The first element listed in the element tree is the `instantiatesCanonical` element. To add this element, an XML element with the same name should be created, using a value as specified in [URLs](../dsf/versions-placeholders-urls.md#urls):
```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0" />
</Task>
```
We can continue this process for all primitive elements like these. Just make sure you pay attention to use the correct data type (e.g. proper coding value for elements with `coding` type).

The [Task](../fhir/task.md) resource should look something like this:
<details>
<summary>Suggested solution</summary>

```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0" />
    <status value="requested"/>
    <intent value="order"/>
    <authoredOn value="2024-02-08T10:00:00+00:00" />
</Task>
```
</details>

Now a more complex element like the `requester` element:

![Forge requester view](/photos/developer-documentation/forge_requester_view.png)

The beginning is the same as primitive elements, adding the `requester` element:
```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0" />
    <status value="requested"/>
    <intent value="order"/>
    <authoredOn value="2024-02-08T10:00:00+00:00" />
    <requester>
     
    </requester>
</Task>
```

Then, primitive elements are added to `requester` like before for `Task`:
```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0" />
    <status value="requested"/>
    <intent value="order"/>
    <authoredOn value="2024-02-08T10:00:00+00:00" />
    <requester>
        <type value="Organization"/>
    </requester>
</Task>
```
*Important to note here that the value for the `status` will always be `requested` for Tasks being posted using cURL and the `type` element for `requester` and `recipient` will always have the value `Organization` in the DSF context.*

Next, the `identifier` element and its primitive sub-elements are added just like before. The `identifier.value` in this case will be `dic.dsf.test`. To understand why, take a look at the topic on [organization identifiers](../dsf/organization-identifiers.md):
```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0" />
    <status value="requested"/>
    <intent value="order"/>
    <authoredOn value="2024-02-08T10:00:00+00:00" />
    <requester>
        <type value="Organization"/>
        <identifier>
            <system value="http://dsf.dev/sid/organization-identifier"/>
            <value value="dic.dsf.test" />
        </identifier>
    </requester>
</Task>
```
*The `requester.identifier.system` has a `Fixed value` annotation. Clicking on the `system` element in Forge or looking at the XML for the right Task profile reveals what the value is supposed to be. The right side will have all information about that element, including the actual value for `Fixed value`.*

Filling out all elements in the [Task](../fhir/task.md) resource is now the same until the [slicing](https://www.hl7.org/fhir/R4/profiling.html#slicing) for `Task.input`. The [Task](../fhir/task.md) resource should look something like this:
<details>
<summary>Suggested solution</summary>

```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0" />
    <status value="requested"/>
    <intent value="order"/>
    <authoredOn value="2024-02-08T10:00:00+00:00" />
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
</Task>
```
</details>


[Slicings](https://www.hl7.org/fhir/R4/profiling.html#slicing) are a bit different from regular elements. Starting with the slice `message-name`:

![Forge slice message name](/photos/developer-documentation/forge_slice_message_name.png)

Including slices to the [Task](../fhir/task.md) resource like previous element would add a `message-name` element to our XML like this:

```xml
<Task xmlns="http://hl7.org/fhir">
    ...
    <input>
        <message-name>
            ...
        </message-name>
    </input>
</Task>
```

This approach however, would not work. FHIR processors do not use the name of the slice to map entries in your [Task](../fhir/task.md) resource to the correct slice. They use [discriminators](https://www.hl7.org/fhir/R4/profiling.html#discriminator). Discriminators define the elements a processor needs to distinguish slices by. The discriminator configuration can be seen by selecting the `input` element in Forge. In this case, a processor would look at the values for `input.type.coding.system` and `input.type.coding.code` to determine which slice this element belongs to. This only works because `input.type.coding.system` and `input.type.coding.code` are present in all slices and have a `Fixed value`. More about discriminators can be read [here](https://www.hl7.org/fhir/R4/profiling.html#discriminator). This means effectively ignoring the name of the slice as an element and start adding elements like before:

```xml
<Task xmlns="http://hl7.org/fhir">
    ...
    <input>
        <type>
            <coding>
                <system value="http://dsf.dev/fhir/CodeSystem/bpmn-message" />
                <code value="message-name" />
            </coding>
        </type>
        <valueString value="dicProcess" />
    </input>
</Task>
```

This covers all ways of adding elements. Adding the remaining elements is left as an exercise. In the end, it should look something like this:
<details>
<summary>Suggested solution</summary>

```xml
<Task xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/task-start-dic-process|1.0"/>
    </meta>
    <instantiatesCanonical value="http://dsf.dev/bpe/Process/dicProcess|1.0" />
    <status value="requested"/>
    <intent value="order"/>
    <authoredOn value="2024-02-08T10:00:00+00:00" />
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
        <valueString value="dicProcess"/>
    </input>
</Task>
```
</details>

**Do not forget to restore the version and date placeholders in [`task-start-dic-process.xml`](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/src/main/resources/fhir/StructureDefinition/task-start-dic-process.xml) when reusing the resource in a process plugin!**

## Related Topics
[Draft Task Resources](../dsf/draft-task-resources.md), [Task](../fhir/task.md)

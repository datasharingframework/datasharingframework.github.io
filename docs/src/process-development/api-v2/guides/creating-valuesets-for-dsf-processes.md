---
title: Creating ValueSets for DSF Processes
icon: creative
---

### Creating ValueSets for DSF Processes

You might find yourself in the situation where you need to create a [ValueSet](../fhir/valueset.md). For example, when adding [Input Parameters](../fhir/task.md#task-input-parameters) to DSF [Task](../fhir/task.md) resources, you will also have to reference a [ValueSet](../fhir/valueset.md) resource in your binding for `Task.input.type` to be able to set the type of your [Input Parameter](../fhir/task.md#task-input-parameters). [ValueSets](../fhir/valueset.md) for the DSF differ from regular [ValueSets](../fhir/valueset.md) in that some element's values are managed by the DSF BPE server. You can use the following template for your
[ValueSet](../fhir/valueset.md):
```xml
<ValueSet xmlns="http://hl7.org/fhir">
    <meta>
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag> 
    </meta>
    <url value="http://dsf.dev/fhir/ValueSet/my-value-set"/>    <!--dummy value-->
    <!-- version managed by bpe -->
    <version value="#{version}" />
    <name value="My ValueSet"/>     <!--dummy value-->
    <title value="My ValueSet Title"/>  <!--dummy value-->
    <!-- status managed by bpe -->
    <status value="unknown" />
    <experimental value="false"/>
    <!-- date managed by bpe -->
    <date value="#{date}"/>
    <publisher value="DSF"/>    <!--dummy value-->
    <description value="ValueSet with all codes from my-code-system"/>      <!--dummy value-->
    <immutable value="true"/>
    <compose>
        <include>
            <system value="http://dsf.dev/fhir/CodeSystem/my-code-system"/>     <!--dummy value-->
            <version value="#{version}"/>   
        </include>  
    </compose>
</ValueSet> 
```
Replace dummy values with appropriate values of your own. Do not change elements managed by the DSF BPE server. The `compose` element defines the codes included in this [ValueSet](../fhir/valueset.md). It holds at least one `include` element. Each `include` element refers to a [CodeSystem](../fhir/codesystem.md) and contains a list of `concept` elements which in turn contain the actual `code` element. Using one code from `my-code-system` and one code from `my-other-code-system` would result in the following `compose` element:
```xml
<ValueSet xmlns="http://hl7.org/fhir">
    ...
    <compose>
        <include>
            <system value="http://dsf.dev/fhir/CodeSystem/my-code-system"/>
            <version value="#{version}"/>   
            <concept>
                <code value="my-code"/>
            </concept>
        </include>  
        <include>
            <system value="http://dsf.dev/fhir/CodeSystem/my-other-code-system"/>
            <version value="#{version}"/>
            <concept>
                <code value="my-other-code"/>
            </concept>
        </include>
    </compose>
</ValueSet>
```
The DSF BPE server will read your [ValueSet](../fhir/valueset.md) from `tutorial-process/src/main/resources/fhir/ValueSet`.

You might also want to check out [this guide](../guides/creating-codesystems-for-dsf-processes.md) on how to create [CodeSystems](../fhir/codesystem.md).
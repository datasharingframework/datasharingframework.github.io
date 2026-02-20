---
title: Creating ValueSets for DSF Processes
icon: creative
---

## Creating ValueSets for DSF Processes

In some cases, it may be necessary to create a [ValueSet](../fhir/valueset.md). For example, when adding [Input Parameters](../fhir/task.md#task-input-parameters) to DSF [Task](../fhir/task.md) resources, a [ValueSet](../fhir/valueset.md) resource must also be referenced in the binding for `Task.input.type` to define the type of the [Input Parameter](../fhir/task.md#task-input-parameters). [ValueSets](../fhir/valueset.md) for the DSF differ from regular [ValueSets](../fhir/valueset.md) in that certain element values are managed by the DSF BPE server. The following template can be used for a [ValueSet](../fhir/valueset.md):

```xml
<ValueSet xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/value-set" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag> 
    </meta>
    <url value="http://my.org/fhir/ValueSet/my-value-set"/>    <!--dummy value-->
    <!-- version managed by bpe -->
    <version value="#{version}" />
    <name value="My ValueSet"/>     <!--dummy value-->
    <title value="My ValueSet Title"/>  <!--dummy value-->
    <!-- status managed by bpe -->
    <status value="unknown" />
    <experimental value="false"/>
    <!-- date managed by bpe -->
    <date value="#{date}"/>
    <publisher value="My Org"/>    <!--dummy value-->
    <description value="ValueSet with all codes from my-code-system"/>      <!--dummy value-->
    <immutable value="true"/>
    <compose>
        <include>
            <system value="http://my.org/fhir/CodeSystem/my-code-system"/>     <!--dummy value-->
            <version value="#{version}"/>   
        </include>  
    </compose>
</ValueSet> 
```
Dummy values should be replaced with appropriate, context-specific values. Elements managed by the DSF BPE server must not be modified. The `compose` element defines the codes included in this [ValueSet](../fhir/valueset.md) and contains at least one `include` element. Each `include` element references a [CodeSystem](../fhir/codesystem.md) and includes a list of `concept` elements, each containing an individual `code` element. The use of one code from `my-code-system` and one code from `my-other-code-system` results in the following `compose` element:
```xml
<ValueSet xmlns="http://hl7.org/fhir">
    ...
    <compose>
        <include>
            <system value="http://my.org/fhir/CodeSystem/my-code-system"/>
            <version value="#{version}"/>   
            <concept>
                <code value="my-code"/>
            </concept>
        </include>  
        <include>
            <system value="http://my.org/fhir/CodeSystem/my-other-code-system"/>
            <version value="#{version}"/>
            <concept>
                <code value="my-other-code"/>
            </concept>
        </include>
    </compose>
</ValueSet>
```
When building a plugin, the [ValueSet](../fhir/valueset.md) is expected to be in `src/main/resources/fhir/CodeSystem` of the Java project.

## Related Topics
[CodeSystem](../fhir/codesystem.md), [Creating CodeSystems for DSF processes](creating-codesystems-for-dsf-processes.md), [ValueSet](../fhir/valueset.md)

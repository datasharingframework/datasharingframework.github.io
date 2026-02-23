---
title: Creating CodeSystems for DSF Processes
icon: creative
---

## Creating CodeSystems for DSF Processes

Sometimes it is necessary to create custom [CodeSystem](../fhir/codesystem.md) resources. For example, when defining the type of an [Input Parameter](../fhir/task.md#task-input-parameters). [CodeSystems](../fhir/codesystem.md) for the DSF differ from regular [CodeSystems](../fhir/codesystem.md) in that some element's values are managed by the DSF BPE server. The following template can be populated with custom values:
```xml
<CodeSystem xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/code-system" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />    
        </tag>  
    </meta>
    <url value="http://example.org/fhir/CodeSystem/my-code-system" />       <!--dummy value-->
    <!-- version managed by bpe -->
    <version value="#{version}" />
    <name value="My CodeSystem" />      <!--dummy value-->
    <title value="My CodeSystem Title" />       <!--dummy value-->
    <!-- status managed by bpe -->
    <status value="unknown" />
    <experimental value="false" />
    <!-- date managed by bpe -->
    <date value="#{date}" />
    <publisher value="DSF" />       <!--dummy value-->
    <description value="CodeSystem with codes for me" />        <!--dummy value-->
    <caseSensitive value="true" />
    <hierarchyMeaning value="grouped-by" />
    <versionNeeded value="false" />
    <content value="complete" />
    <concept>
        <code value="my-code" />        <!--dummy value-->
        <display value="My Code" />     <!--dummy value-->
        <definition value="My code used for myself" />      <!--dummy value-->
    </concept>
</CodeSystem> 
```
Dummy values should be replaced with appropriate values. Elements managed by the DSF BPE server should not be changed. More codes can be added by defining more `concept` elements.

When building a plugin, the [CodeSystem](../fhir/codesystem.md) is expected to be in `src/main/resources/fhir/CodeSystem` of the Java project.

## Related Topics
[Adding Task Input Parameters to Task Profiles](adding-task-parameters-to-task-profiles.md), [CodeSystem](../fhir/codesystem.md), [Creating ValueSets for DSF processes](creating-valuesets-for-dsf-processes.md), [ValueSet](../fhir/valueset.md)

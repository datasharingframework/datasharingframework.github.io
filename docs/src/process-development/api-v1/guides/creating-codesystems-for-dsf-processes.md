---
title: Creating CodeSystems for DSF Processes
icon: creative
---

### Creating CodeSystems for DSF Processes

You might find yourself in a situation where you need to create a [CodeSystem](../fhir/codesystem.md). For example, when defining the type of an [Input Parameter](../fhir/task.md#task-input-parameters). [CodeSystems](../fhir/codesystem.md) for the DSF differ from regular [CodeSystems](../fhir/codesystem.md) in that some element's values are managed by the DSF BPE server. You can use the following XML as a template:
```xml
<CodeSystem xmlns="http://hl7.org/fhir">
    <meta>
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />    
        </tag>  
    </meta>
    <url value="http://dsf.dev/fhir/CodeSystem/my-code-system" />       <!--dummy value-->
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
Replace dummy values with appropriate values of your own. Do not change elements managed by the DSF BPE server. You can add as many codes as you like by defining more `concept` elements.

The DSF BPE server will read your [CodeSystem](../fhir/codesystem.md) from `tutorial-process/src/main/resources/fhir/CodeSystem`.
---
title: Process Plugin Definition
icon: creative
---

### Process Plugin Definition

In order for the DSF BPE server to load your plugin you need to provide it with the following information:
* A plugin [version](versions-placeholders-urls.md#version-pattern)
* A release date
* A plugin name
* The BPMN model files
* The FHIR resources grouped by BPMN process ID. Your plugin may have any number of BPMN models. Each has their own BPMN process ID and FHIR resources specific to that BPMN process (think [Task](../fhir/task.md) resources needed for messages specific to that BPMN model)
* The Class holding your [Spring Framework Configuration](spring-framework-integration.md)

You will provide this information by implementing the `dev.dsf.bpe.ProcessPluginDefinition` interface. The DSF BPE server then searches for classes implementing this interface using the Java [ServiceLoader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html) mechanism. Therefore, you will have to register your interface implementation in the `src/main/resources/META-INF/services/dev.dsf.bpe.ProcessPluginDefinition` file. For this tutorial, the class implementing the `ProcessPluginDefinition` interface, `TutorialProcessPluginDefinition`, has already been added to the file. You can use it as a reference for later when you want to create your own plugin.
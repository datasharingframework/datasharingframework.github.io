---
title: Process Plugin Definition
icon: creative
---

## Process Plugin Definition

In order for the DSF BPE server to load a plugin properly, it needs to provide the following information in what is called the process plugin definition:
* A plugin [version](versions-placeholders-urls.md#version-pattern)
* A release date
* A plugin name
* The BPMN model files
* The FHIR resources grouped by BPMN process ID. A plugin may have any number of BPMN models. Each has their own BPMN process ID and FHIR resources specific to that BPMN process (like [Task](../fhir/task.md) resources needed for messages specific to that BPMN model)
* The Class holding a [Spring Framework Configuration](spring-framework-integration.md)

To provide this information, one of the classes in the process plugin has to implement the `dev.dsf.bpe.ProcessPluginDefinition` interface. The DSF BPE server then searches for classes implementing this interface using the Java [ServiceLoader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html) mechanism. Therefore, the class also needs to be registered in the `src/main/resources/META-INF/services/dev.dsf.bpe.ProcessPluginDefinition` file. An example of this can be found in the [process plugin tutorial](https://github.com/datasharingframework/dsf-process-tutorial/).

## Related Topics
[Spring Integration](spring-framework-integration.md), [Versions, Placeholders and URLs](versions-placeholders-urls.md)
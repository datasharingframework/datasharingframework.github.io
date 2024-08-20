---
title: Environment Variables
icon: creative
---

### Environment Variables

Environment variables offer a way to make configuration data available at the start of a [BPMN process execution](bpmn-process-execution.md). They are the same for all running process instances. They can be defined by adding a member variable with the [Spring-Framework @Value](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-value-annotations) annotation to the configuration class `TutorialConfig`. The value of the annotation uses the `${..}` notation and follows the form `${some.property:defaultValue}`, where each dot in the property name corresponds to an underscore in the equivalent environment variable. Environment variables are always written upper-case. The property `some.property` therefore corresponds to the environment variable `SOME_PROPERTY`.

The DSF provides a feature to automatically generate documentation of environment variables during the Maven build process. You can use the `@ProcessDocumentation` annotation to automatically generate Markdown documentation for all fields with this annotation. You simply have to add [dsf-tools-documentation-generator](https://mvnrepository.com/artifact/dev.dsf/dsf-tools-documentation-generator) as a maven plugin. You can take a look at the `pom.xml` for the `tutorial-process` submodule [here](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/pom.xml) to see how you can add it to your own project. Keep in mind to point the `<workingPackage>` field to the package you want documentation for.
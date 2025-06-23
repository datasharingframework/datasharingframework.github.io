---
title: Environment Variables
icon: creative
---

## Environment Variables

Environment variables offer a way to make configuration data available at the start of a [BPMN process execution](bpmn-process-execution.md). They are the same for all running process instances. They can be defined by adding a member variable with the [Spring-Framework @Value](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-value-annotations) annotation to any Spring managed bean. For the DSF, the most prominent are classes annotated with [`@Configuration`](https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html). The value of the annotation uses the `${..}` notation and follows the form `${some.property:defaultValue}`, where each dot in the property name corresponds to an underscore in the equivalent environment variable. Environment variables are always written upper-case. The property `some.property` therefore corresponds to the environment variable `SOME_PROPERTY`.

The DSF provides a feature to automatically generate documentation of environment variables during the Maven build process. Use the `@ProcessDocumentation` annotation to automatically generate Markdown documentation for all fields with this annotation. Simply add [dsf-tools-documentation-generator](https://mvnrepository.com/artifact/dev.dsf/dsf-tools-documentation-generator) as a maven plugin. There is an example `pom.xml` for the `tutorial-process` submodule located on [GitHub](https://github.com/datasharingframework/dsf-process-tutorial/blob/main/tutorial-process/pom.xml) which uses the maven plugin. The `<workingPackage>` field has to point to the package where documentation is desired.

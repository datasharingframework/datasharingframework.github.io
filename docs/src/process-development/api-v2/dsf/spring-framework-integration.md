---
title: Spring Framework Integration
icon: creative
---

## Spring Framework Integration

The DSF uses some of the [Spring Framework's](https://spring.io/projects/spring-framework) functionality. When deployed, every process plugin exists in its own [Spring context](https://docs.spring.io/spring-framework/reference/core/beans/introduction.html). Process plugins require [Spring Beans](https://docs.spring.io/spring-framework/reference/core/beans/definition.html) with `prototype` [scope](https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html) for all classes which either extend or implement the following classes/interfaces:
- `Activity`
- `DefaultUserTaskListener`
- `ExecutionListener`
- `MessageActivity`
- `MessageEndEvent`
- `MessageIntermediateThrowEvent`
- `MessageSendTask`
- `ServiceTask`
- `UserTaskListener`

Examples can be found in the guide on [registering prototype Beans](../../guides/registering-prototype-beans.md).

A [Spring-Framework configuration class](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java-basic-concepts) located in the `spring/config` directory is expected to provide the Spring Beans. If you are unfamiliar with the Spring Framework, you can find more information in [Java-based Container Configuration](https://docs.spring.io/spring-framework/reference/core/beans/java.html) of the Spring Framework documentation, specifically the topics [Using the @Bean Annotation](https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html) and [Using the @Configuration Annotation](https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html).

## Related Topics
[Environment Variables](environment-variables.md), [Message Delegates](message-delegates.md), [Service Delegates](service-delegates.md)

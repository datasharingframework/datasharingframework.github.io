---
title: Spring Framework Integration
icon: creative
---

### Spring Framework Integration

Since the DSF also employs the use of the [Spring Framework](https://spring.io/projects/spring-framework) you will also have to provide some Spring functionality. When deployed, every process plugin exists in its own [Spring context](https://docs.spring.io/spring-framework/reference/core/beans/introduction.html). To make the process plugin work, you have to provide [Spring Beans](https://docs.spring.io/spring-framework/reference/core/beans/definition.html) with `prototype` [scope](https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html) for all classes which either extend or implement the following classes/interfaces (as of version 1.4.0):
- `AbstractTaskMessageSend`
- `AbstractServiceDelegate`
- `DefaultUserTaskListener`
- `ProcessPluginDeploymentStateListener`

A [Spring-Framework configuration class](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java-basic-concepts) located in `spring/config` is expected to provide the Spring Beans. For this tutorial, the `TutorialConfig` class will take this role. If you are unfamiliar with the Spring Framework, you might want to check out the chapter [Java-based Container Configuration](https://docs.spring.io/spring-framework/reference/core/beans/java.html) of the Spring Framework documentation, specifically the topics [Using the @Bean Annotation](https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html) and [Using the @Configuration Annotation](https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html).
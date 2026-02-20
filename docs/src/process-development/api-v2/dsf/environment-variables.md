---
title: Environment Variables
icon: creative
---

## Environment Variables

Environment variables offer a way to make configuration data available at the start of a process. They are the same for all process instances. They can be defined by adding a member variable with the [Spring-Framework @Value](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-value-annotations) annotation to a configuration class (a class annotated with the [Spring-Framework @Configuration](https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html) annotation). The value of the annotation uses the `${..}` notation and follows the form `${some.property:defaultValue}`, where each dot in the property name corresponds to an underscore in the equivalent environment variable. Environment variables are always written upper-case. The property `some.property` therefore corresponds to the environment variable `SOME_PROPERTY`.

```java
@Configuration
public class MyConfiguration
{
	@Value("${my.org.my.value}")
	private String myValue;
}
```

The DSF provides a feature to automatically generate documentation of environment variables during the Maven build process. The `@ProcessDocumentation` annotation causes the build process to automatically generate Markdown documentation for all fields with this annotation.
```java
@Configuration
public class MyConfiguration
{
	@ProcessDocumentation(processNames = "myorg_MyProcess", description = "My process description", required = true, recommendation = "Foo")
	@Value("${my.org.my.value}")
	private String myValue;
}
```
 This requires the DSF Maven Plugin to be configured in the `pom.xml` file of the project. A configuration to generate documentation for a package `my.org.spring.config` containing all Spring configuration classes looks like this:
```xml
<plugin>
    <groupId>dev.dsf</groupId>
    <artifactId>dsf-maven-plugin</artifactId>
    <version>2.0.2</version>
    <executions>
        <execution>
            <goals>
                <goal>generate-config-doc</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <configDocPackages>dev.dsf.bpe.config</configDocPackages>
    </configuration>
</plugin>
```

Maven build plugins will be executed during the build phase and should be configured in the `<build/>` element from the `pom.xml`.

## Related Topics
[Spring Framework Integration](spring-framework-integration.md)
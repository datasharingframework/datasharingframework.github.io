---
title: Spring Framework Integration
icon: creative
---

## Spring Framework Integration

The DSF uses some of the [Spring Framework's](https://spring.io/projects/spring-framework) functionality. When deployed, every process plugin exists in its own [Spring context](https://docs.spring.io/spring-framework/reference/core/beans/introduction.html). Process plugins require [Spring Beans](https://docs.spring.io/spring-framework/reference/core/beans/definition.html) with `prototype` [scope](https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html) for all classes which either extend or implement the following classes/interfaces:
- `AbstractTaskMessageSend`
- `AbstractServiceDelegate`
- `DefaultUserTaskListener`
- `ProcessPluginDeploymentStateListener`

A [Spring-Framework configuration class](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java-basic-concepts) located in the `spring/config` directory is expected to provide the Spring Beans. If you are unfamiliar with the Spring Framework, you can find more information in [Java-based Container Configuration](https://docs.spring.io/spring-framework/reference/core/beans/java.html) of the Spring Framework documentation, specifically the topics [Using the @Bean Annotation](https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html) and [Using the @Configuration Annotation](https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html).

Below is an example of a Spring configuration class:
```java
@Configuration
public class TutorialConfig
{
	@Autowired
	private ProcessPluginApi api;  //instance will be injected at runtime

	@Value("${dev.dsf.process.tutorial.loggingEnabled:false}")
	@ProcessDocumentation(description = "Set to true to enable logging", required = false, processNames = PROCESS_NAME_FULL_DIC)
	private boolean loggingEnabled; //environment variable

	@Value("${dev.dsf.process.tutorial.userVote:false}")
	@ProcessDocumentation(description = "Set to true to enable users to vote", required = false, processNames = PROCESS_NAME_FULL_VOTING_PROCESS)
	private boolean userVote; //environment variable

    //register classes as prototype beans
	@Bean
	@Scope(SCOPE_PROTOTYPE)
	public DicTask dicTask()
	{
		return new DicTask(api, loggingEnabled);
	}

    @Bean
	@Scope(SCOPE_PROTOTYPE)
	public DecideWhetherUserVote decideWhetherUserVote()
	{
		return new DecideWhetherUserVote(api, userVote);
	}

	@Bean
	@Scope(SCOPE_PROTOTYPE)
	public HelloCosMessage helloCosMessage()
	{
		return new HelloCosMessage(api);
	}

	@Bean
	@Scope(SCOPE_PROTOTYPE)
	public UserVoteListener userVoteListener()
	{
		return new UserVoteListener(api);
	}
}
```

## Related Topics
[Environment Variables](environment-variables.md), [Message Delegates](message-delegates.md), [Service Delegates](service-delegates.md)

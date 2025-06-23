---
title: Process Plugin API
icon: creative
---

## Process Plugin API Maven Module

The [DSF Process Plugin API module](https://central.sonatype.com/artifact/dev.dsf/dsf-bpe-process-api-v2) consists of a set of utility classes designed to provide easy access to common solutions for process plugin use cases which would otherwise require lots of boilerplate code. An example is the `Variables` class, which provides access to the [BPMN process variables](bpmn-process-variables.md).

Maven Dependency:

```xml
<dependencies>
	<dependency>
		<groupId>dev.dsf</groupId>
		<artifactId>dsf-bpe-process-api-v2</artifactId>
		<version>${dsf.version}</version>
		<scope>provided</scope>
	</dependency>
</dependencies>
```

### Process Plugin Api
[Service Delegates](service-delegates.md) or [Message Delegates](message-delegates.md) expose a `ProcessPluginApi` instance when overriding their `execute` and `getAdditionalInputParameters` methods. This API instance the following utility classes:
- `FhirClientProvider`**:** Provides access to a generic, configurable FHIR web client. Used for connections to FHIR servers that are not the DSF FHIR server.
- `DsfClientProvider`**:** Provides access to preconfigured FHIR web client to access DSF FHIR server including utility methods.
- `TaskHelper`**:** Provides utility methods to interact with Task resource. Namely, Input and Output Parameters.
- `FhirContext`**:** Provides access to the FHIR context.
- `EndpointProvider`**:** Provides utility methods to interact with Endpoint resources.
- `MailService`**:** Provides methods to use the DSF's e-mail functionality.
- `ObjectMapper`**:** Provides access to an ObjectMapper instance to perform e.g. JSON-serialization.
- `OrganizationProvider`**:** Provides utility methods to interact with Organization resources.
- `OidcClientProvider`**:** Provides utility methods for OIDC functionality.
- `ProcessAuthorizationHelper`**:** Provides utility methods to interact with process authorization in [ActivityDefinitions](../fhir/activitydefinition.md).
- `ProxyConfig`**:** Allows you to retrieve information about the DSF proxy.
- `QuestionnaireResponseHelper`**:** Provides utility methods to interact with [QuestionnaireResponse](../fhir/questionnaire-and-questionnaireresponse.md) resources.
- `ReadAccessHelper`**:** Provides utility methods to modify a resource's [read access tag](read-access-tag.md).

## Related Topics
[Service Delegates](service-delegates.md), [Message Delegates](message-delegates.md)

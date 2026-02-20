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
		<artifactId>dsf-bpe-process-api-v2</artifactId>
		<version>${dsf.version}</version>
		<scope>provided</scope>
	</dependency>
</dependencies>
```

### Process Plugin Api
[Activities](activities.md) usually provide access to an instance of `ProcessPluginApi` when implementing/overriding their methods.
This API instance provides a variety of utility classes:
- `ProcessPluginDefinition`**:** access to the plugin's [`ProcessPluginDefinition`](process-plugin-definition.md)
- `ProxyConfig`**:** forward proxy configuration
- `EndpointProvider`**:** access to Endpoint resources
- `FhirContext`**:** HAPI FHIR Context for parsing/serializing
- `DsfClientProvider`**:** Webservice client to access a DSF FHIR server
- `FhirClientProvider`**:** Webservice client to access a generic FHIR server
- `OidcClientProvider`**:** Webservice client for OIDC 
- `MailService`**:** for sending automatic E-Mails (if configured)
- `MimeTypeService`**:** utility for validating MIME types
- `ObjectMapper`**:** ObjectMapper instance to serialize/deserialize POJOs to/from formats like JSON. ObjectMapper should not be used for FHIR resources. The parser provided by the FhirContext should be used instead
- `OrganizationProvider`**:** access to Organization resources
- `ProcessAuthorizationHelper`**:** utility for process authorization in [ActivityDefinitions](../fhir/activitydefinition.md)
- `QuestionnaireResponseHelper`**:** utility for manipulating [QuestionnaireResponse](../guides/user-tasks-in-the-dsf.md) resources
- `ReadAccessHelper`**:** utility for adding and validating [Read Access Tags](read-access-tag.md) in FHIR resources
- `TaskHelper`**:** utility for reading and creating [Input and Output Parameters](../fhir/task.md) in Task resources
- `CompressionService`**:** utility to compress/decompress data using various compression methods
- `CryptoService`**:** utility for cryptography like creating RSA key pairs
- `TargetProvider`**:** utility to create [Target instances](messaging.md) e.g. based on the identifier of a parent organization
- `Variables`**:** access to BPMN execution variables

## Related Topics
[Activities](activities.md), [Input and Output Parameters](../fhir/task.md), [ProcessPluginDefinition](process-plugin-definition.md), [Read Access Tags](read-access-tag.md)
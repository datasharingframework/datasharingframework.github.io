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
		<artifactId>dsf-bpe-process-api-v1</artifactId>
		<version>${dsf.version}</version>
		<scope>provided</scope>
	</dependency>
</dependencies>
```

### Process Plugin Api
[Service Delegates](service-delegates.md) or [Message Delegates](message-delegates.md) require a constructor which expects a `ProcessPluginApi` object which is forwarded to the superclasses' constructor. The API instance can then be used when overriding their `execute` and/or `getAdditionalInputParameters` methods.
It provides the following utility classes:
- `ProxyConfig`**:** forward proxy configuration
- `EndpointProvider`**:** access to Endpoint resources
- `FhirContext`**:** HAPI FHIR Context for parsing/serializing
- `FhirWebserviceClientProvider`**:** Webservice client to access DSF FHIR server
- `MailService`**:** for sending automatic E-Mails (if configured)
- `OrganizationProvider`**:** access to Organization resources
- `Variables`**:** access to BPMN execution variables
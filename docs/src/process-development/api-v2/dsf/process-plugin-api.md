---
title: Process Plugin API
icon: creative
---

### Process Plugin API v1 Maven Module

The [DSF Process Plugin API module](https://mvnrepository.com/artifact/dev.dsf/dsf-bpe-process-api-v1) consists of a set of utility classes designed to provide easy access to solutions for process plugin use cases. This includes for example the `Variables` class, which provides access to the [BPMN process variables](bpmn-process-variables.md).

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

#### Process Plugin Api
When creating [Service Delegates](service-delegates.md) or [Message Delegates](message-delegates.md) you wil notice that you need to provide a constructor which expects a `ProcessPluginApi` object and forward it to the superclasses' constructor.
This API instance provides a variety of utility classes:
- `ProxyConfig`**:** forward proxy configuration
- `EndpointProvider`**:** access to Endpoint resources
- `FhirContext`**:** HAPI FHIR Context for parsing/serializing
- `FhirWebserviceClientProvider`**:** Webservice client to access DSF FHIR server
- `MailService`**:** for sending automatic E-Mails (if configured)
- `OrganizationProvider`**:** access to Organization resources
- `Variables`**:** access to BPMN execution variables
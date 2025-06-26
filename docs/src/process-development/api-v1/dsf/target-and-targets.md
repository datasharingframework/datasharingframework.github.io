---
title: Target and Targets
icon: creative
---

## Target

A target is a container for all information necessary to send messages to other DSF instances. This information includes:
- **Organization Identifier:** Identifier of an [Organization Resource](https://www.hl7.org/fhir/R4/organization.html). Can be acquired through the API's `OrganizationProvider` or by querying a FHIR server (usually the DSF FHIR server) using a `FhirWebserviceClient` provided by the API's `FhirWebserviceProvider`.
- **Endpoint Identifier:** Identifier of an [Endpoint Resource](https://www.hl7.org/fhir/R4/endpoint.html) with the `managingOrganization` being the same organization as the one from the `Organization Identifier` above. Can be acquired through the API's `EndpointProvider` or by querying a FHIR server (usually the DSF FHIR server) using a `FhirWebserviceClient` provided by the API's `FhirWebserviceProvider`.
- **Endpoint URL:** The URL of the endpoint. The [Endpoint Resource](https://www.hl7.org/fhir/R4/endpoint.html) provides this value through its `address` field.
- **Correlation Key:** A value used to correlate messages, that are sent to this target, to their correct process instances. More information on this mechanism can be found in [Message Correlation](message-correlation.md).

## Targets

Targets is a container class for a collection of [Target](#target) objects. It also provides utility methods for manipulating the underlying collection. 

## Related Topics
[Message Correlation](message-correlation.md), [Setting Targets for Message Events](../guides/setting-targets-for-message-events.md)
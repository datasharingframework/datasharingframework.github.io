---
title: Target and Targets
icon: creative
---

## Target

A target is a container for all information necessary to send messages to other DSF instances. This information includes:
- **Organization Identifier:** Identifier of an [Organization Resource](https://www.hl7.org/fhir/R4/organization.html). It can be acquired through the API's `OrganizationProvider` or by querying a FHIR server. Querying the DSF FHIR server should be done using the `DsfClient` provided by the API's `DsfClientProvider` while a `FhirClient` provided by the API's `FhirClientProvider` may be used for other types of FHIR servers.
- **Endpoint Identifier:** Identifier of an [Endpoint Resource](https://www.hl7.org/fhir/R4/endpoint.html) with the `managingOrganization` being the same organization as the one from the `Organization Identifier` above. It can be acquired through the API's `OrganizationProvider` or by querying a FHIR server. Querying the DSF FHIR server should be done using the `DsfClient` provided by the API's `DsfClientProvider` while a `FhirClient` provided by the API's `FhirClientProvider` may be used for other types of FHIR servers.
- **Endpoint URL:** The URL of the endpoint. The [Endpoint Resource](https://www.hl7.org/fhir/R4/endpoint.html) provides this value through its `address` field.
- **Correlation Key:** Optional value used to correlate messages, that are sent to this target, to their correct process instances. More information on this mechanism can be found in [Message Correlation](message-correlation.md).

## Targets

Targets is a container class for a collection of [Target](#target) objects. It also provides utility methods for manipulating the underlying collection. 

## Creating Target/Targets

Creating Target instances requires the target's organization identifier, endpoint identifier, and endpoint address. These values can be obtained from the DSF FHIR server's web interface or by querying the FHIR server via an instance of `DsfClient` or a `generic FHIR client`. By clicking the `Show Bookmarks` button in the top right corner and selecting `Endpoint`, a list of all Endpoints available to the FHIR server will be displayed. Instances of `DsfClient` or a `generic FHIR client` can be accessed via the [process plugin API](../dsf/process-plugin-api.md).  
Targets can be created by using the [`Variables'`](bpmn-process-variables.md) `createTarget` method or by using [Process Plugin API's](process-plugin-api.md) `TargetProvider` instance. The methods provided by [`Variables`](bpmn-process-variables.md) allow creating specific Target instances and Targets instances based on collections of Target instances. For cases where for example, all member organizations of a particular parent organization should be targeted, the [Process Plugin API's](process-plugin-api.md) `TargetProvider` instance offers various different utility methods.

## Setting Target/Targets

Targets should be set in a [Service Task](../bpmn/service-tasks.md) before a [Message Activity](message-activities.md).
Targets should be set either through the [`Variables'`](bpmn-process-variables.md) `setTarget` or `setTargets` methods. When modelling parallel subprocesses where each execution sends messages to its own target, the Target can be set automatically for each execution by using `${targets.entries}` as the `Collection` value for the parallel subprocess and `target` as the `Element variable` value in the [Camunda Modeler](https://camunda.com/download/modeler/). This requires having called `setTargets` before entering the parallel subprocess.   

## Related Topics
[Message Activities](message-activities.md), [Message Correlation](message-correlation.md)
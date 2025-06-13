---
title: Setting Targets for Message Events
icon: creative
---

## Setting Targets for Message Events

Setting a target for a message event requires a `Target` object. Creating this object requires the target's organization identifier, endpoint identifier, and endpoint address. These values can be obtained from the DSF FHIR server's web interface or by querying the FHIR server via an instance of `DsfClient` or a `generic FHIR client`. By clicking the `Show Bookmarks` button in the top right corner and selecting `Endpoint`, a list of all Endpoints available to the FHIR server will be displayed. Instances of `DsfClient` or a `generic FHIR client` can be accessed via the [process plugin API](../dsf/process-plugin-api.md).  
Targets should be added in a [Service Task](../bpmn/service-tasks.md) before a [Message Event](../bpmn/messaging.md). A `Variables` instance provides helper methods to set targets in a [Service Task's](../bpmn/service-tasks.md) `execute` method.

## Related Topics
[Process Plugin API](../dsf/process-plugin-api.md), [Message Correlation](../dsf/message-correlation.md), [Target and Targets](../dsf/target-and-targets.md)
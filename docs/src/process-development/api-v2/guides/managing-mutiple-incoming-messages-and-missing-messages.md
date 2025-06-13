---
title: Managing Multiple Incoming Messages and Missing Messages
icon: creative
---

## Managing Multiple Incoming Messages and Missing Messages

If an already running process instance is waiting for a message from another organization, the corresponding FHIR [Task](../fhir/task.md) may never arrive. Either because the other organization decides to never send the message or because some technical problem prohibits the [Task](../fhir/task.md) resource from being posted to the DSF FHIR server. This would result in stale process instances that never finish.

At the same time, it might also be expected to receive one out of a number of different message types at once.

An [Event Based Gateway](../bpmn/gateways.md#event-based-gateway) can be used to solve both problems by adding it to the process waiting for a response and then either handling a [Task](../fhir/task.md) resource with the response and finish the process in a success state or triggering a [Timer Intermediate Catching Event](../bpmn/timer-intermediate-catching-events.md) after a defined wait period and finish the process in an error state. The following BPMN collaboration diagram shows how the process at the first organization would look like if we wanted to react to multiple different messages or missing messages:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/photos/developer-documentation/event_based_gateway_inverted.svg">
  <source media="(prefers-color-scheme: light)" srcset="/photos/developer-documentation/event_based_gateway.svg">
  <img alt="BPMN collaboration diagram with an Event Based Gateway" src="/photos/developer-documentation/event_based_gateway.svg">
</picture>

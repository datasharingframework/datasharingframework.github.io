---
title: Gateways
icon: creative
---

## Gateways

[Gateways](https://docs.camunda.org/manual/7.21/reference/bpmn20/gateways/) allow modelling of decision-based and concurrent workflows. [Exclusive Gateways](#exclusive-gateways) model a decision where one flow gets pursued over other flows. [Event-based Gateways](#event-based-gateways) also model a decision, but are based on events. [Parallel Gateways](#parallel-gateways) model concurrency.

### Exclusive Gateways

[Exclusive Gateways](https://docs.camunda.org/manual/7.21/reference/bpmn20/gateways/exclusive-gateway/) decide which one out of multiple [Sequence Flow](sequence-flow.md) should be followed based on [conditions](https://docs.camunda.org/manual/7.21/user-guide/process-engine/expression-language/#conditions). [Conditions](https://docs.camunda.org/manual/7.21/user-guide/process-engine/expression-language/#conditions) are not part of the [Exclusive Gateways](https://docs.camunda.org/manual/7.21/reference/bpmn20/gateways/exclusive-gateway/) themselves. They are set through the sequence flow exiting the [Exclusive Gateway](https://docs.camunda.org/manual/7.21/reference/bpmn20/gateways/exclusive-gateway/).  In the [Camunda Modeler](https://camunda.com/download/modeler/), conditions can be added to [Sequence Flows](sequence-flow.md) by selecting a [Sequence Flow](sequence-flow.md) and opening the `Condition` tab. More information on how to use Conditions can be found in [Conditions](conditions.md).

### Event-based Gateways

The [Event-based Gateway](https://docs.camunda.org/manual/7.21/reference/bpmn20/gateways/event-based-gateway/) models a decision in the workflow. But instead of [conditions](./conditions.md), the [Event-based Gateway](https://docs.camunda.org/manual/7.21/reference/bpmn20/gateways/event-based-gateway/) uses the triggering of an event to dicide which [Sequence Flow](sequence-flow.md) to pursue.

### Parallel Gateways

[Parallel Gateways](https://docs.camunda.org/manual/latest/reference/bpmn20/gateways/parallel-gateway/) model concurrent workflows. Their outgoing flows can be joined together again with another [Parallel Gateway](https://docs.camunda.org/manual/latest/reference/bpmn20/gateways/parallel-gateway/). This makes process execution wait for both flows to arrive at the gateway before continuing.

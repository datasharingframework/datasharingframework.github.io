---
title: Accessing BPMN Process Variables
icon: creative
---

### Accessing BPMN Process Variables

After creating a [Service Delegate](../dsf/service-delegates.md) or [Message Delegate](../dsf/message-delegates.md), you might want to retrieve data from or store data in the [BPMN process variables](../dsf/bpmn-process-variables.md). You can achieve this either through the [BPMN process execution](../dsf/bpmn-process-execution.md) or via the `Variables` class.   *It is very much recommended to use the latter method*.

The `Variables` class provides lots of utility methods to read or write certain types of [BPMN process variables](../dsf/bpmn-process-variables.md). If for some reason you need to fall back on the [BPMN process execution](../dsf/bpmn-process-execution.md) to solve your problem, we would like to learn how the current API of the `Variables` class is limiting you. Contact us, and we might turn it into a feature request ([Contribute](https://dsf.dev/stable/contribute)).

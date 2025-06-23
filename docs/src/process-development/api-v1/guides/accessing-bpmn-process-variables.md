---
title: Accessing BPMN Process Variables
icon: creative
---

## Accessing BPMN Process Variables

Access to retrieve data from or store data in the [BPMN process variables](../dsf/bpmn-process-variables.md) can be acquired via the `Variables` class. An instance is usually available when overriding methods in [Service Delegates](../dsf/service-delegates.md) and [Message Delegates](../dsf/message-delegates.md). If an instance is missing in a place where it should be accessible, please [let us know](https://dsf.dev/community/contribute/).

The `Variables` class provides lots of utility methods to read or write certain types
of [BPMN process variables](../dsf/bpmn-process-variables.md). If the methods provided by the `Variables` class are insufficient to solve a problem, we would like to learn in what way the current API of the `Variables` class is limiting. Again, please [let us know](https://dsf.dev/community/contribute/).

## Related Topics
[BPMN Process Variables](../dsf/bpmn-process-variables.md), [Message Delegates](../dsf/message-delegates.md), [Service Delegates](../dsf/service-delegates.md)
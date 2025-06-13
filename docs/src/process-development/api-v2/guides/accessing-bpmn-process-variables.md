---
title: Accessing BPMN Process Variables
icon: creative
---

## Accessing BPMN Process Variables

Access to retrieve data from or store data in the [BPMN process variables](../dsf/bpmn-process-variables.md) can be acquired via the `Variables` class. An instance is usually available when overriding methods in [Service Delegates](../dsf/service-delegates.md) and [Message Delegates](../dsf/message-delegates.md). If an instance is missing in a place where it should be accessible, please [let us know](https://dsf.dev/community/contribute/).

The `Variables` class provides lots of utility methods to read or write certain types
of [BPMN process variables](../concepts/dsf/bpmn-process-variables.md). If for some reason you find the methods provided by the `Variables` class insufficient to solve your problem, we would like to learn how the current API of the `Variables` class is limiting you. Again, please [let us know](https://dsf.dev/community/contribute/).


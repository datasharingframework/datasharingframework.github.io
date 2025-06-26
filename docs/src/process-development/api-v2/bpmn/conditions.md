---
title: Conditions
icon: creative
---

## Conditions

BPMN elements can have a property attached to them which either executes a script or evaluates an expression in order to make a decision. The most common example of this is the [Sequence Flow](./sequence-flow.md) elements following an [Exclusive Gateway](./gateways.md). Each [Sequence Flow](./sequence-flow.md) element will have a condition attached to decide which flow should be pursued. The [Camunda Modeler](https://camunda.com/download/modeler/) distinguishes the two types in the `Type` attribute of the `Condition` tab in a BPMN element. Camunda comes with a GraalVM JavaScript engine but can be extended with other types of scripting engines. See the Camunda documentation on [scripting](https://docs.camunda.org/manual/latest/user-guide/process-engine/scripting/) for more details. Expressions are short boolean evaluations and have the following syntax: `${expression}`. An example of a simple expression would be a condition like `var = true`. For this to work during BPMN process execution, the variable that is used for the boolean condition must be available in the BPMN process variables before the [Sequence Flow](sequence-flow.md) reaches the evaluation of the expression. You can learn more advanced features of Expressions [here](https://docs.camunda.org/manual/7.21/user-guide/process-engine/expression-language/).


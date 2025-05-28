---
title: Process Plugins
icon: plugin
---

## Overview
It is important to understand that the DSF is *only* the silent helper in the background: a middleware. The DSF is use case agnostic. This means that process plugins make it possible to execute almost any use case you can imagine with the DSF. Process plugins provide individual functionality. For example, it is possible to use the Ping Pong process to test bilateral communication or the [Feasibility process](../use-cases/feasibility) to perform feasibility queries for research.
However, it is possible to deploy several process plugins together, even the same process plugin in different versions. A process plugin is basically an archive of BPMN 2.0 models, FHIR R4 resources and Java code. This process plugin is deployed as a Jar file on the BPE.

## BPMN: Example
BPMN models can be created with [Camunda Modeler](https://camunda.com/de). The following model is a BPMN model consisting of two lanes: These are the square boxes, i.e. Organization A and B. This process is intended only as an example to illustrate the formalities. We will look at realistic processes in the next [chapter](../use-cases/).

![BPMN: Example](/photos/info/plugins/bpmn-example.png)

## Ping Pong Process
The [ping process plugin](https://github.com/datasharingframework/dsf-process-ping-pong) can be used for (periodic) connection testing between organizations that are part of your DSF allow list. The following figure shows a representation of the process.

![Ping-Pong Process](/photos/info/use-cases/ping-pong.png)


The ping pong process is composed of 3 different subprocesses:
### Autostart Ping Process
The autostart ping process is used to execute connection tests in a predefined interval. This subprocess performs the following steps:

- Start a timer with a predefined interval (default 24 h)
- Start the ping process once per interval
- Stop the timer after the current interval completes

### Ping Process
The ping process is used to check outgoing and incoming connections to organizations in your allow-list. This subprocess performs the following steps:

- Select organizations in your allow list that should receive a ping message
- Send ping message to selected organizations
- Receive pong message from selected organizations
- Log status of ping/pong messages
- Log errors if any occur

### Pong Process
The pong process is used to send a response during the connection test to the requesting organization. This subprocess performs the following steps:

- Receive ping message from requesting organizations
- Send pong message to requesting organizations
- Log status of ping/pong message
- Log errors if any occur

<!--
## BPMN: Communicate
*Message Events* enable the communication between different organizations. Every time there is a *Message Event* between two business processes, there is a corresponding *TaskResource* on the FHIR side. When one organization sends a message for example “do some work” to another organization or when we send a message to ourselves to start or continue a process, we do this by creating a FHIR *TaskResource* with the status “requested”. After that the Business Process Engine starts the work and the status switches to “in-progress” and if the work is done to “completed” or if there is a problem to “failed”. 

![Message Send Task / Message Receive Task (Multi-Instance, Error Handling)](/photos/info/plugins/bpmn-communicate.png)

blablabla

![Event Based Gateway – OK Message, Error Message, Timeout](/photos/info/plugins/bpmn-event-based-gateway.png)

blablabla

![Message Events Intermediate | Send / Receive](/photos/info/plugins/bpmn-intermediate.png =750x90)
-->
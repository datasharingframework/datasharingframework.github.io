---
title: Messaging
icon: creative
---


## Messaging

Enabling communication with other lanes, pools or even entirely separate processes requires the ability to exchange information. In BPMN, [Message Events](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/message-events/) are used to model this information exchange. Modeling communication with [Message Events](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/message-events/) in the same diagram uses Message Flow. Message Flow is typically represented by a dashed line arrow between BPMN elements with a black (send) or white (receive) envelope icon. The following BPMN collaboration diagram shows message exchange between two processes.

![BPMN collaboration diagram with two processes using message flow to exchange information between two organizations](/photos/developer-documentation/message_flow.svg)

### Message Start Event

[Message Start Events](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/message-events/#message-start-event) allow a BPMN process to be started by an incoming message. In the DSF, all BPMN processes are started via messages. Therefore, a [Message Start Event](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/message-events/#message-start-event) has to be included at the beginning of all of your BPMN models.

### Message Intermediate Throwing Event
[Message Intermediate Throwing Events](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/message-events/#message-intermediate-throwing-event) are used to send messages during process execution.

### Message Intermediate Catching Event
[Message Intermediate Catching Events](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/message-events/#message-intermediate-catching-event) serve as the counterpart to [Message Intermediate Throwing Events](messaging.md#message-intermediate-throwing-event). Use them whenever it is expected to receive a message from another process or organization during execution.

### Message End Event
The [Message End Event](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/message-events/#message-end-event) will stop the execution of a BPMN process and finish by sending a message.
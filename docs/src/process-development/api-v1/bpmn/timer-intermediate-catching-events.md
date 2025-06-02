---
title: Timer Intermediate Catching Events
icon: creative
---

### Timer Intermediate Catching Events

A [Timer Intermediate Catching Event](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/timer-events/#timer-intermediate-catching-event) allows you to model stopwatch behavior. A timer is started once the BPMN execution arrives at the event. The duration until the timer runs out is specified using the [ISO 8601 Durations](http://en.wikipedia.org/wiki/ISO_8601#Durations) format. Examples can be found [here](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/timer-events/#time-duration). After running out, the BPMN process executes the [Sequence Flow](sequence-flow.md) following the [Timer Intermediate Catching Event](https://docs.camunda.org/manual/7.21/reference/bpmn20/events/timer-events/#timer-intermediate-catching-event).
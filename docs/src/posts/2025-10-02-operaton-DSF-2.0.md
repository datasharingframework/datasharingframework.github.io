---
title: "Operaton testing with DSF 2.0-4M"
date: 2025-10-01
type: "news"
excerpt: "The Data Sharing Framework (DSF) is entering an exciting new phase. With the upcoming DSF 2.0 release, we are transitioning our business process engine from Camunda 7 to Operaton 1.0.0, a modern, open-source BPMN 2.0 engine. This move marks a significant step toward improved scalability, long-term maintainability, and alignment with DSF’s distributed architecture. "
article: true
category: 
  - News
tags:
  - Operaton
  - BPE
  - DSF v2
  - News
---

## DSF 2.0 Transition to Operaton

The Data Sharing Framework (DSF) is entering an exciting new phase. With the upcoming DSF 2.0 release, we are transitioning our business process engine from Camunda 7 to [Operaton 1.0.0](https://github.com/operaton/operaton). We are currently testing our application with the Operaton 1.0.0-beta-5 release based on Camunda 7.23. It’s now available for testing. You can follow the development and try out the migration in our [GitHub pull request](https://github.com/datasharingframework/dsf/pull/354).


## Why this transition matters

As part of the DSF 2 release, several internal dependencies are being updated. In some cases, components are being replaced with more sustainable alternatives to ensure long-term maintainability and support. One of the most significant changes is the replacement of Camunda 7 Community Edition, whose official support will end in autumn 2025.

To secure the future of DSF, we are moving to [Operaton](https://operaton.org/), a modern and open-source BPMN 2.0 engine backed by an active development community. Operaton aligns well with DSF’s distributed, peer-to-peer architecture and will strengthen performance, scalability, and long-term maintainability. Just as important, Operaton’s commitment to being fully free and open source reflects the core values of the DSF community.

## What this means for DSF users

* DSF 2.0 will ship with Operaton as the default BPMN engine.
* DSF 1 users will receive a final release including the last supported version of Camunda 7 CE, ensuring continued use without immediate migration.
* We encourage developers and users to test the milestone release and share feedback to help refine the transition.

We will keep the community informed and share further updates as DSF 2.0 moves toward release.
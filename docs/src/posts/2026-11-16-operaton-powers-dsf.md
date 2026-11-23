---
title: "Operaton powers DSF across Germany"
date: 2026-11-16
type: "news"
excerpt: "Operaton plays an integral role in powering the business process engine across the network, supporting its reliable operation across the medical research data infrastructure. This article highlights Operaton's contribution to advancing Germany's sustainable, federated research data infrastructure."
article: true
category: 
  - News
tags:
  - News
  - Operaton
  - BPE
  - DSF v2

---
The successful production rollout of DSF v2.x highlights Operaton's contribution to advancing Germany's sustainable, federated research data infrastructure. Operaton plays an integral role in powering our business process engine across the network, supporting its reliable operation across the medical research data infrastructure.

Our transition to Operaton began with the [DSF 2.0 architecture roadmap](2025-10-02-operaton-DSF-2.0.md), which introduced Operaton as the new process engine for the next generation of the platform. Following extensive testing and a coordinated rollout, Operaton is now running in production across the entire network.

## How Operaton helps us enable distributed research at national scale
DSF enables each participating site to operates its own Fast Healthcare Interoperability Ressources (FHIR) endpoint and business process engine (BPE), forming a distributed peer-to-peer network based on the BPMN 2.0 and FHIR R4 standards. This enables the organizations to coordinate secure research workflows without relying on a central infrastructure . 

Within this structure, Operaton provides the BPMN execution foundation inside each site’s business process engine. Together with the DSF’s communication and security components, it enables local and cross-site process steps to be coordinated reliably across the network.
The DSF is use-case-independent by design. A single installation can participate in multiple research networks and execute several use cases in parallel. New workflows are added through process plugins, allowing the infrastructure to evolve without requiring a separate platform for every research project.

## A controlled migration from Camunda 7
We incorporated the transition from Camunda 7 to Operaton early into the DSF 2.0 Cycle. Our DSF milestone releases followed Operaton’s development closely, allowing the community to identify integration issues early and validate the new engine well before the production rollout. All components and migration procedures were tested on dedicated infrastructure before deployment. This reduced operational risk and gave participating sites a controlled upgrade path.

A particularly important requirement was compatibility with existing DSF 1 process plugins. These plugins had been compiled against Camunda 7 APIs and were already deployed across the network. Requiring every plugin to be refactored and released simultaneously would have made the migration considerably more disruptive. To avoid this, DSF 2 introduced a compatibility layer that rewrites the relevant Java bytecode at runtime. At the same time, the new Process Plugin API v2 provides a clean foundation for future development based on Operaton. The approach is described in our Operaton release-party talk, ["The migration path from Camunda 7 to Operaton in a real production environment."](https://www.youtube.com/watch?v=sdjm1wqGMMM)

## Open source as infrastructure
With this migration, we demonstrate the importance of free and open-source software in building sustainable, publicly funded research infrastructure. We would like to thank the Operaton community for providing a transparent, collaboratively maintained BPMN engine that enables long-term process orchestration independent of proprietary licensing.
The successful nationwide rollout also shows that Operaton can support complex distributed workflows while preserving existing structures in processes and plugins. We thank both communities for making this milestone possible and look forward to continuing our collaboration.

Read the corresponding blog post on the Operaton website: [Operaton.org](https://operaton.org/2026/07/09/Operaton-x-Data-Sharing-Framework/)
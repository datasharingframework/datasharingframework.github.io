---
title: "DSF 2.0 Announcement"
date: 2025-07-28
type: "news"
excerpt: "We’re excited to announce that the next major release, DSF 2.0, is currently in development! This update brings significant improvements and new features designed to enhance performance and usability. This article is a  summary on what to expect in the upcoming release."
article: true
category: 
  - News
tags:
  - News
  - DSF v2
---

## Release Strategy for the Data Sharing Framework 

The following outlines the current release strategy for the Data Sharing Framework (DSF) and provides an overview of planned developments.

The next major version, **DSF 2**, is currently under active development. A central element of this release is a revised API for process plugins, designed to simplify and accelerate the development of custom plugins for individual use cases.

According to the current development status, **DSF 2 will remain backwards compatible with DSF 1**. Existing process plugins are expected to continue functioning, and compatibility with current DSF versions is intended.

In addition to the new API, DSF 2 will include a range of enhancements:

* Upgrade to the latest versions of Java, Jetty, Spring, HAPI, and other core dependencies
* Support for large binary resources (currently tested with files of approx. 250GiB)
* Improved and streamlined process plugin API
* Numerous internal optimizations for increased performance and stability (including improved logging and simplified configuration of external FHIR servers)

A **test release of DSF 2** is scheduled for fall of this year, with **general availability for production use** planned by the end of the year. A milestone release is already available for preview purposes; however, both the API and feature set are subject to change prior to the final release.

Following the production release of DSF 2, further development of DSF 1 will be discontinued. Until then, at least one additional DSF 1 release is planned.

The new API V2 is particularly relevant for stakeholders involved in the development of custom process plugins. Feedback and contributions to the ongoing development are welcome.

Any changes to the current timeline will be communicated promptly. Upcomming datails will be available under [Operations](../operations/v2.0.0-M3/index.md). 

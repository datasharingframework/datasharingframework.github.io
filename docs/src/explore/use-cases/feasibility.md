---
title: Feasibility
icon: diagram
---
::: warning Work in progress

The use cases are being reworked and are currently a work in progress. Please check back later.
:::

## Overview 
Funded by the German Federal Ministry of Research and Education, 25 [sites](https://forschen-fuer-gesundheit.de/en/locations/) have installed the DSF to execute the [Feasibility](https://github.com/medizininformatik-initiative/feasibility-dsf-process/) process. To perform feasibility queries, a researcher can register and query data on the [FDPG (Forschungsdaten Portal für Gesundheit - Research Data Portal)](https://www.forschen-fuer-gesundheit.de/) website. Basic data of hospitalizations of over 8 million patients with over 40 million diagnoses and much more such as laboratory values or drug prescriptions are available. After a successful query, the data is made available in standardized FHIR format. Further information can be found in the [flyer](https://www.medizininformatik-initiative.de/sites/default/files/2023-05/20230509_TMF_Faltflyer_A4_digital.pdf).

## The Feasibility Process
Medical routine data holds great promise for advancing research, yet its integration into a research context poses significant challenges. To address this, Medical Data Integration Centers have been established, by the medical informatics initiative to consolidate data from primary information systems into a central repository. However, relying on data from only one organization is rarely sufficient to answer complex research questions, so merging data across institutional boundaries is necessary.

To enable researchers to leverage this integrated data for specific research projects, there is a critical need for the ability to query cohort sizes across institutions. The [feasibility](https://github.com/medizininformatik-initiative/feasibility-dsf-process/) process allows researchers to conduct automated and distributed feasibility queries, i.e., cohort size estimates. This process is executed according to the open standard BPMN 2.0, the underlying process data model is based on HL7 FHIR R4 resources.

## Technical Information
- [DSF Middleware Setup](https://github.com/medizininformatik-initiative/feasibility-deploy/wiki/DSF-Middleware-Setup): The DSF middleware connects your site to the central platform. This allows it to receive feasibility query requests as well as reporting back any results of these queries.
- [Feasibility Process](https://github.com/medizininformatik-initiative/feasibility-dsf-process/): Core Feasibility Process
- [Feasibility Triangle](https://github.com/medizininformatik-initiative/feasibility-deploy/tree/main/feasibility-triangle): The Feasibility Triangle part of this repository provides a site (data integration center) with all the necessary components to set up in order to allow feasibility queries from the central feasibility portal.
- [Data Transfer](https://github.com/medizininformatik-initiative/mii-dsf-processes/tree/main)
- [Data extraction after successful feasibility query](https://github.com/medizininformatik-initiative/mii-dsf-processes/blob/main/mii-dsf-processes-docker-test-setup/README-Process-Projectathon-Data-Sharing.md)
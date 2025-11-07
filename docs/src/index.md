---
home: true
icon: home
title: Data Sharing Framework
heroImage: /photos/home/logo.svg
heroText: Data Sharing Framework
layout: ParentLayout
tagline: A performant, secure, and innovative framework that enables biomedical researchers to extract value from routine data. 
# A performant, secure and innovative framework that enables healthcare data exchange across organizational boundaries. 

features:
  - title: Introduction
    icon: info
    details: Introduction to the DSF and informations about Use-Cases/Projects. 
    link: /explore/concepts/introduction

  - title: Get Started 
    icon: launch
    details:  Get technical insights and install the DSF | Develop Process Plugins.
    link: /operations/latest/

  - title: About Us
    icon: creative
    details: Contact, partners, the team behind the DSF and more... Join our community!
    link: /community/
  
  - title: GitHub
    icon: github
    details: Take a look at the open-source reference implementation.
    link: https://github.com/datasharingframework/dsf


---
---
# Data Sharing Framework
The **Data Sharing Framework (DSF)** is a concept for a secure middleware to distribute data sharing processes based on the BPMN 2.0 and FHIR R4 standards. The DSF is used to support biomedical research with routine data, aiming to extract, merge, pseudonymize and provide data stored in multiple distributed organizations. Every participating site runs a FHIR endpoint accessible by other sites and a business process engine in the local secured network. The process engines execute BPMN processes in order to coordinate local and remote steps necessary to enable cross-site data sharing or feasibility analyses. This includes access to local data repositories, use-and-access-committee decision support, consent filtering, and privacy preserving record-linkage and pseudonymization. The aim is to enable secure and syntactically-, semantically- and process-interoperable data exchange across organizational boundaries. The secure communication infrastructure is funded by the German Federal Ministry of Education and Research within the Medical Informatics structure as *[DSF Community](https://www.gesundheitsforschung-bmbf.de/de/dsf-medizininformatik-struktur-data-sharing-framework-community-16133.php)*. 

![DSF concept](/photos/info/introduction/dsf-concept.png)


## News
**DSF 2.0.0 - First Release Candidate (RC1)**
We are happy to announce the DSF 2.0.0 Release Candidate (RC1)! This milestone represents a major advancement for the DSF, bringing new features and significant improvements. The RC1 release is now publicly available on the DSF GitHub. We highlight some of the key features, you can find more details in the full article.
[Read more](/posts/2025-11-07-dsfv2-rc1)

---

**Operaton**
The Data Sharing Framework is entering an exciting new phase. With the upcoming DSF 2.0 release, we are transitioning our business process engine from Camunda 7 to Operaton 1.0.0, a modern, open-source BPMN 2.0 engine. This move marks a significant step toward improved scalability and long-term maintainability. 
[Read more](/posts/2025-10-02-operaton-DSF-2.0)

---

**DSF 2.0 Announcement**
We’re excited to announce that the next major release, DSF 2.0, is currently in development! This update brings significant improvements and new features designed to enhance performance and usability. This article is a summary on what to expect in the upcoming release. Upcomming datails will be available under [Operations](operations/v2.0.0-M3/index.md)
[Read more](/posts/2025-07-28-dsfv2-announcement)

--- 
#### Feel free to contact us via <a href="mailto:dsf-gecko@hs-heilbronn.de">dsf-gecko@hs-heilbronn.de</a> and we will take care of your request as soon as possible.

<div class="image-container">
    <img src="/photos/learnmore/funding/bmbf-mii.png">
</div>

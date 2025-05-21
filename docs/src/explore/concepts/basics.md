---
title: Basics and Standards
icon: study
---
Here you can find some basic information about interoperability and the standards were using within the DSF before we go into details about the architecture. Here we only describe how the standards (FHIR and BPMN) are used within the DSF. If you want to gain a deeper knowledge of the standards, we recommend visiting these websites: [HL7 FHIR](https://www.hl7.org/fhir/) and [BPMN](https://www.bpmn.org/) 

## Interoperability 
Interoperability is the ability of different systems to work together as seamlessly as possible. We can divide interoperability into four levels. 
-	The *foundational level* defines the basic interconnectivity requirements which are necessary for a system or application to securely transmit data to and receive data from another system or application. Techniques such as HTTPS or REST are used for this.
-	The second level is the *structural level*. It defines the format and the syntax of the data exchange. Therefore, data formats like JSON or XML can be used.
-	The *semantic level* ensures the correct interpretation of the contents of the exchanged data between the different systems. Therefore, information models as FHIR or CDA or medical terminology systems like SNOMED CT or ICD can be used.
-	The final level, the *organizational level*, includes policy, social, legal and organizational aspects that enable secure, seamless and timely communication and use of data both within and between organizations. And importantly, these components enable shared consent, trust and integrated end-user processes and workflows.


![Levels of interoperability](/photos/info/basics/interoperability.png =600x)

## HL7 FHIR :fire:
[HL7 FHIR](https://www.hl7.org/fhir/) is a standard for data exchange that can be used as an information model for communication within and between systems. The standard is based on resources, references and profiles. With this concept, FHIR offers interoperability out of the box. The resources describe data formats. 150 specified resources cover the entire health system. An example of a resource would be a patient, which consists of data such as name or gender. These resources can refer to other resources by means of references. This connects the information units into a network. For seamless exchange of information, FHIR supports RESTful architectures and web standards such as XML or JSON, which makes it easier for developers to use FHIR.
The FHIR profiles can be understood as a set of rules. They explain, for example, which attributes must be mandatorily specified or which terminology may be used. In addition, profiles and controlled vocabulary can be validated. 

## BPMN
[Business Process Modelling Notation](https://www.bpmn.org/) is a modelling language that can be used to model and implement processes. The models can be used for the documentation of processes and for communication between different stakeholders. Furthermore, BPMN forms a standardised bridge between process design and process implementation. This is because it simplifies implementation. These processes are executed by a Business Process Engine. Basically, a BPE is a server that can read and execute the business process. More about this in the section on architecture.

![Example of a BPMN model (Ping-Pong-Process of the DSF)](/photos/info/basics/bpmn1.png)

## Why are we using FHIR and BPMN?
On the one hand we use FHIR because of the mentioned benefits. On the other hand FHIR fits great with BPMN and these two in combination are a great fit for what we do: 
*Execute distributed data sharing Processes.*

We do not need all 150 FHIR resources. The following FHIR resources are the ones we need and have implemented: *ActivityDefinition, Binary, Bundle, CodeSystem, DocumentReference, Endpoint, Group, Library, Measure, MeasureReport, NamingSystem, Organization, Questionnaire, QuestionnaireResponse, ResearchStudy, StructureDefinition, Subscription, Task and ValueSet.*

Don't worry, it is not important to understand them all now. But to understand why we use FHIR and BPMN, it is important to look at the *ActivityDefinition* and *TaskResources* on the FHIR side and the *Message Events* on the BPMN side.
In the following picture you can see parts of BPMN. These *Message Events* enable the communication between different organizations. Every time there is a *Message Event* between two business processes, there is a corresponding *TaskResource* on the FHIR side. When one organization sends a message for example “do some work” to another organization or when we send a message to ourselves to start or continue a process, we do this by creating a FHIR *TaskResource* with the status “requested”. After that the Business Process Engine starts the work and the status switches to “in-progress” and if the work is done to “completed” or if there is a problem to “failed”. 

The *ActivityDefinition* is needed to publish what can be done in an instance. That means the *ActivityDefinition* contains the process description with the authorisation who is allowed to send a message. 

![BPMN *MessageEvents*](/photos/info/basics/bpmn2.png =250x400)
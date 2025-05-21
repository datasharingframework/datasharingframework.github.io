---
title: Allow Lists
icon: share
---

## Goal
The main objective is to allow only authorized organizations to do what "we" allow them to do (e.g. query data).
First, we need a list of organizations that we trust. Secondly, we need a way to ensure that the other party is a member of the parent organization. Thirdly, a list of actions we want to allow the organization to perform is needed. An organization can have different roles in different use cases. 

The Allow List consists of Organization-, Endpoint- and OrganisationAffiliation- resources. With these resources the allow list defines communication partners and and parent organizations like research consortia and groups as well as the roles of each organization. Each DSF FHIR server stores their own allow list. To make sure that processes can be executed, parties must allow access via their allow list.

![Architecture](/photos/info/allowList/allowList-architecture.png)

## Allow List Managment
[Here](/operations/v1/latest/maintain/allowList-mgm.md) you can read all the information if you want to create or update an Allow List.

#### Feel free to contact us via <a href="mailto:dsf-gecko@hs-heilbronn.de"> E-Mail (dsf-gecko@hs-heilbronn.de)</a> and we will take care of your request as soon as possible.
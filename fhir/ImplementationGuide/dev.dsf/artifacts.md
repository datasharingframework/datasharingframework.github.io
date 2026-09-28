# Artifacts Summary - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Structures: Abstract Profiles 

These are profiles on resources or data types that describe patterns used by other profiles, but cannot be instantiated directly. I.e. instances can conform to profiles **based** on these abstract profiles but do not declare conformance to the abstract profiles themselves.

| |
| :--- |
| [Task](StructureDefinition-task.md) |

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| |
| :--- |
| [ActivityDefinition](StructureDefinition-activity-definition.md) |
| [Binary](StructureDefinition-binary.md) |
| [Bundle](StructureDefinition-bundle.md) |
| [CodeSystem](StructureDefinition-code-system.md) |
| [DocumentReference](StructureDefinition-document-reference.md) |
| [Endpoint](StructureDefinition-endpoint.md) |
| [Group](StructureDefinition-group.md) |
| [HealthcareService](StructureDefinition-healthcare-service.md) |
| [Library](StructureDefinition-library.md) |
| [Location](StructureDefinition-location.md) |
| [Measure](StructureDefinition-measure.md) |
| [MeasureReport](StructureDefinition-measure-report.md) |
| [NamingSystem](StructureDefinition-naming-system.md) |
| [Organization](StructureDefinition-organization.md) |
| [OrganizationAffiliation](StructureDefinition-organization-affiliation.md) |
| [OrganizationParent](StructureDefinition-organization-parent.md) |
| [Patient](StructureDefinition-patient.md) |
| [Practitioner](StructureDefinition-practitioner.md) |
| [PractitionerRole](StructureDefinition-practitioner-role.md) |
| [Provenance](StructureDefinition-provenance.md) |
| [Questionnaire](StructureDefinition-questionnaire.md) |
| [QuestionnaireResponse](StructureDefinition-questionnaire-response.md) |
| [ResearchStudy](StructureDefinition-research-study.md) |
| [StructureDefinition](StructureDefinition-structure-definition.md) |
| [Subscription](StructureDefinition-subscription.md) |
| [ValueSet](StructureDefinition-value-set.md) |

### Structures: Data Type Profiles 

These define constraints on FHIR data types for systems conforming to this implementation guide.

| |
| :--- |
| [Meta](StructureDefinition-meta.md) |
| [ProcessAuthorizationLocalAll](StructureDefinition-coding-process-authorization-local-all.md) |
| [ProcessAuthorizationLocalAllPractitioner](StructureDefinition-coding-process-authorization-local-all-practitioner.md) |
| [ProcessAuthorizationLocalOrganization](StructureDefinition-coding-process-authorization-local-organization.md) |
| [ProcessAuthorizationLocalOrganizationPractitioner](StructureDefinition-coding-process-authorization-local-organization-practitioner.md) |
| [ProcessAuthorizationLocalParentOrganizationRole](StructureDefinition-coding-process-authorization-local-parent-organization-role.md) |
| [ProcessAuthorizationLocalParentOrganizationRolePractitioner](StructureDefinition-coding-process-authorization-local-parent-organization-role-practitioner.md) |
| [ProcessAuthorizationRemoteAll](StructureDefinition-coding-process-authorization-remote-all.md) |
| [ProcessAuthorizationRemoteOrganization](StructureDefinition-coding-process-authorization-remote-organization.md) |
| [ProcessAuthorizationRemoteParentOrganizationRole](StructureDefinition-coding-process-authorization-remote-parent-organization-role.md) |

### Structures: Extension Definitions 

These define constraints on FHIR data types for systems conforming to this implementation guide.

| |
| :--- |
| [CertificateThumbprint](StructureDefinition-extension-certificate-thumbprint.md) |
| [CheckLogicalReference](StructureDefinition-extension-check-logical-reference.md) |
| [ProcessAuthorization](StructureDefinition-extension-process-authorization.md) |
| [ProcessAuthorizationOrganization](StructureDefinition-extension-process-authorization-organization.md) |
| [ProcessAuthorizationOrganizationPractitioner](StructureDefinition-extension-process-authorization-organization-practitioner.md) |
| [ProcessAuthorizationParentOrganizationRole](StructureDefinition-extension-process-authorization-parent-organization-role.md) |
| [ProcessAuthorizationParentOrganizationRolePractitioner](StructureDefinition-extension-process-authorization-parent-organization-role-practitioner.md) |
| [ProcessAuthorizationPractitioner](StructureDefinition-extension-process-authorization-practitioner.md) |
| [QuestionnaireAuthorization](StructureDefinition-extension-questionnaire-authorization.md) |
| [ReadAccessOrganization](StructureDefinition-extension-read-access-organization.md) |
| [ReadAccessParentOrganizationRole](StructureDefinition-extension-read-access-parent-organization-role.md) |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [DSF BPMN message values](ValueSet-bpmn-message.md) | ValueSet with standard BPMN message values for Task resources |
| [DSF Organization Role](ValueSet-organization-role.md) | ValueSet with DSF organization roles used in OrganizationAffiliation resources |
| [DSF Practitioner Role](ValueSet-practitioner-role.md) | ValueSet with DSF practitioner roles used in OrganizationAffiliation resources |
| [DSF Process Authorization Recipient](ValueSet-process-authorization-recipient.md) | ValueSet with proces authorization codes for recipients |
| [DSF Process Authorization Requester](ValueSet-process-authorization-requester.md) | ValueSet with proces authorization codes for requesters |
| [DSF Read Access Tag](ValueSet-read-access-tag.md) | ValueSet with read access tags |

### Terminology: Code Systems 

These define new code systems used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [DSF BPMN message values](CodeSystem-bpmn-message.md) | CodeSystem with standard BPMN message values for Task resources |
| [DSF Organization Role](CodeSystem-organization-role.md) | CodeSystem with DSF organization roles used in OrganizationAffiliation resources |
| [DSF Practitioner Role](CodeSystem-practitioner-role.md) | CodeSystem with DSF practitioner roles |
| [DSF Process Authorization](CodeSystem-process-authorization.md) | CodeSystem with proces authorization codes |
| [DSF Read Access Tag](CodeSystem-read-access-tag.md) | CodeSystem with read access tags |

### Terminology: Naming Systems 

These define identifier and/or code system identities used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [DsfEndpointIdentifier](NamingSystem-dsf-endpoint.md) | Shortest DNS that resolves a DSF endpoint, typically the domain name used in endpoint.address |
| [DsfOrganizationIdentifier](NamingSystem-dsf-organization.md) | Shortest DNS that resolves the homepage of the organization, e.g. hs-heilbronn.de, ukhd.de, uksh.de |
| [DsfPractitionerIdentifier](NamingSystem-dsf-practitioner.md) | E-mail address identifying a practitioner |
| [DsfTaskIdentifier](NamingSystem-dsf-task.md) | Name identifying a draft Task resource |

### Example: Example Instances 

These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.

| |
| :--- |
| [Example Subscription - dsf-bpmn-questionnaire-response-subscription](Subscription-dsf-bpmn-questionnaire-response-subscription.md) |
| [Example Subscription - dsf-bpmn-task-subscription](Subscription-dsf-bpmn-task-subscription.md) |


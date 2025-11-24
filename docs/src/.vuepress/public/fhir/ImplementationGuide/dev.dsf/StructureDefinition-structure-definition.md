# StructureDefinition - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **StructureDefinition**

## Resource Profile: StructureDefinition 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/structure-definition | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:StructureDefinition |

**Usages:**

* Examples for this Profile: [ActivityDefinition](StructureDefinition-activity-definition.md), [Bundle](StructureDefinition-bundle.md), [CodeSystem](StructureDefinition-code-system.md), [ProcessAuthorizationLocalAllPractitioner](StructureDefinition-coding-process-authorization-local-all-practitioner.md)...Show 43 more,[ProcessAuthorizationLocalAll](StructureDefinition-coding-process-authorization-local-all.md),[ProcessAuthorizationLocalOrganizationPractitioner](StructureDefinition-coding-process-authorization-local-organization-practitioner.md),[ProcessAuthorizationLocalOrganization](StructureDefinition-coding-process-authorization-local-organization.md),[ProcessAuthorizationLocalParentOrganizationRolePractitioner](StructureDefinition-coding-process-authorization-local-parent-organization-role-practitioner.md),[ProcessAuthorizationLocalParentOrganizationRole](StructureDefinition-coding-process-authorization-local-parent-organization-role.md),[ProcessAuthorizationRemoteAll](StructureDefinition-coding-process-authorization-remote-all.md),[ProcessAuthorizationRemoteOrganization](StructureDefinition-coding-process-authorization-remote-organization.md),[ProcessAuthorizationRemoteParentOrganizationRole](StructureDefinition-coding-process-authorization-remote-parent-organization-role.md),[DocumentReference](StructureDefinition-document-reference.md),[Endpoint](StructureDefinition-endpoint.md),[CertificateThumbprint](StructureDefinition-extension-certificate-thumbprint.md),[CheckLogicalReference](StructureDefinition-extension-check-logical-reference.md),[ProcessAuthorizationOrganizationPractitioner](StructureDefinition-extension-process-authorization-organization-practitioner.md),[ProcessAuthorizationOrganization](StructureDefinition-extension-process-authorization-organization.md),[ProcessAuthorizationParentOrganizationRolePractitioner](StructureDefinition-extension-process-authorization-parent-organization-role-practitioner.md),[ProcessAuthorizationParentOrganizationRole](StructureDefinition-extension-process-authorization-parent-organization-role.md),[ProcessAuthorizationPractitioner](StructureDefinition-extension-process-authorization-practitioner.md),[ProcessAuthorization](StructureDefinition-extension-process-authorization.md),[QuestionnaireAuthorization](StructureDefinition-extension-questionnaire-authorization.md),[ReadAccessOrganization](StructureDefinition-extension-read-access-organization.md),[ReadAccessParentOrganizationRole](StructureDefinition-extension-read-access-parent-organization-role.md),[Group](StructureDefinition-group.md),[HealthcareService](StructureDefinition-healthcare-service.md),[Library](StructureDefinition-library.md),[Location](StructureDefinition-location.md),[MeasureReport](StructureDefinition-measure-report.md),[Measure](StructureDefinition-measure.md),[Meta](StructureDefinition-meta.md),[NamingSystem](StructureDefinition-naming-system.md),[OrganizationAffiliation](StructureDefinition-organization-affiliation.md),[OrganizationParent](StructureDefinition-organization-parent.md),[Organization](StructureDefinition-organization.md),[Patient](StructureDefinition-patient.md),[PractitionerRole](StructureDefinition-practitioner-role.md),[Practitioner](StructureDefinition-practitioner.md),[Provenance](StructureDefinition-provenance.md),[QuestionnaireResponse](StructureDefinition-questionnaire-response.md),[Questionnaire](StructureDefinition-questionnaire.md),[ResearchStudy](StructureDefinition-research-study.md),[StructureDefinition](StructureDefinition-structure-definition.md),[Subscription](StructureDefinition-subscription.md),[Task](StructureDefinition-task.md)and[ValueSet](StructureDefinition-value-set.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/structure-definition)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-structure-definition.csv), [Excel](StructureDefinition-structure-definition.xlsx), [Schematron](StructureDefinition-structure-definition.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "structure-definition",
  "meta" : {
    "profile" : [
      "http://dsf.dev/fhir/StructureDefinition/structure-definition"
    ],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/StructureDefinition/structure-definition",
  "version" : "2.0.0",
  "name" : "StructureDefinition",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-10-27",
  "publisher" : "DSF Community",
  "contact" : [
    {
      "name" : "DSF Community",
      "telecom" : [
        {
          "system" : "url",
          "value" : "https://dsf.dev"
        }
      ]
    }
  ],
  "fhirVersion" : "4.0.1",
  "mapping" : [
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    },
    {
      "identity" : "workflow",
      "uri" : "http://hl7.org/fhir/workflow",
      "name" : "Workflow Pattern"
    },
    {
      "identity" : "w5",
      "uri" : "http://hl7.org/fhir/fivews",
      "name" : "FiveWs Pattern Mapping"
    },
    {
      "identity" : "iso11179",
      "uri" : "http://metadata-standards.org/11179/",
      "name" : "ISO 11179"
    },
    {
      "identity" : "objimpl",
      "uri" : "http://hl7.org/fhir/object-implementation",
      "name" : "Object Implementation Information"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "StructureDefinition",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "StructureDefinition",
        "path" : "StructureDefinition"
      },
      {
        "id" : "StructureDefinition.meta",
        "path" : "StructureDefinition.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "StructureDefinition.url",
        "path" : "StructureDefinition.url",
        "min" : 1
      },
      {
        "id" : "StructureDefinition.version",
        "path" : "StructureDefinition.version",
        "min" : 1
      },
      {
        "id" : "StructureDefinition.date",
        "path" : "StructureDefinition.date",
        "min" : 1
      }
    ]
  }
}

```

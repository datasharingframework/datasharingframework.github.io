# Meta - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Meta**

## Data Type Profile: Meta 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/meta | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:Meta |

**Usages:**

* Use this DataType Profile: [ActivityDefinition](StructureDefinition-activity-definition.md), [Bundle](StructureDefinition-bundle.md), [CodeSystem](StructureDefinition-code-system.md), [DocumentReference](StructureDefinition-document-reference.md)...Show 20 more,[Endpoint](StructureDefinition-endpoint.md),[Group](StructureDefinition-group.md),[HealthcareService](StructureDefinition-healthcare-service.md),[Library](StructureDefinition-library.md),[Location](StructureDefinition-location.md),[MeasureReport](StructureDefinition-measure-report.md),[Measure](StructureDefinition-measure.md),[NamingSystem](StructureDefinition-naming-system.md),[OrganizationAffiliation](StructureDefinition-organization-affiliation.md),[OrganizationParent](StructureDefinition-organization-parent.md),[Organization](StructureDefinition-organization.md),[Patient](StructureDefinition-patient.md),[PractitionerRole](StructureDefinition-practitioner-role.md),[Practitioner](StructureDefinition-practitioner.md),[Provenance](StructureDefinition-provenance.md),[Questionnaire](StructureDefinition-questionnaire.md),[ResearchStudy](StructureDefinition-research-study.md),[StructureDefinition](StructureDefinition-structure-definition.md),[Subscription](StructureDefinition-subscription.md)and[ValueSet](StructureDefinition-value-set.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/meta)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-meta.csv), [Excel](StructureDefinition-meta.xlsx), [Schematron](StructureDefinition-meta.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "meta",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/meta",
  "version" : "2.0.0",
  "name" : "Meta",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-11-26",
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
    }
  ],
  "kind" : "complex-type",
  "abstract" : false,
  "type" : "Meta",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Meta",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Meta",
        "path" : "Meta",
        "constraint" : [
          {
            "key" : "at-least-on-read-access-tag",
            "severity" : "error",
            "human" : "At least one meta.tag from system 'http://dsf.dev/fhir/CodeSystem/read-access-tag' required",
            "expression" : "tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag').exists()"
          },
          {
            "key" : "organization-implies-local",
            "severity" : "error",
            "human" : "ORGANIZATION tag requires LOCAL",
            "expression" : "tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'ORGANIZATION').exists() implies tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'LOCAL').exists()"
          },
          {
            "key" : "role-implies-local",
            "severity" : "error",
            "human" : "ROLE tag requires LOCAL",
            "expression" : "tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'ROLE').exists() implies tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'LOCAL').exists()"
          },
          {
            "key" : "all-implies-no-local",
            "severity" : "error",
            "human" : "ALL tag can not be used with LOCAL",
            "expression" : "tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'ALL').exists() implies tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'LOCAL').exists().not()"
          },
          {
            "key" : "all-implies-no-organization",
            "severity" : "error",
            "human" : "ALL tag can not be used with ORGANIZATION",
            "expression" : "tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'ALL').exists() implies tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'ORGANIZATION').exists().not()"
          },
          {
            "key" : "all-implies-no-role",
            "severity" : "error",
            "human" : "ALL tag can not be used with ROLE",
            "expression" : "tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'ALL').exists() implies tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag' and code = 'ROLE').exists().not()"
          }
        ]
      },
      {
        "id" : "Meta.tag",
        "path" : "Meta.tag",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "system"
            },
            {
              "type" : "value",
              "path" : "code"
            }
          ],
          "rules" : "open"
        }
      },
      {
        "id" : "Meta.tag:all",
        "path" : "Meta.tag",
        "sliceName" : "all",
        "min" : 0,
        "max" : "1"
      },
      {
        "id" : "Meta.tag:all.system",
        "path" : "Meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Meta.tag:all.code",
        "path" : "Meta.tag.code",
        "min" : 1,
        "fixedCode" : "ALL"
      },
      {
        "id" : "Meta.tag:local",
        "path" : "Meta.tag",
        "sliceName" : "local",
        "min" : 0,
        "max" : "1"
      },
      {
        "id" : "Meta.tag:local.system",
        "path" : "Meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Meta.tag:local.code",
        "path" : "Meta.tag.code",
        "min" : 1,
        "fixedCode" : "LOCAL"
      },
      {
        "id" : "Meta.tag:organization",
        "path" : "Meta.tag",
        "sliceName" : "organization",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "Meta.tag:organization.extension:organization-extension",
        "path" : "Meta.tag.extension",
        "sliceName" : "organization-extension",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "Extension",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/extension-read-access-organization|2.0.0"
            ]
          }
        ]
      },
      {
        "id" : "Meta.tag:organization.system",
        "path" : "Meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Meta.tag:organization.code",
        "path" : "Meta.tag.code",
        "min" : 1,
        "fixedCode" : "ORGANIZATION"
      },
      {
        "id" : "Meta.tag:read-access-parent-organization-role",
        "path" : "Meta.tag",
        "sliceName" : "read-access-parent-organization-role",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "Meta.tag:read-access-parent-organization-role.extension:role-extension",
        "path" : "Meta.tag.extension",
        "sliceName" : "role-extension",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "Extension",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/extension-read-access-parent-organization-role|2.0.0"
            ]
          }
        ]
      },
      {
        "id" : "Meta.tag:read-access-parent-organization-role.system",
        "path" : "Meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Meta.tag:read-access-parent-organization-role.code",
        "path" : "Meta.tag.code",
        "min" : 1,
        "fixedCode" : "ROLE"
      }
    ]
  }
}

```

# Organization - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Organization**

## Resource Profile: Organization 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/organization | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:Organization |

**Usages:**

* Refer to this Profile: [Endpoint](StructureDefinition-endpoint.md), [OrganizationAffiliation](StructureDefinition-organization-affiliation.md), [QuestionnaireResponse](StructureDefinition-questionnaire-response.md) and [Task](StructureDefinition-task.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/organization)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-organization.csv), [Excel](StructureDefinition-organization.xlsx), [Schematron](StructureDefinition-organization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "organization",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/organization",
  "version" : "2.0.0",
  "name" : "Organization",
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
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    },
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    },
    {
      "identity" : "servd",
      "uri" : "http://www.omg.org/spec/ServD/1.0/",
      "name" : "ServD"
    },
    {
      "identity" : "w5",
      "uri" : "http://hl7.org/fhir/fivews",
      "name" : "FiveWs Pattern Mapping"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Organization",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Organization",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Organization",
        "path" : "Organization"
      },
      {
        "id" : "Organization.meta",
        "path" : "Organization.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "Organization.extension",
        "path" : "Organization.extension",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "url"
            }
          ],
          "rules" : "open"
        },
        "min" : 1
      },
      {
        "id" : "Organization.extension:certificateThumbprint",
        "path" : "Organization.extension",
        "sliceName" : "certificateThumbprint",
        "min" : 1,
        "type" : [
          {
            "code" : "Extension",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/extension-certificate-thumbprint|2.0.0"
            ]
          }
        ]
      },
      {
        "id" : "Organization.identifier",
        "path" : "Organization.identifier",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "system"
            },
            {
              "type" : "value",
              "path" : "value"
            }
          ],
          "rules" : "open"
        },
        "min" : 1
      },
      {
        "id" : "Organization.identifier:dsfIdentifier",
        "path" : "Organization.identifier",
        "sliceName" : "dsfIdentifier",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Organization.identifier:dsfIdentifier.system",
        "path" : "Organization.identifier.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/sid/organization-identifier"
      },
      {
        "id" : "Organization.identifier:dsfIdentifier.value",
        "path" : "Organization.identifier.value",
        "min" : 1
      },
      {
        "id" : "Organization.active",
        "path" : "Organization.active",
        "min" : 1
      },
      {
        "id" : "Organization.endpoint",
        "path" : "Organization.endpoint",
        "min" : 1,
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : ["http://dsf.dev/fhir/StructureDefinition/endpoint|2.0.0"]
          }
        ]
      },
      {
        "id" : "Organization.endpoint.reference",
        "path" : "Organization.endpoint.reference",
        "min" : 1
      }
    ]
  }
}

```

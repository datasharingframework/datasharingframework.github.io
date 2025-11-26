# ProcessAuthorizationRemoteParentOrganizationRole - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ProcessAuthorizationRemoteParentOrganizationRole**

## Data Type Profile: ProcessAuthorizationRemoteParentOrganizationRole 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-parent-organization-role | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:ProcessAuthorizationRemoteParentOrganizationRole |

**Usages:**

* Use this DataType Profile: [ProcessAuthorization](StructureDefinition-extension-process-authorization.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/coding-process-authorization-remote-parent-organization-role)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-coding-process-authorization-remote-parent-organization-role.csv), [Excel](StructureDefinition-coding-process-authorization-remote-parent-organization-role.xlsx), [Schematron](StructureDefinition-coding-process-authorization-remote-parent-organization-role.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "coding-process-authorization-remote-parent-organization-role",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-parent-organization-role",
  "version" : "2.0.0",
  "name" : "ProcessAuthorizationRemoteParentOrganizationRole",
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
      "identity" : "orim",
      "uri" : "http://hl7.org/orim",
      "name" : "Ontological RIM Mapping"
    }
  ],
  "kind" : "complex-type",
  "abstract" : false,
  "type" : "Coding",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Coding",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Coding.extension",
        "path" : "Coding.extension",
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
        "id" : "Coding.extension:consortium-role",
        "path" : "Coding.extension",
        "sliceName" : "consortium-role",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "Extension",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-parent-organization-role|2.0.0"
            ]
          }
        ]
      },
      {
        "id" : "Coding.system",
        "path" : "Coding.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/process-authorization"
      },
      {
        "id" : "Coding.code",
        "path" : "Coding.code",
        "min" : 1,
        "fixedCode" : "REMOTE_ROLE"
      }
    ]
  }
}

```

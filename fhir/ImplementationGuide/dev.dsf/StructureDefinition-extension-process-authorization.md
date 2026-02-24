# ProcessAuthorization - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ProcessAuthorization**

## Extension: ProcessAuthorization 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/extension-process-authorization | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:ProcessAuthorization |

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [ActivityDefinition](StructureDefinition-activity-definition.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/extension-process-authorization)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-extension-process-authorization.csv), [Excel](StructureDefinition-extension-process-authorization.xlsx), [Schematron](StructureDefinition-extension-process-authorization.sch) 

#### Terminology Bindings

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "extension-process-authorization",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization",
  "version" : "2.0.0",
  "name" : "ProcessAuthorization",
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
  "context" : [
    {
      "type" : "element",
      "expression" : "ActivityDefinition"
    }
  ],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Extension",
        "path" : "Extension",
        "min" : 1
      },
      {
        "id" : "Extension.extension",
        "path" : "Extension.extension",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "url"
            }
          ],
          "rules" : "open"
        },
        "min" : 4
      },
      {
        "id" : "Extension.extension:message-name",
        "path" : "Extension.extension",
        "sliceName" : "message-name",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Extension.extension:message-name.url",
        "path" : "Extension.extension.url",
        "fixedUri" : "message-name"
      },
      {
        "id" : "Extension.extension:message-name.value[x]",
        "path" : "Extension.extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "Extension.extension:task-profile",
        "path" : "Extension.extension",
        "sliceName" : "task-profile",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Extension.extension:task-profile.url",
        "path" : "Extension.extension.url",
        "fixedUri" : "task-profile"
      },
      {
        "id" : "Extension.extension:task-profile.value[x]",
        "path" : "Extension.extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "canonical"
          }
        ]
      },
      {
        "id" : "Extension.extension:requester",
        "path" : "Extension.extension",
        "sliceName" : "requester",
        "min" : 1
      },
      {
        "id" : "Extension.extension:requester.url",
        "path" : "Extension.extension.url",
        "fixedUri" : "requester"
      },
      {
        "id" : "Extension.extension:requester.value[x]",
        "path" : "Extension.extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "Coding",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-all|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-all-practitioner|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-organization|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-organization-practitioner|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-parent-organization-role|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-parent-organization-role-practitioner|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-all|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-organization|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-parent-organization-role|2.0.0"
            ]
          }
        ],
        "binding" : {
          "strength" : "required",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/process-authorization-requester|2.0.0"
        }
      },
      {
        "id" : "Extension.extension:recipient",
        "path" : "Extension.extension",
        "sliceName" : "recipient",
        "min" : 1
      },
      {
        "id" : "Extension.extension:recipient.url",
        "path" : "Extension.extension.url",
        "fixedUri" : "recipient"
      },
      {
        "id" : "Extension.extension:recipient.value[x]",
        "path" : "Extension.extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "Coding",
            "profile" : [
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-all|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-organization|2.0.0",
              "http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-parent-organization-role|2.0.0"
            ]
          }
        ],
        "binding" : {
          "strength" : "required",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/process-authorization-recipient|2.0.0"
        }
      },
      {
        "id" : "Extension.url",
        "path" : "Extension.url",
        "fixedUri" : "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization"
      },
      {
        "id" : "Extension.value[x]",
        "path" : "Extension.value[x]",
        "max" : "0"
      }
    ]
  }
}

```

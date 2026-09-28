# ProcessAuthorizationParentOrganizationRolePractitioner - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ProcessAuthorizationParentOrganizationRolePractitioner**

## Extension: ProcessAuthorizationParentOrganizationRolePractitioner 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-parent-organization-role-practitioner | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:ProcessAuthorizationParentOrganizationRolePractitioner |

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [ProcessAuthorizationLocalParentOrganizationRolePractitioner](StructureDefinition-coding-process-authorization-local-parent-organization-role-practitioner.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/extension-process-authorization-parent-organization-role-practitioner)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-extension-process-authorization-parent-organization-role-practitioner.csv), [Excel](StructureDefinition-extension-process-authorization-parent-organization-role-practitioner.xlsx), [Schematron](StructureDefinition-extension-process-authorization-parent-organization-role-practitioner.sch) 

#### Terminology Bindings

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "extension-process-authorization-parent-organization-role-practitioner",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-parent-organization-role-practitioner",
  "version" : "2.0.0",
  "name" : "ProcessAuthorizationParentOrganizationRolePractitioner",
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
      "expression" : "Coding"
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
        "min" : 1,
        "max" : "1"
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
        "min" : 3
      },
      {
        "id" : "Extension.extension:parentOrganization",
        "path" : "Extension.extension",
        "sliceName" : "parentOrganization",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Extension.extension:parentOrganization.url",
        "path" : "Extension.extension.url",
        "fixedUri" : "parent-organization"
      },
      {
        "id" : "Extension.extension:parentOrganization.value[x]",
        "path" : "Extension.extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "Identifier"
          }
        ]
      },
      {
        "id" : "Extension.extension:parentOrganization.value[x].system",
        "path" : "Extension.extension.value[x].system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/sid/organization-identifier"
      },
      {
        "id" : "Extension.extension:parentOrganization.value[x].value",
        "path" : "Extension.extension.value[x].value",
        "min" : 1
      },
      {
        "id" : "Extension.extension:organizationRole",
        "path" : "Extension.extension",
        "sliceName" : "organizationRole",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Extension.extension:organizationRole.url",
        "path" : "Extension.extension.url",
        "fixedUri" : "organization-role"
      },
      {
        "id" : "Extension.extension:organizationRole.value[x]",
        "path" : "Extension.extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "Coding"
          }
        ]
      },
      {
        "id" : "Extension.extension:organizationRole.value[x].system",
        "path" : "Extension.extension.value[x].system",
        "min" : 1
      },
      {
        "id" : "Extension.extension:organizationRole.value[x].code",
        "path" : "Extension.extension.value[x].code",
        "min" : 1
      },
      {
        "id" : "Extension.extension:practitionerRole",
        "path" : "Extension.extension",
        "sliceName" : "practitionerRole",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Extension.extension:practitionerRole.url",
        "path" : "Extension.extension.url",
        "fixedUri" : "practitioner-role"
      },
      {
        "id" : "Extension.extension:practitionerRole.value[x]",
        "path" : "Extension.extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "Coding"
          }
        ],
        "binding" : {
          "strength" : "preferred",
          "valueSet" : "http://dsf.dev/fhir/ValueSet/practitioner-role"
        }
      },
      {
        "id" : "Extension.extension:practitionerRole.value[x].system",
        "path" : "Extension.extension.value[x].system",
        "min" : 1
      },
      {
        "id" : "Extension.extension:practitionerRole.value[x].code",
        "path" : "Extension.extension.value[x].code",
        "min" : 1
      },
      {
        "id" : "Extension.url",
        "path" : "Extension.url",
        "fixedUri" : "http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-parent-organization-role-practitioner"
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

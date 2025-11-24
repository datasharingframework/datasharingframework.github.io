# ReadAccessParentOrganizationRole - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ReadAccessParentOrganizationRole**

## Extension: ReadAccessParentOrganizationRole 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/extension-read-access-parent-organization-role | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:ReadAccessParentOrganizationRole |

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [Binary](StructureDefinition-binary.md) and [Meta](StructureDefinition-meta.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/extension-read-access-parent-organization-role)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-extension-read-access-parent-organization-role.csv), [Excel](StructureDefinition-extension-read-access-parent-organization-role.xlsx), [Schematron](StructureDefinition-extension-read-access-parent-organization-role.sch) 

#### Terminology Bindings

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "extension-read-access-parent-organization-role",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/extension-read-access-parent-organization-role",
  "version" : "2.0.0",
  "name" : "ReadAccessParentOrganizationRole",
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
        "min" : 2
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
        "id" : "Extension.url",
        "path" : "Extension.url",
        "fixedUri" : "http://dsf.dev/fhir/StructureDefinition/extension-read-access-parent-organization-role"
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

# Binary - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Binary**

## Resource Profile: Binary 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/binary | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:Binary |

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/binary)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-binary.csv), [Excel](StructureDefinition-binary.xlsx), [Schematron](StructureDefinition-binary.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "binary",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/binary",
  "version" : "2.0.0",
  "name" : "Binary",
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
  "kind" : "resource",
  "abstract" : false,
  "type" : "Binary",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Binary",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Binary",
        "path" : "Binary",
        "constraint" : [
          {
            "key" : "must-have-meta-tag-or-security-context",
            "severity" : "error",
            "human" : "At least one meta.tag from system 'http://dsf.dev/fhir/CodeSystem/read-access-tag' or Binary.securityContext required",
            "expression" : "meta.tag.where(system = 'http://dsf.dev/fhir/CodeSystem/read-access-tag').exists() xor securityContext.exists()"
          }
        ]
      },
      {
        "id" : "Binary.meta",
        "path" : "Binary.meta",
        "constraint" : [
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
        "id" : "Binary.meta.tag",
        "path" : "Binary.meta.tag",
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
        "id" : "Binary.meta.tag:all",
        "path" : "Binary.meta.tag",
        "sliceName" : "all",
        "min" : 0,
        "max" : "1"
      },
      {
        "id" : "Binary.meta.tag:all.system",
        "path" : "Binary.meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Binary.meta.tag:all.code",
        "path" : "Binary.meta.tag.code",
        "min" : 1,
        "fixedCode" : "ALL"
      },
      {
        "id" : "Binary.meta.tag:local",
        "path" : "Binary.meta.tag",
        "sliceName" : "local",
        "min" : 0,
        "max" : "1"
      },
      {
        "id" : "Binary.meta.tag:local.system",
        "path" : "Binary.meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Binary.meta.tag:local.code",
        "path" : "Binary.meta.tag.code",
        "min" : 1,
        "fixedCode" : "LOCAL"
      },
      {
        "id" : "Binary.meta.tag:organization",
        "path" : "Binary.meta.tag",
        "sliceName" : "organization",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "Binary.meta.tag:organization.extension:organization-extension",
        "path" : "Binary.meta.tag.extension",
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
        "id" : "Binary.meta.tag:organization.system",
        "path" : "Binary.meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Binary.meta.tag:organization.code",
        "path" : "Binary.meta.tag.code",
        "min" : 1,
        "fixedCode" : "ORGANIZATION"
      },
      {
        "id" : "Binary.meta.tag:read-access-parent-organization-role",
        "path" : "Binary.meta.tag",
        "sliceName" : "read-access-parent-organization-role",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "Binary.meta.tag:read-access-parent-organization-role.extension:role-extension",
        "path" : "Binary.meta.tag.extension",
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
        "id" : "Binary.meta.tag:read-access-parent-organization-role.system",
        "path" : "Binary.meta.tag.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/fhir/CodeSystem/read-access-tag"
      },
      {
        "id" : "Binary.meta.tag:read-access-parent-organization-role.code",
        "path" : "Binary.meta.tag.code",
        "min" : 1,
        "fixedCode" : "ROLE"
      }
    ]
  }
}

```

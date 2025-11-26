# CertificateThumbprint - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **CertificateThumbprint**

## Extension: CertificateThumbprint 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/extension-certificate-thumbprint | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:CertificateThumbprint |

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [Endpoint](StructureDefinition-endpoint.md) and [Organization](StructureDefinition-organization.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/extension-certificate-thumbprint)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-extension-certificate-thumbprint.csv), [Excel](StructureDefinition-extension-certificate-thumbprint.xlsx), [Schematron](StructureDefinition-extension-certificate-thumbprint.sch) 

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "extension-certificate-thumbprint",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/extension-certificate-thumbprint",
  "version" : "2.0.0",
  "name" : "CertificateThumbprint",
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
      "expression" : "Endpoint"
    },
    {
      "type" : "element",
      "expression" : "Organization"
    }
  ],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Extension.url",
        "path" : "Extension.url",
        "type" : [
          {
            "code" : "uri"
          }
        ],
        "fixedUri" : "http://dsf.dev/fhir/StructureDefinition/extension-certificate-thumbprint"
      },
      {
        "id" : "Extension.value[x]",
        "path" : "Extension.value[x]",
        "min" : 1,
        "type" : [
          {
            "code" : "string"
          }
        ],
        "constraint" : [
          {
            "key" : "hex-128-length",
            "severity" : "error",
            "human" : "Value must be 128 characters lower case SHA-512 hex",
            "expression" : "value.matches('^[a-f0-9]{128}$')"
          }
        ]
      }
    ]
  }
}

```

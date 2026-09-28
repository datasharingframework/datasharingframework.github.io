# Endpoint - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Endpoint**

## Resource Profile: Endpoint 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/endpoint | *Version*:2.0.0 |
| Active as of 2025-11-26 | *Computable Name*:Endpoint |

**Usages:**

* Refer to this Profile: [OrganizationAffiliation](StructureDefinition-organization-affiliation.md) and [Organization](StructureDefinition-organization.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/endpoint)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-endpoint.csv), [Excel](StructureDefinition-endpoint.xlsx), [Schematron](StructureDefinition-endpoint.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "endpoint",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/endpoint",
  "version" : "2.0.0",
  "name" : "Endpoint",
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
    },
    {
      "identity" : "w5",
      "uri" : "http://hl7.org/fhir/fivews",
      "name" : "FiveWs Pattern Mapping"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Endpoint",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Endpoint",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "Endpoint",
        "path" : "Endpoint"
      },
      {
        "id" : "Endpoint.meta",
        "path" : "Endpoint.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "Endpoint.extension",
        "path" : "Endpoint.extension",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "url"
            }
          ],
          "rules" : "open"
        }
      },
      {
        "id" : "Endpoint.extension:certificateThumbprint",
        "path" : "Endpoint.extension",
        "sliceName" : "certificateThumbprint",
        "min" : 0,
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
        "id" : "Endpoint.identifier",
        "path" : "Endpoint.identifier",
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
        "id" : "Endpoint.identifier:dsfIdentifier",
        "path" : "Endpoint.identifier",
        "sliceName" : "dsfIdentifier",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Endpoint.identifier:dsfIdentifier.system",
        "path" : "Endpoint.identifier.system",
        "min" : 1,
        "fixedUri" : "http://dsf.dev/sid/endpoint-identifier"
      },
      {
        "id" : "Endpoint.identifier:dsfIdentifier.value",
        "path" : "Endpoint.identifier.value",
        "min" : 1
      },
      {
        "id" : "Endpoint.connectionType.system",
        "path" : "Endpoint.connectionType.system",
        "min" : 1,
        "fixedUri" : "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
      },
      {
        "id" : "Endpoint.connectionType.code",
        "path" : "Endpoint.connectionType.code",
        "min" : 1,
        "fixedCode" : "hl7-fhir-rest"
      },
      {
        "id" : "Endpoint.managingOrganization",
        "path" : "Endpoint.managingOrganization",
        "min" : 1,
        "type" : [
          {
            "code" : "Reference",
            "targetProfile" : ["http://dsf.dev/fhir/StructureDefinition/organization|2.0.0"]
          }
        ]
      },
      {
        "id" : "Endpoint.managingOrganization.reference",
        "path" : "Endpoint.managingOrganization.reference",
        "min" : 1
      },
      {
        "id" : "Endpoint.payloadType",
        "path" : "Endpoint.payloadType",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "coding.system"
            },
            {
              "type" : "value",
              "path" : "coding.code"
            }
          ],
          "rules" : "open"
        }
      },
      {
        "id" : "Endpoint.payloadType:slicePayloadType",
        "path" : "Endpoint.payloadType",
        "sliceName" : "slicePayloadType",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Endpoint.payloadType:slicePayloadType.coding",
        "path" : "Endpoint.payloadType.coding",
        "min" : 1,
        "max" : "1"
      },
      {
        "id" : "Endpoint.payloadType:slicePayloadType.coding.system",
        "path" : "Endpoint.payloadType.coding.system",
        "min" : 1,
        "fixedUri" : "http://hl7.org/fhir/resource-types"
      },
      {
        "id" : "Endpoint.payloadType:slicePayloadType.coding.code",
        "path" : "Endpoint.payloadType.coding.code",
        "min" : 1,
        "fixedCode" : "Task"
      },
      {
        "id" : "Endpoint.payloadMimeType",
        "path" : "Endpoint.payloadMimeType",
        "slicing" : {
          "discriminator" : [
            {
              "type" : "value",
              "path" : "value"
            }
          ],
          "rules" : "open"
        },
        "min" : 2,
        "max" : "2"
      },
      {
        "id" : "Endpoint.payloadMimeType:fhirXml",
        "path" : "Endpoint.payloadMimeType",
        "sliceName" : "fhirXml",
        "min" : 1,
        "max" : "1",
        "fixedCode" : "application/fhir+xml"
      },
      {
        "id" : "Endpoint.payloadMimeType:fhirJson",
        "path" : "Endpoint.payloadMimeType",
        "sliceName" : "fhirJson",
        "min" : 1,
        "max" : "1",
        "fixedCode" : "application/fhir+json"
      }
    ]
  }
}

```

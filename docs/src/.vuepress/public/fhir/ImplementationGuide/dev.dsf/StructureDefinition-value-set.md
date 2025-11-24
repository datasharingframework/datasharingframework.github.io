# ValueSet - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ValueSet**

## Resource Profile: ValueSet 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/StructureDefinition/value-set | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:ValueSet |

**Usages:**

* Examples for this Profile: [DsfBpmnMessage](ValueSet-bpmn-message.md), [DSF_Organization_Role](ValueSet-organization-role.md), [DSF_Practitioner_Role](ValueSet-practitioner-role.md), [DSF_Process_Authorization_Recipient](ValueSet-process-authorization-recipient.md)...Show 2 more,[DSF_Process_Authorization_Requester](ValueSet-process-authorization-requester.md)and[DSF_Read_Access_Tag](ValueSet-read-access-tag.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/dev.dsf|current/StructureDefinition/value-set)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-value-set.csv), [Excel](StructureDefinition-value-set.xlsx), [Schematron](StructureDefinition-value-set.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "value-set",
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
  "url" : "http://dsf.dev/fhir/StructureDefinition/value-set",
  "version" : "2.0.0",
  "name" : "ValueSet",
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
      "identity" : "objimpl",
      "uri" : "http://hl7.org/fhir/object-implementation",
      "name" : "Object Implementation Information"
    }
  ],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ValueSet",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ValueSet",
  "derivation" : "constraint",
  "differential" : {
    "element" : [
      {
        "id" : "ValueSet",
        "path" : "ValueSet"
      },
      {
        "id" : "ValueSet.meta",
        "path" : "ValueSet.meta",
        "type" : [
          {
            "code" : "Meta",
            "profile" : ["http://dsf.dev/fhir/StructureDefinition/meta|2.0.0"]
          }
        ]
      },
      {
        "id" : "ValueSet.url",
        "path" : "ValueSet.url",
        "min" : 1
      },
      {
        "id" : "ValueSet.version",
        "path" : "ValueSet.version",
        "min" : 1
      },
      {
        "id" : "ValueSet.date",
        "path" : "ValueSet.date",
        "min" : 1
      }
    ]
  }
}

```

# DSF Practitioner Role - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DSF Practitioner Role**

## ValueSet: DSF Practitioner Role 

| | |
| :--- | :--- |
| *Official URL*:http://dsf.dev/fhir/ValueSet/practitioner-role | *Version*:2.0.0 |
| Active as of 2025-10-27 | *Computable Name*:DSF_Practitioner_Role |

 
ValueSet with DSF practitioner roles used in OrganizationAffiliation resources 

 **References** 

* [ProcessAuthorizationOrganizationPractitioner](StructureDefinition-extension-process-authorization-organization-practitioner.md)
* [ProcessAuthorizationParentOrganizationRolePractitioner](StructureDefinition-extension-process-authorization-parent-organization-role-practitioner.md)
* [ProcessAuthorizationPractitioner](StructureDefinition-extension-process-authorization-practitioner.md)
* [QuestionnaireAuthorization](StructureDefinition-extension-questionnaire-authorization.md)

### Logical Definition (CLD)

Profile: [ValueSet](StructureDefinition-value-set.md)

Tag: All (Details: DSF Read Access Tag code ALL = 'All')

* Include all codes defined in [`http://dsf.dev/fhir/CodeSystem/practitioner-role`](CodeSystem-practitioner-role.md)version 📍2.0.0

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "practitioner-role",
  "meta" : {
    "profile" : ["http://dsf.dev/fhir/StructureDefinition/value-set"],
    "tag" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/read-access-tag",
        "code" : "ALL"
      }
    ]
  },
  "url" : "http://dsf.dev/fhir/ValueSet/practitioner-role",
  "version" : "2.0.0",
  "name" : "DSF_Practitioner_Role",
  "title" : "DSF Practitioner Role",
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
  "description" : "ValueSet with DSF practitioner roles used in OrganizationAffiliation resources",
  "immutable" : true,
  "compose" : {
    "include" : [
      {
        "system" : "http://dsf.dev/fhir/CodeSystem/practitioner-role",
        "version" : "2.0.0"
      }
    ]
  }
}

```

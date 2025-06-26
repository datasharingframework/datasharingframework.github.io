---
title: Read Access Tag
icon: creative
---

## Read Access Tag

Axiomatically, nobody is allowed to write FHIR resources (except [Task](../fhir/task.md)) to the DSF FHIR server unless it is the organization running the instance, which is [configurable](https://dsf.dev/operations/latest/fhir/configuration.html#dev-dsf-fhir-server-organization-identifier-value). By default, the same applies to reading FHIR resources (again except [Task](../fhir/task.md)). But since the DSF is often used to offer medical data in form of FHIR resources, other organizations should be allowed to read some of the resources on the DSF FHIR server. The `Resource.meta.tag` element is used define access rules for all FHIR resources in the DSF, with the exception of [Task](../fhir/task.md) resources. For example, allowing read access for all organizations would use the following `system` and `code` in your FHIR resource:

```xml
<meta>
   <tag>
      <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
      <code value="ALL" />
   </tag>
</meta>
```
All codes for the Read Access Tag can be found in its [CodeSystem](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/CodeSystem/dsf-read-access-tag-1.0.0.xml).

The read access rules for [Task](../fhir/task.md) resources are defined through the `requester` and `recipient` elements of the  [dsf-extension-process-authorization](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-extension-process-authorization-1.0.0.xml) in a plugin's [ActivityDefinitions](../fhir/activitydefinition.md). Therefore, no `read-access-tag` is needed.

It is also possible to restrict read access of FHIR resources to organizations with a specific role in a parent organization or a specific identifier. More information on that can be found in the [guide on configuring the Read Access Tag](../guides/configuring-read-access-tags.md).

## Related Topics
[Configuring Read Access Tags](../guides/configuring-read-access-tags.md)

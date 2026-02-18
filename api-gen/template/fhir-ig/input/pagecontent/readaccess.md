Axiomatically, nobody is allowed to write FHIR resources (except Task) to the DSF FHIR server
unless it is your own organization. By default, the same applies to reading FHIR resources
(again except Task). But since the DSF is often used to offer medical data in form of
FHIR resources, you will find yourself wanting other organizations to be allowed to read the resources you are offering.
The `Resource.meta.tag` element is used define access rules for all FHIR resources in the DSF, with the
exception of Task resources. We will explain the reason for this exception shortly.
For example, allowing read access for all organizations, you would use the following `system` and `code` in your FHIR resource:

```xml
<meta>
   <tag>
      <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
      <code value="ALL" />
   </tag>
</meta>
```
You can find all codes for the Read Access Tag in its CodeSystem.

The read access rules for Task resources are defined through the `requester` and `recipient` elements of the  dsf-extension-process-authorization in your plugin's
ActivityDefinitions. Therefore, no `read-access-tag` is needed.

It is also possible to restrict read access of FHIR resources to organizations with
a specific role in a parent organization or a specific identifier.
If you want to find out more, you may look at the guide on configuring the Read Access Tag.

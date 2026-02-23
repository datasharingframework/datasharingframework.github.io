---
title: Creating ActivityDefinitions
icon: creative
---

## Creating ActivityDefinitions

This guide will explain how to create an ActivityDefinition based on the [dsf-activity-definition](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-activity-definition-2.0.0.xml) profile for a process plugin.
It is divided into steps for each of the main components of ActivityDefinitions:
1. Read Access Tag
2. Extension: process authorization
3. BPE Managed Elements
4. Regular Elements

*Regular elements* are all elements not part of the first 3 main components.

*This guide assumes the reader knows how to translate [ElementDefinitions](https://www.hl7.org/fhir/R4/elementdefinition.html) to actual elements in a FHIR resource. If not, the guide on [creating Task resources](../guides/creating-task-resources-based-on-a-definition.md) includes explanations for this.*

### 1. Profile and Read Access Tag
Start out with an empty [ActivityDefinition](../fhir/activitydefinition.md):
```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    
</ActivityDefinition>
```

The first elements in DSF FHIR resources are always the profile the resources corresponds to and the  [Read Access Tag](../dsf/read-access-tag.md). The profile usually has a [DSF base resource](https://github.com/datasharingframework/dsf/tree/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition) as its value. The [Read Access Tag](../dsf/read-access-tag.md) describes who is allowed to read this resource through the DSF FHIR server's REST API. More complex configurations of the [Read Access Tag](../dsf/read-access-tag.md) are explained in [this guide](../dsf/read-access-tag.md). For this example, everyone will be allowed to read the resource:

```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/activity-definition" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag>
    </meta> 
</ActivityDefinition>
```

### 2. Extension: Process Authorization
This part of the ActivityDefinition will tell the DSF who is allowed to request and receive messages ([Task](../fhir/task.md) resources) for BPMN process. If the plugin contains more than one BPMN process, there will have to be one [ActivityDefinition](../fhir/activitydefinition.md) for each BPMN process. It is important to note that authorization rules need to be included for **ALL** messages received in the BPMN process. This includes the messages starting the BPMN process initially. The extension containing all possible rules is found [here](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-extension-process-authorization-2.0.0.xml). Next up is adding the [extension element](http://hl7.org/fhir/R4/extensibility.html#extension) with the correct URL. The value for the URL is found in the `Extension.url` element:
```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
   ...
    <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">
     
    </extension>
</ActivityDefinition>
```
*Elements not relevant to the current component are hidden with `...` to increase readability.*

The [differential](https://www.hl7.org/fhir/R4/profiling.html#snapshot) statement starts by defining the [slicing](https://www.hl7.org/fhir/R4/profiling.html#snapshot) for the `Extension.extension` element:

```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  ...
    <differential> 
        <element id="Extension">
            <path value="Extension" />
            <min value="1" />
        </element>
        <element id="Extension.extension">
            <path value="Extension.extension" />
            <slicing>
                <discriminator>
                    <type value="value" />
                    <path value="url" />
                </discriminator>
                <rules value="open" />
            </slicing>
        </element>
     ...
    </differential>
</StructureDefinition>
```

The above states that whenever this extension is used in a profile, the profile needs to include this extension at least once (`<min value="1" />`). The [slicing](https://www.hl7.org/fhir/R4/profiling.html#snapshot) on `Extension.extension` defines that elements of this [slicing](https://www.hl7.org/fhir/R4/profiling.html#snapshot) are identified by the value of their URL (`<discriminator>`), which is always the case for extensions, and that other extensions can be added to the [slicing](https://www.hl7.org/fhir/R4/profiling.html#snapshot) (`<rules value="open" />`). Since there is a [slicing](https://www.hl7.org/fhir/R4/profiling.html#snapshot) on `Extension.extension`, this is a nested extension.

After these initial element definitions come the elements relevant for the process plugin. The first one is the `message-name` slice:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  ...
    <differential> 
     ...
        <element id="Extension.extension:message-name">
            <path value="Extension.extension" />
            <sliceName value="message-name" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Extension.extension:message-name.url">
            <path value="Extension.extension.url" />
            <fixedUri value="message-name" />
        </element>
        <element id="Extension.extension:message-name.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="string" />
            </type>
        </element>
     ...
    </differential>
</StructureDefinition>
```

This section defines that there has to be exactly one extension element from the `message-name` slice in the [ActivityDefinition](../fhir/activitydefinition.md). The extension element will have a URL value of `message-name`. This URL value identifies the element to belong to the `message-name` slice on `Extension.extension`, in accordance with the `discriminator`. Lastly, the extension element includes a `valueString` element. FHIR does not allow using `value[x]` as actual element. The value in `value[x]` is always strictly bound to some kind of type. FHIR uses the `value[x].type.code` value to determine this type and replaces `[x]` with an uppercase version of `element.type.code`. This results in the following extension element:
```xml
<extension url="message-name">
    <valueString value="myMessage"/>
</extension>
```

`myMessage` will have to be replaced with the name of the [BPMN message event](../bpmn/messaging.md) in a BPMN process that is expecting this message.

<details>
<summary>This is how the ActivityDefinition should look like so far</summary>

```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/activity-definition" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag>
    </meta>
    <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">
        <extension url="message-name">
            <valueString value="myMessage"/>
        </extension>
    </extension>
</ActivityDefinition>
```
</details>

The next slice is called `task-profile`:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  ...
    <differential> 
     ...
        <element id="Extension.extension:task-profile">
            <path value="Extension.extension" />
            <sliceName value="task-profile" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Extension.extension:task-profile.url">
            <path value="Extension.extension.url" />
            <fixedUri value="task-profile" />
        </element>
        <element id="Extension.extension:task-profile.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="canonical" />
            </type>
        </element>
     ...
    </differential>
</StructureDefinition>
```

This section has almost the same structure as `message-name`. The only difference is the value for `value[x].type.code`. This means that instead of `valueString`, it requires using a `valueCanonical` element for `task-profile.value[x]`. Canonical values referring to [Task](../fhir/task.md) profiles in ActivityDefinitions have to conform to the rules outlined by the documentation on [URLs](../dsf/versions-placeholders-urls.md#urls). From the definition above, the following extension element is created and added to the [ActivityDefinition](../fhir/activitydefinition.md):
```xml
<extension url="task-profile">
    <valueCanonical value="http://my.org/fhir/StructureDefinition/my-task|#{version}"/>
</extension>
```

<details>
<summary>This is how the ActivityDefinition should look like so far</summary>

```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/activity-definition" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag>
    </meta>
    <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">
        <extension url="message-name">
            <valueString value="myMessage"/>
        </extension>
        <extension url="task-profile">
            <valueCanonical value="http://my.org/fhir/StructureDefinition/my-task|#{version}"/>
        </extension>
    </extension>
</ActivityDefinition>
```
</details>

The next slice is `requester`:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  ...
    <differential> 
     ...
        <element id="Extension.extension:requester">
            <path value="Extension.extension" />
            <sliceName value="requester" />
            <min value="1" />
        </element>
        <element id="Extension.extension:requester.url">
            <path value="Extension.extension.url" />
            <fixedUri value="requester" />
        </element>
        <element id="Extension.extension:requester.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="Coding" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-all|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-all-practitioner|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-organization|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-organization-practitioner|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-parent-organization-role|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-parent-organization-role-practitioner|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-all|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-organization|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-remote-parent-organization-role|2.0.0" />
            </type>
            <binding>
                <strength value="required" />
                <valueSet value="http://dsf.dev/fhir/ValueSet/process-authorization-requester|2.0.0" />
            </binding>
        </element>
     ...
    </differential>
</StructureDefinition>
```
Instead of a `string` or `canonical` type for `value[x]` there now is a `Coding` type. See the [FHIR documentation on Codings](https://www.hl7.org/fhir/R4/datatypes.html#Coding) for more in-depth information. `Codings` are elements which contain, among other things, a `code` and the `system` the code belongs to. In the same way `value[x]` transformed into `valueString` or `valueCanonical` before, `value[x]` will be transformed into `valueCoding`. To use `Codings` in `valueCoding` elements, they are usually bound to the element through a [ValueSet](../fhir/valueset.md). This is the responsibility of the `binding` element. There is also a list of `value[x].type.profile` elements referencing other [StructureDefinitions](https://www.hl7.org/fhir/R4/structuredefinition.html). Instead of defining the elements in the same file, they were defined in different files for better readability. The use case decides which one to pick.
Here is what they mean:
- `local-all`: All local requests will be allowed. Local requests are identified by matching the requester's certificate to a thumbprint which was internally marked by the DSF FHIR server as belonging to a local organization.
- `local-organization`: All local requests made from an organization with a specific `organization-identifier` will be allowed.
- `local-parent-organization-role`: All local requests made from an organization having a specific role inside a specific parent organization will be allowed.
- `remote` versions of the above rules work the same but the requester's certificate is instead required to match a thumbprint marked as a remote organization.
- `practitioner` suffixes all work the same. They include the same rules as their prefixes but now additionally require the requester to match a certain `practitioner-role`. A list of them
  can be found [here](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/CodeSystem/dsf-practitioner-role-2.0.0.xml). This allows
  for more granularity when defining authorization rules within an organization and can be integrated into local user management via [OpenID Connect](https://dsf.dev/stable/maintain/fhir/access-control.html).

There are no `practitioner` versions of `remote` authorization rules. From the perspective of the receiving DSF instance, remote requests are always issued by an organization. They do not hold any information about the local user management of the requesting organization. Examples of all Codings from above can be found [here](../dsf/requester-and-recipient.md).

It is also good to keep in mind that any number of `requester` elements may be added to an [ActivityDefinition](../fhir/activitydefinition.md). Start out by adding a `requester` element like previous extensions:

```xml
<extension url="requester">
    <valueCoding>
        
    </valueCoding>
</extension>
```

The remaining element definitions are found in one of the profiles. This example will use the [dsf-coding-process-authorization-local-organization-practitioner](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-coding-process-authorization-local-organization-practitioner-2.0.0.xml) profile. Since all elements listed in the [Coding definition](https://www.hl7.org/fhir/R4/datatypes.html#codesystem) are optional, only the `differential` elements from the profile are relevant:
<a id="coding-differential"></a>
```xml
<differential>
    <element id="Coding.extension">
        <path value="Coding.extension" />
        <slicing>
            <discriminator>
                <type value="value" />
                <path value="url" />
            </discriminator>
            <rules value="open" />
        </slicing>
    </element>
    <element id="Coding.extension:organization-practitioner">
        <path value="Coding.extension" />
        <sliceName value="organization-practitioner" />
        <min value="1" />
        <max value="1" />
        <type>
            <code value="Extension" />
            <profile value="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner|2.0.0" />
        </type>
    </element>
    <element id="Coding.system">
        <path value="Coding.system" />
        <min value="1" />
        <fixedUri value="http://dsf.dev/fhir/CodeSystem/process-authorization" />
    </element>
    <element id="Coding.code">
        <path value="Coding.code" />
        <min value="1" />
        <fixedCode value="LOCAL_ORGANIZATION_PRACTITIONER" />
    </element>
</differential>
```
It defines an extension called `organization-practitioner` which is identified through its url attribute. Again, the extension is only referenced, its location is in a [different file](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-extension-process-authorization-organization-practitioner-2.0.0.xml). Below is its `differential` element in order to see how the extension needs to be populated:
```xml
<differential>
    <element id="Extension">
        <path value="Extension" />
        <min value="1" />
        <max value="1" />
    </element>
    <element id="Extension.extension">
        <path value="Extension.extension" />
        <slicing>  
            <discriminator>
                <type value="value" />
                <path value="url" />
            </discriminator>
            <rules value="open" />
        </slicing>
    </element>
    <element id="Extension.extension:organization">
        <path value="Extension.extension" />
        <sliceName value="organization" />
        <min value="1" />
        <max value="1" />
    </element>
    <element id="Extension.extension:organization.url">
        <path value="Extension.extension.url" />
        <fixedUri value="organization" />
    </element>
    <element id="Extension.extension:organization.value[x]">
        <path value="Extension.extension.value[x]" />
        <min value="1" />
        <type>
            <code value="Identifier" />
        </type>
    </element>
    <element id="Extension.extension:organization.value[x].system">
        <path value="Extension.extension.value[x].system" />
        <min value="1" />
        <fixedUri value="http://dsf.dev/sid/organization-identifier" />
    </element>
    <element id="Extension.extension:organization.value[x].value">
        <path value="Extension.extension.value[x].value" />
        <min value="1" />
    </element>
    <element id="Extension.extension:practitionerRole">
        <path value="Extension.extension" />
        <sliceName value="practitionerRole" />
        <min value="1" />
        <max value="1" />
    </element>
    <element id="Extension.extension:practitionerRole.url">
        <path value="Extension.extension.url" />
        <fixedUri value="practitioner-role" />
    </element>
    <element id="Extension.extension:practitionerRole.value[x]">
        <path value="Extension.extension.value[x]" />
        <min value="1" />
        <type>
            <code value="Coding" />
        </type>
    </element>
    <element id="Extension.extension:practitionerRole.value[x].system">
        <path value="Extension.extension.value[x].system" />
        <min value="1" />
    </element>
    <element id="Extension.extension:practitionerRole.value[x].code">
        <path value="Extension.extension.value[x].code" />
        <min value="1" />
    </element>
    <element id="Extension.url">
        <path value="Extension.url" />
        <fixedUri value="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner" />
    </element>
    <element id="Extension.value[x]">
        <path value="Extension.value[x]" />
        <max value="0" />
    </element>
</differential>
```

This extension does not reference any other files. This means this is the "deepest" level. The process can now proceed by translating this definition into actual extension elements, inserting it into the selected Coding, translating the remaining element definitions from the Coding resource, and incorporating all components into the [ActivityDefinition](../fhir/activitydefinition.md).

Start with the `Extension.url` element, since the `Extension` element is the parent element for all slices on the `Extension.extension` elements:
```xml
<extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">

</extension>
```

Next, add the `organization` slice:
```xml
<extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
    <extension url="organization">
        <valueIdentifier>
            <system value="http://dsf.dev/sid/organization-identifier"/>
            <value value="My_Organization"/>
        </valueIdentifier>
    </extension>
</extension>
```
Finally, add the `practitionerRole` slice:

```xml
<extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
    <extension url="organization">
        <valueIdentifier>
            <system value="http://dsf.dev/sid/organization-identifier"/>
            <value value="My_Organization"/>
        </valueIdentifier>
    </extension>
    <extension url="practitioner-role">
        <valueCoding>
            <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role"/>
            <code value="DSF_ADMIN"/>
        </valueCoding>
    </extension>
</extension>
```

There is no `binding` element specified for `practitionerRole.value[x]`. This is intentional. The example used a code from the [dsf-practitioner-role](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/CodeSystem/dsf-practitioner-role-2.0.0.xml) CodeSystem. This CodeSystem includes a standard set of codes which are often sufficient for DSF use cases. Other/new CodeSystems if may be added if these codes do not apply for a given use case. The code set here can be used in the [DSF role config](https://dsf.dev/stable/maintain/fhir/access-control.html) to allow certain users with this `practitioner-role` to send requests.

Now add the extension as the `Coding.extension:organization-practitioner` element:
```xml
<extension url="requester">
    <valueCoding>
        <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
            <extension url="organization">
                <valueIdentifier>
                    <system value="http://dsf.dev/sid/organization-identifier"/>
                    <value value="My_Organization"/>
                </valueIdentifier>
            </extension>
            <extension url="practitioner-role">
                <valueCoding>
                    <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role"/>
                    <code value="DSF_ADMIN"/>
                </valueCoding>
            </extension>
        </extension>
    </valueCoding>
</extension>
```
Look at the [differential](#coding-differential) from the Coding again. The next elements to be added are `Coding.system` and `Coding.code`:
```xml
<extension url="requester">
    <valueCoding>
        <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
            <extension url="organization">
                <valueIdentifier>
                    <system value="http://dsf.dev/sid/organization-identifier"/>
                    <value value="My_Organization"/>
                </valueIdentifier>
            </extension>
            <extension url="practitioner-role">
                <valueCoding>
                    <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role"/>
                    <code value="DSF_ADMIN"/>
                </valueCoding>
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
        <code value="LOCAL_ORGANIZATION_PRACTITIONER"/>
    </valueCoding>
</extension>
```
The `requester` extension is now finished and can be added it to the [ActivityDefinition](../fhir/activitydefinition.md) under the [dsf-extension-process-authorization](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-extension-process-authorization-2.0.0.xml).

<details>
<summary>This is how the ActivityDefinition should look like so far</summary>

```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/activity-definition" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag>
    </meta>
    <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">
        <extension url="message-name">
            <valueString value="myMessage"/>
        </extension>
        <extension url="task-profile">
            <valueCanonical value="http://my.org/fhir/StructureDefinition/my-task|#{version}"/>
        </extension>
        <extension url="requester">
            <valueCoding>
                <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
                    <extension url="organization">
                        <valueIdentifier>
                            <system value="http://dsf.dev/sid/organization-identifier"/>
                            <value value="My_Organization"/>
                        </valueIdentifier>
                    </extension>
                    <extension url="practitioner-role">
                        <valueCoding>
                            <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role"/>
                            <code value="DSF_ADMIN"/>
                        </valueCoding>
                    </extension>
                </extension>
                <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
                <code value="LOCAL_ORGANIZATION_PRACTITIONER"/>
            </valueCoding>
        </extension>
    </extension>
</ActivityDefinition>
```
</details>

Back to looking at the [dsf-extension-process-authorization](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-extension-process-authorization-2.0.0.xml) again. The last slice for this extension is `recipient`:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  ...
    <differential> 
     ...
        <element id="Extension.extension:recipient">
            <path value="Extension.extension" />
            <sliceName value="recipient" />
            <min value="1" />
        </element>
        <element id="Extension.extension:recipient.url">
            <path value="Extension.extension.url" />
            <fixedUri value="recipient" />
        </element>
        <element id="Extension.extension:recipient.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="Coding" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-all|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-organization|2.0.0" />
                <profile value="http://dsf.dev/fhir/StructureDefinition/coding-process-authorization-local-parent-organization-role|2.0.0" />
            </type>
            <binding>
                <strength value="required" />
                <valueSet value="http://dsf.dev/fhir/ValueSet/process-authorization-recipient|2.0.0" />
            </binding>
        </element>
     ...
    </differential>
</StructureDefinition>
```

The `recipient` will decide which DSF instance is allowed to process that message. That is the reason why there are no Codings for `remote` or `practitioner` here. For `requester`, it was decided to only allow users with a certain role from a local organization to send this message. The message should now also only be processable by that same local organization. The right Coding for this job is the [coding-process-authorization-local-organization](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-coding-process-authorization-local-organization-2.0.0.xml). The configuration of a local requester and local receiver is often used for the message that starts up the first BPMN process of the plugin. The process of adding the `recipient` slice is the exact same as it is for `requester`. It's possible to follow the same steps for the `requester` slice again but using a different Coding.

<details>
<summary>This is how the ActivityDefinition should look like</summary>

```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/activity-definition" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag>
    </meta>
    <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">
        <extension url="message-name">
            <valueString value="myMessage"/>
        </extension>
        <extension url="task-profile">
            <valueCanonical value="http://my.org/fhir/StructureDefinition/my-task|#{version}"/>
        </extension>
        <extension url="requester">
            <valueCoding>
                <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
                    <extension url="organization">
                        <valueIdentifier>
                            <system value="http://dsf.dev/sid/organization-identifier"/>
                            <value value="My_Organization"/>
                        </valueIdentifier>
                    </extension>
                    <extension url="practitioner-role">
                        <valueCoding>
                            <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role"/>
                            <code value="DSF_ADMIN"/>
                        </valueCoding>
                    </extension>
                </extension>
                <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
                <code value="LOCAL_ORGANIZATION_PRACTITIONER"/>
            </valueCoding>
        </extension>
        <extension url="recipient">
            <valueCoding>
                <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization">
                    <valueIdentifier>
                        <system value="http://dsf.dev/sid/organization-identifier"/>
                        <value value="My_Organization"/>
                    </valueIdentifier>
                </extension>
                <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
                <code value="LOCAL_ORGANIZATION"/>
            </valueCoding>
        </extension>
    </extension>
</ActivityDefinition>
```
</details>

The last element defined in the [process authorization extension](https://github.com/datasharingframework/dsf/blob/release/2.0.2/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-extension-process-authorization-2.0.0.xml) is `Extension.url`. This was already added at the very beginning of the working through the extension, so there is nothing more to add.

#### 3. BPE Managed Elements

Some elements of [ActivityDefinitions](../fhir/activitydefinition.md) are managed by the DSF BPE and replaced with certain values at appropriate times.

The following elements are managed by the DSF BPE:
- `ActivityDefinition.version` should use the [placeholder](../dsf/versions-placeholders-urls.md#placeholders) `#{version}`
- `ActivityDefinition.date` is not required, but if it is included, it should use the [placeholder](../dsf/versions-placeholders-urls.md#placeholders) `#{date}`
- `ActivityDefinition.status` must have a value of `unknown`

<details>
<summary>The ActivityDefinition should now look like this</summary>

```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/activity-definition" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag>
    </meta>
    <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">
        <extension url="message-name">
            <valueString value="myMessage"/>
        </extension>
        <extension url="task-profile">
            <valueCanonical value="http://my.org/fhir/StructureDefinition/my-task|#{version}"/>
        </extension>
        <extension url="requester">
            <valueCoding>
                <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
                    <extension url="organization">
                        <valueIdentifier>
                            <system value="http://dsf.dev/sid/organization-identifier"/>
                            <value value="My_Organization"/>
                        </valueIdentifier>
                    </extension>
                    <extension url="practitioner-role">
                        <valueCoding>
                            <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role"/>
                            <code value="DSF_ADMIN"/>
                        </valueCoding>
                    </extension>
                </extension>
                <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
                <code value="LOCAL_ORGANIZATION_PRACTITIONER"/>
            </valueCoding>
        </extension>
        <extension url="recipient">
            <valueCoding>
                <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization">
                    <valueIdentifier>
                        <system value="http://dsf.dev/sid/organization-identifier"/>
                        <value value="My_Organization"/>
                    </valueIdentifier>
                </extension>
                <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
                <code value="LOCAL_ORGANIZATION"/>
            </valueCoding>
        </extension>
    </extension>
    <!-- version managed by bpe -->
    <version value="#{version}"/>
    <!-- date managed by bpe -->
    <date value="#{date}"/>
    <!-- status managed by bpe -->
    <status value="unknown"/>
</ActivityDefinition>
```
</details>

### 4. Regular Elements

The only required elements in this set are `ActivityDefinition.url` and `ActivityDefinition.kind`. `ActivityDefinition.url` expects a certain format. This is explained in detail in the [documentation on URLs](../dsf/versions-placeholders-urls.md#urls). `ActivityDefinition.kind` must have the value `Task`.
All other elements can technically be omitted. Still, the following elements are recommended to be populated:
- `AcitivityDefinition.name`
- `AcitivityDefinition.title`
- `AcitivityDefinition.subtitle`
- `AcitivityDefinition.experimental`
- `AcitivityDefinition.publisher`
- `AcitivityDefinition.contact`
- `AcitivityDefinition.description`

<details>
<summary>The finished ActivityDefinition should now look something like this</summary>

```xml
<ActivityDefinition xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/activity-definition" />
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag" />
            <code value="ALL" />
        </tag>
    </meta>
    <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">
        <extension url="message-name">
            <valueString value="myMessage"/>
        </extension>
        <extension url="task-profile">
            <valueCanonical value="http://my.org/fhir/StructureDefinition/my-task|#{version}"/>
        </extension>
        <extension url="requester">
            <valueCoding>
                <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization-practitioner">
                    <extension url="organization">
                        <valueIdentifier>
                            <system value="http://dsf.dev/sid/organization-identifier"/>
                            <value value="My_Organization"/>
                        </valueIdentifier>
                    </extension>
                    <extension url="practitioner-role">
                        <valueCoding>
                            <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role"/>
                            <code value="DSF_ADMIN"/>
                        </valueCoding>
                    </extension>
                </extension>
                <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
                <code value="LOCAL_ORGANIZATION_PRACTITIONER"/>
            </valueCoding>
        </extension>
        <extension url="recipient">
            <valueCoding>
                <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization">
                    <valueIdentifier>
                        <system value="http://dsf.dev/sid/organization-identifier"/>
                        <value value="My_Organization"/>
                    </valueIdentifier>
                </extension>
                <system value="http://dsf.dev/fhir/CodeSystem/process-authorization"/>
                <code value="LOCAL_ORGANIZATION"/>
            </valueCoding>
        </extension>
    </extension>
    <!-- version managed by bpe -->
    <version value="#{version}"/>
    <!-- date managed by bpe -->
    <date value="#{date}"/>
    <!-- status managed by bpe -->
    <status value="unknown"/>
    <url value="http://my.org/bpe/Process/myProcess"/>
    <kind value="Task"/>
    <name value="My Process"/>
    <title value="My Title For My Process"/>
    <subtitle value="Information Processing Process"/>
    <experimental value="false"/>
    <publisher value="DSF"/>
    <contact>
        <name value="DSF"/>
        <telecom>
            <system value="email"/>
            <value value="noreply@my.org"/>
        </telecom>
    </contact>
    <description value="My Process processes information"/>
</ActivityDefinition>
```
</details>

## Related Topics
[ActivityDefinition](../fhir/activitydefinition.md), [Creating CodeSystems for DSF Processes](creating-codesystems-for-dsf-processes.md), [Creating ValueSets for DSF Processes](creating-valuesets-for-dsf-processes.md), [Task](../fhir/task.md)

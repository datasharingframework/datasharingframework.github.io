---
title: Configuring Read Access Tags
icon: creative
---

## Configuring Read Access Tags

Before starting to configure anything, it is advised to take a look at the [CodeSystem](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/CodeSystem/dsf-read-access-tag-1.0.0.xml) defined for the [Read Access Tag](../dsf/read-access-tag.md) and choose one of the codes from it:
```xml
<CodeSystem xmlns="http://hl7.org/fhir">
    ...
    <url value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
	...
	<concept>
		<code value="LOCAL"/>
		<display value="Local"/>
		<definition value="Read access for local users"/>
	</concept>
	<concept>
		<code value="ORGANIZATION"/>
		<display value="Organization"/>
		<definition value="Read access for organization specified via extension http://dsf.dev/fhir/StructureDefinition/extension-read-access-organization"/>
	</concept>
	<concept>
		<code value="ROLE"/>
		<display value="Role"/>
		<definition value="Read access for member organizations with role in consortium (parent organization) specified via extension http://dsf.dev/fhir/StructureDefinition/extension-read-access-consortium-role"/>
	</concept>
	<concept>
		<code value="ALL"/>
		<display value="All"/>
		<definition value="Read access for remote and local users"/>
	</concept>
</CodeSystem> 
```

The codes `LOCAL` and `ALL` are trivial. Their [Read Access Tag](../dsf/read-access-tag.md) would look like this:
```xml
<meta>
    <tag>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ALL"/> <!-- or value="LOCAL" respectively-->
    </tag>
</meta>
```

Now to configure a Read Access Tag whose code uses an extension. This example will use the code `ROLE`. It starts out the same way as before:
```xml
<meta>
    <tag>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

The `definition` element of the `ROLE` code references an extension called [dsf-extension-read-access-parent-organization-role](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-extension-read-access-parent-organization-role-1.0.0.xml).

The most important part of it is the `differential` statement. It uses [element definitions](https://www.hl7.org/fhir/R4/elementdefinition.html) to describe how the extensions needs to be implemented:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
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
        <element id="Extension.extension:parentOrganization">
            <path value="Extension.extension" />
            <sliceName value="parentOrganization" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Extension.extension:parentOrganization.url">
            <path value="Extension.extension.url" />
            <fixedUri value="parent-organization" />
        </element>
        <element id="Extension.extension:parentOrganization.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="Identifier" />
            </type>
        </element>
        <element id="Extension.extension:parentOrganization.value[x].system">
            <path value="Extension.extension.value[x].system" />
            <min value="1" />
            <fixedUri value="http://dsf.dev/sid/organization-identifier" />
        </element>
        <element id="Extension.extension:parentOrganization.value[x].value">
            <path value="Extension.extension.value[x].value" />
            <min value="1" />
        </element>
        <element id="Extension.extension:organizationRole">
            <path value="Extension.extension" />
            <sliceName value="organizationRole" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Extension.extension:organizationRole.url">
            <path value="Extension.extension.url" />
            <fixedUri value="organization-role" />
        </element>
        <element id="Extension.extension:organizationRole.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="Coding" />
            </type>
        </element>
        <element id="Extension.extension:organizationRole.value[x].system">
            <path value="Extension.extension.value[x].system" />
            <min value="1" />
        </element>
        <element id="Extension.extension:organizationRole.value[x].code">
            <path value="Extension.extension.value[x].code" />
            <min value="1" />
        </element>
        <element id="Extension.url">
            <path value="Extension.url" />
            <fixedUri value="http://dsf.dev/fhir/StructureDefinition/extension-read-access-parent-organization-role" />
        </element>
        <element id="Extension.value[x]">
            <path value="Extension.value[x]" />
            <max value="0" />
        </element>
    </differential>
</StructureDefinition>
```

All extensions for the [Read Access Tag](../dsf/read-access-tag.md) CodeSystem are defined on the `meta.tag.extension` element through the extension's `context` element:
```xml
<context>
    <type value="element" />
    <expression value="Coding" />   <!-- meta.tag is of type Coding-->
</context>
```

That is why the first element to be added to `meta.tag` is an `extension` element:
```xml
<meta>
    <tag>
        <extenion>
         
        </extenion>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

Now to process the `differential` statement one element at a time, starting at the top:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
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

It defines a [slicing](https://www.hl7.org/fhir/R4/profiling.html#slicing) for the `Extension.extension` element, meaning this is a nested extension. The `discriminator` element defines that slices will be identified by the value of their `url` attribute. A `rules` element with value `open` means other types of slices may be added later on e.g. when creating a profile. This element is not added to the `meta.tag.extension` element it only serves the purpose of defining the `discriminator`. Next up is the first slice called `parentOrganization`:

```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Extension.extension:parentOrganization">
            <path value="Extension.extension" />
            <sliceName value="parentOrganization" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Extension.extension:parentOrganization.url">
            <path value="Extension.extension.url" />
            <fixedUri value="parent-organization" />
        </element>
        <element id="Extension.extension:parentOrganization.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="Identifier" />
            </type>
        </element>
        <element id="Extension.extension:parentOrganization.value[x].system">
            <path value="Extension.extension.value[x].system" />
            <min value="1" />
            <fixedUri value="http://dsf.dev/sid/organization-identifier" />
        </element>
        <element id="Extension.extension:parentOrganization.value[x].value">
            <path value="Extension.extension.value[x].value" />
            <min value="1" />
        </element>
        ...
    </differential>
</StructureDefinition>
```

The first element defines a slice called `parentOrganization` on the `Extension.extension` element with cardinality `1..1`. The second element defines the url attribute of the `parentOrganization` slice to be fixed to the value `parent-organization`. With this information the next element can be added to `meta.tag`. Since it is defined on `Extension.extension` it will be added it to `meta.tag.extension.extension` like this:
```xml
<meta>
    <tag>
        <extension>
            <extension url="parent-organization">
             
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

After that, it defines `parentOrganization.value[x]` to occur at least once and have a type of `Identifier`. To turn this into an element to add to `meta.tag.extension.extension` requires replacing `[x]` with the code in `value[x].type`, which in this case is `Identifier`. It is important to note, that `value[x]` should be camel cased after replacement. This means there will be a `meta.tag.extension.extension.valueIdentifier` element:
```xml
<meta>
    <tag>
        <extension>
            <extension url="parent-organization">
                <valueIdentifier>
                    
                </valueIdentifier>
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

The last two elements define a `system` element with a fixed value and `value` element that can be freely set, since it does not have any constraints applied. Notice that the element definition still uses `value[x].system` and `value[x].value`. The replacement mentioned earlier does not happen in the element definition, but since `value[x]` is defined to have the type `Identifier`, it is inferred that `Identifier.system` and `Identifier.value` are referenced. The example will use an arbitrary `Identifier` value, but real application should be using an actual organization identifier depending on which organization has read access to the resource.

```xml
<meta>
    <tag>
        <extension>
            <extension url="parent-organization">
                <valueIdentifier>
                    <system value="http://dsf.dev/sid/organization-identifier"/>
                    <value value="My_Organization"/>
                </valueIdentifier>
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

Next is the slice is called `organizationRole`:
```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Extension.extension:organizationRole">
            <path value="Extension.extension" />
            <sliceName value="organizationRole" />
            <min value="1" />
            <max value="1" />
        </element>
        <element id="Extension.extension:organizationRole.url">
            <path value="Extension.extension.url" />
            <fixedUri value="organization-role" />
        </element>
        <element id="Extension.extension:organizationRole.value[x]">
            <path value="Extension.extension.value[x]" />
            <min value="1" />
            <type>
                <code value="Coding" />
            </type>
        </element>
        <element id="Extension.extension:organizationRole.value[x].system">
            <path value="Extension.extension.value[x].system" />
            <min value="1" />
        </element>
        <element id="Extension.extension:organizationRole.value[x].code">
            <path value="Extension.extension.value[x].code" />
            <min value="1" />
        </element>
        ...
    </differential>
</StructureDefinition>
```

Like with `parentOrganization`, an extension element to `meta.tag.extension` is added with the fixed url value defined above:
```xml
<meta>
    <tag>
        <extension>
            <extension url="parent-organization">
                <valueIdentifier>
                    <system value="http://dsf.dev/sid/organization-identifier"/>
                    <value value="My_Organization"/>
                </valueIdentifier>
            </extension>
            <extension url="organization-role">
             
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

Instead of `Identifier`, the `value[x]` element is now defined as a `Coding` type. This the next element to add will be `valueCoding`:
```xml
<meta>
    <tag>
        <extension>
            <extension url="parent-organization">
                <valueIdentifier>
                    <system value="http://dsf.dev/sid/organization-identifier"/>
                    <value value="My_Organization"/>
                </valueIdentifier>
            </extension>
            <extension url="organization-role">
                <valueCoding>
                 
                </valueCoding>
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

A `Coding` has to belong to some [CodeSystem](../fhir/codesystem.md). The DSF has a CodeSystem called [dsf-organization-role](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/CodeSystem/dsf-organization-role-1.0.0.xml). Before creating new CodeSystems, it is worth taking a look at it to see if an appropriate role already exists for an organization. The example will be using the `DIC` role:
```xml
<meta>
    <tag>
        <extension>
            <extension url="parent-organization">
                <valueIdentifier>
                    <system value="http://dsf.dev/sid/organization-identifier"/>
                    <value value="My_Organization"/>
                </valueIdentifier>
            </extension>
            <extension url="organization-role">
                <valueCoding>
                    <system value="http://dsf.dev/fhir/CodeSystem/organization-role"/>
                    <code value="DIC"/>
                </valueCoding>
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

Now there is only two elements left in the `differential` statement:

```xml
<StructureDefinition xmlns="http://hl7.org/fhir">
    ...
    <differential>
        ...
        <element id="Extension.url">
            <path value="Extension.url" />
            <fixedUri value="http://dsf.dev/fhir/StructureDefinition/extension-read-access-parent-organization-role" />
        </element>
        <element id="Extension.value[x]">
            <path value="Extension.value[x]" />
            <max value="0" />
        </element>
    </differential>
</StructureDefinition>
```

The `Extension.url` element requires a url attribute to be added to `meta.tag.extension`. The last element defines that there must not be a `meta.tag.extension.value[x]` element. This results in this final Read Access Tag:

```xml
<meta>
    <tag>
        <extension url="http://dsf.dev/fhir/StructureDefinition/extension-read-access-parent-organization-role">
            <extension url="parent-organization">
                <valueIdentifier>
                    <system value="http://dsf.dev/sid/organization-identifier"/>
                    <value value="My_Organization"/>
                </valueIdentifier>
            </extension>
            <extension url="organization-role">
                <valueCoding>
                    <system value="http://dsf.dev/fhir/CodeSystem/organization-role"/>
                    <code value="DIC"/>
                </valueCoding>
            </extension>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
        <code value="ROLE"/> 
    </tag>
</meta>
```

## Related Topics
[Read Access Tag](../dsf/read-access-tag.md)

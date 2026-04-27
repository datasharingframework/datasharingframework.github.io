---
title: Understanding the Process Authorization Extension
icon: creative
---

The authorization rules live inside a `<extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">` block in the `ActivityDefinition`. Before you make changes, read through the annotated structure below so you know exactly what each line does and where to make your edits later.

```xml
<!-- The outermost container for one complete authorization rule block.
     One block covers exactly one message name, one Task profile, and the
     requester/recipient rules for it.
     Add a second block if you have a second message type. -->
<extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization">

    <!-- Which BPMN Message name does this rule apply to? -->
    <extension url="message-name">
        <valueString value="startDicProcess" />
    </extension>

    <!-- Which StructureDefinition (Task profile) must an incoming Task conform to? -->
    <extension url="task-profile">
        <valueCanonical value="http://example.org/fhir/StructureDefinition/task-start-dic-process|#{version}" />
    </extension>

    <!-- ─── REQUESTER: Who is allowed to SEND this message? ────────────────
         valueCoding selects a rule from the DSF authorization CodeSystem.    -->
    <extension url="requester">
        <valueCoding>
            <!-- The CodeSystem (dictionary) that defines the available rules.
                 Always this fixed DSF URL. -->
            <system value="http://dsf.dev/fhir/CodeSystem/process-authorization" />

            <!-- Which rule from that dictionary?
                 LOCAL_ALL           = any local client (certificate or OIDC user)
                 LOCAL_ROLE          = any local client with a specific OIDC practitioner role
                 LOCAL_ORGANIZATION  = one specific local organization  (needs nested extension)
                 REMOTE_ORGANIZATION = one specific remote organization (needs nested extension) -->
            <code value="LOCAL_ALL" />
        </valueCoding>
    </extension>

    <!-- ─── RECIPIENT: Who is allowed to RECEIVE / execute this process? ───
         Same structure as requester above. -->
    <extension url="recipient">
        <valueCoding>
            <system value="http://dsf.dev/fhir/CodeSystem/process-authorization" />
            <code value="LOCAL_ALL" />
        </valueCoding>
    </extension>

</extension>
```

When you need to restrict access to a **specific organization** or a **specific OIDC role**, add a nested `<extension>` inside `<valueCoding>` to narrow the rule further:

```xml
<!-- Example: only a specific remote organization may send -->
<extension url="requester">
    <valueCoding>
        <!-- Narrow down: which specific organization? -->
        <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-organization">
            <valueIdentifier>
                <!-- The DSF system for organization identifiers -->
                <system value="http://dsf.dev/sid/organization-identifier" />
                <!-- The concrete organization identifier -->
                <value value="cos.dsf.test" />
            </valueIdentifier>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/process-authorization" />
        <!-- Must match the nested extension: REMOTE_ORGANIZATION for a remote org,
             LOCAL_ORGANIZATION for a local org -->
        <code value="REMOTE_ORGANIZATION" />
    </valueCoding>
</extension>

<!-- Example: only local clients with the OIDC practitioner role DSF_ADMIN -->
<extension url="requester">
    <valueCoding>
        <!-- Narrow down: which OIDC practitioner role? -->
        <extension url="http://dsf.dev/fhir/StructureDefinition/extension-process-authorization-practitioner-role">
            <valueCoding>
                <system value="http://dsf.dev/fhir/CodeSystem/practitioner-role" />
                <code value="DSF_ADMIN" />
            </valueCoding>
        </extension>
        <system value="http://dsf.dev/fhir/CodeSystem/process-authorization" />
        <code value="LOCAL_ROLE" />
    </valueCoding>
</extension>
```

> **Reading tip:** Think of the outer `<code>` as the *category* of the rule (e.g. "a local client with a specific role") and the inner `<extension>` as the *precise value* within that category (e.g. "the role `DSF_ADMIN`"). You always need both together.

## Related Topics
[ActivityDefinition](../fhir/activitydefinition.md), [Creating ActivityDefinitions](../guides/creating-activity-definitions.md), [Requester and Recipient Examples](./requester-and-recipient.md)
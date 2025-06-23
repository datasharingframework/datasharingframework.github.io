---
title: Organization Identifiers
icon: creative
---

## Organization Identifiers
DSF FHIR server instances can configure an `organization identifier`. It uniquely identifies the organization the DSF FHIR server instance belongs to for its [Allow-List mechanism](https://dsf.dev/intro/info/allowList.html). It is set as an [environment variable](https://dsf.dev/stable/maintain/fhir/configuration.html#dev-dsf-fhir-server-organization-identifier-value). A GET request to `https://domain/fhir/Organization` will return a list of all organizations for the DSF FHIR server instance running under `domain`. The results will also include the `organization identifier` of each organization.  

### Organization Identifiers in Task Resources
[Task](../fhir/task.md) resources require a reference to an organization via its identifier as the `Task.requester` and `Task.restriction.recipient` elements. The exact values for these elements depend on the [ActivityDefinition](../fhir/activitydefinition.md) the [Task](../fhir/task.md) resource should conform to. As a general rule, the identifier of your own organization should be used as the `Task.requester` and `Task.restriction.recipient` elements for [Task](../fhir/task.md) resources which initially start processes. All other cases depend on the context of the message being sent during process execution. An easy way to generalize this in [Draft Task Resources](draft-task-resources.md) is to use the `#{organization}` [placeholder](versions-placeholders-urls.md#placeholders).

## Related Topics
[Allow-List](https://dsf.dev/intro/info/allowList.html), [ActivityDefinition](../fhir/activitydefinition.md), [Environment Variables](environment-variables.md), [Requester and Recipient](requester-and-recipient.md), [Task](../fhir/task.md)
---
title: Versions, Placeholders and URLs
icon: creative
---

### Versions, Placeholders and URLs

#### Version Pattern

Process plugin versions have to obey the pattern:
```
\d+\.\d+\.\d+\.\d+  Example: 1.2.3.4
```

The first two numbers (`1.2`) are used in FHIR resources and signal changes which break compatibility with previous process versions. For example, altering FHIR resources usually results in a breaking change. The latter two (`3.4`) signal changes which do not break compatibility with previous process versions. Specifically, the 4th number is reserved for bug-fixes and the 3rd number includes all other non-breaking changes.

#### Placeholders

To avoid specifying the version and release date in multiple files, the placeholders `#{version}` and `#{date}` can be used within FHIR resources and BPMN models. They are replaced with the values returned by the methods `ProcessPluginDefinition#getResourceVersion` and `ProcessPluginDefinition#getReleaseDate` respectively during deployment of a process plugin by the DSF BPE server. There is also a placeholder for the organization the DSF instance is running in: `#{organization}`, typically use in [Draft Task Resources](draft-task-resources.md).

#### URLs

BPMN models have an ID call process definition key. The BPMN process definition key needs to be specified following the pattern:
```
^[-a-zA-Z0-9]+_[-a-zA-Z0-9]+$  Example: domainorg_processKey
```
In addition, the BPMN model needs to specify a version. You should be using the ``#{version}`` [placeholder](#placeholders) for this as well. The DSF will also reference this process in URL form in FHIR resources:
```
http://domain.org/bpe/Process/processKey|1.2
```

As you can see, the version in the URL ``|1.2`` only uses the resource version and omits the code base version. As mentioned in [Version Pattern](#version-pattern), this means that only changes to the first two version numbers are significant to signal compatibility when communicating with other process plugin instances. The process definition key and URL are also related to each other. The DSF will try to match BPMN models to FHIR resources by transforming the URL into a process definition key. That is why it is important you obey the pattern above.

You will use the above URL as your instantiatesCanonical value for [Task](../fhir/task.md) profile definitions as well as references to [Task](../fhir/task.md) profiles in other resources. You will also use it as the URL value for your [ActivityDefinitions](../fhir/activitydefinition.md). In this case though, you have to split up the URL into two parts. You will separate the version (``|1.2``) from the URL and use it as a value for the `ActivityDefinition.version` element. Since it refers to the plugin's resource version, you should also use the `#{version}` [placeholder](#placeholders) here instead. Going by the example from above, you will be left with a URL that looks like this:
```
http://domain.org/bpe/Process/processKey
```
This will be the value for your `ActivityDefinition.url` element with `#{version}` as the value for your `ActivityDefinition.version` element.
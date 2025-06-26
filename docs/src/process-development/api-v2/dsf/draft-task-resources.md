---
title: Draft Task Resources
icon: creative
---

## Draft Task Resources

[Task](../fhir/task.md) resources with status `draft` are used to create the DSF FHIR server's functionality of starting processes via its web interface. They are stored in `.../tutorial-process/src/main/resources/fhir/Task`. Compared to regular [Task](../fhir/task.md) resources used to start BPMN processes, this type of [Task](../fhir/task.md) resource requires the status `draft` instead of the usual `requested`. It also replaces the value for `authoredOn` with the placeholder `#{date}`, the values of organization identifiers with the placeholder `#{organization}` and all instances of version numbers with `#{version}`. Additionally, it requires setting the `Task.identifier` element. It should look something like this:

```xml
<identifier>
     <system value="http://dsf.dev/sid/task-identifier" />
     <value value="http://dsf.dev/bpe/Process/processKey/#{version}/task-name" />
</identifier>
```
`processKey` should be the same one used in [URLs](versions-placeholders-urls.md#urls).  
`task-name` can be any String this task should be identified with. E.g. you can use the file name of the Draft Task.

A complete example for a Draft Task Resource can be found in the [Ping Pong Process Plugin](https://github.com/datasharingframework/dsf-process-ping-pong/blob/main/src/main/resources/fhir/Task/dsf-task-start-ping.xml).

There is also a [guide for creating task resources based on a StructureDefinition](../guides/creating-task-resources-based-on-a-definition.md) if more information on how to create [Task](../fhir/task.md) resources is required.

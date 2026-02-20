---
title: Draft Task Resources
icon: creative
---

## Draft Task Resources

[Task](../fhir/task.md) resources with status `draft` are used to create the DSF FHIR server's functionality of starting processes via its web interface. They are stored in the `.../src/main/resources/fhir/Task` subdirectory of a project. Compared to regular [Task](../fhir/task.md) resources used to start BPMN processes, this type of [Task](../fhir/task.md) resource requires the status `draft` instead the usual `requested`. It also replaces the value for `authoredOn` with the placeholder `#{date}`, the values of organization identifiers with the placeholder `#{organization}` and all instances of version numbers with `#{version}`. Additionally, it requires setting the `Task.identifier` element. It should look something like this:

```xml
<identifier>
     <system value="http://dsf.dev/sid/task-identifier" />
     <value value="http://my.org/bpe/Process/processKey/#{version}/task-name" />
</identifier>
```
`processKey` should be the same one used in [URLs](versions-placeholders-urls.md#urls).  
`task-name` may be any String to identify this task with. E.g. the file name of the Draft Task.

Complete examples can be found in existing process plugins like [Ping Pong](https://github.com/datasharingframework/dsf-process-ping-pong/blob/main/src/main/resources/fhir/Task/dsf-task-stop-ping-autostart.xml).

## Related Topics 
[Creating Task Resources Based On a Definition](../guides/creating-task-resources-based-on-a-definition.md)
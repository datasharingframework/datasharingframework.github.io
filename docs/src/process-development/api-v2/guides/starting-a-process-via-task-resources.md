---
title: Starting a Process via Task Resources
icon: creative
---

## Starting a Process via Task Resources

To start a BPMN process, a new [Task](../fhir/task.md) resource must be created in the DSF FHIR server by sending an HTTP request in accordance with the [FHIR RESTful API](https://www.hl7.org/fhir/R4/http.html). Specifically, a [create](https://www.hl7.org/fhir/R4/http.html#create) operation is required to generate the resource for the first time. The [Task](../fhir/task.md) resource being sent must conform to the [Task](../fhir/task.md) profile of the intended process and adhere to the [ActivityDefinition's](../fhir/activitydefinition.md) authorization rules.  
There are two major ways of making this HTTP request:
1. Using cURL
2. Using the DSF FHIR server's web interface

### Using cURL
To use cURL, an appropriate [Task](../fhir/task.md) resource must be created and posted to the DSF FHIR server. There is a guide on [creating Task Resources based on a StructureDefinition](../guides/creating-task-resources-based-on-a-definition.md). A file named `example-task.xml` is available in `tutorial-process/src/main/resources/fhir` in the [DSF Process Tutorial](https://github.com/datasharingframework/dsf-process-tutorial) and can serve as a starting point. The [solution branches of the tutorial](https://github.com/datasharingframework/dsf-process-tutorial/blob/solutions/exercise-1/tutorial-process/src/main/resources/fhir/Task/task-start-dic-process.xml) can be consulted for a full example.

Below is a cURL command skeleton. All <>-Placeholders should be replaced with appropriate values. Host name depends on the instance that should be addressed.

#### Linux:
```shell
curl https://<instance-host-name>/fhir/Task \
--cacert <path/to/ca-certificate-file.pem> \
--cert <path/to/client-certificate-file.pem>:password \
--key <path/to/client-private-key-file.pem> \
-H "Content-Type: application/fhir+xml" \
-H "Accept: application/fhir+xml" \
-d @<path/to/example-task.xml>
```

### Using the DSF FHIR Server's Web Interface

When accessing the web interface of a DSF FHIR server instance (e.g. https://instance-name/fhir), the DSF FHIR server can be queried using the [FHIR RESTful API](https://www.hl7.org/fhir/R4/http.html) to return a list of all [Draft Task Resources](../dsf/draft-task-resources.md). These [Task](../fhir/task.md) resources serve as templates for instantiating [Task](../fhir/task.md) resources that initiate BPMN processes. Instead of performing the query manually, a predefined bookmark can be used to navigate to the query URL. A list of bookmarks is available in the top right corner of the web interface. Selecting the bookmark referencing `?_sort=_profile,identifier&status=draft` under the `Task` section will display the list of all [Draft Task Resources](../dsf/draft-task-resources.md). From this list, the desired resource to start the BPMN process can be selected. A detailed view of the resource will be shown, allowing the specification of any necessary [Task Input Parameters](../fhir/task.md#task-input-parameters). If all required information is provided correctly, the process can be initiated by clicking `Start Process`. 

For [Draft Task Resources](../dsf/draft-task-resources.md) to be available, they must be included in the mapping for the BPMN process ID in `ProcessPluginDefinition#getFhirResourcesByProcessId`. Additional information can be found in [the Process Plugin Definition](../dsf/process-plugin-definition.md).

## Related Topics
[Task](../fhir/task.md)
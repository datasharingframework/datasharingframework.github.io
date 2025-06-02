---
title: Starting a Process via Task Resources
icon: creative
---

### Starting a Process via Task Resources

To start a BPMN process, you need to create new a [Task](../fhir/task.md) resource in the DSF FHIR server by sending an HTTP request according to the [FHIR RESTful API](https://www.hl7.org/fhir/R4/http.html). Specifically, you need to [create](https://www.hl7.org/fhir/R4/http.html#create)
a resource for the first time. Also, remember that the [Task](../fhir/task.md) resource you are sending needs to comply to the [Task](../fhir/task.md) profile of the process you want to start and the [ActivityDefinition's](../fhir/activitydefinition.md) authorization rules.   
There are two major ways of making this HTTP request:
1. Using cURL
2. Using the DSF FHIR server's web interface

#### Using cURL
In order to use cURL, you will have to create an appropriate [Task](../fhir/task.md) resource to post to the DSF FHIR server. There already is a file called `example-task.xml` located in `tutorial-process/src/main/resources/fhir`. You can use this as your starting point. You can try to follow [this guide](../guides/creating-task-resources-based-on-a-definition.md), or you can check the solution branches for this file if you need ideas on how to fill it out properly.

Below are some cURL command skeletons. Replace all <>-Placeholders with appropriate values. Host name depends on the instance you want to address.

##### Linux:
```shell
curl https://<instance-host-name>/fhir/Task \
--cacert <path/to/ca-certificate-file.pem> \
--cert <path/to/client-certificate-file.pem>:password \
--key <path/to/client-private-key-file.pem> \
-H "Content-Type: application/fhir+xml" \
-H "Accept: application/fhir+xml" \
-d @<path/to/example-task.xml>
```
##### Windows CMD:
```shell
curl https://<instance-host-name>/fhir/Task ^
--cacert <path/to/ca-certificate-file.pem> ^
--cert <path/to/client-certificate-file.pem>:password ^
--key <path/to/client-private-key-file.pem> ^
-H "Content-Type: application/fhir+xml" ^
-H "Accept: application/fhir+xml" ^
-d @<path/to/example-task.xml>
```
*This may throw an error depending on which version of cURL Windows is using. If this is the case for you after making sure you entered everything correctly, you can try using Git's version of cURL instead by adding it to the very top of your system's PATH environment variable. Git's cURL is usually situated in C:\Program Files\Git\mingw64\bin.*

#### Using the DSF FHIR Server's Web Interface

When visiting the web interface of a DSF FHIR server instance (e.g. https://instance-name/fhir), you can query the DSF FHIR server using the [FHIR RESTful API](https://www.hl7.org/fhir/R4/http.html) to return a list of all [Draft Task Resources](../dsf/draft-task-resources.md). These [Task](../fhir/task.md) resources act like a template you can use to instantiate [Task](../fhir/task.md) resources which start BPMN processes. Instead of querying the DSF FHIR server manually, you can use a predefined bookmark to navigate to the query URL. You can find a list of Bookmarks in the top right corner of the web interface. Simply select the bookmark referencing `?_sort=_profile,identifier&status=draft` under the `Task` section, and you will be taken to the list of all [Draft Task Resources](../dsf/draft-task-resources.md). Once there, you can select the one which starts your BPMN process. It will take you to a detailed view of the resource where you will also have the chance to fill any [Task Input Parameters](../fhir/task.md#task-input-parameters) you might need to specify. If everything is filled out correctly, you may start your process by clicking `Start Process`. Keep in mind that, for [Draft Task Resources](../dsf/draft-task-resources.md) to be available, you need to include them in your mapping for your BPMN process ID in `ProcessPluginDefinition#getFhirResourcesByProcessId`. Take a look at [the Process Plugin Definition](../dsf/process-plugin-definition.md) if you need a reminder.
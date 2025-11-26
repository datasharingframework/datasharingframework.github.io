[ActivityDefinitions](http://hl7.org/fhir/R4/activitydefinition.html) are used by the DSF to advertise which processes are
available at any given instance and who is allowed to request and who is allowed to execute a process. The DSF defined elements
for this purpose in the [dsf-activity-definition](https://github.com/datasharingframework/dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/dsf-activity-definition-1.0.0.xml) profile.


The most important elements in ActivityDefinitions are:
- `message-name`
- `task-profile`
- `requester`
- `recipient`

The `message-name` element contains the name of the BPMN message start event or
BPMN message intermediate catching event which expects
a Task resource complying to the profile defined by `task-profile`.

The `requester` and `recipient` elements define the organisation(s) or person(s) who are allowed to request or receive the message
specified by `message-name`. The receiving DSF instance is the one who will execute the process connected to the message.


ActivityDefinitions also reference other resource definitions. 
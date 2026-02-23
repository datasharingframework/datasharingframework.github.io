---
title: User Tasks in the DSF
icon: creative
---

### User Tasks in the DSF

Creating a [User Task](../bpmn/user-tasks.md) in a BPMN model causes the DSF to automatically generate a [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) resource based on the [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) specified in the [User Task's](../bpmn/user-tasks.md) `Forms` field when process execution reaches the [User Task](../bpmn/user-tasks.md). The `Forms` field must have the type `Embedded or External Task Forms`, with the `Form key` set to the URL of the [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) resource. The [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) resource must be placed in the `src/main/resources/fhir/Questionnaire` directory.

The generated [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) can be accessed and answered by navigating to `https://example.org/fhir/QuestionnaireResponse?_sort=-_lastUpdated&status=in-progress` in the DSF FHIR server UI. After completing and submitting the [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html), the process execution will proceed to the next BPMN element following the [User Task](../bpmn/user-tasks.md). The updated [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) will then be accessible via the [Process Plugin Api's](../dsf/process-plugin-api.md) `Variables` instance by calling `getLatestReceivedQuestionnaireResponse()`.

It is also possible to register a [Task Listener](https://docs.camunda.org/manual/7.21/user-guide/process-engine/delegation-code/#task-listener) on the [User Task](../bpmn/user-tasks.md). This enables manipulation of the [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) before it is posted to the DSF FHIR server. This can be achieved by extending the `DefaultUserTaskListener` class, which provides overrides for interacting with the [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html).

Dynamically changing the `item.text` value of an item in a [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) (if the item is **not** of type `display`) is not permitted. To change text dynamically, the `item.text` value of the corresponding [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) resource must also be updated. As an alternative, an item of type `display` can be placed above the item requiring dynamic text, and its `item.text` value can be modified instead, as shown in the template. In this case, the `item.text` element of the item below the display item may be omitted.


Below is a template for a [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) resource. The placeholder `questionnaire-name` should be replaced with the actual name of the [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html), and the file should be named accordingly. The items `business-key` and `user-task-id` are required by the DSF and must always be included. Additional items can be added to the [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) as needed.


### Questionnaire Template
```xml
<Questionnaire xmlns="http://hl7.org/fhir">
    <meta>
        <profile value="http://dsf.dev/fhir/StructureDefinition/questionnaire"/>
        <tag>
            <system value="http://dsf.dev/fhir/CodeSystem/read-access-tag"/>
            <code value="ALL"/>
        </tag>
    </meta>
    <url value="http://example.org/fhir/Questionnaire/questionnaire-name"/>     <!-- file name should be same as the name of your Questionnaire -->
    <!-- version managed by bpe -->
    <version value="#{version}"/>
    <!-- date managed by bpe -->
    <date value="#{date}"/>
    <!-- status managed by bpe -->
    <status value="unknown"/>
    <item>
        <!-- required  -->
        <linkId value="business-key"/>
        <type value="string"/>
        <text value="The business-key of the process execution"/>
        <required value="true"/>
    </item>
    <item>
        <!-- required  -->
        <linkId value="user-task-id"/>
        <type value="string"/>
        <text value="The user-task-id of the process execution"/>
        <required value="true"/>
    </item>
    <item>
        <linkId value="text-to-display-above-item"/>
        <type value="display"/>
        <text value="foo"/>
    </item>
    <item>
        <linkId value="item"/>
        <type value="boolean"/>
        <text value="Item description"/>
        <required value="true"/>
    </item>
</Questionnaire>
```

## Related Topics
[Questionnaire and QuestionnaireResponse](../fhir/questionnaire-and-questionnaireresponse.md)
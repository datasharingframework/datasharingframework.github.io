---
title: Questionnaire and QuestionnaireResponse
icon: creative
---

## Questionnaire and QuestionnaireResponse

[Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) and [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) resources are used by the DSF to implement the user interaction required in [User Tasks](../bpmn/user-tasks.md). Whenever a [User Task](../bpmn/user-tasks.md) is processed, the DSF will create a [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) response resource on the DSF FHIR server. This [QuestionnaireResponse](https://www.hl7.org/fhir/R4/questionnaireresponse.html) is based on a [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) resource that is provided by the process plugin. This mechanism is described in more detail in the topic on [User Tasks in the DSF](../guides/user-tasks-in-the-dsf.md).

## Related Topics
[User Tasks](../bpmn/user-tasks.md), [User Tasks in the DSF](../guides/user-tasks-in-the-dsf.md)
<?xml version="1.0" encoding="UTF-8"?>
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <sch:ns prefix="f" uri="http://hl7.org/fhir"/>
  <sch:ns prefix="h" uri="http://www.w3.org/1999/xhtml"/>
  <!-- 
    This file contains just the constraints for the profile Questionnaire
    It includes the base constraints for the resource as well.
    Because of the way that schematrons and containment work, 
    you may need to use this schematron fragment to build a, 
    single schematron that validates contained resources (if you have any) 
  -->
  <sch:pattern>
    <sch:title>f:Questionnaire</sch:title>
    <sch:rule context="f:Questionnaire">
      <sch:assert test="count(f:url) &gt;= 1">url: minimum cardinality of 'url' is 1</sch:assert>
      <sch:assert test="count(f:version) &gt;= 1">version: minimum cardinality of 'version' is 1</sch:assert>
      <sch:assert test="count(f:date) &gt;= 1">date: minimum cardinality of 'date' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>f:Questionnaire/f:item</sch:title>
    <sch:rule context="f:Questionnaire/f:item">
      <sch:assert test="count(f:definition) &lt;= 0">definition: maximum cardinality of 'definition' is 0</sch:assert>
      <sch:assert test="count(f:code) &lt;= 0">code: maximum cardinality of 'code' is 0</sch:assert>
      <sch:assert test="count(f:prefix) &lt;= 0">prefix: maximum cardinality of 'prefix' is 0</sch:assert>
      <sch:assert test="count(f:text) &gt;= 1">text: minimum cardinality of 'text' is 1</sch:assert>
      <sch:assert test="count(f:enableWhen) &lt;= 0">enableWhen: maximum cardinality of 'enableWhen' is 0</sch:assert>
      <sch:assert test="count(f:answerOption) &lt;= 0">answerOption: maximum cardinality of 'answerOption' is 0</sch:assert>
      <sch:assert test="count(f:initial) &lt;= 0">initial: maximum cardinality of 'initial' is 0</sch:assert>
      <sch:assert test="count(f:item) &lt;= 0">item: maximum cardinality of 'item' is 0</sch:assert>
      <sch:assert test="count(f:definition) &lt;= 0">definition: maximum cardinality of 'definition' is 0</sch:assert>
      <sch:assert test="count(f:code) &lt;= 0">code: maximum cardinality of 'code' is 0</sch:assert>
      <sch:assert test="count(f:prefix) &lt;= 0">prefix: maximum cardinality of 'prefix' is 0</sch:assert>
      <sch:assert test="count(f:text) &gt;= 1">text: minimum cardinality of 'text' is 1</sch:assert>
      <sch:assert test="count(f:enableWhen) &lt;= 0">enableWhen: maximum cardinality of 'enableWhen' is 0</sch:assert>
      <sch:assert test="count(f:answerOption) &lt;= 0">answerOption: maximum cardinality of 'answerOption' is 0</sch:assert>
      <sch:assert test="count(f:initial) &lt;= 0">initial: maximum cardinality of 'initial' is 0</sch:assert>
      <sch:assert test="count(f:item) &lt;= 0">item: maximum cardinality of 'item' is 0</sch:assert>
      <sch:assert test="count(f:definition) &lt;= 0">definition: maximum cardinality of 'definition' is 0</sch:assert>
      <sch:assert test="count(f:code) &lt;= 0">code: maximum cardinality of 'code' is 0</sch:assert>
      <sch:assert test="count(f:prefix) &lt;= 0">prefix: maximum cardinality of 'prefix' is 0</sch:assert>
      <sch:assert test="count(f:text) &gt;= 1">text: minimum cardinality of 'text' is 1</sch:assert>
      <sch:assert test="count(f:enableWhen) &lt;= 0">enableWhen: maximum cardinality of 'enableWhen' is 0</sch:assert>
      <sch:assert test="count(f:answerOption) &lt;= 0">answerOption: maximum cardinality of 'answerOption' is 0</sch:assert>
      <sch:assert test="count(f:initial) &lt;= 0">initial: maximum cardinality of 'initial' is 0</sch:assert>
      <sch:assert test="count(f:item) &lt;= 0">item: maximum cardinality of 'item' is 0</sch:assert>
    </sch:rule>
  </sch:pattern>
</sch:schema>

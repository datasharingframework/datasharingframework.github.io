import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/info/basics.html.vue"
const data = JSON.parse("{\"path\":\"/intro/info/basics.html\",\"title\":\"Basics and Standards\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Basics and Standards\",\"icon\":\"study\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Interoperability\",\"slug\":\"interoperability\",\"link\":\"#interoperability\",\"children\":[]},{\"level\":2,\"title\":\"HL7 FHIR 🔥\",\"slug\":\"hl7-fhir\",\"link\":\"#hl7-fhir\",\"children\":[]},{\"level\":2,\"title\":\"BPMN\",\"slug\":\"bpmn\",\"link\":\"#bpmn\",\"children\":[]},{\"level\":2,\"title\":\"Why are we using FHIR and BPMN?\",\"slug\":\"why-are-we-using-fhir-and-bpmn\",\"link\":\"#why-are-we-using-fhir-and-bpmn\",\"children\":[]}],\"readingTime\":{\"minutes\":2.59,\"words\":778},\"filePathRelative\":\"intro/info/basics.md\",\"excerpt\":\"<p>Here you can find some basic information about interoperability and the standards were using within the DSF before we go into details about the architecture. Here we only describe how the standards (FHIR and BPMN) are used within the DSF. If you want to gain a deeper knowledge of the standards, we recommend visiting these websites: <a href=\\\"https://www.hl7.org/fhir/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">HL7 FHIR</a> and <a href=\\\"https://www.bpmn.org/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">BPMN</a></p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

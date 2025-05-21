import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/info/architecture.html.vue"
const data = JSON.parse("{\"path\":\"/intro/info/architecture.html\",\"title\":\"Architecture\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Architecture\",\"icon\":\"structure\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"DSF FHIR Server 📫\",\"slug\":\"dsf-fhir-server\",\"link\":\"#dsf-fhir-server\",\"children\":[]},{\"level\":2,\"title\":\"Business Process Engine (BPE)\",\"slug\":\"business-process-engine-bpe\",\"link\":\"#business-process-engine-bpe\",\"children\":[]},{\"level\":2,\"title\":\"Flexible Deployment\",\"slug\":\"flexible-deployment\",\"link\":\"#flexible-deployment\",\"children\":[]},{\"level\":2,\"title\":\"Network Setup & Additional Reverse Proxy in external DMZ\",\"slug\":\"network-setup-additional-reverse-proxy-in-external-dmz\",\"link\":\"#network-setup-additional-reverse-proxy-in-external-dmz\",\"children\":[]}],\"readingTime\":{\"minutes\":1.94,\"words\":582},\"filePathRelative\":\"intro/info/architecture.md\",\"excerpt\":\"<p>The Data Sharing Framework implements a distributed business process engine based on the BPMN 2.0 and FHIR R4 standards. Every participating organisation (e.g. ORG. A) runs a FHIR endpoint accessible by other sites and a business process engine (BPE) in the local secured network. Once the DSF has been installed in an organisation, it can be used for multiple use cases.</p>\"}")
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

import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/info/security.html.vue"
const data = JSON.parse("{\"path\":\"/intro/info/security.html\",\"title\":\"Security by Design\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Security by Design\",\"icon\":\"safe\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Basics Security\",\"slug\":\"basics-security\",\"link\":\"#basics-security\",\"children\":[]},{\"level\":2,\"title\":\"Authentication\",\"slug\":\"authentication\",\"link\":\"#authentication\",\"children\":[{\"level\":3,\"title\":\"Certificate Requests 🔒\",\"slug\":\"certificate-requests\",\"link\":\"#certificate-requests\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.54,\"words\":461},\"filePathRelative\":\"intro/info/security.md\",\"excerpt\":\"<h2>Basics Security</h2>\\n<p>The open-source Data Sharing Framework is EU-GDPR compliant and meets the highest security standards by design. DSF FHIR servers only accept certain FHIR resources from internal systems/administrators (e.g. tasks, binary resources...). In addition, the communication partners are defined via Allow Lists. This means that an organisation can only communicate with organisations that are included in the allow list of approved organisations of the participating organisations. More information about allow lists can be found in the <a href=\\\"allowList\\\">next chapter</a>.<br>\\nFor transport encryption, the TLS protocol is used. Secure Web Socket (WSS) connections provide security for the connection between the DSF FHIR server (DMZ) and the BPE (internal network). In addition, the DSF is being actively developed and there is an excellent community, both of which guarantee fast security patches.</p>\"}")
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

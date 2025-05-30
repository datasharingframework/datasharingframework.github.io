import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.3.2/maintain/fhir/access-control.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.3.2/maintain/fhir/access-control.html\",\"title\":\"Access Control\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Access Control\",\"icon\":\"config\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"Matching Users\",\"slug\":\"matching-users\",\"link\":\"#matching-users\",\"children\":[]},{\"level\":2,\"title\":\"DSF and Practitioner Roles\",\"slug\":\"dsf-and-practitioner-roles\",\"link\":\"#dsf-and-practitioner-roles\",\"children\":[]},{\"level\":2,\"title\":\"Examples\",\"slug\":\"examples\",\"link\":\"#examples\",\"children\":[]}],\"readingTime\":{\"minutes\":2.47,\"words\":742},\"filePathRelative\":\"release/archive/v1.3.2/maintain/fhir/access-control.md\",\"excerpt\":\"<h2>Overview</h2>\\n<p>The DSF FHIR server implements a subset of the FHIR R4 <a href=\\\"http://hl7.org/fhir/R4/http.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">REST API</a>. When accessing the API with a web browser a limited graphical user interface is shown. Without any additional configuration the API and user interface is only accessible with the X.509 client certificate configured for the organization via the configuration parameter: <a href=\\\"configuration#dev-dsf-fhir-server-organization-thumbprint\\\">DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT</a></p>\"}")
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

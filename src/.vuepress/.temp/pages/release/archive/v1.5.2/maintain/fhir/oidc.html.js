import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.5.2/maintain/fhir/oidc.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.5.2/maintain/fhir/oidc.html\",\"title\":\"OpenID Connect\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"OpenID Connect\",\"icon\":\"config\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"Authorization Code Flow\",\"slug\":\"authorization-code-flow\",\"link\":\"#authorization-code-flow\",\"children\":[]},{\"level\":2,\"title\":\"Bearer Token Authentication\",\"slug\":\"bearer-token-authentication\",\"link\":\"#bearer-token-authentication\",\"children\":[]},{\"level\":2,\"title\":\"Additional ODIC Configuration Parameter\",\"slug\":\"additional-odic-configuration-parameter\",\"link\":\"#additional-odic-configuration-parameter\",\"children\":[]},{\"level\":2,\"title\":\"Example\",\"slug\":\"example\",\"link\":\"#example\",\"children\":[]}],\"readingTime\":{\"minutes\":1.34,\"words\":401},\"filePathRelative\":\"release/archive/v1.5.2/maintain/fhir/oidc.md\",\"excerpt\":\"<h2>Overview</h2>\\n<p>Access to the DSF FHIR server REST API and user interface can be configured via <a href=\\\"access-control\\\">access control roles</a>. By default users are only authenticated using X.509 client certificates, but authentication for local users via OAuth 2.0 OpenID Connect can also be enabled.</p>\"}")
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

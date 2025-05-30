import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.5.0/maintain/bpe/access-control.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.5.0/maintain/bpe/access-control.html\",\"title\":\"Access Control\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Access Control\",\"icon\":\"config\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"Matching Users\",\"slug\":\"matching-users\",\"link\":\"#matching-users\",\"children\":[]},{\"level\":2,\"title\":\"DSF and Practitioner Roles\",\"slug\":\"dsf-and-practitioner-roles\",\"link\":\"#dsf-and-practitioner-roles\",\"children\":[]},{\"level\":2,\"title\":\"Examples\",\"slug\":\"examples\",\"link\":\"#examples\",\"children\":[]}],\"readingTime\":{\"minutes\":1.94,\"words\":583},\"filePathRelative\":\"release/archive/v1.5.0/maintain/bpe/access-control.md\",\"excerpt\":\"<h2>Overview</h2>\\n<p>The DSF BPE server provides a user interface for administrators. Without any additional configuration the user interface is not accessible with the organizations X.509 client certificate or any other certificate or OpenID Connect authenticated user.</p>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">OpenID Connect</p>\\n<p>To enable OpenID Connect authentication of local user, see the DSF BPE server OpenID Connect <a href=\\\"oidc\\\">configuration page</a>.</p>\\n</div>\"}")
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

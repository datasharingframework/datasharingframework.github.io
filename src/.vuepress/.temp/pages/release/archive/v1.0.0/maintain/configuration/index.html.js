import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.0.0/maintain/configuration/index.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.0.0/maintain/configuration/\",\"title\":\"Configuration Parameters\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Configuration Parameters\",\"icon\":\"config\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"release/archive/v1.0.0/maintain/configuration/README.md\",\"excerpt\":\"<h2>Overview</h2>\\n<ul>\\n<li><a href=\\\"common\\\">Common Parameters</a></li>\\n<li><a href=\\\"fhir\\\">Parameters FHIR Server</a></li>\\n<li><a href=\\\"bpe\\\">Parameters BPE Server</a></li>\\n<li><a href=\\\"reverseproxy\\\">Parameters FHIR Reverse Proxy</a></li>\\n</ul>\\n\"}")
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

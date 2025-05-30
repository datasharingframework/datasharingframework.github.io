import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"About us\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About us\",\"icon\":\"creative\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]}],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"about/README.md\",\"excerpt\":\"<h2>Overview</h2>\\n<ul>\\n<li><a href=\\\"./contact\\\">Contact &amp; Community Guide</a></li>\\n<li><a href=\\\"./team\\\">Contributors</a></li>\\n<li><a href=\\\"./partner\\\">Partner</a></li>\\n<li><a href=\\\"./funding\\\">Public Funding</a></li>\\n</ul>\\n\"}")
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

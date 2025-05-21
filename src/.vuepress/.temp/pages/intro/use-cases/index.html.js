import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/use-cases/index.html.vue"
const data = JSON.parse("{\"path\":\"/intro/use-cases/\",\"title\":\"Use-Cases\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Use-Cases\",\"icon\":\"view\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]}],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"intro/use-cases/README.md\",\"excerpt\":\"<h2>Overview</h2>\\n<ul>\\n<li><a href=\\\"feasibility\\\">Feasibility</a></li>\\n<li><a href=\\\"num\\\">Network University Medicine</a></li>\\n</ul>\\n\"}")
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

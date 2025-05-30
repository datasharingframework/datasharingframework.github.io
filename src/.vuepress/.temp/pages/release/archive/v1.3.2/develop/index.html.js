import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.3.2/develop/index.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.3.2/develop/\",\"title\":\"Develop Process Plugins\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Develop Process Plugins\",\"icon\":\"plugin\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"release/archive/v1.3.2/develop/README.md\",\"excerpt\":\"<h2>Overview</h2>\\n<ul>\\n<li><a href=\\\"create\\\">Create a new process plugin</a></li>\\n<li><a href=\\\"upgrade-from-0\\\">Upgrade processes from 0.9.x</a></li>\\n</ul>\\n\"}")
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

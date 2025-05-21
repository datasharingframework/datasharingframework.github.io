import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/index.html.vue"
const data = JSON.parse("{\"path\":\"/intro/\",\"title\":\"Documentation\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Documentation\",\"icon\":\"info\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"intro/README.md\",\"excerpt\":\"<h2>Overview</h2>\\n<ul>\\n<li>Documentation\\n<ul>\\n<li><a href=\\\"/intro/info/introduction.html\\\" target=\\\"_blank\\\">Introduction</a></li>\\n<li><a href=\\\"/intro/info/basics.html\\\" target=\\\"_blank\\\">Basics &amp; Standards</a></li>\\n<li><a href=\\\"/intro/info/architecture.html\\\" target=\\\"_blank\\\">Architecture</a></li>\\n<li><a href=\\\"/intro/info/security.html\\\" target=\\\"_blank\\\">Security</a></li>\\n<li><a href=\\\"/intro/info/allowList.html\\\" target=\\\"_blank\\\">Allow Lists</a></li>\\n<li><a href=\\\"/intro/info/process-plugins.html\\\" target=\\\"_blank\\\">Process Plugins</a></li>\\n</ul>\\n</li>\\n</ul>\"}")
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

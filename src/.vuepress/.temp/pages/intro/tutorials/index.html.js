import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/tutorials/index.html.vue"
const data = JSON.parse("{\"path\":\"/intro/tutorials/\",\"title\":\"Tutorials\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tutorials\",\"icon\":\"edit\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"intro/tutorials/README.md\",\"excerpt\":\"<ul>\\n<li><a href=\\\"/intro/tutorials/MIE2023.html\\\" target=\\\"_blank\\\">MIE 2023</a></li>\\n<li><a href=\\\"/intro/tutorials/GMDS2022-dev.html\\\" target=\\\"_blank\\\">GMDS 2022 - DSF Process Plugin Tutorial v 0.9.x</a></li>\\n</ul>\\n\"}")
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

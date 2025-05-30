import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/reference/index.html.vue"
const data = JSON.parse("{\"path\":\"/reference/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":\"reference/readme.md\",\"excerpt\":\"<p>Reference</p>\\n\"}")
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

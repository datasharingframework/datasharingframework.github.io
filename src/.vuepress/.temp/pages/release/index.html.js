import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/index.html.vue"
const data = JSON.parse("{\"path\":\"/release/\",\"title\":\"Release\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Release\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

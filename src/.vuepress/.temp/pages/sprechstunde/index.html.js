import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/sprechstunde/index.html.vue"
const data = JSON.parse("{\"path\":\"/sprechstunde/\",\"title\":\"Sprechstunde\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Sprechstunde\",\"icon\":\"guide\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.12,\"words\":35},\"filePathRelative\":\"sprechstunde/index.md\",\"excerpt\":\"<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">Gemeinsame technische Sprechstunde der DSF-Community und des FDPG+</p>\\n<ul>\\n<li>Montags, 13:00-14:00 Uhr</li>\\n<li>Ort: <a href=\\\"https://dsf.dev/sprechstunde\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://dsf.dev/sprechstunde</a></li>\\n</ul>\\n</div>\"}")
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

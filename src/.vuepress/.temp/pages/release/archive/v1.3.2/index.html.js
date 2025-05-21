import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.3.2/index.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.3.2/\",\"title\":\"DSF 1.3.2\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"DSF 1.3.2\",\"icon\":\"guide\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"New features\",\"slug\":\"new-features\",\"link\":\"#new-features\",\"children\":[]}],\"readingTime\":{\"minutes\":0.46,\"words\":139},\"filePathRelative\":\"release/archive/v1.3.2/index.md\",\"excerpt\":\"<p>Data Sharing Framework 1.x is the new major release of the Data Sharing Framework. Click <a href=\\\"/intro/\\\" target=\\\"_blank\\\">here</a> to find more information about the DSF in general.</p>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">Important note</p>\\n<p>This is a major DSF release not compatible with 0.9.x and older version developed at <a href=\\\"https://github.com/highmed/highmed-dsf\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://github.com/highmed/highmed-dsf</a>.</p>\\n</div>\"}")
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

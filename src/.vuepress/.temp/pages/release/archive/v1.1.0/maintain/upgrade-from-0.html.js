import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.1.0/maintain/upgrade-from-0.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.1.0/maintain/upgrade-from-0.html\",\"title\":\"Upgrade from DSF 0.9.x\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Upgrade from DSF 0.9.x\",\"icon\":\"update\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.45,\"words\":134},\"filePathRelative\":\"release/archive/v1.1.0/maintain/upgrade-from-0.md\",\"excerpt\":\"<div class=\\\"hint-container warning\\\">\\n<p class=\\\"hint-container-title\\\">Do not upgrade unless prompted!</p>\\n<p>Please do not upgrade your DSF installation from DSF 0.9.x to DSF 1.x unless prompted to do so (e.g. from the German MII).</p>\\n</div>\\n<p>A direct upgrade from DSF 0.9.x to DSF 1.x is not supported. Instead, please perform the following steps:</p>\"}")
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

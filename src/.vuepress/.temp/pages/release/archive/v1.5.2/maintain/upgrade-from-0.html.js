import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.5.2/maintain/upgrade-from-0.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.5.2/maintain/upgrade-from-0.html\",\"title\":\"Upgrade from DSF 0.9.x\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Upgrade from DSF 0.9.x\",\"icon\":\"update\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.12,\"words\":337},\"filePathRelative\":\"release/archive/v1.5.2/maintain/upgrade-from-0.md\",\"excerpt\":\"<p>A direct upgrade from DSF 0.9.x to DSF 1.x is not supported.</p>\\n<div class=\\\"hint-container caution\\\">\\n<p class=\\\"hint-container-title\\\">Do not use your 0.9.x configuration as starting point</p>\\n<p>There are too many changes between DSF 0.9.x and DSF 1.x to use the old configuration as starting point and just adapt some configuration parameter names.</p>\\n<p><strong>Please</strong> use the new installation manual to perform a new installation and use the old setup only for reference.</p>\\n</div>\"}")
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

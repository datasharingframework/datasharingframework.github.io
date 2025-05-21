import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.3.0/maintain/upgrade-from-1.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.3.0/maintain/upgrade-from-1.html\",\"title\":\"Upgrade from DSF 1.2.0\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Upgrade from DSF 1.2.0\",\"icon\":\"update\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Modify DSF FHIR Server Setup\",\"slug\":\"modify-dsf-fhir-server-setup\",\"link\":\"#modify-dsf-fhir-server-setup\",\"children\":[]},{\"level\":2,\"title\":\"Modify DSF BPE Server Setup\",\"slug\":\"modify-dsf-bpe-server-setup\",\"link\":\"#modify-dsf-bpe-server-setup\",\"children\":[]}],\"readingTime\":{\"minutes\":1.14,\"words\":342},\"filePathRelative\":\"release/archive/v1.3.0/maintain/upgrade-from-1.md\",\"excerpt\":\"<p>Upgrading the DSF from 1.2.0 to 1.3.0 involves modifying the docker-compose.yml files and recreating the containers.</p>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">Upgrade from 0.9.x</p>\\n<p>If you want to migrate from DSF 0.9.x, please follow <a href=\\\"upgrade-from-0\\\">these instructions</a>.</p>\\n</div>\"}")
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

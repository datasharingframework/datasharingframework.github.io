import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/release/archive/v1.5.1/maintain/upgrade-from-1.html.vue"
const data = JSON.parse("{\"path\":\"/release/archive/v1.5.1/maintain/upgrade-from-1.html\",\"title\":\"Upgrade from DSF 1.5.0\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Upgrade from DSF 1.5.0\",\"icon\":\"update\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Modify DSF FHIR Server Setup\",\"slug\":\"modify-dsf-fhir-server-setup\",\"link\":\"#modify-dsf-fhir-server-setup\",\"children\":[]},{\"level\":2,\"title\":\"Modify DSF BPE Server Setup\",\"slug\":\"modify-dsf-bpe-server-setup\",\"link\":\"#modify-dsf-bpe-server-setup\",\"children\":[]}],\"readingTime\":{\"minutes\":1.07,\"words\":322},\"filePathRelative\":\"release/archive/v1.5.1/maintain/upgrade-from-1.md\",\"excerpt\":\"<p>Upgrading the DSF from 1.5.0 to 1.5.1 involves modifying the docker-compose.yml files and recreating the containers.</p>\\n<div class=\\\"hint-container warning\\\">\\n<p class=\\\"hint-container-title\\\">Update to DSF 1.2.0 first</p>\\n<p>When upgrading from 1.0.0 or 1.1.0 it is important to migrate to <a href=\\\"/v1.2.0/maintain/upgrade-from-1\\\">DSF 1.2.0 first</a>.</p>\\n</div>\"}")
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

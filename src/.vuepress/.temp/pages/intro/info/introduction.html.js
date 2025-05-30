import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/info/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/intro/info/introduction.html\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Introduction\",\"icon\":\"customize\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.05,\"words\":316},\"filePathRelative\":\"intro/info/introduction.md\",\"excerpt\":\"<p>The <a href=\\\"https://www.bmbf.de/bmbf/en/home/home_node.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">German Federal Ministry of Education and Research</a> is funding the <a href=\\\"https://www.medizininformatik-initiative.de/en/start\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Medical Informatics Initiative</a> with the aim of making routine data available digitally, reliably and quickly for medical research. University hospitals have founded consortia with partners such as research institutions and other companies to create the conditions for research and patient care to share their data across sites. Data Integration Centers (DIC) have been established at the university hospitals and partner institutions to create the technical and organizational conditions for data exchange between patient care and medical research.</p>\"}")
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

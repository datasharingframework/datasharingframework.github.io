import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/for-you/index.html.vue"
const data = JSON.parse("{\"path\":\"/for-you/\",\"title\":\"DSF for your project\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"DSF for your project\",\"icon\":\"creative\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview of DSF\",\"slug\":\"overview-of-dsf\",\"link\":\"#overview-of-dsf\",\"children\":[]},{\"level\":2,\"title\":\"Key features and benefits\",\"slug\":\"key-features-and-benefits\",\"link\":\"#key-features-and-benefits\",\"children\":[{\"level\":3,\"title\":\"Distributed data sharing processes\",\"slug\":\"distributed-data-sharing-processes\",\"link\":\"#distributed-data-sharing-processes\",\"children\":[]},{\"level\":3,\"title\":\"Flexibility with data standards\",\"slug\":\"flexibility-with-data-standards\",\"link\":\"#flexibility-with-data-standards\",\"children\":[]},{\"level\":3,\"title\":\"Security and access control\",\"slug\":\"security-and-access-control\",\"link\":\"#security-and-access-control\",\"children\":[]},{\"level\":3,\"title\":\"Deployment in clinical environments\",\"slug\":\"deployment-in-clinical-environments\",\"link\":\"#deployment-in-clinical-environments\",\"children\":[]}]},{\"level\":2,\"title\":\"Getting started with the DSF\",\"slug\":\"getting-started-with-the-dsf\",\"link\":\"#getting-started-with-the-dsf\",\"children\":[]}],\"readingTime\":{\"minutes\":1.45,\"words\":435},\"filePathRelative\":\"for-you/index.md\",\"excerpt\":\"<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">Summary</p>\\n<ul>\\n<li>\\n<p><strong>Use case agnostic middleware</strong>: DSF is adaptable to any distributed process, leveraging BPMN 2.0 and FHIR R4 for secure, efficient data sharing across various biomedical research scenarios.</p>\\n</li>\\n<li>\\n<p><strong>Security</strong>: DSF prioritizes security through stringent authentication and authorization protocols, ensuring data is accessed and shared only by authorized organizations to maintain data confidentiality and integrity.</p>\\n</li>\\n<li>\\n<p><strong>Proven in clinical research</strong>: Deployed in German university hospitals, DSF's effectiveness and reliability are validated in real-world settings.</p>\\n</li>\\n<li>\\n<p><strong>Implementation guidance</strong>: DSF offers resources on how to implement new process plugins.</p>\\n</li>\\n</ul>\\n</div>\"}")
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

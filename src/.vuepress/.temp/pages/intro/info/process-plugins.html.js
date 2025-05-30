import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/info/process-plugins.html.vue"
const data = JSON.parse("{\"path\":\"/intro/info/process-plugins.html\",\"title\":\"Process Plugins\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Process Plugins\",\"icon\":\"plugin\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"BPMN: Example\",\"slug\":\"bpmn-example\",\"link\":\"#bpmn-example\",\"children\":[]},{\"level\":2,\"title\":\"Ping Pong Process\",\"slug\":\"ping-pong-process\",\"link\":\"#ping-pong-process\",\"children\":[{\"level\":3,\"title\":\"Autostart Ping Process\",\"slug\":\"autostart-ping-process\",\"link\":\"#autostart-ping-process\",\"children\":[]},{\"level\":3,\"title\":\"Ping Process\",\"slug\":\"ping-process\",\"link\":\"#ping-process\",\"children\":[]},{\"level\":3,\"title\":\"Pong Process\",\"slug\":\"pong-process\",\"link\":\"#pong-process\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.8,\"words\":540},\"filePathRelative\":\"intro/info/process-plugins.md\",\"excerpt\":\"<h2>Overview</h2>\\n<p>It is important to understand that the DSF is <em>only</em> the silent helper in the background: a middleware. The DSF is use case agnostic. This means that process plugins make it possible to execute almost any use case you can imagine with the DSF. Process plugins provide individual functionality. For example, it is possible to use the Ping Pong process to test bilateral communication or the <a href=\\\"/intro/use-cases/feasibility\\\">Feasibility process</a> to perform feasibility queries for research.<br>\\nHowever, it is possible to deploy several process plugins together, even the same process plugin in different versions. A process plugin is basically an archive of BPMN 2.0 models, FHIR R4 resources and Java code. This process plugin is deployed as a Jar file on the BPE.</p>\"}")
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

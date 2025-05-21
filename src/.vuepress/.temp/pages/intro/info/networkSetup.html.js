import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/info/networkSetup.html.vue"
const data = JSON.parse("{\"path\":\"/intro/info/networkSetup.html\",\"title\":\"Network Setup and General Architecture\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Network Setup and General Architecture\",\"icon\":\"customize\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Additional Reverse Proxy in external DMZ\",\"slug\":\"additional-reverse-proxy-in-external-dmz\",\"link\":\"#additional-reverse-proxy-in-external-dmz\",\"children\":[]}],\"readingTime\":{\"minutes\":1.62,\"words\":486},\"filePathRelative\":\"intro/info/networkSetup.md\",\"excerpt\":\"<p>The Data Sharing Framework consists of two components: A FHIR Endpoint Server used to except Task resources and provide resources for download by other organizations and a Business Process Engine Server run internal and not accessible by other organization to execute and coordinate processes.</p>\"}")
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

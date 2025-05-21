import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/intro/info/allowList.html.vue"
const data = JSON.parse("{\"path\":\"/intro/info/allowList.html\",\"title\":\"Allow Lists\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Allow Lists\",\"icon\":\"share\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Goal\",\"slug\":\"goal\",\"link\":\"#goal\",\"children\":[]},{\"level\":2,\"title\":\"Allow List Managment\",\"slug\":\"allow-list-managment\",\"link\":\"#allow-list-managment\",\"children\":[]}],\"readingTime\":{\"minutes\":0.65,\"words\":196},\"filePathRelative\":\"intro/info/allowList.md\",\"excerpt\":\"<h2>Goal</h2>\\n<p>The main objective is to allow only authorized organizations to do what \\\"we\\\" allow them to do (e.g. query data).<br>\\nFirst, we need a list of organizations that we trust. Secondly, we need a way to ensure that the other party is a member of the parent organization. Thirdly, a list of actions we want to allow the organization to perform is needed. An organization can have different roles in different use cases.</p>\"}")
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

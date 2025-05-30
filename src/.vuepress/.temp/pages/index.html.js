import comp from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Data Sharing Framework\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"Data Sharing Framework\",\"heroImage\":\"/photos/home/logo.svg\",\"heroText\":\"Data Sharing Framework\",\"tagline\":\"A performant, secure, and innovative framework that enables biomedical researchers to extract value from routine data.\",\"features\":[{\"title\":\"Introduction\",\"icon\":\"info\",\"details\":\"Introduction to the DSF and informations about Use-Cases/Projects.\",\"link\":\"/intro/\"},{\"title\":\"Get Started\",\"icon\":\"launch\",\"details\":\"Get technical insights and install the DSF | Develop Process Plugins.\",\"link\":\"/stable/\"},{\"title\":\"About Us\",\"icon\":\"creative\",\"details\":\"Contact, partners, the team behind the DSF and more... Join our community!\",\"link\":\"/about/learnmore/\"},{\"title\":\"GitHub\",\"icon\":\"github\",\"details\":\"Take a look at the open-source reference implementation.\",\"link\":\"https://github.com/datasharingframework/dsf\"}],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Rolf Hansen Memorial Award 2023 goes to Hauke Hund\",\"slug\":\"rolf-hansen-memorial-award-2023-goes-to-hauke-hund\",\"link\":\"#rolf-hansen-memorial-award-2023-goes-to-hauke-hund\",\"children\":[]}],\"readingTime\":{\"minutes\":1.46,\"words\":439},\"filePathRelative\":\"index.md\",\"excerpt\":\"<hr>\\n<h1>Data Sharing Framework</h1>\\n<p>The <strong>Data Sharing Framework (DSF)</strong> is a concept for a secure middleware to distribute data sharing processes based on the BPMN 2.0 and FHIR R4 standards. The DSF is used to support biomedical research with routine data, aiming to extract, merge, pseudonymize and provide data stored in multiple distributed organizations. Every participating site runs a FHIR endpoint accessible by other sites and a business process engine in the local secured network. The process engines execute BPMN processes in order to coordinate local and remote steps necessary to enable cross-site data sharing or feasibility analyses. This includes access to local data repositories, use-and-access-committee decision support, consent filtering, and privacy preserving record-linkage and pseudonymization. The aim is to enable secure and syntactically-, semantically- and process-interoperable data exchange across organizational boundaries. The secure communication infrastructure is funded by the German Federal Ministry of Education and Research within the Medical Informatics structure as <em><a href=\\\"https://www.gesundheitsforschung-bmbf.de/de/dsf-medizininformatik-struktur-data-sharing-framework-community-16133.php\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">DSF Community</a></em>.</p>\"}")
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

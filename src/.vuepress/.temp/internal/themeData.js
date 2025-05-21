export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"DSF-Team\",\"url\":\"/about/team.html\"},\"logo\":\"/photos/home/logo-small.svg\",\"darkmode\":\"toggle\",\"contributors\":false,\"footer\":\"<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a> • <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a>\",\"copyright\":false,\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"Home\",\"icon\":\"home\",\"link\":\"/\"},{\"text\":\"Introduction\",\"link\":\"/introduction/\"},{\"text\":\"Use-Cases\",\"link\":\"/use-cases/\"},{\"text\":\"Release\",\"link\":\"/release/\"},{\"text\":\"Reference\",\"link\":\"/reference/\"},{\"text\":\"Research\",\"link\":\"/research/\"},{\"text\":\"About us\",\"link\":\"/about/\"},{\"text\":\"Community\",\"link\":\"/community/\"},{\"text\":\"Security\",\"link\":\"/security/\"},{\"text\":\"\",\"icon\":\"github\",\"link\":\"https://github.com/datasharingframework/dsf\"}],\"sidebar\":{\"/\":[],\"/hackathon\":[]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

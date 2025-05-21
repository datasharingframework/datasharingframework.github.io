import { defineClientConfig } from "vuepress/client";
import CodeTabs from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Playground from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Playground", Playground);
  },
  setup: () => {
useHintContainers();
  }
});

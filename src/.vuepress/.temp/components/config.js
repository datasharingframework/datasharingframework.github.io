import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "D:/Studium AI/DSF/Repo/datasharingframework.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("/assets/font/font.css");
`);
  },
  rootComponents: [

  ],
});

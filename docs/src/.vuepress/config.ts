import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  host: "127.0.0.1",
  base: "/",

  head: [['link', { rel: 'icon', href: '/photos/home/logo-small.svg' }]],
  
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),


  /*locales: {
    "/": {
      lang: "en-US",
      title: "",
      description: "",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description: "",
    },
  },*/
  plugins: [ ],

  // Enable it with pwa
  shouldPrefetch: false,
  theme
});

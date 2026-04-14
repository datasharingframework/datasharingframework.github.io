import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { releaseVarsPlugin, replaceReleaseTokens } from "./markdown/releaseVarsPlugin.js";
import { getReleaseFromPath } from "./data/releases.js";


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
  plugins: [
    {
      name: 'release-vars',
      extendsMarkdown: (md) => {
        md.use(releaseVarsPlugin);
      },
      extendsPage: (page) => {
        const lookup = page.filePathRelative ? '/' + page.filePathRelative : page.path;
        const release = getReleaseFromPath(lookup);
        if (!release) return;
        const walk = (obj: Record<string, unknown> | undefined) => {
          if (!obj) return;
          for (const key of Object.keys(obj)) {
            const v = obj[key];
            if (typeof v === 'string') {
              obj[key] = replaceReleaseTokens(v, release);
            }
          }
        };
        walk(page.frontmatter as Record<string, unknown>);
        walk(page.routeMeta as Record<string, unknown>);
        walk(page.data as unknown as Record<string, unknown>);
        if (typeof page.title === 'string') {
          page.title = replaceReleaseTokens(page.title, release);
        }
      },
    },
   ],

  // Enable it with pwa
  shouldPrefetch: false,
  theme
});

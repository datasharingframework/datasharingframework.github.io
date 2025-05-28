import { slimsearchPlugin } from "@vuepress/plugin-slimsearch";
import { hopeTheme } from "vuepress-theme-hope";
import { generate_v1_latest_sidebar, generate_v1_gt_eq_1_7_0_sidebar, generate_v1_gt_eq_1_5_0_sidebar, generate_v1_gt_eq_1_0_0_sidebar } from "./sidebar/operations-v1";

export default hopeTheme({
  author: {
    name: "DSF-Team",
    url: "/community/team.html", 
  },


  logo: "/photos/home/logo-small.svg",
  darkmode: "toggle",
  contributors: false,

  
  navbar: [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },  
    {
        text: "Explore",
        icon: "info",
        prefix: "",
        children: ["/explore/concepts/introduction", "/explore/use-cases/", "/explore/publications/", "/security/"],
    },
    {
      text: "Operations",
      icon: "launch",
      prefix: "/operations/",
      children: [ "get-started.md", "process-plugin-deployment.md", "old-versions.md"],
    },
    {
      text: "Process Development",
      icon: "plugin",
      prefix: "/process-development/",
      children: [
        {
          text: "API v1",
          children: [
            "api-v1/readme.md",
            "api-v1/get-started.md"
          ]
        },
        {
          text: "API v2",
          children: [
            "api-v2/readme.md",
            "api-v2/get-started.md"
          ]
        }
      ]
      
    }/*,
     {
      text: "DSF Development",
      icon: "info",
      link: "/dsf-development/",
    }*/,
    {
      text: "Community",
      icon: "creative",
      prefix: "/community/",  
      children: [
        "team",
        "communication",
        "ecosystem",
        "contribute/",
        "events/",
        "consultation-hours"
      ],
    },
    {
      text: "",
      icon: "github",
      link: "https://github.com/datasharingframework/dsf",
    },
  ],
 
 
  sidebar: {
    "/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "News",
        icon: "news",
        link: "tag/news/"
      },

      {
        text: "Concepts",
        icon: "info",
        prefix: "explore/",
        link: "explore/",
        children: ["concepts/introduction.md", "concepts/basics", "concepts/architecture", "concepts/security", "concepts/allow-list", "concepts/process-plugins"], 
      },
      {
        text: "Security",
        icon: "safe",
        link: "/security/",
      },
      {
        text: "Use-Cases",
        icon: "any",
        prefix: "explore/use-cases/",
        link: "explore/use-cases/",
        children: ["feasibility", "num"], 
      },
      {
        text: "Publications",
        icon: "blog",
        prefix: "explore/publications/",
        link: "/explore/publications/",
        children: ["publications", "awards"], 
      },
    ],
    "/hackathon": [],
    "/spring-school": [],
    "/news": [],
    "/operations/v1/latest/":generate_v1_latest_sidebar(),
    "/operations/v1/v1.7.1/": generate_v1_latest_sidebar(),
    "/operations/v1/v1.7.0/": generate_v1_gt_eq_1_7_0_sidebar(),
    "/operations/v1/v1.6.0/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1/v1.5.2/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1/v1.5.1/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1/v1.5.0/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1/v1.4.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1/v1.3.2/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1/v1.3.1/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1/v1.3.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1/v1.2.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1/v1.1.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1/v1.0.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/process-development": [
      {
        text: "API v1",
        icon: "",
        prefix: "api-v1/",
        link: "api-v1/",
        children: [ "get-started","concept","create",  "publishing/publish-on-dsfhub", "tooling/", "tutorials/",], 
      },
      {
        text: "API v2",
        icon: "",
        prefix: "api-v2/",
        link: "api-v2/",
        children: [ "get-started","concept","implementation", "migration",  "create", "best-practices","testing", "publishing/publish-on-dsfhub", "tooling/", "tutorials/",], 
      },    
    ],
    "/intro/use-cases/internal-mii-data-sharing.html": []
  },

  footer: "<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a> • <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a> • <a href='/security/'>Security</a>"  ,
  copyright: false,
  displayFooter: true,


  plugins: {

    icon: {
      prefix: "iconfont icon-",
      assets: "/assets/font/font.css",
    },

    blog: {
      filter: ({ frontmatter }) => frontmatter.type === "news",
    },


    slimsearch: {
      indexContent: true,
    },
    photoSwipe: false,
    components: {
      components: [],
    },
  },

  markdown: {
    imgLazyload: true,
    imgMark: true,
    figure: true,
    imgSize: true,
    math: {

    },
    tabs: false,
    codeTabs: true,
      linksCheck: {
        dev: true,
        build: "error"
      },
      align: true,
      attrs: true,
      chartjs: false,
      demo: false,
      echarts: false,
      flowchart: false,
      gfm: true,
      include: true,
      mark: true,
      mermaid: false,
      playground: {
        presets: [],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: false,
      vPre: false,
      vuePlayground: false
  }
});

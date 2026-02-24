import { slimsearchPlugin } from "@vuepress/plugin-slimsearch";
import { hopeTheme } from "vuepress-theme-hope";
import { generate_v1_latest_sidebar, generate_v1_gt_eq_1_7_0_sidebar, generate_v1_gt_eq_1_5_0_sidebar, generate_v1_gt_eq_1_0_0_sidebar } from "./sidebar/operations-v1";
import { generate_v2_0_0_sidebar, generate_v2_latest_sidebar } from "./sidebar/operations-v2";

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
      link: "/explore/",
      prefix: "/explore/",
      children: ["concepts/introduction", "use-cases/", "publications", "/security/", "/news/"],
    },
    {
      text: "Operations",
      icon: "launch",
      prefix: "/operations/",
      children: [
        {
          text: "Operations",
          icon: "launch",
          prefix: "/operations/",
          children: [ {
            text: "Current Version - 2.0.2",
            link: "get-started.md",
            icon: "launch"
          }, "old-versions.md"],
        },
      ],
    },
    {
      text: "Process Development",
      icon: "plugin",
      prefix: "/process-development/",
      children: ["api-v1/", "api-v2/", "linter-tool/linter-tool"],
    },
    {
      text: "DSF Development",
      icon: "info",
      prefix: "/dsf-development/",
      children: ["v2/fhir-ig", "v2/maven"],
    },
    {
      text: "Community",
      icon: "creative",
      prefix: "/community/",
      children: [
        "team",
        "communication",
        "ecosystem",
        "contribute/",
        "consultation-hours",
        "events/",
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
        link: "news/"
      },
      {
        text: "Concepts",
        icon: "info",
        prefix: "explore/",
        link: "explore/",
        children: ["concepts/introduction.md", "concepts/basics", "concepts/architecture", "concepts/security", "concepts/allow-list", "concepts/process-plugins"],
      },
      {
        text: "Security Disclosure Policy",
        icon: "safe",
        link: "/security/",
      },
      {
        text: "Use-Cases",
        icon: "any",
        prefix: "explore/use-cases/",
        link: "explore/use-cases/",
      },
      {
        text: "Publications",
        icon: "blog",
        link: "explore/publications",
      },
      {
        text: "Awards",
        icon: "creative",
        link: "tag/awards/",
      },

    ],
    "/hackathon": [],
    "/spring-school": [],
    "/news": [],
    "/operations/old-versions": [],
    "/operations/latest/": generate_v2_latest_sidebar(),
    "/operations/next/": [],
    "/operations/v2.0.2/": generate_v2_latest_sidebar(),
    "/operations/v2.0.1/": generate_v2_0_0_sidebar(),
    "/operations/v2.0.0/": generate_v2_0_0_sidebar(),
    "/operations/v1.9.0/": generate_v1_latest_sidebar(),
    "/operations/v1.8.0/": generate_v1_gt_eq_1_7_0_sidebar(),
    "/operations/v1.7.1/": generate_v1_gt_eq_1_7_0_sidebar(),
    "/operations/v1.7.0/": generate_v1_gt_eq_1_7_0_sidebar(),
    "/operations/v1.6.0/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1.5.2/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1.5.1/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1.5.0/": generate_v1_gt_eq_1_5_0_sidebar(),
    "/operations/v1.4.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1.3.2/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1.3.1/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1.3.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1.2.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1.1.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/operations/v1.0.0/": generate_v1_gt_eq_1_0_0_sidebar(),
    "/process-development": [
      {
        text: "API v1",
        icon: "",
        prefix: "api-v1/",
        link: "api-v1/",
        children: ["get-started", {
          text: "Concepts",
          icon: "info",
          collapsible: true,
          children: [
            {
              text: "BPMN",
              prefix: "bpmn/",
              collapsible: true,
              children: [
                "conditions",
                "gateways",
                "messaging",
                "sequence-flow",
                "service-tasks",
                "timer-intermediate-catching-events",
              ],
            },
            {
              text: "FHIR",
              prefix: "fhir/",
              collapsible: true,
              children: [
                "activitydefinition",
                "codesystem",
                "task",
                "valueset",
              ],
            },
            {
              text: "DSF",
              prefix: "dsf/",
              collapsible: true,
              children: [
                "bpmn-process-execution",
                "bpmn-process-variables",
                "draft-task-resources",
                "environment-variables",
                "message-correlation",
                "message-delegates",
                "organization-identifiers",
                "process-plugin-api",
                "process-plugin-definition",
                "read-access-tag",
                "requester-and-recipient",
                "service-delegates",
                "spring-framework-integration",
                "versions-placeholders-urls",
              ],
            },
            {
              text: "Guides",
              prefix: "guides/",
              collapsible: true,
              children: [
                "index",
                "accessing-bpmn-process-variables",
                "accessing-task-resources-during-execution",
                "adding-task-input-parameters-to-task-profiles",
                "configuring-read-access-tags",
                "creating-activity-definitions",
                "creating-codesystems-for-dsf-processes",
                "creating-task-resources-based-on-a-definition",
                "creating-valuesets-for-dsf-processes",
                "managing-mutiple-incoming-messages-and-missing-messages",
                "setting-targets-for-message-events",
                "starting-a-process-via-task-resources",
                "user-tasks-in-the-dsf",
              ],
            },
          ],
        }, "create", "publishing/publish-on-dsfhub", "tutorials/", "javadoc", ]
      },
      {
        text: "API v2",
        icon: "",
        prefix: "api-v2/",
        link: "api-v2/",
        children: ["get-started", {
          text: "Concepts",
          icon: "info",
          collapsible: true,
          children: [
            {
              text: "BPMN",
              prefix: "bpmn/",
              collapsible: true,
              children: [
                "conditions",
                "gateways",
                "messaging",
                "sequence-flow",
                "service-tasks",
                "timer-intermediate-catching-events",
              ],
            },
            {
              text: "FHIR",
              prefix: "fhir/",
              collapsible: true,
              children: [
                "activitydefinition",
                "codesystem",
                "task",
                "valueset",
              ],
            },
            {
              text: "DSF",
              prefix: "dsf/",
              collapsible: true,
              children: [
                "activities",
                "bpmn-process-execution",
                "bpmn-process-variables",
                "draft-task-resources",
                "environment-variables",
                "message-activities",
                "message-correlation",
                "messaging",
                "organization-identifiers",
                "process-plugin-api",
                "process-plugin-definition",
                "read-access-tag",
                "requester-and-recipient",
                "spring-framework-integration",
                "target-and-targets",
                "versions-placeholders-urls",
              ],
            },
            {
              text: "Guides",
              prefix: "guides/",
              collapsible: true,
              children: [
                "index",
                "accessing-bpmn-process-variables",
                "accessing-task-resources-during-execution",
                "adding-task-input-parameters-to-task-profiles",
                "configuring-read-access-tags",
                "creating-activity-definitions",
                "creating-codesystems-for-dsf-processes",
                "creating-task-resources-based-on-a-definition",
                "creating-valuesets-for-dsf-processes",
                "managing-mutiple-incoming-messages-and-missing-messages",
                "setting-targets-for-message-events",
                "starting-a-process-via-task-resources",
                "user-tasks-in-the-dsf",
              ],
            },
          ],
        }, "implementation", "migration", "create", "best-practices", "testing", "publishing/publish-on-dsfhub", "tutorials/", "javadoc",]
      },
      {
        text: "Process Plugin Dev Tools",
        icon: "info",
        prefix: "linter-tool/",
        children: [
                  "linter-tool", "validation","phases", "development", "troubleshooting", "changelog"],
          }
    ],
    "/dsf-development": [
      {
        text: "DSF 2",
        icon: "",
        prefix: "v2/",
        link: "v2/",
        children: ["fhir-ig", "maven"],
      },
    ],
    "/community": [
      {
        text: "Community",
        icon: "",
        children: ["team", "communication", "ecosystem", "contribute/", "consultation-hours", "events/",]
      }
    ],
    "/posts": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "News",
        icon: "news",
        link: "/tag/news/",
      },
    ],
    "/intro/use-cases/internal-mii-data-sharing.html": []
  },

  footer: "<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a> • <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a> • <a href='/security/'>Security</a>",
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
    component: true,
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
    vuePlayground: false,

  },


});

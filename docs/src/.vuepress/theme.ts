import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  author: {
    name: "DSF-Team",
    url: "/about/learnmore/team.html", 
  },

  iconAssets: "/assets/font/font.css",
  iconPrefix: "iconfont icon-",


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
        text: "Docs",
        icon: "info",
        prefix: "",
        children: [
          {
            text: "Introduction",
            icon: "info",
            children: ["/intro/info/introduction", "/intro/use-cases/", "/intro/publications", "/intro/tutorials/"],
          },
          {
            text: "Security",
            icon: "safe",
            link: "/security/",
          },
          {
            text: "Developer Documentation",
            icon: "creative",
            link: "/develop/"
          }
        ]
    },
    {
        text: "Get Started",
        icon: "launch",
        prefix: "/stable/",
        children: [
          {
            text: "Guideline v1.5.1 (stable)",
            icon: "info",
            children: ["index", "maintain/install", "maintain/upgrade-from-0", "maintain/allowList-mgm", "maintain/install-plugins", "develop/create", "contribute/"],
          }
        ]
    },
    {
      text: "About",
      icon: "creative",
      prefix: "/about/",  
      children: [
        {
          text: "Learn More",
          icon: "creative",
          prefix: "learnmore/", 
          children: ["contact", "team", "partners", "public"],
        },
      ],
    },
    {
      text: "Versions",
      icon: "note",
      // children:["/v1/"],
      children: [{ text: "v1.5.1 (stable)", link: "/stable/" }, { text: "v1.5.0", link: "/v1.5.0/" }, { text: "v1.4.0", link: "/v1.4.0/" }, { text: "v1.3.2", link: "/v1.3.2/" }, { text: "v1.3.1", link: "/v1.3.1/" }, { text: "v1.3.0", link: "/v1.3.0/" }, { text: "v1.2.0", link: "/v1.2.0/" }, { text: "v1.1.0", link: "/v1.1.0/" }, { text: "v1.0.0", link: "/v1.0.0/" }, { text: "v0.9.3 (oldstable)", link: "/oldstable/"}],
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
        text: "Docs",
        icon: "info",
        prefix: "intro/",
        link: "intro/",
        children: ["info/introduction.md", "info/basics", "info/architecture", "info/security", "info/allowList", "info/process-plugins", ""], 
      },
      {
        text: "Security",
        icon: "safe",
        link: "/security/",
      },
      {
        text: "Use-Cases",
        icon: "any",
        prefix: "intro/use-cases/",
        link: "intro/use-cases/",
        children: ["feasibility", "num"], 
      },
      {
        text: "Publications",
        icon: "blog",
        link: "/intro/publications",
      },
      {
        text: "Tutorials",
        icon: "edit",
        link: "/intro/tutorials/",
      }
    ],
    "/hackathon": [],
    "/stable/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      "",
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Reverse Proxy",
          icon: "module",
          prefix: "bpe-reverse-proxy/",
          link: "bpe-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        },
        {
          text: "Install Plugins",
          icon: "plugin",
          link: "install-plugins"
      }
      ],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
      {
        text: "Contribute",
        icon: "info",
        link: "contribute/",
        prefix: "contribute/",
        children: [
        {
          text: "Code",
          link: "code",
          icon: "code"
        },
        {
          text: "Documentation",
          link: "documentation",
          icon: "info"
        }
      ]
      },
    ],
    "/v1.5.1/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      "",
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Reverse Proxy",
          icon: "module",
          prefix: "bpe-reverse-proxy/",
          link: "bpe-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        },
        {
          text: "Install Plugins",
          icon: "plugin",
          link: "install-plugins"
      }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.5.0/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Reverse Proxy",
          icon: "module",
          prefix: "bpe-reverse-proxy/",
          link: "bpe-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        },
        {
          text: "Install Plugins",
          icon: "plugin",
          link: "install-plugins"
      }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.4.0/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        },
        {
          text: "Install Plugins",
          icon: "plugin",
          link: "install-plugins"
      }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.3.2/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        },
        {
          text: "Install Plugins",
          icon: "plugin",
          link: "install-plugins"
      }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.3.1/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        },
        {
          text: "Install Plugins",
          icon: "plugin",
          link: "install-plugins"
      }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.3.0/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        },
        {
          text: "Install Plugins",
          icon: "plugin",
          link: "install-plugins"
      }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.2.0/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.1.0/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
          text: "FHIR Reverse Proxy",
          icon: "module",
          prefix: "fhir-reverse-proxy/",
          link: "fhir-reverse-proxy/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }, {
          text: "FHIR Server",
          icon: "module",
          prefix: "fhir/",
          link: "fhir/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}, {
  			icon: "config",
  			text: "Access Control",
  			link: "access-control"
  		}, {
  			icon: "config",
  			text: "OpenID Connect",
  			link: "oidc"
  			}]
        }, {
          text: "BPE Server",
          icon: "module",
          prefix: "bpe/",
          link: "bpe/",
          children: [{
  			icon: "config", 
  			text: "Configuration",
  			link: "configuration"
  		}]
        }],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/v1.0.0/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },
      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-0", "allowList-mgm", {
          text: "Configuration parameters",
          icon: "config",
          prefix: "configuration/",
          link: "configuration/",
          children: ["common", "fhir", "bpe", "reverseproxy"]
    
        }
       ],
      },
      {
        text: "Develop process plugins",
        icon: "plugin",
        prefix: "develop/",
        link: "develop/",
        children: ["create", "upgrade-from-0" ],
      },
    ],
    "/about/":  [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "About",
        icon: "creative",
        prefix: "learnmore/",
        link: "learnmore/",
        children: ["contact", "team", "partners", "public"], 
      },
    ],
    "/oldstable/":  [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Version 0.9.x",
        icon: "guide",
        children: ["introduction", "generalinformation/", "code/", "build/", "releases/", "tutorial/"], 
      },
    ],
    "/develop/": [
      {
        text: "Developer Documentation",
        icon: "creative",
        link: "/develop/",
        children: [{
            text: "BPMN",
            icon: "creative",
            prefix: "bpmn/",
            link: "bpmn/",
            children: ["conditions.md", "gateways.md", "messaging.md", "sequence-flow.md", "service-tasks.md", "timer-intermediate-catching-events.md"], 
          },
          {
            text: "FHIR",
            icon: "creative",
            prefix: "fhir/",
            link: "fhir/",
            children: ["activitydefinition.md", "codesystem.md", "task.md", "valueset.md"], 
          },
          {
            text: "DSF",
            icon: "creative",
            prefix: "dsf/",
            link: "dsf/",
            children: ["bpmn-process-execution.md", "bpmn-process-variables.md", "draft-task-resources.md", "environment-variables.md", "message-correlation.md", "message-delegates.md", "organization-identifiers.md", "process-plugin-api.md", "process-plugin-definition.md", "read-access-tag.md", "requester-and-recipient.md", "service-delegates.md", "spring-framework-integration.md", "versions-placeholders-urls.md"], 
        },
        {
          text: "Guides",
          icon: "creative",
          prefix: "guides/",
          link: "guides/",
          children: ["accessing-bpmn-process-variables.md", "accessing-task-resources-during-execution.md", "adding-task-input-parameters-to-task-profiles.md", "configuring-read-access-tags.md", "creating-activity-definitions.md", "creating-codesystems-for-dsf-processes.md", "creating-task-resources-based-on-a-definition.md", "creating-valuesets-for-dsf-processes.md", "managing-mutiple-incoming-messages-and-missing-messages.md", "setting-targets-for-message-events.md", "starting-a-process-via-task-resources.md"]
        }]
      }
    ],
  },

  footer: "<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a> • <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a>",
  copyright: false,
  displayFooter: true,


  plugins: {
    linksCheck: {
      dev: true,
      build: "error"
    },
    searchPro: {
      indexContent: true,
    },
    photoSwipe: false,
    components: {
      // components you want
      components: [
       /* "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "StackBlitz",
        "VideoPlayer",
        "YouTube",*/
      ],
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      imgMark: true,
      include: true,
      katex: false,
      mark: true,
      mathjax: false,
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
      tabs: false,
      tasklist: false,
      vPre: false,
      vuePlayground: false
    }
  },
});

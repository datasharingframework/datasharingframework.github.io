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
        text: "Explore",
        icon: "info",
        prefix: "",
        children: [
          {
            text: "Explore",
            icon: "info",
            children: ["/explore/concepts/introduction", "/explore/use-cases/", "/explore/publications/"],
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
            text: "Guideline v1.7.1 (stable)",
            icon: "info",
            children: ["index", "maintain/install", "maintain/upgrade-from-0", "maintain/allowList-mgm", "maintain/install-plugins", "develop/create", "contribute/"],
          }
        ]
    },
    {
      text: "Process Development",
      icon: "process",
      prefix: "/process-development/",
      children: [
          {
            text: "Process Developments",
            icon: "docs",
            children: ["dsf-api-1/description", "dsf-api-2/README.md", "how-to/start-project", "process-plugin", "publishing", "tooling"],
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
          children: ["contact", "team", "partners", "public", "faq", "projectlist", "speakinghours"], 
        },
        { 
          text: "Community",
          icon: "creative",
          prefix: "community/", 
          children: ["community", "contribute"],
        },
      ],
    },
    {
      text: "Versions",
      icon: "note",
      // children:["/v1/"],
      children: [{ text: "v1.7.1 (stable)", link: "/stable/" }, { text: "v1.7.0", link: "/v1.7.0/" }, { text: "v1.6.0", link: "/v1.6.0/" }, { text: "v1.5.2", link: "/v1.5.2/" }, { text: "v1.5.1", link: "/v1.5.1/" }, { text: "v1.5.0", link: "/v1.5.0/" }, { text: "v1.4.0", link: "/v1.4.0/" }, { text: "v1.3.2", link: "/v1.3.2/" }, { text: "v1.3.1", link: "/v1.3.1/" }, { text: "v1.3.0", link: "/v1.3.0/" }, { text: "v1.2.0", link: "/v1.2.0/" }, { text: "v1.1.0", link: "/v1.1.0/" }, { text: "v1.0.0", link: "/v1.0.0/" }, { text: "v0.9.3 (archived)", link: "/oldstable/"}],
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
        link: "tag/blog/"
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
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", "root-certificates", "passwords-secrets", {
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
    "/v1.7.1/": [
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
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", "root-certificates", "passwords-secrets", {
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
    "/v1.7.0/": [
      {
        text: "Home",
        icon: "home",
        link: "/",
      },
      {
        text: "Current version",
        icon: "update",
        link: "/stable/",
      },      {
        text: "Maintain a DSF instance",
        icon: "tool",
        prefix: "maintain/",
        link: "maintain/",
        children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", "root-certificates", "passwords-secrets", {
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
    "/v1.6.0/": [
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
    "/v1.5.2/": [
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
    "/v1.5.1/": [
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
        text: "News",
        icon: "news",
        link: "/news/"
      },
      {
        text: "About",
        icon: "creative",
        prefix: "learnmore/",
        link: "learnmore/",
        children: ["contact", "team", "partners", "public", "faq", "projectlist", "speakinghours"], 
      },
      {
        text: "DSF-Community",
        icon: "group",
        prefix: "community/",
        link: "community/",
        children: ["community", "contribute", "code", "documentation"], 
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
    "/intro/use-cases/internal-mii-data-sharing.html": []
  },

  footer: "<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a> • <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a> • <a href='/security/'>Security</a>"  ,
  copyright: false,
  displayFooter: true,


  plugins: {
    blog: {
      filter: ({ frontmatter }) => frontmatter.type === "news",
    },
    
    markdownImage: {
      figure: true,
      lazyload: true,
      mark: true,
      size: true,
    },
    markdownMath: {
    },
	markdownTab: {
      codeTabs: true,
      tabs: false,
    },
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
  },
});

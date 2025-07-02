export function generate_v1_latest_sidebar() {
    return [
      
      {
        text: "Get Started",
        icon: "tool",
        link: "./",
      },
      "release-notes", "install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", "root-certificates", "passwords-secrets", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        children: [
          {
            icon: "config",
            text: "Configuration",
            link: "fhir-reverse-proxy/configuration",
          }
        ]},
        {
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
          children: [
            {
              icon: "config",
              text: "Configuration",
              link: "bpe-reverse-proxy/configuration",
            }
          ]
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
      }]
}


export function generate_v1_gt_eq_1_7_0_sidebar() {
    return [
      
      {
        text: "Get Started",
        icon: "tool",
        link: "./"
        
      },
      "release-notes", "install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", "root-certificates", "passwords-secrets", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        children: [
          {
            icon: "config",
            text: "Configuration",
            link: "fhir-reverse-proxy/configuration",
          }
        ]},
        {
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
          children: [
            {
              icon: "config",
              text: "Configuration",
              link: "bpe-reverse-proxy/configuration",
            }
          ]
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
      }]
}

export function generate_v1_gt_eq_1_5_0_sidebar() {
    return [
      
      {
        text: "Get Started",
        icon: "tool",
        link: "./",
      }, "release-notes", "install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        children: [
          {
            icon: "config",
            text: "Configuration",
            link: "fhir-reverse-proxy/configuration",
          }
        ]}, {
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
          children: [
            {
              icon: "config",
              text: "Configuration",
              link: "bpe-reverse-proxy/configuration",
            }
          ]
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
      },
      ]
       
}

export function generate_v1_gt_eq_1_0_0_sidebar() {
    return [
      {
        text: "Get Started",
        icon: "tool",
        link: "./",
      }, "release-notes", "install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        children: [
          {
            icon: "config",
            text: "Configuration",
            link: "fhir-reverse-proxy/configuration",
          }
        ]},
        {
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
      },
    ];
}
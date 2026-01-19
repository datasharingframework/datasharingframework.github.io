export function generate_v2_latest_sidebar() {
	return [{
		text: "Get Started",
		icon: "tool",
		link: "./",
	},
		"release-notes", "install", "upgrade-from-2", "upgrade-from-1", "allowList-mgm", "root-certificates", "passwords-secrets", {
		text: "FHIR Reverse Proxy",
		icon: "module",
		children: [
			{
				icon: "config",
				text: "Configuration",
				link: "fhir-reverse-proxy/configuration",
			}
		]
	},
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
		}, {
			icon: "config",
			text: "Logging",
			link: "logging"
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
		}, {
			icon: "config",
			text: "Logging",
			link: "logging"
		}, {
			icon: "config",
			text: "FHIR Client Connections",
			link: "fhir-client-connections"
		}]
	},
	{
		text: "Install Plugins",
		icon: "plugin",
		link: "install-plugins"
	}]
}

export function generate_v2_0_0_sidebar() {
	return [{
		text: "Get Started",
		icon: "tool",
		link: "./",
	},
		"release-notes", "install", "upgrade-from-1", "allowList-mgm", "root-certificates", "passwords-secrets", {
		text: "FHIR Reverse Proxy",
		icon: "module",
		children: [
			{
				icon: "config",
				text: "Configuration",
				link: "fhir-reverse-proxy/configuration",
			}
		]
	},
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
		}, {
			icon: "config",
			text: "Logging",
			link: "logging"
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
		}, {
			icon: "config",
			text: "Logging",
			link: "logging"
		}]
	},
	{
		text: "Install Plugins",
		icon: "plugin",
		link: "install-plugins"
	}]
}
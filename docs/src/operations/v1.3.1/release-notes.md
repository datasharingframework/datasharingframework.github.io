---
title: Release Notes (v1.3.1)
icon: note
---

## [Release Notes for v1.3.1](https://github.com/datasharingframework/dsf/releases/tag/v1.3.1)

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### 1.3.1 - Maintenance Release
General remarks:
- This is an update for the new 1.x DSF and not compatible with 0.9.x and older version developed at [highmed/highmed-dsf](https://github.com/highmed/highmed-dsf).
- DSF v1.3.1 is **not** compatible with DSF Ping Pong v1.0.0.0, upgrade/use the Ping Pong plugin [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) if your are upgrading/using this version.
- To Update an existing 1.x installation, please see the [1.x -> 1.3.1 Upgrade Guide](https://dsf.dev/v1.3.1/maintain/upgrade-from-1.html).
- For a fresh deployment, follow the [installation instructions](https://dsf.dev/v1.3.1/maintain/install.html).

Features:
- Removes insecure TLS cipher suites from the apache httpd reverse proxy Docker image.
- Adds browser security policy headers for `text/html` requests and requests for `/static/...` resources.
- Removes in-line css `style` and javascript event-handler definitions.
- Reorganized `commons-logging` excludes, added Dependency ban rule.
- Only sends the `X-ClientCert` header if the variable `SSL_CLIENT_CERT` is not empty. The value is empty if a users is not authenticated with a client certificate and client certificate authentication is optional.
- Adds generated mail address based on the `iss` (issuer) and `sub` (subject) values from the access token to the currently logged in Practitioner object if the token does not contain an `email` claim.

Bug Fixes:
- The OrganizationAffiliation page showed the `Participation Organization` identifier in the column `Parent Organization`.  The expected  `Parent Organization` identifier is now shown.
- The apache httpd reverse proxy did not set the required `X-Forwarded-Proto` header, leading to "faulty" redirect URLs when using OIDC logins. The `X-Forwarded-Proto` header for proxy request to the FHIR App server is now set.

Known Compatible Process Plugins:
- [DSF Allow List v1.0.0.0](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.0)
- [DSF Ping Pong v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- [MII Report v1.0.0.0](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.0.0.0)
- [MII Feasibility v1.0.0.0](https://github.com/medizininformatik-initiative/feasibility-dsf-process/releases/tag/v1.0.0.0)
- [NUM Data Transfer v1.0.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.0.0.0)

Docker containers for this release can be access via the GitHub Docker registry - ghcr.io:
* **bpe**: [ghcr.io/datasharingframework/bpe:1.3.1](https://github.com/orgs/datasharingframework/packages/container/bpe/142957162?tag=1.3.1)
* **fhir**: [ghcr.io/datasharingframework/fhir:1.3.1](https://github.com/orgs/datasharingframework/packages/container/fhir/142954854?tag=1.3.1)
* **fhir_proxy**: [ghcr.io/datasharingframework/fhir_proxy:1.3.1](https://github.com/orgs/datasharingframework/packages/container/fhir_proxy/142950963?tag=1.3.1)

Issues closed:
- Upgrade Dependencies [#127](https://github.com/datasharingframework/dsf/issues/127)
- Improve Some Logging for OIDC Logins [#125](https://github.com/datasharingframework/dsf/issues/125) 
- Redirect URI for OIDC Login is Http [#124](https://github.com/datasharingframework/dsf/issues/124) 
- Start New Development Cycle [#120](https://github.com/datasharingframework/dsf/issues/120)
- Remove Not Needed commons-logging Dependencies and Enforce Non Use [#119](https://github.com/datasharingframework/dsf/issues/119) 
- WebUI: Bug on OrganizationAffiliation page [#118](https://github.com/datasharingframework/dsf/issues/118) 
- Unsafe 3DES Cipher Suite in FHIR Proxy [#117](https://github.com/datasharingframework/dsf/issues/117)

This release contains contributions from [@wetret](https://github.com/wetret), [@schwzr](https://github.com/schwzr) and [@hhund](https://github.com/hhund).


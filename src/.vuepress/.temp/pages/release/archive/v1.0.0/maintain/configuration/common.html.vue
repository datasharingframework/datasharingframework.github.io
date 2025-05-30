<template><div><h1 id="common-parameters" tabindex="-1"><a class="header-anchor" href="#common-parameters"><span>Common Parameters</span></a></h1>
<h3 id="dev-dsf-server-api-host" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-api-host"><span>DEV_DSF_SERVER_API_HOST</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.api.host</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> API connector host, default in docker image: <code v-pre>0.0.0.0</code></li>
<li><strong>Default:</strong> <code v-pre>127.0.0.1</code></li>
</ul>
<h3 id="dev-dsf-server-api-port" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-api-port"><span>DEV_DSF_SERVER_API_PORT</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.api.port</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> API connector port, default in docker image: <code v-pre>8080</code></li>
</ul>
<h3 id="dev-dsf-server-auth-client-certificate-header" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-client-certificate-header"><span>DEV_DSF_SERVER_AUTH_CLIENT_CERTIFICATE_HEADER</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.client.certificate.header</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Name of HTTP header with client certificate from reverse proxy</li>
<li><strong>Default:</strong> <code v-pre>X-ClientCert</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-authorization-code-flow" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-authorization-code-flow"><span>DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.authorization.code.flow</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Set to <code v-pre>true</code> to enable OIDC authorization code flow</li>
<li><strong>Recommendation:</strong> Requires <em>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL</em>, <em>DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID</em> and <em>DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET</em> to be specified</li>
<li><strong>Default:</strong> <code v-pre>false</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-back-channel-logout" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-back-channel-logout"><span>DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.back.channel.logout</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Set to <code v-pre>true</code> to enable OIDC back-channel logout</li>
<li><strong>Recommendation:</strong> Requires <em>DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW</em> to be set to <code v-pre>true</code> (enabled), <em>DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID</em> and <em>DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT_PATH</em> to be specified</li>
<li><strong>Default:</strong> <code v-pre>false</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-back-channel-logout-path" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-back-channel-logout-path"><span>DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT_PATH</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.back.channel.logout.path</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Path called by the OIDC provide to request back-channel logout</li>
<li><strong>Default:</strong> <code v-pre>/back-channel-logout</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-bearer-token" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-bearer-token"><span>DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.bearer.token</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Set to <code v-pre>true</code> to enable OIDC bearer token authentication</li>
<li><strong>Recommendation:</strong> Requires <em>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL</em> to be specified</li>
<li><strong>Default:</strong> <code v-pre>false</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-client-id" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-client-id"><span>DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID</span></a></h3>
<ul>
<li><strong>Property:</strong> <a href="http://dev.dsf.server.auth.oidc.client.id" target="_blank" rel="noopener noreferrer">dev.dsf.server.auth.oidc.client.id</a></li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> OIDC provider client_id, must be specified if <em>DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW</em> is enabled</li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-client-secret" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-client-secret"><span>DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.client.secret</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> OIDC provider client_secret, must be specified if <em>DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW</em> is enabled</li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-provider-client-certificate" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-provider-client-certificate"><span>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.provider.client.certificate</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> PEM encoded file with client certificate for https connections to the OIDC provider</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/oidc_provider_client_certificate.pem</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-provider-client-certificate-private-key" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-provider-client-certificate-private-key"><span>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.provider.client.certificate.private.key</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Private key corresponding to the client certificate for the OIDC provider as PEM encoded file. Use <em>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD</em> or <em>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</em> if private key is encrypted</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/oidc_provider_client_certificate_private_key.pem</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-provider-client-certificate-private-key-password-or-dev-dsf-server-auth-oidc-provider-client-certificate-private-key-password-file" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-provider-client-certificate-private-key-password-or-dev-dsf-server-auth-oidc-provider-client-certificate-private-key-password-file"><span>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.provider.client.certificate.private.key.password</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Password to decrypt the client certificate for the OIDC provider encrypted private key</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure using <em>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</em></li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/oidc_provider_client_certificate_private_key.pem.password</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-provider-client-connecttimeout" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-provider-client-connecttimeout"><span>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CONNECTTIMEOUT</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.provider.client.connectTimeout</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> OIDC provider client connect timeout in milliseconds</li>
<li><strong>Default:</strong> <code v-pre>5000</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-provider-client-idletimeout" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-provider-client-idletimeout"><span>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_IDLETIMEOUT</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.provider.client.idleTimeout</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> OIDC provider client idle timeout in milliseconds</li>
<li><strong>Default:</strong> <code v-pre>30000</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-provider-client-trust-server-certificate-cas" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-provider-client-trust-server-certificate-cas"><span>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.provider.client.trust.server.certificate.cas</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to the OIDC provider</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/oidc_provider_trust_certificates.pem</code></li>
</ul>
<h3 id="dev-dsf-server-auth-oidc-provider-realm-base-url" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-oidc-provider-realm-base-url"><span>DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.oidc.provider.realm.base.url</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> OIDC provider realm base url</li>
<li><strong>Example:</strong> <code v-pre>https://keycloak.test.com:8443/realms/example-realm-name</code></li>
</ul>
<h3 id="dev-dsf-server-auth-trust-client-certificate-cas" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-auth-trust-client-certificate-cas"><span>DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.auth.trust.client.certificate.cas</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> PEM encoded file with one or more trusted root certificates to validate client certificates for https connections from local and remote clients</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/app_client_trust_certificates.pem</code></li>
</ul>
<h3 id="dev-dsf-server-certificate" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-certificate"><span>DEV_DSF_SERVER_CERTIFICATE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.certificate</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Server certificate file for testing</li>
<li><strong>Recommendation:</strong> Only specify For testing when terminating TLS in jetty server</li>
</ul>
<h3 id="dev-dsf-server-certificate-chain" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-certificate-chain"><span>DEV_DSF_SERVER_CERTIFICATE_CHAIN</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.certificate.chain</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Server certificate chain file for testing</li>
<li><strong>Recommendation:</strong> Only specify For testing when terminating TLS in jetty server</li>
</ul>
<h3 id="dev-dsf-server-certificate-key" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-certificate-key"><span>DEV_DSF_SERVER_CERTIFICATE_KEY</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.certificate.key</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Server certificate private key file for testing</li>
<li><strong>Recommendation:</strong> Only specify For testing when terminating TLS in jetty server</li>
</ul>
<h3 id="dev-dsf-server-certificate-key-password-or-dev-dsf-server-certificate-key-password-file" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-certificate-key-password-or-dev-dsf-server-certificate-key-password-file"><span>DEV_DSF_SERVER_CERTIFICATE_KEY_PASSWORD or DEV_DSF_SERVER_CERTIFICATE_KEY_PASSWORD_FILE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.certificate.key.password</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Server certificate private key file password for testing</li>
<li><strong>Recommendation:</strong> Only specify For testing when terminating TLS in jetty server</li>
</ul>
<h3 id="dev-dsf-server-context-path" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-context-path"><span>DEV_DSF_SERVER_CONTEXT_PATH</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.context.path</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Web application context path, default in <code v-pre>bpe</code> docker image: <code v-pre>/bpe</code>, default in <code v-pre>fhir</code> docker image: <code v-pre>/fhir</code></li>
<li><strong>Recommendation:</strong> Only modify for testing</li>
</ul>
<h3 id="dev-dsf-server-status-host" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-status-host"><span>DEV_DSF_SERVER_STATUS_HOST</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.status.host</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Status connector host</li>
<li><strong>Default:</strong> <code v-pre>127.0.0.1</code></li>
</ul>
<h3 id="dev-dsf-server-status-port" tabindex="-1"><a class="header-anchor" href="#dev-dsf-server-status-port"><span>DEV_DSF_SERVER_STATUS_PORT</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.server.status.port</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Status connector port, default in docker image: <code v-pre>10000</code></li>
</ul>
</div></template>



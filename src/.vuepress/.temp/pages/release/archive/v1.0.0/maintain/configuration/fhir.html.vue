<template><div><h1 id="parameters-fhir-server" tabindex="-1"><a class="header-anchor" href="#parameters-fhir-server"><span>Parameters FHIR Server</span></a></h1>
<p>Please also check <a href="common">common parameters</a> for additional configuration options.</p>
<h3 id="dev-dsf-fhir-client-certificate" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-client-certificate"><span>DEV_DSF_FHIR_CLIENT_CERTIFICATE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.client.certificate</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> PEM encoded file with local client certificate for https connections to remote DSF FHIR servers</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/app_client_certificate.pem</code></li>
</ul>
<h3 id="dev-dsf-fhir-client-certificate-private-key" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-client-certificate-private-key"><span>DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.client.certificate.private.key</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Private key corresponding to the local client certificate as PEM encoded file. Use <em>DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD</em> or <em>DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</em> if private key is encrypted</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/app_client_certificate_private_key.pem</code></li>
</ul>
<h3 id="dev-dsf-fhir-client-certificate-private-key-password-or-dev-dsf-fhir-client-certificate-private-key-password-file" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-client-certificate-private-key-password-or-dev-dsf-fhir-client-certificate-private-key-password-file"><span>DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.client.certificate.private.key.password</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Password to decrypt the local client certificate encrypted private key</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure using <em>DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE</em></li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/app_client_certificate_private_key.pem.password</code></li>
</ul>
<h3 id="dev-dsf-fhir-client-timeout-connect" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-client-timeout-connect"><span>DEV_DSF_FHIR_CLIENT_TIMEOUT_CONNECT</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.client.timeout.connect</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The timeout in milliseconds until a connection is established between this DSF FHIR server and a remote DSF FHIR server</li>
<li><strong>Recommendation:</strong> Change default value only if timeout exceptions occur</li>
<li><strong>Default:</strong> <code v-pre>2000</code></li>
</ul>
<h3 id="dev-dsf-fhir-client-timeout-read" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-client-timeout-read"><span>DEV_DSF_FHIR_CLIENT_TIMEOUT_READ</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.client.timeout.read</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The timeout in milliseconds until a reading a resource from a remote DSF FHIR server is aborted</li>
<li><strong>Recommendation:</strong> Change default value only if timeout exceptions occur</li>
<li><strong>Default:</strong> <code v-pre>10000</code></li>
</ul>
<h3 id="dev-dsf-fhir-client-trust-server-certificate-cas" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-client-trust-server-certificate-cas"><span>DEV_DSF_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.client.trust.server.certificate.cas</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to remote DSF FHIR servers</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/app_server_trust_certificates.pem</code></li>
</ul>
<h3 id="dev-dsf-fhir-client-verbose" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-client-verbose"><span>DEV_DSF_FHIR_CLIENT_VERBOSE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.client.verbose</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> To enable verbose logging of requests to and replies from remote DSF FHIR servers, set to <code v-pre>true</code></li>
<li><strong>Default:</strong> <code v-pre>false</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-liquibase-forceunlock" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-liquibase-forceunlock"><span>DEV_DSF_FHIR_DB_LIQUIBASE_FORCEUNLOCK</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.liquibase.forceUnlock</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> To force liquibase to unlock the migration lock set to <code v-pre>true</code></li>
<li><strong>Recommendation:</strong> Only use this option temporarily to unlock a stuck DB migration step</li>
<li><strong>Default:</strong> <code v-pre>false</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-liquibase-lockwaittime" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-liquibase-lockwaittime"><span>DEV_DSF_FHIR_DB_LIQUIBASE_LOCKWAITTIME</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.liquibase.lockWaitTime</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Liquibase change lock wait time in minutes, default 2 minutes</li>
<li><strong>Default:</strong> <code v-pre>2</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-liquibase-password-or-dev-dsf-fhir-db-liquibase-password-file" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-liquibase-password-or-dev-dsf-fhir-db-liquibase-password-file"><span>DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD or DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.liquibase.password</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> The password to access the database from the DSF FHIR server to execute database migrations</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure by using <em>DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE</em></li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/db_liquibase.password</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-liquibase-username" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-liquibase-username"><span>DEV_DSF_FHIR_DB_LIQUIBASE_USERNAME</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.liquibase.username</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The user name to access the database from the DSF FHIR server to execute database migrations</li>
<li><strong>Default:</strong> <code v-pre>liquibase_user</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-url" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-url"><span>DEV_DSF_FHIR_DB_URL</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.url</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> The address of the database used for the DSF FHIR server</li>
<li><strong>Recommendation:</strong> Change only if you don't use the provided docker-compose from the installation guide or made changes to the database settings/networking in the docker-compose</li>
<li><strong>Example:</strong> <code v-pre>jdbc:postgresql://db/fhir</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-user-group" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-user-group"><span>DEV_DSF_FHIR_DB_USER_GROUP</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.user.group</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The name of the user group to access the database from the DSF FHIR server</li>
<li><strong>Default:</strong> <code v-pre>fhir_users</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-user-password-or-dev-dsf-fhir-db-user-password-file" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-user-password-or-dev-dsf-fhir-db-user-password-file"><span>DEV_DSF_FHIR_DB_USER_PASSWORD or DEV_DSF_FHIR_DB_USER_PASSWORD_FILE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.user.password</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> The password to access the database from the DSF FHIR server</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure using <em>DEV_DSF_FHIR_DB_USER_PASSWORD_FILE</em></li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/db_user.password</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-user-permanent-delete-group" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-user-permanent-delete-group"><span>DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.user.permanent.delete.group</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The name of the user group to access the database from the DSF FHIR server for permanent deletes</li>
<li><strong>Default:</strong> <code v-pre>fhir_permanent_delete_users</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-user-permanent-delete-password-or-dev-dsf-fhir-db-user-permanent-delete-password-file" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-user-permanent-delete-password-or-dev-dsf-fhir-db-user-permanent-delete-password-file"><span>DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD or DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.user.permanent.delete.password</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> The password to access the database from the DSF FHIR server for permanent deletes</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure using <em>DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE</em></li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/db_user_permanent_delete.password</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-user-permanent-delete-username" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-user-permanent-delete-username"><span>DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.user.permanent.delete.username</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The user name to access the database from the DSF FHIR server for permanent deletes</li>
<li><strong>Recommendation:</strong> Use a different user then <em>DEV_DSF_FHIR_DB_USER_USERNAME</em></li>
<li><strong>Default:</strong> <code v-pre>fhir_server_permanent_delete_user</code></li>
</ul>
<h3 id="dev-dsf-fhir-db-user-username" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-db-user-username"><span>DEV_DSF_FHIR_DB_USER_USERNAME</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.db.user.username</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The user name to access the database from the DSF FHIR server</li>
<li><strong>Default:</strong> <code v-pre>fhir_server_user</code></li>
</ul>
<h3 id="dev-dsf-fhir-server-base-url" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-server-base-url"><span>DEV_DSF_FHIR_SERVER_BASE_URL</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.server.base.url</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> The base address of this DSF FHIR server to read/store fhir resources</li>
<li><strong>Example:</strong> <code v-pre>https://foo.bar/fhir</code></li>
</ul>
<h3 id="dev-dsf-fhir-server-init-bundle" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-server-init-bundle"><span>DEV_DSF_FHIR_SERVER_INIT_BUNDLE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.server.init.bundle</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The fhir bundle containing the initial Allow-List, loaded on startup of the DSF FHIR server</li>
<li><strong>Recommendation:</strong> Change only if you don't use the provided files from the installation guide, have local changes in the Allow-List or received an Allow-List from another source</li>
<li><strong>Default:</strong> <code v-pre>conf/bundle.xml</code></li>
</ul>
<h3 id="dev-dsf-fhir-server-organization-identifier-value" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-server-organization-identifier-value"><span>DEV_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.server.organization.identifier.value</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> The local identifier value used in the Allow-List</li>
<li><strong>Recommendation:</strong> By convention: The shortest possible FQDN that resolve the homepage of the organization</li>
<li><strong>Example:</strong> <code v-pre>hospital.com</code></li>
</ul>
<h3 id="dev-dsf-fhir-server-page-count" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-server-page-count"><span>DEV_DSF_FHIR_SERVER_PAGE_COUNT</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.server.page.count</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> The page size returned by the DSF FHIR server when reading/searching fhir resources</li>
<li><strong>Default:</strong> <code v-pre>20</code></li>
</ul>
<h3 id="dev-dsf-fhir-server-roleconfig" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-server-roleconfig"><span>DEV_DSF_FHIR_SERVER_ROLECONFIG</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.server.roleConfig</li>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Role config YAML</li>
</ul>
<h3 id="dev-dsf-fhir-server-static-resource-cache" tabindex="-1"><a class="header-anchor" href="#dev-dsf-fhir-server-static-resource-cache"><span>DEV_DSF_FHIR_SERVER_STATIC_RESOURCE_CACHE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.fhir.server.static.resource.cache</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> To disable static resource caching, set to <code v-pre>false</code></li>
<li><strong>Recommendation:</strong> Only set to <code v-pre>false</code> for development</li>
<li><strong>Default:</strong> <code v-pre>true</code></li>
</ul>
<h3 id="dev-dsf-proxy-noproxy" tabindex="-1"><a class="header-anchor" href="#dev-dsf-proxy-noproxy"><span>DEV_DSF_PROXY_NOPROXY</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.proxy.noProxy</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Forward proxy no-proxy list, entries will match exactly or agianst (one level) sub-domains, if no port is specified - all ports are matched; comma or space separated list, YAML block scalars supported</li>
<li><strong>Example:</strong> <code v-pre>foo.bar, test.com:8080</code></li>
</ul>
<h3 id="dev-dsf-proxy-password-or-dev-dsf-proxy-password-file" tabindex="-1"><a class="header-anchor" href="#dev-dsf-proxy-password-or-dev-dsf-proxy-password-file"><span>DEV_DSF_PROXY_PASSWORD or DEV_DSF_PROXY_PASSWORD_FILE</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.proxy.password</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Forward Proxy password</li>
<li><strong>Recommendation:</strong> Configure password if proxy requires authentication, use docker secret file to configure using <em>DEV_DSF_PROXY_PASSWORD_FILE</em></li>
</ul>
<h3 id="dev-dsf-proxy-url" tabindex="-1"><a class="header-anchor" href="#dev-dsf-proxy-url"><span>DEV_DSF_PROXY_URL</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.proxy.url</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Forward (http/https) proxy url, use <em>DEV_DSF_BPE_PROXY_NOPROXY</em> to list domains that do not require a forward proxy</li>
<li><strong>Example:</strong> <code v-pre>http://proxy.foo:8080</code></li>
</ul>
<h3 id="dev-dsf-proxy-username" tabindex="-1"><a class="header-anchor" href="#dev-dsf-proxy-username"><span>DEV_DSF_PROXY_USERNAME</span></a></h3>
<ul>
<li><strong>Property:</strong> dev.dsf.proxy.username</li>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Forward proxy username</li>
<li><strong>Recommendation:</strong> Configure username if proxy requires authentication</li>
</ul>
</div></template>



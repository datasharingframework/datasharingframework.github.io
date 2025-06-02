---
title: Configuration Parameters
icon: config
---

### DEV_DSF_FHIR_CLIENT_CERTIFICATE
- **Property:** dev.dsf.fhir.client.certificate
- **Required:** Yes
- **Description:** PEM encoded file with local client certificate for https connections to remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate.pem`


### DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** dev.dsf.fhir.client.certificate.private.key
- **Required:** Yes
- **Description:** Private key corresponding to the local client certificate as PEM encoded file. Use *DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate_private_key.pem`


### DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** dev.dsf.fhir.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the local client certificate encrypted private key
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/app_client_certificate_private_key.pem.password`


### DEV_DSF_FHIR_CLIENT_TIMEOUT_CONNECT
- **Property:** dev.dsf.fhir.client.timeout.connect
- **Required:** No
- **Description:** The timeout in milliseconds until a connection is established between this DSF FHIR server and a remote DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `2000`


### DEV_DSF_FHIR_CLIENT_TIMEOUT_READ
- **Property:** dev.dsf.fhir.client.timeout.read
- **Required:** No
- **Description:** The timeout in milliseconds until a reading a resource from a remote DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `10000`


### DEV_DSF_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.fhir.client.trust.server.certificate.cas
- **Required:** Yes
- **Description:** PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_server_trust_certificates.pem`


### DEV_DSF_FHIR_CLIENT_VERBOSE
- **Property:** dev.dsf.fhir.client.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from remote DSF FHIR servers, set to `true`
- **Default:** `false`


### DEV_DSF_FHIR_DB_LIQUIBASE_FORCEUNLOCK
- **Property:** dev.dsf.fhir.db.liquibase.forceUnlock
- **Required:** No
- **Description:** To force liquibase to unlock the migration lock set to `true`
- **Recommendation:** Only use this option temporarily to unlock a stuck DB migration step
- **Default:** `false`


### DEV_DSF_FHIR_DB_LIQUIBASE_LOCKWAITTIME
- **Property:** dev.dsf.fhir.db.liquibase.lockWaitTime
- **Required:** No
- **Description:** Liquibase change lock wait time in minutes, default 2 minutes
- **Default:** `2`


### DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD or DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE
- **Property:** dev.dsf.fhir.db.liquibase.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF FHIR server to execute database migrations
- **Recommendation:** Use docker secret file to configure by using *DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_liquibase.password`


### DEV_DSF_FHIR_DB_LIQUIBASE_USERNAME
- **Property:** dev.dsf.fhir.db.liquibase.username
- **Required:** No
- **Description:** The user name to access the database from the DSF FHIR server to execute database migrations
- **Default:** `liquibase_user`


### DEV_DSF_FHIR_DB_URL
- **Property:** dev.dsf.fhir.db.url
- **Required:** Yes
- **Description:** The address of the database used for the DSF FHIR server
- **Recommendation:** Change only if you don't use the provided docker-compose from the installation guide or made changes to the database settings/networking in the docker-compose
- **Example:** `jdbc:postgresql://db/fhir`


### DEV_DSF_FHIR_DB_USER_GROUP
- **Property:** dev.dsf.fhir.db.user.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF FHIR server
- **Default:** `fhir_users`


### DEV_DSF_FHIR_DB_USER_PASSWORD or DEV_DSF_FHIR_DB_USER_PASSWORD_FILE
- **Property:** dev.dsf.fhir.db.user.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF FHIR server
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_FHIR_DB_USER_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user.password`


### DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP
- **Property:** dev.dsf.fhir.db.user.permanent.delete.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF FHIR server for permanent deletes
- **Default:** `fhir_permanent_delete_users`


### DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD or DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE
- **Property:** dev.dsf.fhir.db.user.permanent.delete.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF FHIR server for permanent deletes
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user_permanent_delete.password`


### DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME
- **Property:** dev.dsf.fhir.db.user.permanent.delete.username
- **Required:** No
- **Description:** The user name to access the database from the DSF FHIR server for permanent deletes
- **Recommendation:** Use a different user then *DEV_DSF_FHIR_DB_USER_USERNAME*
- **Default:** `fhir_server_permanent_delete_user`


### DEV_DSF_FHIR_DB_USER_USERNAME
- **Property:** dev.dsf.fhir.db.user.username
- **Required:** No
- **Description:** The user name to access the database from the DSF FHIR server
- **Default:** `fhir_server_user`


### DEV_DSF_FHIR_SERVER_BASE_URL
- **Property:** dev.dsf.fhir.server.base.url
- **Required:** Yes
- **Description:** The base address of this DSF FHIR server to read/store fhir resources
- **Example:** `https://foo.bar/fhir`


### DEV_DSF_FHIR_SERVER_INIT_BUNDLE
- **Property:** dev.dsf.fhir.server.init.bundle
- **Required:** No
- **Description:** The fhir bundle containing the initial Allow-List, loaded on startup of the DSF FHIR server
- **Recommendation:** Change only if you don't use the provided files from the installation guide, have local changes in the Allow-List or received an Allow-List from another source
- **Default:** `conf/bundle.xml`


### DEV_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE
- **Property:** dev.dsf.fhir.server.organization.identifier.value
- **Required:** Yes
- **Description:** The local identifier value used in the Allow-List
- **Recommendation:** By convention: The shortest possible FQDN that resolve the homepage of the organization
- **Example:** `hospital.com`


### DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT
- **Property:** dev.dsf.fhir.server.organization.thumbprint
- **Required:** Yes
- **Description:** The SHA-512 thumbprint of the local organization client certificate
- **Recommendation:** The thumbprint can be calculated via `certtool --fingerprint --hash=sha512 --infile=client_certificate.pem`


### DEV_DSF_FHIR_SERVER_PAGE_COUNT
- **Property:** dev.dsf.fhir.server.page.count
- **Required:** No
- **Description:** The page size returned by the DSF FHIR server when reading/searching fhir resources
- **Default:** `20`


### DEV_DSF_FHIR_SERVER_ROLECONFIG
- **Property:** dev.dsf.fhir.server.roleConfig
- **Required:** No
- **Description:** Role config YAML as defined in [FHIR Server: Access Control](access-control).


### DEV_DSF_FHIR_SERVER_STATIC_RESOURCE_CACHE
- **Property:** dev.dsf.fhir.server.static.resource.cache
- **Required:** No
- **Description:** To disable static resource caching, set to `false`
- **Recommendation:** Only set to `false` for development
- **Default:** `true`


### DEV_DSF_PROXY_NOPROXY
- **Property:** dev.dsf.proxy.noProxy
- **Required:** No
- **Description:** Forward proxy no-proxy list, entries will match exactly or agianst (one level) sub-domains, if no port is specified - all ports are matched; comma or space separated list, YAML block scalars supported
- **Example:** `foo.bar, test.com:8080`


### DEV_DSF_PROXY_PASSWORD or DEV_DSF_PROXY_PASSWORD_FILE
- **Property:** dev.dsf.proxy.password
- **Required:** No
- **Description:** Forward Proxy password
- **Recommendation:** Configure password if proxy requires authentication, use docker secret file to configure using *DEV_DSF_PROXY_PASSWORD_FILE*


### DEV_DSF_PROXY_URL
- **Property:** dev.dsf.proxy.url
- **Required:** No
- **Description:** Forward (http/https) proxy url, use *DEV_DSF_BPE_PROXY_NOPROXY* to list domains that do not require a forward proxy
- **Example:** `http://proxy.foo:8080`


### DEV_DSF_PROXY_USERNAME
- **Property:** dev.dsf.proxy.username
- **Required:** No
- **Description:** Forward proxy username
- **Recommendation:** Configure username if proxy requires authentication


### DEV_DSF_SERVER_API_HOST
- **Property:** dev.dsf.server.api.host
- **Required:** Yes
- **Description:** API connector host, default in docker image: `0.0.0.0`
- **Default:** `127.0.0.1`


### DEV_DSF_SERVER_API_PORT
- **Property:** dev.dsf.server.api.port
- **Required:** Yes
- **Description:** API connector port, default in docker image: `8080`


### DEV_DSF_SERVER_AUTH_CLIENT_CERTIFICATE_HEADER
- **Property:** dev.dsf.server.auth.client.certificate.header
- **Required:** Yes
- **Description:** Name of HTTP header with client certificate from reverse proxy
- **Default:** `X-ClientCert`


### DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW
- **Property:** dev.dsf.server.auth.oidc.authorization.code.flow
- **Required:** No
- **Description:** Set to `true` to enable OIDC authorization code flow
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL*, *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID* and *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET* to be specified
- **Default:** `false`


### DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT
- **Property:** dev.dsf.server.auth.oidc.back.channel.logout
- **Required:** No
- **Description:** Set to `true` to enable OIDC back-channel logout
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW* to be set to `true` (enabled), *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID* and *DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT_PATH* to be specified
- **Default:** `false`


### DEV_DSF_SERVER_AUTH_OIDC_BACK_CHANNEL_LOGOUT_PATH
- **Property:** dev.dsf.server.auth.oidc.back.channel.logout.path
- **Required:** No
- **Description:** Path called by the OIDC provide to request back-channel logout
- **Default:** `/back-channel-logout`


### DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN
- **Property:** dev.dsf.server.auth.oidc.bearer.token
- **Required:** No
- **Description:** Set to `true` to enable OIDC bearer token authentication
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL* to be specified
- **Default:** `false`


### DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID
- **Property:** dev.dsf.server.auth.oidc.client.id
- **Required:** No
- **Description:** OIDC provider client_id, must be specified if *DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW* is enabled


### DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET
- **Property:** dev.dsf.server.auth.oidc.client.secret
- **Required:** No
- **Description:** OIDC provider client_secret, must be specified if *DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW* is enabled


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE
- **Property:** dev.dsf.server.auth.oidc.provider.client.certificate
- **Required:** No
- **Description:** PEM encoded file with client certificate for https connections to the OIDC provider
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/oidc_provider_client_certificate.pem`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** dev.dsf.server.auth.oidc.provider.client.certificate.private.key
- **Required:** No
- **Description:** Private key corresponding to the client certificate for the OIDC provider as PEM encoded file. Use *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/oidc_provider_client_certificate_private_key.pem`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** dev.dsf.server.auth.oidc.provider.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the client certificate for the OIDC provider encrypted private key
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/oidc_provider_client_certificate_private_key.pem.password`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_CONNECTTIMEOUT
- **Property:** dev.dsf.server.auth.oidc.provider.client.connectTimeout
- **Required:** No
- **Description:** OIDC provider client connect timeout in milliseconds
- **Default:** `5000`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_IDLETIMEOUT
- **Property:** dev.dsf.server.auth.oidc.provider.client.idleTimeout
- **Required:** No
- **Description:** OIDC provider client idle timeout in milliseconds
- **Default:** `30000`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.server.auth.oidc.provider.client.trust.server.certificate.cas
- **Required:** No
- **Description:** PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to the OIDC provider
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/oidc_provider_trust_certificates.pem`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL
- **Property:** dev.dsf.server.auth.oidc.provider.realm.base.url
- **Required:** No
- **Description:** OIDC provider realm base url
- **Example:** `https://keycloak.test.com:8443/realms/example-realm-name`


### DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS
- **Property:** dev.dsf.server.auth.trust.client.certificate.cas
- **Required:** Yes
- **Description:** PEM encoded file with one or more trusted root certificates to validate client certificates for https connections from local and remote clients
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`


### DEV_DSF_SERVER_CERTIFICATE
- **Property:** dev.dsf.server.certificate
- **Required:** No
- **Description:** Server certificate file for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CERTIFICATE_CHAIN
- **Property:** dev.dsf.server.certificate.chain
- **Required:** No
- **Description:** Server certificate chain file for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CERTIFICATE_KEY
- **Property:** dev.dsf.server.certificate.key
- **Required:** No
- **Description:** Server certificate private key file for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CERTIFICATE_KEY_PASSWORD or DEV_DSF_SERVER_CERTIFICATE_KEY_PASSWORD_FILE
- **Property:** dev.dsf.server.certificate.key.password
- **Required:** No
- **Description:** Server certificate private key file password for testing
- **Recommendation:** Only specify For testing when terminating TLS in jetty server


### DEV_DSF_SERVER_CONTEXT_PATH
- **Property:** dev.dsf.server.context.path
- **Required:** Yes
- **Description:** Web application context path, default in `bpe` docker image: `/bpe`, default in `fhir` docker image: `/fhir`
- **Recommendation:** Only modify for testing


### DEV_DSF_SERVER_STATUS_HOST
- **Property:** dev.dsf.server.status.host
- **Required:** Yes
- **Description:** Status connector host
- **Default:** `127.0.0.1`


### DEV_DSF_SERVER_STATUS_PORT
- **Property:** dev.dsf.server.status.port
- **Required:** Yes
- **Description:** Status connector port, default in docker image: `10000`
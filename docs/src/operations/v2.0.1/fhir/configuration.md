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
- **Description:** Timeout until a connection is established between this DSF FHIR server and a remote DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `PT2S`


### DEV_DSF_FHIR_CLIENT_TIMEOUT_READ
- **Property:** dev.dsf.fhir.client.timeout.read
- **Required:** No
- **Description:** Timeout until a reading a resource from a remote DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `PT10S`


### DEV_DSF_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.fhir.client.trust.server.certificate.cas
- **Required:** No
- **Description:** Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to remote DSF FHIR servers
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`
- **Default:** `ca/server_root_cas`


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
- **Description:** Password to access the database from the DSF FHIR server to execute database migrations
- **Recommendation:** Use docker secret file to configure by using *DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_liquibase.password`


### DEV_DSF_FHIR_DB_LIQUIBASE_USERNAME
- **Property:** dev.dsf.fhir.db.liquibase.username
- **Required:** No
- **Description:** Username to access the database from the DSF FHIR server to execute database migrations
- **Default:** `liquibase_user`


### DEV_DSF_FHIR_DB_URL
- **Property:** dev.dsf.fhir.db.url
- **Required:** Yes
- **Description:** Address of the database used for the DSF FHIR server
- **Recommendation:** Change only if you don't use the provided docker-compose from the installation guide or made changes to the database settings/networking in the docker-compose
- **Example:** `jdbc:postgresql://db/fhir`


### DEV_DSF_FHIR_DB_USER_GROUP
- **Property:** dev.dsf.fhir.db.user.group
- **Required:** No
- **Description:** Name of the user group to access the database from the DSF FHIR server
- **Default:** `fhir_users`


### DEV_DSF_FHIR_DB_USER_PASSWORD or DEV_DSF_FHIR_DB_USER_PASSWORD_FILE
- **Property:** dev.dsf.fhir.db.user.password
- **Required:** Yes
- **Description:** Password to access the database from the DSF FHIR server
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_FHIR_DB_USER_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user.password`


### DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP
- **Property:** dev.dsf.fhir.db.user.permanent.delete.group
- **Required:** No
- **Description:** Name of the user group to access the database from the DSF FHIR server for permanent deletes
- **Default:** `fhir_permanent_delete_users`


### DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD or DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE
- **Property:** dev.dsf.fhir.db.user.permanent.delete.password
- **Required:** Yes
- **Description:** Password to access the database from the DSF FHIR server for permanent deletes
- **Recommendation:** Use docker secret file to configure using *DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user_permanent_delete.password`


### DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME
- **Property:** dev.dsf.fhir.db.user.permanent.delete.username
- **Required:** No
- **Description:** Username to access the database from the DSF FHIR server for permanent deletes
- **Recommendation:** Use a different user then *DEV_DSF_FHIR_DB_USER_USERNAME*
- **Default:** `fhir_server_permanent_delete_user`


### DEV_DSF_FHIR_DB_USER_USERNAME
- **Property:** dev.dsf.fhir.db.user.username
- **Required:** No
- **Description:** Username to access the database from the DSF FHIR server
- **Default:** `fhir_server_user`


### DEV_DSF_FHIR_DEBUG_LOG_MESSAGE_CURRENTUSER
- **Property:** dev.dsf.fhir.debug.log.message.currentUser
- **Required:** No
- **Description:** To enable logging of the currently requesting user set to `true`
- **Recommendation:** This debug function should only be activated during development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_FHIR_DEBUG_LOG_MESSAGE_DBSTATEMENT
- **Property:** dev.dsf.fhir.debug.log.message.dbStatement
- **Required:** No
- **Description:** To enable logging of DB queries set to `true`
- **Recommendation:** This debug function should only be activated during development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_FHIR_DEBUG_LOG_MESSAGE_WEBSERVICEREQUEST
- **Property:** dev.dsf.fhir.debug.log.message.webserviceRequest
- **Required:** No
- **Description:** To enable logging of webservices requests set to `true`
- **Recommendation:** This debug function should only be activated during development; WARNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### DEV_DSF_FHIR_SERVER_BASE_URL
- **Property:** dev.dsf.fhir.server.base.url
- **Required:** Yes
- **Description:** Base address of this DSF FHIR server to read/store fhir resources
- **Example:** `https://foo.bar/fhir`


### DEV_DSF_FHIR_SERVER_INIT_BUNDLE
- **Property:** dev.dsf.fhir.server.init.bundle
- **Required:** No
- **Description:** Fhir bundle containing the initial Allow-List, loaded on startup of the DSF FHIR server
- **Recommendation:** Change only if you don't use the provided files from the installation guide, have local changes in the Allow-List or received an Allow-List from another source
- **Default:** `conf/bundle.xml`


### DEV_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE
- **Property:** dev.dsf.fhir.server.organization.identifier.value
- **Required:** Yes
- **Description:** Local identifier value used in the Allow-List
- **Recommendation:** By convention: The shortest possible FQDN that resolve the homepage of the organization
- **Example:** `hospital.com`


### DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT
- **Property:** dev.dsf.fhir.server.organization.thumbprint
- **Required:** No
- **Description:** The SHA-512 thumbprint of the local organization client certificate; will be calculated on startup based on the client certificate specified via *DEV_DSF_FHIR_CLIENT_CERTIFICATE*
- **Recommendation:** Do not specify this variable when using the same client certificate for the FHIR and BPE server; the thumbprint can be calculated via `certtool --fingerprint --hash=sha512 --infile=client_certificate.pem`


### DEV_DSF_FHIR_SERVER_PAGE_COUNT
- **Property:** dev.dsf.fhir.server.page.count
- **Required:** No
- **Description:** Page size returned by the DSF FHIR server when reading/searching fhir resources
- **Default:** `20`


### DEV_DSF_FHIR_SERVER_ROLECONFIG
- **Property:** dev.dsf.fhir.server.roleConfig
- **Required:** No
- **Description:** Role config YAML as defined in [FHIR Server: Access Control](access-control)


### DEV_DSF_FHIR_SERVER_STATIC_RESOURCE_CACHE
- **Property:** dev.dsf.fhir.server.static.resource.cache
- **Required:** No
- **Description:** To disable static resource caching, set to `false`
- **Recommendation:** Only set to `false` for development
- **Default:** `true`


### DEV_DSF_FHIR_SERVER_UI_THEME
- **Property:** dev.dsf.fhir.server.ui.theme
- **Required:** No
- **Description:** UI theme parameter, adds a color indicator to the ui to distinguish `dev`, `test` and `prod` environments if configured; supported values: `dev`, `test` and `prod`


### DEV_DSF_LOG_AUDIT_CONSOLE_ERR_ENABLED
- **Property:** dev.dsf.log.audit.console.err.enabled
- **Required:** No
- **Description:** Set to `true` to enable console err output of the audit logger
- **Default:** `false`


### DEV_DSF_LOG_AUDIT_CONSOLE_ERR_STYLE
- **Property:** dev.dsf.log.audit.console.err.style
- **Required:** No
- **Description:** Audit logger console err style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `STYLE_TEXT`


### DEV_DSF_LOG_AUDIT_CONSOLE_OUT_ENABLED
- **Property:** dev.dsf.log.audit.console.out.enabled
- **Required:** No
- **Description:** Set to `true` to enable console out output of the audit logger
- **Default:** `false`


### DEV_DSF_LOG_AUDIT_CONSOLE_OUT_STYLE
- **Property:** dev.dsf.log.audit.console.out.style
- **Required:** No
- **Description:** Audit logger console out style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `STYLE_TEXT`


### DEV_DSF_LOG_AUDIT_FILE_ENABLED
- **Property:** dev.dsf.log.audit.file.enabled
- **Required:** No
- **Description:** Set to `false` to disable log file output of the audit logger
- **Default:** `true`


### DEV_DSF_LOG_AUDIT_FILE_STYLE
- **Property:** dev.dsf.log.audit.file.style
- **Required:** No
- **Description:** Audit logger file style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `TEXT_MDC`


### DEV_DSF_LOG_CONFIG
- **Property:** dev.dsf.log.config
- **Required:** No
- **Description:** Location of a log4j configuration xml file; if file is readable, overrides configuration specified via *DEV_DSF_LOG_...* parameters
- **Default:** `conf/log4j2.xml`


### DEV_DSF_LOG_CONSOLE_ERR_ENABLED
- **Property:** dev.dsf.log.console.err.enabled
- **Required:** No
- **Description:** Set to `true` to enable console err output of the standard logger
- **Default:** `false`


### DEV_DSF_LOG_CONSOLE_ERR_LEVEL
- **Property:** dev.dsf.log.console.err.level
- **Required:** No
- **Description:** Standard logger console err output level, one of: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`
- **Default:** `INFO`


### DEV_DSF_LOG_CONSOLE_ERR_STYLE
- **Property:** dev.dsf.log.console.err.style
- **Required:** No
- **Description:** Standard logger console err output style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`, `TEXT_COLOR_MDC`, `TEXT_COLOR`
- **Default:** `TEXT_COLOR`


### DEV_DSF_LOG_CONSOLE_OUT_ENABLED
- **Property:** dev.dsf.log.console.out.enabled
- **Required:** No
- **Description:** Set to `false` to disable console out output of the standard logger
- **Default:** `true`


### DEV_DSF_LOG_CONSOLE_OUT_LEVEL
- **Property:** dev.dsf.log.console.out.level
- **Required:** No
- **Description:** Standard logger console out output level, one of: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`
- **Default:** `INFO`


### DEV_DSF_LOG_CONSOLE_OUT_STYLE
- **Property:** dev.dsf.log.console.out.style
- **Required:** No
- **Description:** Standard logger console out output style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`, `TEXT_COLOR_MDC`, `TEXT_COLOR`
- **Default:** `TEXT_COLOR`


### DEV_DSF_LOG_FILE_ENABLED
- **Property:** dev.dsf.log.file.enabled
- **Required:** No
- **Description:** Set to `false` to disable log file output of the standard logger
- **Default:** `true`


### DEV_DSF_LOG_FILE_LEVEL
- **Property:** dev.dsf.log.file.level
- **Required:** No
- **Description:** Standard logger log file output level, one of: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`
- **Default:** `DEBUG`


### DEV_DSF_LOG_FILE_STYLE
- **Property:** dev.dsf.log.file.style
- **Required:** No
- **Description:** Standard logger log file output style, one of: `JSON_ECS`, `JSON_GCP`, `JSON_GELF`, `JSON_LOGSTASH`, `TEXT_MDC`, `TEXT`
- **Default:** `TEXT_MDC`


### DEV_DSF_PROXY_NOPROXY
- **Property:** dev.dsf.proxy.noProxy
- **Required:** No
- **Description:** Forward proxy no-proxy list, entries will match exactly or against (one level) sub-domains, if no port is specified - all ports are matched; comma or space separated list, YAML block scalars supported
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
- **Required:** No
- **Description:** API connector host, default in docker image: `0.0.0.0`
- **Default:** `127.0.0.1`


### DEV_DSF_SERVER_API_PORT
- **Property:** dev.dsf.server.api.port
- **Required:** No
- **Description:** API connector port, default in docker image: `8080`


### DEV_DSF_SERVER_AUTH_CLIENT_CERTIFICATE_HEADER
- **Property:** dev.dsf.server.auth.client.certificate.header
- **Required:** No
- **Description:** Name of HTTP header with client certificate from reverse proxy
- **Default:** `X-ClientCert`


### DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW
- **Property:** dev.dsf.server.auth.oidc.authorization.code.flow
- **Required:** No
- **Description:** Set to `true` to enable OIDC authorization code flow
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL*, *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID* and *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET* or *DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET_FILE* to be specified
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


### DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN_AUDIENCE
- **Property:** dev.dsf.server.auth.oidc.bearer.token.audience
- **Required:** No
- **Description:** Audience (aud) value to verify before accepting OIDC bearer tokens, uses value from `DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID` by default, set blank string e.g. `''` to disable
- **Recommendation:** Requires *DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL* to be specified and *DEV_DSF_SERVER_AUTH_OIDC_BEARER_TOKEN* set tor `true`


### DEV_DSF_SERVER_AUTH_OIDC_CLIENT_ID
- **Property:** dev.dsf.server.auth.oidc.client.id
- **Required:** No
- **Description:** OIDC provider client_id, must be specified if *DEV_DSF_SERVER_AUTH_OIDC_AUTHORIZATION_CODE_FLOW* is enabled


### DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET or DEV_DSF_SERVER_AUTH_OIDC_CLIENT_SECRET_FILE
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


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TIMEOUT_CONNECT
- **Property:** dev.dsf.server.auth.oidc.provider.client.timeout.connect
- **Required:** No
- **Description:** OIDC provider client connect timeout
- **Default:** `PT5S`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TIMEOUT_READ
- **Property:** dev.dsf.server.auth.oidc.provider.client.timeout.read
- **Required:** No
- **Description:** OIDC provider client read timeout
- **Default:** `PT30S`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_CLIENT_TRUST_SERVER_CERTIFICATE_CAS
- **Property:** dev.dsf.server.auth.oidc.provider.client.trust.server.certificate.cas
- **Required:** No
- **Description:** Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to the OIDC provider
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/oidc_provider_trust_certificates.pem`
- **Default:** `ca/server_root_cas`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_DISCOVERY_PATH
- **Property:** dev.dsf.server.auth.oidc.provider.discovery.path
- **Required:** No
- **Description:** OIDC provider discovery path
- **Default:** `/.well-known/openid-configuration`


### DEV_DSF_SERVER_AUTH_OIDC_PROVIDER_REALM_BASE_URL
- **Property:** dev.dsf.server.auth.oidc.provider.realm.base.url
- **Required:** No
- **Description:** OIDC provider realm base url
- **Example:** `https://keycloak.test.com:8443/realms/example-realm-name`


### DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS
- **Property:** dev.dsf.server.auth.trust.client.certificate.cas
- **Required:** No
- **Description:** Folder with PEM encoded files (*.crt, *.pem) or a single PEM encoded file with one or more trusted full CA chains to validate client certificates for https connections from local and remote clients
- **Recommendation:** Add file to default folder via bind mount or use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`
- **Default:** `ca/client_ca_chains`


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
- **Required:** No
- **Description:** Web application context path, default in `bpe` docker image: `/bpe`, default in `fhir` docker image: `/fhir`
- **Recommendation:** Only modify for testing


### DEV_DSF_SERVER_STATUS_HOST
- **Property:** dev.dsf.server.status.host
- **Required:** No
- **Description:** Status connector host
- **Default:** `127.0.0.1`


### DEV_DSF_SERVER_STATUS_PORT
- **Property:** dev.dsf.server.status.port
- **Required:** No
- **Description:** Status connector port, default in docker image: `10000`
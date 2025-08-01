# Parameters FHIR Server

Please also check [common parameters](common) for additional configuration options.

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


### DEV_DSF_FHIR_SERVER_PAGE_COUNT
- **Property:** dev.dsf.fhir.server.page.count
- **Required:** No
- **Description:** The page size returned by the DSF FHIR server when reading/searching fhir resources
- **Default:** `20`


### DEV_DSF_FHIR_SERVER_ROLECONFIG
- **Property:** dev.dsf.fhir.server.roleConfig
- **Required:** Yes
- **Description:** Role config YAML


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



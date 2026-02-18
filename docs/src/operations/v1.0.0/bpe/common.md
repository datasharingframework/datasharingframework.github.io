# Common Parameters


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



---
title: Configuration Parameters
icon: config
---

### APP_SERVER_IP
- **Required:** Yes
- **Description:** Hostname or IP-Address of the DSF FHIR server application container, the reverse proxy target
- **Example:** `app`, `172.28.1.3`


### HTTPS_SERVER_NAME_PORT
- **Required:** Yes
- **Description:** External FQDN of your DSF FHIR server with port, typically `443`
- **Example:** `my-external.fqdn:443`


### PROXY_PASS_CONNECTION_TIMEOUT_HTTP
- **Required:** No
- **Description:** Connection timeout (seconds) for reverse proxy to app server http connection, time the proxy waits for a connection to be established
- **Default:** `30` seconds


### PROXY_PASS_CONNECTION_TIMEOUT_WS
- **Required:** No
- **Description:** Connection timeout (seconds) for reverse proxy to app server ws connection, time the proxy waits for a connection to be established
- **Default:** `30` seconds


### PROXY_PASS_TIMEOUT_HTTP
- **Required:** No
- **Description:** Timeout (seconds) for reverse proxy to app server http connection, time the proxy waits for a reply
- **Default:** `60` seconds


### PROXY_PASS_TIMEOUT_WS
- **Required:** No
- **Description:** Timeout (seconds) for reverse proxy to app server ws connection, time the proxy waits for a reply
- **Default:** `60` seconds


### SERVER_CONTEXT_PATH
- **Required:** No
- **Description:** Reverse proxy context path that delegates to the app server, `/` character at start, no `/` character at end, use `''` (empty string) to configure root as context path.
- **Default:** `/fhir`


### SSL_CA_CERTIFICATE_FILE
- **Required:** Yes
- **Description:** Certificate chain file including all signing, intermediate and ca certificate used to validate client certificates, PEM encoded, sets the apache httpd parameter `SSLCACertificateFile`
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/ssl_ca_certificate_file.pem`


### SSL_CA_DN_REQUEST_FILE
- **Required:** No
- **Description:** File containing all signing certificates excepted, will be used to specify the `Acceptable client certificate CA names` send to the client, during TLS handshake, sets the apache httpd parameter `SSLCADNRequestFile`; if omitted all entries from `SSL_CA_CERTIFICATE_FILE` are used
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/ssl_ca_dn_request_file.pem`


### SSL_CERTIFICATE_CHAIN_FILE
- **Required:** No
- **Description:** Certificate chain file, PEM encoded, must contain all certificates between the server certificate and the root ca certificate, sets the apache httpd parameter `SSLCertificateChainFile`; can be omitted if either no chain is needed (aka self signed server certificate) or the file specified via `SSL_CERTIFICATE_FILE` contains the certificate chain
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/ssl_certificate_chain_file.pem`


### SSL_CERTIFICATE_FILE
- **Required:** Yes
- **Description:** Server certificate file, PEM encoded, sets the apache httpd parameter `SSLCertificateFile`
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/ssl_certificate_file.pem`


### SSL_CERTIFICATE_KEY_FILE
- **Required:** Yes
- **Description:** Server certificate private key file, PEM encoded, unencrypted, sets the apache httpd parameter `SSLCertificateKeyFile`
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/ssl_certificate_key_file.pem`


### SSL_VERIFY_CLIENT
- **Required:** No
- **Description:** Modifies the apache mod_ssl config parameter `SSLVerifyClient`
- **Recommendation:** Set to `optional` when using OIDC authentication
- **Default:** `require`

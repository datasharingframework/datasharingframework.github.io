---
title: Upgrade from DSF 1.6.0
icon: update
---

Upgrading the DSF from 1.6.0 to 1.7.0 involves modifying the docker-compose.yml files and recreating the containers. In addition a number of docker secrets and environment variables can be removed if the newly introduced default values are sufficient. The now integrated defaults for trusted certificate authorities include updated configuration for the new certificate authority _HARICA_ used by _DFN e.V._ and _GÉANT TCS_. See the [Default Root Certificates](root-certificates) page for more details and to learn how to configure overrides.

**Note:** The configurations of trust stores for TLS connections managed by process plugins (for example HTTPS connections to the local KDS FHIR server) have not been modified with this release.

## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.7.0_upgrade`

2. Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.7.0 and remove not needed secrets and environment variables.
```diff
 version: '3.8'
 services:
   proxy:
-    image: ghcr.io/datasharingframework/fhir_proxy:1.6.0
+    image: ghcr.io/datasharingframework/fhir_proxy:1.7.0
     restart: on-failure
...
       - ssl_certificate_file.pem
       - ssl_certificate_key_file.pem
       - ssl_certificate_chain_file.pem
-      - ssl_ca_certificate_file.pem
-      - ssl_ca_dn_request_file.pem
     environment:
...
       SSL_CERTIFICATE_FILE: /run/secrets/ssl_certificate_file.pem
       SSL_CERTIFICATE_KEY_FILE: /run/secrets/ssl_certificate_key_file.pem
       SSL_CERTIFICATE_CHAIN_FILE: /run/secrets/ssl_certificate_chain_file.pem
-      SSL_CA_CERTIFICATE_FILE: /run/secrets/ssl_ca_certificate_file.pem
-      SSL_CA_DN_REQUEST_FILE: /run/secrets/ssl_ca_dn_request_file.pem
     networks:
...
   app:
-    image: ghcr.io/datasharingframework/fhir:1.6.0
+    image: ghcr.io/datasharingframework/fhir:1.7.0
     restart: on-failure
...
     secrets:
       - db_liquibase.password
       - db_user.password
       - db_user_permanent_delete.password
-      - app_client_trust_certificates.pem
       - app_client_certificate.pem
       - app_client_certificate_private_key.pem
       - app_client_certificate_private_key.pem.password
-      - ssl_ca_certificate_file.pem
     volumes:
...
     environment:
       TZ: Europe/Berlin
-      DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS:  /run/secrets/ssl_ca_certificate_file.pem
       DEV_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
...
       DEV_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE: /run/secrets/db_user_permanent_delete.password
-      DEV_DSF_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS: /run/secrets/app_client_trust_certificates.pem
       DEV_DSF_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_client_certificate.pem
...
 secrets:
...
-  ssl_ca_certificate_file.pem:
-    file: ./secrets/ssl_ca_certificate_file.pem
-  ssl_ca_dn_request_file.pem:
-    file: ./secrets/ssl_ca_dn_request_file.pem
...
-  app_client_trust_certificates.pem:
-    file: ./secrets/ssl_root_ca_certificate_file.pem
...
```

3. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.7.0_upgrade`

2. Modify the DSF BPE docker-compose.yml file, replace the version number with 1.7.0 and remove not needed secrets and environment variables.
```diff
 version: '3.8'
 services:
   app:
-    image: ghcr.io/datasharingframework/bpe:1.6.0
+    image: ghcr.io/datasharingframework/bpe:1.7.0
     restart: on-failure
     secrets:
       - db_liquibase.password
       - db_user.password
       - db_user_camunda.password
-      - app_client_trust_certificates.pem
       - app_client_certificate.pem
       - app_client_certificate_private_key.pem
       - app_client_certificate_private_key.pem.password
-      - ssl_ca_certificate_file.pem
     volumes:
...
     environment:
       TZ: Europe/Berlin
-      DEV_DSF_SERVER_AUTH_TRUST_CLIENT_CERTIFICATE_CAS: /run/secrets/ssl_ca_certificate_file.pem
       DEV_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE: /run/secrets/db_liquibase.password
...
       DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE: /run/secrets/db_user_camunda.password
-      DEV_DSF_BPE_FHIR_CLIENT_TRUST_SERVER_CERTIFICATE_CAS: /run/secrets/app_client_trust_certificates.pem
       DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE: /run/secrets/app_client_certificate.pem
...
 secrets:
...
-  app_client_trust_certificates.pem:
-    file: ./secrets/ssl_root_ca_certificate_file.pem
...
-  ssl_ca_certificate_file.pem:
-    file: ./secrets/ssl_ca_certificate_file.pem
...
```

3. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

4. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 1.7.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.7.0, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 1.7.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.7.0, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  

---
title: Upgrade from DSF 1.8.0
icon: update
---

Upgrading the DSF from 1.8.0 to 1.9.0 involves modifying the docker-compose.yml files, changing secret permissions, and recreating the containers. 

::: warning Update to DSF 1.7.0 first
When upgrading from DSF version < 1.7.0 it is important to migrate to [DSF 1.7.0 first](../v1.7.0/upgrade-from-1).
:::


## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.9.0_upgrade`

2. Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.9.0.
```diff
 version: '3.8'
 services:
   proxy:
-    image: ghcr.io/datasharingframework/fhir_proxy:1.8.0
+    image: ghcr.io/datasharingframework/fhir_proxy:1.9.0
     restart: on-failure
...
   app:
-    image: ghcr.io/datasharingframework/fhir:1.8.0
+    image: ghcr.io/datasharingframework/fhir:1.9.0
     restart: on-failure
...
 
```

3. **Adjust secret permissions (new in 1.9.0)**
   Starting with DSF 1.9.0, the FHIR Proxy service runs as a **non-root user** inside its container.
   To ensure continued access to certificates and keys, you must adjust ownership and permissions of the secrets folder.

   **Target permissions:**

   * **FHIR Server (app)** runs as `uid=2101`/`gid=2101` → must read **all secrets except** the proxy-only SSL files.
   * **FHIR Proxy (proxy)** runs as `uid=4101`/`gid=4101` → must read **only** secrets starting with `ssl_` (e.g. `ssl_certificate_file.pem`, `ssl_certificate_key_file.pem`).
   * To make this simple and compatible, we make all `ssl_*` files except (`ssl_certificate_file.pem`, `ssl_certificate_key_file.pem`) **world-readable (0444)**, allowing both users to access them.

   **Example (on FHIR host `/opt/fhir`):**

   ```bash
   # 1) Make directory traversable for all (no write access)
   sudo chown root:2101 secrets
   sudo chmod 555 secrets

   # 2) Default: all secrets owned by root:2101, readable by owner+group
   sudo chown root:2101 secrets/*
   sudo chmod 440 secrets/*

   # 3) Exceptions: SSL files also readable by proxy, except the certificate and private
   sudo chmod 444 secrets/ssl_*

   # 4) Ensure the SSL certificate and private key files are only readable by the proxy
   sudo chown root:4101 secrets/ssl_certificate_file.pem
   sudo chown root:4101 secrets/ssl_certificate_key_file.pem
   sudo chmod 440 secrets/ssl_certificate_file.pem
   sudo chmod 440 secrets/ssl_certificate_key_file.pem
   ```

   **Advanced configuration to further constrain access privileges (Optional)**
   
   If you prefer not to make ssl_* world-readable, use ACLs instead:

   ```bash
    sudo apt-get install -y acl  # if needed
    sudo setfacl -m g:2101:r,g:4101:r secrets/ssl_*
    sudo setfacl -m o::0 secrets/ssl_*
   ```

4. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.9.0_upgrade`

2. Modify the DSF BPE docker-compose.yml file, replace the version number with 1.9.0.
```diff
 version: '3.8'
 services:
   app:
-    image: ghcr.io/datasharingframework/bpe:1.8.0
+    image: ghcr.io/datasharingframework/bpe:1.9.0
     restart: on-failure
...
```

3. **Adjust secret permissions (only if using BPE Proxy)**
   If your setup includes a BPE Proxy (disabled by default), it also runs as non-root and needs read access to its certificate files.

   **Target permissions:**

   * **BPE Server (app)** runs as `uid=2202`/`gid=2202` → read all secrets except proxy-only SSL files.
   * **BPE Proxy (proxy)** runs as `uid=4202`/`gid=4202` → read only `ssl_*` files.

   **Example (on `/opt/bpe`):**

   ```bash
   sudo chown root:2202 secrets
   sudo chmod 555 secrets
   sudo chown root:2202 secrets/*
   sudo chmod 440 secrets/*

   sudo chmod 444 secrets/ssl_*

   sudo chown root:4202 secrets/ssl_certificate_file.pem
   sudo chown root:4202 secrets/ssl_certificate_key_file.pem

   sudo chmod 440 secrets/ssl_certificate_file.pem
   sudo chmod 440 secrets/ssl_certificate_key_file.pem
   ```

4. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

5. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 1.9.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.9.0, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 1.9.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.9.0, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  

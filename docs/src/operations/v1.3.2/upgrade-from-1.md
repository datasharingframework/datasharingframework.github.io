---
title: Upgrade from DSF 1.3.1
icon: update
---

Upgrading the DSF from 1.3.1 to 1.3.2 involves modifying the docker-compose.yml files and recreating the containers.


::: warning Update to DSF 1.2.0 first
When upgrading from 1.0.0 or 1.1.0 it is important to migrate to [DSF 1.2.0 first](../v1.2.0/upgrade-from-1).
:::


## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.3.2_upgrade`

2. Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.3.2.
```diff
version: '3.8'
services:
  proxy:
-   image: ghcr.io/datasharingframework/fhir_proxy:1.3.1
+   image: ghcr.io/datasharingframework/fhir_proxy:1.3.2
    restart: on-failure
...
  app:
-   image: ghcr.io/datasharingframework/fhir:1.3.1
+   image: ghcr.io/datasharingframework/fhir:1.3.2
    restart: on-failure
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
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.3.2_upgrade`

2. Modify the DSF BPE docker-compose.yml file, replace the version number with 1.3.2.
```diff
version: '3.8'
services:
  app:
-   image: ghcr.io/datasharingframework/bpe:1.3.1
+   image: ghcr.io/datasharingframework/bpe:1.3.2
    restart: on-failure
...
```

3. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

4. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 1.3.2. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.3.2, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 1.3.2. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.3.2, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  

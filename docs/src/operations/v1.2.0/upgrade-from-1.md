---
title: Upgrade from DSF 1.1.0
icon: update
---

Upgrading the DSF from 1.1.0 to 1.2.0 involves modifying the docker-compose.yml files and recreating the containers.


::: tip Upgrade from 0.9.x
If you want to migrate from DSF 0.9.x, please follow [these instructions](upgrade-from-0).
:::

## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.2.0_upgrade`

2. Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.2.0 and remove the old healthcheck definition. The new healthcheck is defined as part of the docker image.
```diff
version: '3.8'
services:
  proxy:
-   image: ghcr.io/datasharingframework/fhir_proxy:1.1.0
+   image: ghcr.io/datasharingframework/fhir_proxy:1.2.0
    restart: on-failure
...
  app:
-   image: ghcr.io/datasharingframework/fhir:1.1.0
+   image: ghcr.io/datasharingframework/fhir:1.2.0
    restart: on-failure
-   healthcheck:
-     test: ["CMD", "java", "-cp", "dsf_fhir.jar", "dev.dsf.common.status.client.StatusClient"]
-     interval: 10s
-     timeout: 15s
-     retries: 5
...
```

3. The role configuration is now optional. If you don't use roles, you can remove the role config (default for new installations):
```diff
  app:
...
    environment:
...
-     # TODO specify role configuration to allow access to the UI via web-browser or REST API for specific users, see documentation at dsf.dev
-     DEV_DSF_FHIR_SERVER_ROLECONFIG: |
```

4. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.2.0_upgrade`

2. Modify the DSF BPE docker-compose.yml file, replace the version number with 1.2.0 and remove the old healthcheck definition. The new healthcheck is defined as part of the docker image.
```diff
version: '3.8'
services:
  app:
-   image: ghcr.io/datasharingframework/bpe:1.1.0
+   image: ghcr.io/datasharingframework/bpe:1.2.0
    restart: on-failure
-   healthcheck:
-     test: ["CMD", "java", "-cp", "dsf_bpe.jar", "dev.dsf.common.status.client.StatusClient"]
-     interval: 10s
-     timeout: 15s
-     retries: 5
...
```

3. DSF v1.2.0 is not compatible with the Ping/Pong process plugin v1.0.0.0, upgrade to the [Ping/Pong plugin v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases) by removing the old jar file and replacing it with the new v1.0.1.0 one.

4. We have released a new version of the Allow List Process plugin where we added support for delete operations. Please upgrade to the [Allow-List process v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases) by removing the old jar file and replacing it with the new v1.0.0.1 one.

5. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

6. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 1.2.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.2.0, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 1.2.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.2.0, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  

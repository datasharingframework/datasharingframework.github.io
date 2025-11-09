---
title: Upgrade from DSF 1.9.0
icon: update
---

::: danger DSF 2.0 Release Candidate
This is a **pre-release version** of the Data Sharing Framework (DSF) 2.0.  
Please **do not use this version in production environments**.

We kindly invite **experienced DSF administrators** to test this release on their **staging or test instances** and share their feedback with us through the usual [communication channels](/community/communication#contact-the-team).

Thank you for helping us improve the DSF!
:::

Upgrading the DSF from 1.9.0 to 2.0.0-RC1 involves modifying the docker-compose.yml files and recreating the containers. 

::: warning Update to DSF 1.9.0 first
When upgrading from DSF version < 1.9.0 it is important to migrate to [DSF 1.9.0 first](../v1.9.0/upgrade-from-1).
:::


## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_2.0.0-RC1_upgrade`

2. Modify the DSF FHIR docker-compose.yml file, replace the version number with 2.0.0-RC1.
```diff
 version: '3.8'
 services:
   proxy:
-    image: ghcr.io/datasharingframework/fhir_proxy:1.9.0
+    image: ghcr.io/datasharingframework/fhir_proxy:2.0.0-RC1
     restart: on-failure
...
   app:
-    image: ghcr.io/datasharingframework/fhir:1.9.0
+    image: ghcr.io/datasharingframework/fhir:2.0.0-RC1
     restart: on-failure
...
     environment:
-      DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT: f4344032fe77bffb...
...
 
```
The environment variable `DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT` does not need to be specified starting version 2.0.0-RC1. The thumbprint is now calculated based on the client certificate specified via `DEV_DSF_FHIR_CLIENT_CERTIFICATE`.


3. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_2.0.0-RC1_upgrade`

2. Modify the DSF BPE docker-compose.yml file, replace the version number with 2.0.0-RC1.
```diff
 version: '3.8'
 services:
   app:
-    image: ghcr.io/datasharingframework/bpe:1.9.0
+    image: ghcr.io/datasharingframework/bpe:2.0.0-RC1
     restart: on-failure
...
```

3. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

5. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 2.0.0-RC1. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 2.0.0-RC1, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 2.0.0-RC1. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 2.0.0-RC1, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  

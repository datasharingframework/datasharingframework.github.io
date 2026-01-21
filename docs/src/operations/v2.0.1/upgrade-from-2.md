---
title: Upgrade from DSF 2.0.0
icon: update
---

Upgrading the DSF from 2.0.0 to 2.0.1 involves modifying the image versions in the docker-compose.yml files and recreating the containers. 


DSF 2 was designed to run DSF 1 (APIv1) process plugins, but due to stricter validation rules in DSF 2 we strongly recommend using the latest compatible plugin versions. Updates within the same major and minor version (e.g., from 1.2.3.4 to 1.2.9.9) are generally safe. An overview of the recommended MII/NUM versions can be found [here](./install-plugins.md).

## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_2.0.1_upgrade`

2. Modify the DSF FHIR docker-compose.yml file, replace the version number with 2.0.1.
```diff
 version: '3.8'
 services:
   proxy:
-    image: ghcr.io/datasharingframework/fhir_proxy:2.0.0
+    image: ghcr.io/datasharingframework/fhir_proxy:2.0.1
     restart: on-failure
...
   app:
-    image: ghcr.io/datasharingframework/fhir:2.0.0
+    image: ghcr.io/datasharingframework/fhir:2.0.1
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
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_2.0.1_upgrade`

2. Modify the DSF BPE docker-compose.yml file, replace the version number with 2.0.1.
```diff
 version: '3.8'
 services:
   app:
-    image: ghcr.io/datasharingframework/bpe:2.0.0
+    image: ghcr.io/datasharingframework/bpe:2.0.1
     restart: on-failure
...

 
```

3. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

5. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 2.0.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 2.0.1, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 2.0.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 2.0.1, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  


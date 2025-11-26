---
title: Upgrade from DSF 1.9.0
icon: update
---

::: info DSF 2.0.1
This is one of the first **released versions** of the Data Sharing Framework (DSF) 2.0.  
Please **do not use this version in production environments**.

We kindly invite **all DSF administrators** to test this release on their **staging or test instances** and share their feedback with us through the usual [communication channels](/community/communication#contact-the-team).

Thank you for helping us improve the DSF!
:::

Upgrading the DSF from 1.9.0 to 2.0.0 involves modifying the docker-compose.yml files and recreating the containers. 

::: warning Update to DSF 1.9.0 first
When upgrading from DSF version < 1.9.0 it is important to migrate to [DSF 1.9.0 first](../v1.9.0/upgrade-from-1).
:::

For DSF 2, we refined the [system requirements](install.md#prerequisites). If your current DSF 1 setup works, it should also work with DSF 2. As DSF 2 is designed to support large file transfers, you might need to increase the storage on the DSF FHIR Server instance.

::: info Non-standard configuration changes

Most non-standard configuration changes working in DSF 1 will continue to work in DSF 2. If you have set custom timeout options please change them to the ISO 8601 standard. `120000` (Milliseconds) must be changed to `PT2M`.

- You can now use more advanced [logging options](./fhir/logging.md).
- If you use your own certificate authority, the [configuration](root-certificates.md) will be easier.
- More granular control in [access control / role config settings](./fhir/access-control.md).
:::

We recommend upgrading the PostgreSQL DBMS from version 15 to version 18. At present, it is possible to use PostgreSQL version 15, but we exclusively support PostgreSQL version 18 and test the DSF solely with version 18.
The DBMS upgrade is described below in the update instructions.

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
-    image: ghcr.io/datasharingframework/fhir_proxy:1.9.0
+    image: ghcr.io/datasharingframework/fhir_proxy:2.0.1
     restart: on-failure
...
   app:
-    image: ghcr.io/datasharingframework/fhir:1.9.0
+    image: ghcr.io/datasharingframework/fhir:2.0.1
     restart: on-failure
...
     environment:
-      DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT: f4344032fe77bffb...
...
 
```
The environment variable `DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT` does not need to be specified starting version 2.0.0. The thumbprint is now calculated based on the client certificate specified via `DEV_DSF_FHIR_CLIENT_CERTIFICATE`.


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
-    image: ghcr.io/datasharingframework/bpe:1.9.0
+    image: ghcr.io/datasharingframework/bpe:2.0.1
     restart: on-failure
...
     environment:
-      DEV_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE: /run/secrets/db_user_camunda.password
+      DEV_DSF_BPE_DB_USER_ENGINE_PASSWORD_FILE: /run/secrets/db_user_camunda.password
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


## Upgrade PostgreSQL from 15 to 18
To upgrade your DSF databases, you have to stop the application, dump your database, recreate the bind mount directory, update the version, start it, restore the backup and start the application again.

### On the DSF FHIR Server

1. Stop the application
    From `/opt/fhir` execute
    ```
    docker compose down app
    ```
2. Dump the database
    From `/opt/fhir` execute
    ```
    docker compose exec db pg_dumpall -U liquibase_user > dump.sql
    ```
3. Stop the database
    From `/opt/fhir` execute
    ```
    docker compose down db
    ```
4. Recreate the database bind mount directory
    From `/opt/fhir` execute
    ```
    mv postgres-data postgres-data-psql-15
    mkdir postgres-data
    ```
5. Update the version and change the bind mount target to respect the [PostgreSQL best practices](https://github.com/docker-library/postgres/pull/1259) in `/opt/fhir/docker-compose.yml`
    ```diff
    db:
    -    image: postgres:15
    +    image: postgres:18
         restart: always
         healthcheck:
             test: ["CMD-SHELL", "pg_isready -U liquibase_user -d fhir"]
             interval: 10s
             timeout: 5s
             retries: 5
         volumes:
         - type: bind
           source: ./postgres-data
    -      target: /var/lib/postgresql/data
    +      target: /var/lib/postgresql  
    ```
6. Start the new database
    From `/opt/fhir` execute
    ```
    docker compose up -d db
    ```
7. Restore the database dump
    From `/opt/fhir` execute
    ```
    cat dump.sql | docker compose exec -T db psql -U liquibase_user fhir
    ```
8. Start the application
    From `/opt/fhir` execute
    ```
    docker compose up -d && docker compose logs -f app
    ```

### On the DSF BPE Server

1. Stop the application
    From `/opt/bpe` execute
    ```
    docker compose down app
    ```
2. Dump the database
    From `/opt/bpe` execute
    ```
    docker compose exec db pg_dumpall -U liquibase_user > dump.sql
    ```
3. Stop the database
    From `/opt/bpe` execute
    ```
    docker compose down db
    ```
4. Recreate the database bind mount directory
    From `/opt/bpe` execute
    ```
    mv postgres-data postgres-data-psql-15
    mkdir postgres-data
    ```
5. Update the version and change the bind mount target to respect the [PostgreSQL best practices](https://github.com/docker-library/postgres/pull/1259) in `/opt/bpe/docker-compose.yml`
    ```diff
    db:
    -    image: postgres:15
    +    image: postgres:18
         restart: always
         healthcheck:
             test: ["CMD-SHELL", "pg_isready -U liquibase_user -d bpe"]
             interval: 10s
             timeout: 5s
             retries: 5
         volumes:
         - type: bind
           source: ./postgres-data
    -      target: /var/lib/postgresql/data
    +      target: /var/lib/postgresql  
    ```
6. Start the new database
    From `/opt/bpe` execute
    ```
    docker compose up -d db
    ```
7. Restore the database dump
    From `/opt/bpe` execute
    ```
    cat dump.sql | docker compose exec -T db psql -U liquibase_user bpe
    ```
8. Start the application
    From `/opt/bpe` execute
    ```
    docker compose up -d && docker compose logs -f app
    ```

Once you have ensured that DSF is working successfully with the new database, you can remove the dump.sql file and the postgres-data-psql-15 directory. As a precaution, we recommend keeping the postgres-data-psql-15 directory for some time.
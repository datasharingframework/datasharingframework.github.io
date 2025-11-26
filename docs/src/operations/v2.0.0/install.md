---
title: Install DSF 2.0.0
icon: install
---

::: info DSF 2.0.0
This is the first **released version** of the Data Sharing Framework (DSF) 2.0.  
Please **do not use this version in production environments**.

We kindly invite **all DSF administrators** to test this release on their **staging or test instances** and share their feedback with us through the usual [communication channels](/community/communication#contact-the-team).

Thank you for helping us improve the DSF!
:::

In the following installation manual we will show you how you can install your own DSF instance to be part of an already existing DSF network.


## Prerequisites
### Virtual Machines
* DSF FHIR VM: min. 4 GB RAM, 4 vCPU, 100 GB HDD
* DSF BPE VM: min. 8 GB RAM, 4 vCPU, 20 GB HDD

If you plan to transfer a lot of large files, we recommend a larger FHIR VM disk for temporary storage (if your largest file to transfer is 200GB in size, we recommend a disk with a size of at least 1TB).

Please make sure to use a CPU with a modern instruction set with crypto acceleration enabled. We saw large performance drops on systems with inadequate hardware.

### Docker / Docker-Compose
Both VMs need latest docker and docker compose. For the latest install guide see https://docs.docker.com/engine/install. 

```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

The current version of docker compose is installed with the current docker version.

### Client/Server Certificates
Two Certificates from a list of allowed certificate authorities (see [details about certificates](root-certificates.html)) are needed:
* Certificate _A_: Server Certificate  - `TLS Web Server Authentication`
* Certificate _B_: Client Certificate  - `TLS Web Client Authentication`

If you use GÉANT TCS certificates, then they are configured by default with the necessary *X509v3 Extended Key Usage*s: `TLS Web Server Authentication, TLS Web Client Authentication`.

For further details on supported Root Certificate Authorities click [here](root-certificates.html#list-of-default-trusted-certificate-authorities)


### Network setup / Network access

* The DSF FHIR server needs to be accessible via the internet and able to access the internet without TLS interception.
* The BPE FHIR server should only be accessible by the internal network and able to access your DSF FHIR server via its external FQDN and the internet without TLS interception.

Here is a quick overview of the expected network setup.

| Source                        | Target                        | Port | Protocol               |
| ----------------------------- | ----------------------------- | ---- | ---------------------- |
| DSF BPE (local)               | DSF FHIR (local)              | 443  | https, wss             |
| DSF BPE (local)               | DSF FHIR (other DSF communication partners)	| 443  | https                  |
| DSF FHIR (local)              | DSF FHIR (other DSF communication partners)	| 443  | https (HTTP HEAD only) |
| DSF BPE (other DSF communication partners)  | DSF FHIR (local)              | 443  | https                  |
| DSF FHIR (other DSF communication partners) | DSF FHIR (local)              | 443  | https (HTTP HEAD only) |

 Connections to services that are used by process plugins (e.g. a fTTP, a terminology server, simplifier.net or a local FHIR server) are not listed. Please refer to the respective process plugin documentation pages for more information.



## Setup
### Prepare Certificates
1. Server Certificate (certificate _A_)  
    _This certificate will be used as the DSF FHIR servers server certificate (ssl_certificate_file.pem, ssl_certificate_key_file.pem)_
    * Store PEM encoded certificate as `ssl_certificate_file.pem`
    * Store unencrypted, PEM encoded private-key as `ssl_certificate_key_file.pem`
    * Store PEM encoded certificate chain (all intermediate CAs between the server and the root certificate, excluding root) as `ssl_certificate_chain_file.pem`

1. Client Certificate (Certificate _B_)  
    _This certificate will be used as the DSF BPE servers client certificate (client_certificate.pem, client_certificate_private_key.pem) as well as the DSF FHIR servers client certificate (client_certificate.pem, client_certificate_private_key.pem)_
    * Store PEM encoded certificate as `client_certificate.pem`
    * Store encrypted or not encrypted, PEM encoded private-key as `client_certificate_private_key.pem`

### DSF FHIR Server
1. Add Group/User  
    Add group and user used by the DSF FHIR java application. Ubuntu compatible commands below:
    ```
    sudo groupadd --gid 2101 fhir
    sudo useradd --system --no-create-home --uid 2101 --gid 2101 fhir
    ```

1. Download and Extract Config Files  
    Download and unpack the prepared DSF FHIR server config files and folder structure:
    ```
    cd /opt
    wget https://dsf.dev/download/dsf_fhir_2_0_0.tar.gz
    sudo tar --same-owner -zxvf dsf_fhir_2_0_0.tar.gz
    ```
    _The `tar` command will unpack the config files at `/opt/fhir` assuming you changed into the `/opt` directory._

1. Verify that the `fhir` system user or group can write into the following folder
   * `/opt/fhir/log`

1. Add certificates and keys
    * Add the server certificate (certificate _A_), the corresponding private-key and the certificate chain (one file with all intermediate certificates, excluding the root CA) to **/opt/fhir/secrets/**
        * ssl_certificate_file.pem (chmod: 440, chown: root:4101, 4101 is the user of the fhir proxy)
        * ssl_certificate_key_file.pem (chmod: 440, chown: root:4101)
        * ssl_certificate_chain_file.pem  (chmod: 444, chown: root:fhir)
    * Add the client certificate (Certificate _B_) and the corresponding private-key to **/opt/fhir/secrets/**
        * client_certificate.pem (chmod: 440, chown: root:fhir)
        * client_certificate_private_key.pem (chmod: 440, chown: root:fhir)
    * If the private key is encrypted, add a password file with the password as the only content to **/opt/fhir/secrets/client_certificate_private_key.pem.password**
    * If the private key is not encrypted, remove the corresponding docker secret lines from the `docker-compose.yml` file
        ```
        L37:      - app_client_certificate_private_key.pem.password
        ...
        L50:      DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
        ...
        L108:  app_client_certificate_private_key.pem.password:
        L109:    file: ./secrets/client_certificate_private_key.pem.password
        ```

    ::: tip How to chmod / chown
    For the example *ssl_certificate_file.pem (chmod: 440, chown: root:4101)* you must:

    1. Set the file content as requested
    2. Change the file permissions to 440 (allow read access to the owner of the file and the group the file belongs to, deny write access to everybody and deny read for other users):
    `chmod 440 /opt/fhir/secrets/ssl_certificate_file.pem`
    3. Change the owner of the file to the user root and the group the file belongs to to the id 4101:
    `chown fhir:docker /opt/fhir/secrets/ssl_certificate_file.pem`

    :::

1. Modify database passwords
    * **/opt/fhir/secrets/db_liquibase.password**
        * Generate a random password (min. 32 characters recommended) and replace the content of the file.
    * **/opt/fhir/secrets/db_user.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.
    * **/opt/fhir/secrets/db_user_permanent_delete.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.

1. Modify the docker-compose.yml file and set environment variables to the appropriate values
    * **services -> proxy -> environment:**
        * **HTTPS_SERVER_NAME_PORT**: `dsf.todo.organization.com:443`
            Set your FHIR servers external FQDN, e.g. `https://foo.bar.de` -> `foo.bar.de:443`
        * For additional environment variables, see the FHIR Reverse Proxy [Configuration Parameters](fhir-reverse-proxy/configuration) page.
    * **services -> app -> environment:**
        * **DEV_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE**: `todo.organization.com`  
            Set your Organizations DSF identifier, aka the shortest FQDN that resolves to the main homepage of the organization, e.g. `hs-heilbronn.de`
        * **DEV_DSF_FHIR_SERVER_BASE_URL**: `https://dsf.todo.organization.com/fhir`  
            Set your FHIR servers external FQDN, e.g. `foo.bar.de` -> `https://foo.bar.de/fhir`
        * **DEV_DSF_FHIR_SERVER_ROLECONFIG**: `|`
            (Optional) You can add other client certificates (e.g. personal certificates from admins) to your DSF instance. For additional information, see the FHIR server [Access Control](fhir/access-control) page.
            
        * For additional environment variables, see the FHIR server [Configuration Parameters](fhir/configuration) page.

1. Start the DSF FHIR Server  
    Start using: `docker compose up -d && docker compose logs -f` (Ctrl-C will close log, but not stop container)

### DSF BPE Server
1. Add Group/User  
    Add group and user used by the DSF BPE java application. Ubuntu compatible commands below:
    ```
    sudo groupadd --gid 2202 bpe
    sudo useradd --system --no-create-home --uid 2202 --gid 2202 bpe
    ```
1. Download and Extract Config Files  
    Download and extract prepared DSF BPE server config files and folder structure:  
    ```
    cd /opt
    wget https://dsf.dev/download/dsf_bpe_2_0_0.tar.gz
    sudo tar --same-owner -zxvf dsf_bpe_2_0_0.tar.gz
    ```
    _The `tar` command will unpack the config files at `/opt/bpe` assuming you changed into the `/opt` directory._

1. Verify that the `bpe` system user or group can write into the following folders
   * `/opt/bpe/log`

1. Add certificates and keys
    * Add the client certificate (Certificate _B_) and the corresponding private-key to **/opt/bpe/secrets/**
        * client_certificate.pem (chmod: 440 chown: root:bpe)
        * client_certificate_private_key.pem (chmod: 440 chown: root:bpe)
    * If the private key is encrypted, add a password file with the password as the only content to **/opt/bpe/secrets/client_certificate_private_key.pem.password**
    * If the private key is not encrypted, remove the corresponding docker secret lines from the `docker-compose.yml` file
        ```
        L11:      - app_client_certificate_private_key.pem.password
        ...
        L31:      DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
        ...
        L82:  app_client_certificate_private_key.pem.password:
        L83:    file: ./secrets/client_certificate_private_key.pem.password
        ```
1. Modify database passwords
    * **/opt/bpe/secrets/db_liquibase.password**
        * Generate a random password (min. 32 characters recommended) and replace the content of the file.
    * **/opt/bpe/secrets/db_user.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.
    * **/opt/bpe/secrets/db_user_camunda.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.

1. Modify the docker-compose.yml file and set environment variables to the appropriate values
    * **services -> app -> environment:**
        * **DEV_DSF_BPE_FHIR_SERVER_BASE_URL**: `https://dsf.todo.organization.com/fhir`  
            Set your FHIR servers external FQDN, e.g. `foo.bar.de` -> `https://foo.bar.de/fhir`
            
        * For additional environment variables, see the BPE server [Configuration Parameters](bpe/configuration) page.

1. Start the DSF BPE Server (without process plugins)  
    Start using: `docker compose up -d && docker compose logs -f` (Ctrl-C will close log, but not stop container)

1. Verify DSF BPE Startup  
    * Check that the BPE was able to download new Task resources from the DSF FHIR server during startup.
    * Check that the BPE was able to download a Subscription resource from the DSF FHIR server during startup.
    * Check that the BPE was able to connect to the websocket endpoint of the DSF FHIR server during startup.

    If you need to debug the TLS connection to your DSF FHIR server use for example:  
    `docker run -it --rm alpine/openssl s_client your-fhir-server.fqdn:443`  
    The command above should print the server certificate of your DSF FHIR server (certificate _A_) and end with a message like `[...]tlsv13 alert certificate required[...]`


### Logs
By default, we will log both to the console (collected by docker) and to files in the log directory, so you can use `docker compose logs -f` in `/opt/bpe` and `/opt/fhir` to view informational, warning and error logs. If you encounter any error and the reported information is not detailed enough, you can also check the logs in the `/opt/fhir/log` and `/opt/bpe/log` directories with debugging logs. There, you will also find older log files. If you have any questions and can't resolve them by yourself please always include the latest logs from `/opt/fhir/log` and `/opt/bpe/log` in your support request.

On a successful BPE start, you should see the following entries in your BPE log:

```
INFO Grizzly(1) -  INFO Grizzly(1) - ClientEndpoint.onOpen(37) | Websocket open, session SOME_RANDOM_UUID1
INFO Grizzly(1) -  INFO Grizzly(1) - ClientEndpoint.onOpen(37) | Websocket open, session SOME_RANDOM_UUID2
```

### On-Boarding
Please visit the on boarding website of your network for more information.

::: tip Ideas for improvement?
Have you found an error or is something unclear to you? Then please feel free to write to us at <a href="mailto:dsf-gecko@hs-heilbronn.de">dsf-gecko@hs-heilbronn.de</a>. Thank you very much!
:::
---
title: Install Plugins
icon: plugin
---


## **Overview**
- You can find an overview of compatable process plugins below (last updated 2026-01-19).


| Process Plugin | released for test | released for production |
| -------------- | ----------------- | ----------------------- |
| [Ping-Pong](https://github.com/datasharingframework/dsf-process-ping-pong/releases) | [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) & [v2.0.0.2](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v2.0.0.2) | [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) & [v2.0.0.2](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v2.0.0.2) |
| [Allow-List](https://github.com/datasharingframework/dsf-process-allow-list/releases) | [v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1) | [v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1) |
| [MII Process Feasibility](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases) | [v1.0.0.11](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.11) | [v1.0.0.11](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.11) |
| [MII Process Report](https://github.com/medizininformatik-initiative/mii-process-report/releases) | [v1.2.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.2.0.1) | [v1.2.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.2.0.1) |
| [MII Process Data Transfer](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases) | [v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.1.0.1) | [v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.1.0.1) |
| [MII Process Data Sharing](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases) | [v1.1.0.0](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.1.0.0) | [v1.1.0.0](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.1.0.0) |
| [NUM Dashboard Report](https://github.com/medizininformatik-initiative/dsf-plugin-numdashboard/releases) [Note](#num-dashboard-report-on-dsf-2) | [v1.1.0.0](https://github.com/medizininformatik-initiative/dsf-plugin-numdashboard/releases/tag/v1.1.0.0) | [v1.1.0.0](https://github.com/medizininformatik-initiative/dsf-plugin-numdashboard/releases/tag/v1.1.0.0) |

- Deploying the process plugin to the DSF involves copy the process jar-file and configuring environment variable for the business process engine (BPE).


### Prerequisites
- A DSF installation of version 2.0.0 or higher. An installation guide can be found [here](https://dsf.dev/operations/latest/install.html).

### Deployment
- Add the process jar-file to the DSF BPE folder `/opt/bpe/process`: 
```
wget (your jar-file download link)
```

For example:
```
 wget https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/download/v1.1.0.0/mii-process-data-sharing-1.1.0.0.jar
```

- Make sure the process is readable by the bpe user or group, for example by executing:
```
sudo chmod 440 (your jar-file name.jar)
sudo chown root:bpe (your jar-file name.jar)
```
For example:
```
sudo chmod 440 mii-process-data-sharing-1.1.0.0.jar
sudo chown root:bpe mii-process-data-sharing-1.1.0.0.jar
```

- Modify the process exclude config in `/opt/bpe/docker-compose.yml`
- **Reminder:** Update/verify required configurations in `docker-compose.yml`


### NUM Dashboard Report on DSF 2
The NUM Dashboard Report Plugin is now fully compabile with DSF 2.0.2 and above. If you implemented the workaround for DSF 2.0.1 and below, you can remove it:


1. Remove the file with the name `api-v1-allowed-bpe-classes.list`


2. Edit the `docker-compose.yml` file and remove the following volume and environment variable:

```yaml
...
  app:
    image: ghcr.io/datasharingframework/bpe:2.0.2
...
    volumes:
...
      - type: bind
        source: api-v1-allowed-bpe-classes.list
        target: /api-v1-allowed-bpe-classes.list
...
    environment:
      DEV_DSF_BPE_PROCESS_API_ALLOWED_BPE_CLASSES: "{v1: '/api-v1-allowed-bpe-classes.list'}"
...
```

3. Restart the application container with `docker compose up -d && docker compose logs -f`.

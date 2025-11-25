---
title: Install Plugins
icon: plugin
---

::: tip Marketplace for process plugins
To install and learn more about each Process Plugin, you can visit the Marketplace [here](https://hub.dsf.dev).
:::


## **Overview**
- You can find an overview of compatable process plugins below (last updated 2025-11-25).


| Process Plugin | released for test | released for production |
| -------------- | ----------------- | ----------------------- |
| [Ping-Pong](https://github.com/datasharingframework/dsf-process-ping-pong/releases) | [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) & [v2.0.0.2](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v2.0.0.2) | [v1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) & [v2.0.0.2](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v2.0.0.2) |
| [Allow-List](https://github.com/datasharingframework/dsf-process-allow-list/releases) | [v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1) | [v1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1) |
| [MII Process Feasibility](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases) | [v1.0.0.10](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.10) | [v1.0.0.10](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.10) |
| [MII Process Report](https://github.com/medizininformatik-initiative/mii-process-report/releases) | [v1.2.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.2.0.1) | [v1.2.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.2.0.1) |
| [MII Process Data Transfer](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases) | [v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.1.0.1) | [v1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.1.0.1) |
| [MII Process Data Sharing](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases) | [v1.1.0.0](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.1.0.0) | [v1.1.0.0](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.1.0.0) |


- Explore and install Process Plugins in the Marketplace. Details on each plugin are available [here](https://hub.dsf.dev/).
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

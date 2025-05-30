---
title: Upgrade from DSF 0.9.x
icon: update
---

A direct upgrade from DSF 0.9.x to DSF 1.x is not supported. 

:::danger Do not use your 0.9.x configuration as starting point
There are too many changes between DSF 0.9.x and DSF 1.x to use the old configuration as starting point and just adapt some configuration parameter names.

**Please** use the new installation manual to perform a new installation and use the old setup only for reference.
:::


Instead, please perform the following steps:


1. Shut down your DSF instances (DSF FHIR Server and DSF BPE).
2. Backup your DSF instances (e.g. by moving the folders `/opt/bpe` and `/opt/fhir` to `/opt/bpe_0.9` and `/opt/fhir_0.9`)
3. Install the new DSF according to the [instructions](install).
4. You can copy **your** certificates (server- and client certificates) to your new installation. Please do **not** copy the CA certificate files from your old installation, as the new version will contain additional CAs (e.g. D-Trust).
5. Configure your processes according to the **new** process plugin [documentation](./install-plugins). You can use your **test** environment configuration and your old production setup configuration for reference. Please ensure to use the **new** configuration parameter names, as many of them will have new prefixes (like `DEV_DSF` instead of `ORG_HIGHMED`).
6. If you perform the installation before the change of the according environment, you can start the old instances again (out of the `/opt/fhir_0.9` and `/opt/bpe_0.9` directories).
7. If you want to replace the old setup with the new one, shutdown the old instances (FHIR + BPE) and start the new ones.

::: tip New process plugins
Please do not copy your old process plugins into the new DSF. There will be a new release for each process plugin at the time you will be prompted to update your DSF instance.
:::

::: tip Use your old virtual machine
We recommand the usage of your old DSF 0.9.x virtual machine for your new DSF 1.x setup. This will ensure that you already have the required firewall settings in place.
:::
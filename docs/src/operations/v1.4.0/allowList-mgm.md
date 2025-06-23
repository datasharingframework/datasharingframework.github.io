---
title: Allow List Management
icon: share
---

:::danger
This is an outdated version of the Allow List Management documentation. Please use [the current version](/operations/latest/allowList-mgm.md), even if you use an outdated DSF version.
:::

You can read all about the concept of Allow Lists [in our introduction](/explore/concepts/allow-list.md).

## Overview
To simplify the DSF Allow List Management we have built a portal for administration. The portal is managed by the GECKO Institute at Heilbronn University. You as an DSF administrator can create or update your Allow List information. The information you provide on this portal will be transferred to us and will be used to built Allow List bundles that get distributed to the communication partners of the distributed processes. 

The DSF Allow List management tool uses client certificates for authentication. You can either use a personal client certificate or the client certificate from your DSF BPE, which needs to be added to your web-browsers certificate store.


## Prerequisites
1. Deployed DSF instance (test or production infrastructure)
    1.1  If none exists yet, read [the installation guide](install)
2. Certificate 
    2.1  If none exists yet, read [the certificate requirements](install#client-server-certificates)
3. Organization identifier, shortest FQDN of your organizations website, e.g. `my-hospital.de`
4. FHIR endpoint URL, e.g. `https://dsf.my-hospital.de/fhir`
5. Contact details from a responsible person of your organization
6. Access to the E-Mail address from your organization for verification 
 

## Start here
When you have fulfilled all the prerequisites, you can start managing your Allow Lists via the environment specific Allow List Management Tool:

- [**Test** infrastructure](https://allowlist-test.gecko.hs-heilbronn.de)
- [**Production** infrastructure](https://allowlist.gecko.hs-heilbronn.de)

We use different highlight colors for the DSF Allow List Management Tool: Green for the **Test** environment and blue for the **Production** infrastructure. To access the site, you have to authenticate yourself with a client certificate. Your web-browser will show a dialog to choose a valid certificate.

::: tip Ideas for improvement?
Have you found an error or is something unclear to you? Then please feel free to contact us on the <a href="https://mii.zulipchat.com/#narrow/stream/392426-Data-Sharing-Framework-.28DSF.29">MII-Zulip Channel</a> or write us at <a href="mailto:dsf-gecko@hs-heilbronn.de">dsf-gecko@hs-heilbronn.de</a>. Thank you very much!
:::
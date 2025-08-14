---
title: Security by Design
icon: safe
---
## Basics Security
The open-source Data Sharing Framework is EU-GDPR compliant and meets the highest security standards by design. DSF FHIR servers only accept certain FHIR resources from internal systems/administrators (e.g. tasks, binary resources...). In addition, the communication partners are defined via Allow Lists. This means that an organisation can only communicate with organisations that are included in the allow list of approved organisations of the participating organisations. More information about allow lists can be found in the [next chapter](allow-list).
For transport encryption, the TLS protocol is used. Secure Web Socket (WSS) connections provide security for the connection between the DSF FHIR server (DMZ) and the BPE (internal network). In addition, the DSF is being actively developed and there is an excellent community, both of which guarantee fast security patches.

![Certificates](/photos/info/security/certificates-light.svg#light)

![Certificates](/photos/info/security/certificates-dark.svg#dark)

## Authentication 
Authentication of organizations within the DSF is handled by the use of X.509 client and server certificates. The DSF supports a configurable whitelist of  certificate authorities. All participating organizations are entered in a distributed and synchronized allow-list of valid organizations and certificates.

A webserver certificate is needed to run the FHIR endpoint and a 802.1X client certificate is used to authenticate against other organizations endpoints and as a server certificate for the business process engine.

More information about client and server certificates can be found [here](/operations/latest/install#client-server-certificates).


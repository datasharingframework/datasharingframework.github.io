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
Authentication of organizations within the DSF is handled by the use of X.509 client and server certificates. Currently the certificate authorities run by [DFN-PKI Global G2](https://www.pki.dfn.de/ueberblick-dfn-pki/), [D-Trust via TMF e.V.](https://www.tmf-ev.de) and [GÉANT TCS via DFN](https://doku.tid.dfn.de/de:dfnpki:start) are supported. All participating organizations are entered in a distributed and synchronized allow-list of valid organizations and certificates.

A webserver certificate is needed to run the FHIR endpoint and a 802.1X client certificate is used to authenticate against other organizations endpoints and as a server certificate for the business process engine. For available certificate profiles see [DFN-PKI-Zertifikatprofile_Global.pdf](https://www.pki.dfn.de/fileadmin/PKI/anleitungen/DFN-PKI-Zertifikatprofile_Global.pdf)

More information about client and server certificates can be found [here](/operations/v1/latest/maintain/install#client-server-certificates).

### Certificate Requests :lock:
#### FHIR Endpoint
Server certificates are used to authenticate the FHIR endpoint on the local network and to other organisations
* Certificate profile:
  * DFN-PKI Global G2 via DFN e.V.: Web Server
  * D-Trust via TMF e.V.: Advanced SSL ID
  * GÉANT TCS via DFN e.V.: Web Server
* Common name: FQDN of the server used while accessing from other organizations (external FQDN)
* Subject alternative DNS entries: Use additional alternative FQDNs if a different name is used while accessing the Server from the local Network (local FQDN)

More information: [Parameters FHIR Server](/stable/maintain/configuration/fhir)

#### Business Process Engine Server
Client certificates are used to authenticate against remote FHIR endpoints (when either the BPE server or the FHIR endpoint server acts as the client).
In addition, client certificates are used to authenticate the Business Process Engine server on the local network.
* Certificate profile:
  * DFN-PKI Global G2 via DFN e.V.: 802.1X Client
  * D-Trust via TMF e.V.: Basic Team ID
  * GÉANT TCS via DFN e.V.: Web Server
* Common name: FQDN of the server used while accessing from the local network (local FQDN)

More information: [Parameters BPE Server](/stable/maintain/configuration/bpe)


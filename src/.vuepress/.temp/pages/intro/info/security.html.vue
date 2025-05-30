<template><div><h2 id="basics-security" tabindex="-1"><a class="header-anchor" href="#basics-security"><span>Basics Security</span></a></h2>
<p>The open-source Data Sharing Framework is EU-GDPR compliant and meets the highest security standards by design. DSF FHIR servers only accept certain FHIR resources from internal systems/administrators (e.g. tasks, binary resources...). In addition, the communication partners are defined via Allow Lists. This means that an organisation can only communicate with organisations that are included in the allow list of approved organisations of the participating organisations. More information about allow lists can be found in the <a href="allowList">next chapter</a>.<br>
For transport encryption, the TLS protocol is used. Secure Web Socket (WSS) connections provide security for the connection between the DSF FHIR server (DMZ) and the BPE (internal network). In addition, the DSF is being actively developed and there is an excellent community, both of which guarantee fast security patches.</p>
<figure><img src="/photos/info/security/certificates-light.svg" alt="" tabindex="0" loading="lazy" data-mode="lightmode-only"><figcaption></figcaption></figure>
<figure><img src="/photos/info/security/certificates-dark.svg" alt="" tabindex="0" loading="lazy" data-mode="darkmode-only"><figcaption></figcaption></figure>
<h2 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h2>
<p>Authentication of organizations within the DSF is handled by the use of X.509 client and server certificates. Currently the certificate authorities run by <a href="https://www.pki.dfn.de/ueberblick-dfn-pki/" target="_blank" rel="noopener noreferrer">DFN-PKI Global G2</a>, <a href="https://www.tmf-ev.de" target="_blank" rel="noopener noreferrer">D-Trust via TMF e.V.</a> and <a href="https://doku.tid.dfn.de/de:dfnpki:start" target="_blank" rel="noopener noreferrer">GÉANT TCS via DFN</a> are supported. All participating organizations are entered in a distributed and synchronized allow-list of valid organizations and certificates.</p>
<p>A webserver certificate is needed to run the FHIR endpoint and a 802.1X client certificate is used to authenticate against other organizations endpoints and as a server certificate for the business process engine. For available certificate profiles see <a href="https://www.pki.dfn.de/fileadmin/PKI/anleitungen/DFN-PKI-Zertifikatprofile_Global.pdf" target="_blank" rel="noopener noreferrer">DFN-PKI-Zertifikatprofile_Global.pdf</a></p>
<p>More information about client and server certificates can be found <a href="/stable/maintain/install#client-server-certificates">here</a>.</p>
<h3 id="certificate-requests" tabindex="-1"><a class="header-anchor" href="#certificate-requests"><span>Certificate Requests 🔒</span></a></h3>
<h4 id="fhir-endpoint" tabindex="-1"><a class="header-anchor" href="#fhir-endpoint"><span>FHIR Endpoint</span></a></h4>
<p>Server certificates are used to authenticate the FHIR endpoint on the local network and to other organisations</p>
<ul>
<li>Certificate profile:
<ul>
<li>DFN-PKI Global G2 via DFN e.V.: Web Server</li>
<li>D-Trust via TMF e.V.: Advanced SSL ID</li>
<li>GÉANT TCS via DFN e.V.: Web Server</li>
</ul>
</li>
<li>Common name: FQDN of the server used while accessing from other organizations (external FQDN)</li>
<li>Subject alternative DNS entries: Use additional alternative FQDNs if a different name is used while accessing the Server from the local Network (local FQDN)</li>
</ul>
<p>More information: <a href="/stable/maintain/configuration/fhir">Parameters FHIR Server</a></p>
<h4 id="business-process-engine-server" tabindex="-1"><a class="header-anchor" href="#business-process-engine-server"><span>Business Process Engine Server</span></a></h4>
<p>Client certificates are used to authenticate against remote FHIR endpoints (when either the BPE server or the FHIR endpoint server acts as the client).<br>
In addition, client certificates are used to authenticate the Business Process Engine server on the local network.</p>
<ul>
<li>Certificate profile:
<ul>
<li>DFN-PKI Global G2 via DFN e.V.: 802.1X Client</li>
<li>D-Trust via TMF e.V.: Basic Team ID</li>
<li>GÉANT TCS via DFN e.V.: Web Server</li>
</ul>
</li>
<li>Common name: FQDN of the server used while accessing from the local network (local FQDN)</li>
</ul>
<p>More information: <a href="/stable/maintain/configuration/bpe">Parameters BPE Server</a></p>
</div></template>



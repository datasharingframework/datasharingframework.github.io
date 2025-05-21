<template><div><h1 id="parameters-fhir-reverse-proxy" tabindex="-1"><a class="header-anchor" href="#parameters-fhir-reverse-proxy"><span>Parameters FHIR Reverse Proxy</span></a></h1>
<h3 id="app-server-ip" tabindex="-1"><a class="header-anchor" href="#app-server-ip"><span>APP_SERVER_IP</span></a></h3>
<ul>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Hostname or IP-Address of the DSF FHIR servers application container, the reverse proxy target</li>
<li><strong>Example:</strong> <code v-pre>app</code>, <code v-pre>172.28.1.3</code></li>
</ul>
<h3 id="https-server-name-port" tabindex="-1"><a class="header-anchor" href="#https-server-name-port"><span>HTTPS_SERVER_NAME_PORT</span></a></h3>
<ul>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> External FQDN of your DSF FHIR server with port, typically <code v-pre>443</code></li>
<li><strong>Example:</strong> <code v-pre>my-external.fqdn:443</code></li>
</ul>
<h3 id="proxy-pass-connection-timeout-http" tabindex="-1"><a class="header-anchor" href="#proxy-pass-connection-timeout-http"><span>PROXY_PASS_CONNECTION_TIMEOUT_HTTP</span></a></h3>
<ul>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Connection timeout (seconds) for reverse proxy to app server http connection, time the proxy waits for a connection to be established</li>
<li><strong>Default:</strong> <code v-pre>30</code> seconds</li>
</ul>
<h3 id="proxy-pass-connection-timeout-ws" tabindex="-1"><a class="header-anchor" href="#proxy-pass-connection-timeout-ws"><span>PROXY_PASS_CONNECTION_TIMEOUT_WS</span></a></h3>
<ul>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Connection timeout (seconds) for reverse proxy to app server ws connection, time the proxy waits for a connection to be established</li>
<li><strong>Default:</strong> <code v-pre>30</code> seconds</li>
</ul>
<h3 id="proxy-pass-timeout-http" tabindex="-1"><a class="header-anchor" href="#proxy-pass-timeout-http"><span>PROXY_PASS_TIMEOUT_HTTP</span></a></h3>
<ul>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Timeout (seconds) for reverse proxy to app server http connection, time the proxy waits for a reply</li>
<li><strong>Default:</strong> <code v-pre>60</code> seconds</li>
</ul>
<h3 id="proxy-pass-timeout-ws" tabindex="-1"><a class="header-anchor" href="#proxy-pass-timeout-ws"><span>PROXY_PASS_TIMEOUT_WS</span></a></h3>
<ul>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Timeout (seconds) for reverse proxy to app server ws connection, time the proxy waits for a reply</li>
<li><strong>Default:</strong> <code v-pre>60</code> seconds</li>
</ul>
<h3 id="ssl-ca-certificate-file" tabindex="-1"><a class="header-anchor" href="#ssl-ca-certificate-file"><span>SSL_CA_CERTIFICATE_FILE</span></a></h3>
<ul>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Certificate chain file including all signing, intermediate and ca certificate used to validate client certificates, PEM encoded, sets the apache httpd parameter <code v-pre>SSLCACertificateFile</code></li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/ssl_ca_certificate_file.pem</code></li>
</ul>
<h3 id="ssl-ca-dn-request-file" tabindex="-1"><a class="header-anchor" href="#ssl-ca-dn-request-file"><span>SSL_CA_DN_REQUEST_FILE</span></a></h3>
<ul>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> File containing all signing certificates excepted, will be used to specify the <code v-pre>Acceptable client certificate CA names</code> send to the client, during TLS handshake, sets the apache httpd parameter <code v-pre>SSLCADNRequestFile</code>; if omitted all entries from <code v-pre>SSL_CA_CERTIFICATE_FILE</code> are used</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/ssl_ca_dn_request_file.pem</code></li>
</ul>
<h3 id="ssl-certificate-chain-file" tabindex="-1"><a class="header-anchor" href="#ssl-certificate-chain-file"><span>SSL_CERTIFICATE_CHAIN_FILE</span></a></h3>
<ul>
<li><strong>Required:</strong> No</li>
<li><strong>Description:</strong> Certificate chain file, PEM encoded, must contain all certificates between the server certificate and the root ca certificate, sets the apache httpd parameter <code v-pre>SSLCertificateChainFile</code>; can be omitted if either no chain is needed (aka self signed server certificate) or the file specified via <code v-pre>SSL_CERTIFICATE_FILE</code> contains the certificate chain</li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/ssl_certificate_chain_file.pem</code></li>
</ul>
<h3 id="ssl-certificate-file" tabindex="-1"><a class="header-anchor" href="#ssl-certificate-file"><span>SSL_CERTIFICATE_FILE</span></a></h3>
<ul>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Server certificate file, PEM encoded, sets the apache httpd parameter <code v-pre>SSLCertificateFile</code></li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/ssl_certificate_file.pem</code></li>
</ul>
<h3 id="ssl-certificate-key-file" tabindex="-1"><a class="header-anchor" href="#ssl-certificate-key-file"><span>SSL_CERTIFICATE_KEY_FILE</span></a></h3>
<ul>
<li><strong>Required:</strong> Yes</li>
<li><strong>Description:</strong> Server certificate private key file, PEM encoded, unencrypted, sets the apache httpd parameter <code v-pre>SSLCertificateKeyFile</code></li>
<li><strong>Recommendation:</strong> Use docker secret file to configure</li>
<li><strong>Example:</strong> <code v-pre>/run/secrets/ssl_certificate_key_file.pem</code></li>
</ul>
</div></template>



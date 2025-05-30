<template><div><div class="hint-container warning">
<p class="hint-container-title">Member of existing networks</p>
<p>If you are part of an existing network (e.g. the German MII), please install the appropriate DSF version. For the production environment of MII and NUM this is currently <a href="/oldstable">DSF 0.9.x</a>.</p>
</div>
<p>In the following installation manual we will show you how you can install your own DSF instance to be part of an already existing DSF network.</p>
<div class="hint-container tip">
<p class="hint-container-title">Unified installation manual</p>
<p>The installation instructions of DSF 0.9.x for different application use cases (e.g. NUM CODEX or HiGHmed) are now combined under one common manual. The specific steps for process installation and configuration are documented at the process plugin documentation pages.</p>
</div>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<h3 id="virtual-machines" tabindex="-1"><a class="header-anchor" href="#virtual-machines"><span>Virtual Machines</span></a></h3>
<ul>
<li>DSF FHIR VM: min. 4 GB RAM, 4 vCPU, 20 GB HDD</li>
<li>DSF BPE VM: min. 4 GB RAM, 4 vCPU, 20 GB HDD</li>
</ul>
<h3 id="docker-docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-docker-compose"><span>Docker / Docker-Compose</span></a></h3>
<p>Both VMs need latest docker (&gt;= 24.0.0) and docker compose. For the latest install guide see <a href="https://docs.docker.com/engine/install" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install</a>.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release</span></span>
<span class="line"><span>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg</span></span>
<span class="line"><span>echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null</span></span>
<span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin</span></span>
<span class="line"><span>sudo systemctl enable docker.service</span></span>
<span class="line"><span>sudo systemctl enable containerd.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The current version of docker compose is installed with the current docker version.</p>
<h3 id="client-server-certificates" tabindex="-1"><a class="header-anchor" href="#client-server-certificates"><span>Client/Server Certificates</span></a></h3>
<p>Two Certificates from the GÉANT TCS (via DFN e.V.), D-Trust (via TMF e.V.) or DFN-PKI Global G2 (legacy, no new certificates are issued) are needed:</p>
<ul>
<li>Certificate <em>A</em>: Server Certificate  - <code v-pre>TLS Web Server Authentication</code> (DFN PKI Profile: 'Web Server', Common-Name: Your external DSF FHIR Servers FQDN)</li>
<li>Certificate <em>B</em>: Client Certificate  - <code v-pre>TLS Web Client Authentication</code> (DFN PKI Profile: '802.1X Client', Common-Name: Your DSF BPE Servers FQDN)</li>
</ul>
<p>If you use GÉANT TCS certificates, then they are configured by default with the necessary <em>X509v3 Extended Key Usage</em>s: <code v-pre>TLS Web Server Authentication, TLS Web Client Authentication</code>.</p>
<h3 id="network-setup-network-access" tabindex="-1"><a class="header-anchor" href="#network-setup-network-access"><span>Network setup / Network access</span></a></h3>
<ul>
<li>The DSF FHIR server needs to be accessible via the internet and able to access the internet without TLS interception.</li>
<li>The BPE FHIR server should only be accessible by the internal network and able to access your DSF FHIR server via its external FQDN and the internet without TLS interception.</li>
</ul>
<p>Here is a quick overview of the expected network setup.</p>
<table>
<thead>
<tr>
<th>Source</th>
<th>Target</th>
<th>Port</th>
<th>Protocol</th>
</tr>
</thead>
<tbody>
<tr>
<td>DSF BPE (local)</td>
<td>DSF FHIR (local)</td>
<td>443</td>
<td>https, wss</td>
</tr>
<tr>
<td>DSF BPE (local)</td>
<td>DSF FHIR (other DSF communication partners)</td>
<td>443</td>
<td>https</td>
</tr>
<tr>
<td>DSF FHIR (local)</td>
<td>DSF FHIR (other DSF communication partners)</td>
<td>443</td>
<td>https (HTTP HEAD only)</td>
</tr>
<tr>
<td>DSF BPE (other DSF communication partners)</td>
<td>DSF FHIR (local)</td>
<td>443</td>
<td>https</td>
</tr>
<tr>
<td>DSF FHIR (other DSF communication partners)</td>
<td>DSF FHIR (local)</td>
<td>443</td>
<td>https (HTTP HEAD only)</td>
</tr>
</tbody>
</table>
<p>Connections to services that are used by process plugins (e.g. a fTTP, a terminology server, <a href="http://simplifier.net" target="_blank" rel="noopener noreferrer">simplifier.net</a> or a local FHIR server) are not listed. Please refer to the respective process plugin documentation pages for more information.</p>
<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>Setup</span></a></h2>
<h3 id="prepare-certificates" tabindex="-1"><a class="header-anchor" href="#prepare-certificates"><span>Prepare Certificates</span></a></h3>
<ol>
<li>
<p>Server Certificate (certificate <em>A</em>)<br>
<em>This certificate will be used as the DSF FHIR servers server certificate (ssl_certificate_file.pem, ssl_certificate_key_file.pem)</em></p>
<ul>
<li>Store PEM encoded certificate as <code v-pre>ssl_certificate_file.pem</code></li>
<li>Store unencrypted, PEM encoded private-key as <code v-pre>ssl_certificate_key_file.pem</code></li>
</ul>
</li>
<li>
<p>Client Certificate (Certificate <em>B</em>)<br>
<em>This certificate will be used as the DSF BPE servers client certificate (client_certificate.pem, client_certificate_private_key.pem) as well as the DSF FHIR servers client certificate (client_certificate.pem, client_certificate_private_key.pem)</em></p>
<ul>
<li>Store PEM encoded certificate as <code v-pre>client_certificate.pem</code></li>
<li>Store encrypted or not encrypted, PEM encoded private-key as <code v-pre>client_certificate_private_key.pem</code></li>
</ul>
</li>
</ol>
<h3 id="dsf-fhir-server" tabindex="-1"><a class="header-anchor" href="#dsf-fhir-server"><span>DSF FHIR Server</span></a></h3>
<ol>
<li>
<p>Add Group/User<br>
Add group and user used by the DSF FHIR java application. Ubuntu compatible commands below:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo addgroup --gid 2101 fhir</span></span>
<span class="line"><span>sudo adduser --system --no-create-home --uid 2101 --gid 2101 fhir</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Download and Extract Config Files<br>
Download and unpack the prepared DSF FHIR server config files and folder structure:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd /opt</span></span>
<span class="line"><span>wget https://dsf.dev/download/dsf_fhir_1_1_0.tar.gz</span></span>
<span class="line"><span>sudo tar --same-owner -zxvf dsf_fhir_1_1_0.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>The <code v-pre>tar</code> command will unpack the config files at <code v-pre>/opt/fhir</code> assuming you changed into the <code v-pre>/opt</code> directory.</em></p>
</li>
<li>
<p>Verify that the <code v-pre>fhir</code> system user or group can write into the following folder</p>
<ul>
<li><code v-pre>/opt/fhir/log</code></li>
</ul>
</li>
<li>
<p>Add certificates and keys</p>
<ul>
<li>Add the server certificate (certificate <em>A</em>) and the corresponding private-key to <strong>/opt/fhir/secrets/</strong>
<ul>
<li>ssl_certificate_file.pem (chmod: 440, chown: fhir:docker)</li>
<li>ssl_certificate_key_file.pem (chmod: 440, chown: fhir:docker)</li>
</ul>
</li>
<li>Add the client certificate (Certificate <em>B</em>) and the corresponding private-key to <strong>/opt/fhir/secrets/</strong>
<ul>
<li>client_certificate.pem (chmod: 440, chown: fhir:docker)</li>
<li>client_certificate_private_key.pem (chmod: 440, chown: fhir:docker)</li>
</ul>
</li>
<li>If the private key is encrypted, add a password file with the password as the only content to <strong>/opt/fhir/secrets/client_certificate_private_key.pem.password</strong></li>
<li>If the private key is not encrypted, remove the corresponding docker secret lines from the <code v-pre>docker-compose.yml</code> file<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>L44:      - app_client_certificate_private_key.pem.password</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>L59:      DEV_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>L146:  app_client_certificate_private_key.pem.password:</span></span>
<span class="line"><span>L147:    file: ./secrets/client_certificate_private_key.pem.password</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">How to chmod / chown</p>
<p>For the example <em>ssl_certificate_file.pem (chmod: 440, chown: fhir:docker)</em> you must:</p>
<ol>
<li>Set the file content as requested</li>
<li>Change the file permissions to 440 (allow read access to the owner of the file and the group the file belongs to, deny write access to everybody and deny read for other users):<br>
<code v-pre>chmod 440 /opt/fhir/secrets/ssl_certificate_file.pem</code></li>
<li>Change the owner of the file to the user <code v-pre>fhir</code> and the group the file belongs to to <code v-pre>docker</code>:<br>
<code v-pre>chown fhir:docker /opt/fhir/secrets/ssl_certificate_file.pem</code></li>
</ol>
</div>
</li>
<li>
<p>Uncomment one of the certificate chain entries in the docker-compose file base on the certificate authority that signed your DSF FHIR server certificate (certificate A). For example use the following two lines if the server certificate is signed by <code v-pre>DFN-Verein Global Issuing CA</code></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>L114:  ssl_certificate_chain_file.pem:</span></span>
<span class="line"><span>L115:    file: ./secrets/ssl_certificate_chain_file_DFN-Verein.pem</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Modify database passwords</p>
<ul>
<li><strong>/opt/fhir/secrets/db_liquibase.password</strong>
<ul>
<li>Generate a random password (min. 32 characters recommended) and replace the content of the file.</li>
</ul>
</li>
<li><strong>/opt/fhir/secrets/db_user.password</strong>
<ul>
<li>Generate a random password (min. 16 characters recommended) and replace the content of the file.</li>
</ul>
</li>
<li><strong>/opt/fhir/secrets/db_user_permanent_delete.password</strong>
<ul>
<li>Generate a random password (min. 16 characters recommended) and replace the content of the file.</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Modify the docker-compose.yml file and set environment variables to the appropriate values</p>
<ul>
<li><strong>services -&gt; proxy -&gt; environment:</strong>
<ul>
<li><strong>HTTPS_SERVER_NAME_PORT</strong>: <em>TODO_DSF_FHIR_SERVER_EXTERNAL_FQDN:443</em><br>
Set your FHIR servers external FQDN, e.g. <code v-pre>foo.bar.de</code> -&gt; <code v-pre>foo.bar.de:443</code></li>
<li>For additional environment variables, see <a href="fhir-reverse-proxy/configuration">DSF configuration parameters - FHIR Reverse Proxy</a></li>
</ul>
</li>
<li><strong>services -&gt; app -&gt; environment:</strong>
<ul>
<li>
<p><strong>DEV_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</strong>: <code v-pre>todo.organization.com</code><br>
Set your Organizations DSF identifier, aka the shortest FQDN that resolves to the main homepage of the organization, e.g. <code v-pre>hs-heilbronn.de</code></p>
</li>
<li>
<p><strong>DEV_DSF_FHIR_SERVER_BASE_URL</strong>: <code v-pre>https://dsf.todo.organization.com/fhir</code><br>
Set your FHIR servers external FQDN, e.g. <code v-pre>foo.bar.de</code> -&gt; <code v-pre>https://foo.bar.de/fhir</code></p>
</li>
<li>
<p><strong>DEV_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT</strong>: <code v-pre>f4344032fe77bffb912ff5abfd44da89fe64d355affb8d0f14c9ecb8bdbf92c7fe5f995b1ec0c453e4228b395e331052e4639044df4933d57721de508a84d26f</code><br>
Set the SHA-512 Hash (lowercase hex) of your client certificate (Certificate <em>B</em>)<br>
Use <code v-pre>certtool --fingerprint --hash=sha512 --infile=client_certificate.pem</code> to generate the hash.</p>
</li>
<li>
<p><strong>DEV_DSF_FHIR_SERVER_ROLECONFIG</strong>: <code v-pre>|</code><br>
You can add other client certificates (e.g. personal certificates from admins) to your DSF instance. For additional information, see the FHIR server <a href="fhir/access-control">Access Control</a> page.</p>
</li>
<li>
<p>For additional environment variables, see FHIR server <a href="fhir/configuration">Configuration Parameters</a> page.</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Start the DSF FHIR Server<br>
Start using: <code v-pre>docker compose up -d &amp;&amp; docker compose logs -f</code> (Ctrl-C will close log, but not stop container)</p>
</li>
</ol>
<h3 id="dsf-bpe-server" tabindex="-1"><a class="header-anchor" href="#dsf-bpe-server"><span>DSF BPE Server</span></a></h3>
<ol>
<li>
<p>Add Group/User<br>
Add group and user used by the DSF BPE java application. Ubuntu compatible commands below:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo addgroup --gid 2202 bpe</span></span>
<span class="line"><span>sudo adduser --system --no-create-home --uid 2202 --gid 2202 bpe</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Download and Extract Config Files<br>
Download and extract prepared DSF BPE server config files and folder structure:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd /opt</span></span>
<span class="line"><span>wget https://dsf.dev/download/dsf_bpe_1_1_0.tar.gz</span></span>
<span class="line"><span>sudo tar --same-owner -zxvf dsf_bpe_1_1_0.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>The <code v-pre>tar</code> command will unpack the config files at <code v-pre>/opt/bpe</code> assuming you changed into the <code v-pre>/opt</code> directory.</em></p>
</li>
<li>
<p>Verify that the <code v-pre>bpe</code> system user or group can write into the following folders</p>
<ul>
<li><code v-pre>/opt/bpe/log</code></li>
</ul>
</li>
<li>
<p>Add certificates and keys</p>
<ul>
<li>Add the client certificate (Certificate <em>B</em>) and the corresponding private-key to <strong>/opt/bpe/secrets/</strong>
<ul>
<li>client_certificate.pem (chmod: 440 chown: bpe:docker)</li>
<li>client_certificate_private_key.pem (chmod: 440 chown: bpe:docker)</li>
</ul>
</li>
<li>If the private key is encrypted, add a password file with the password as the only content to <strong>/opt/bpe/secrets/client_certificate_private_key.pem.password</strong></li>
<li>If the private key is not encrypted, remove the corresponding docker secret lines from the <code v-pre>docker-compose.yml</code> file<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>L18:      - app_client_certificate_private_key.pem.password</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>L40:      DEV_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>L97:  app_client_certificate_private_key.pem.password:</span></span>
<span class="line"><span>L98:    file: ./secrets/client_certificate_private_key.pem.password</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Modify database passwords</p>
<ul>
<li><strong>/opt/bpe/secrets/db_liquibase.password</strong>
<ul>
<li>Generate a random password (min. 32 characters recommended) and replace the content of the file.</li>
</ul>
</li>
<li><strong>/opt/bpe/secrets/db_user.password</strong>
<ul>
<li>Generate a random password (min. 16 characters recommended) and replace the content of the file.</li>
</ul>
</li>
<li><strong>/opt/bpe/secrets/db_user_camunda.password</strong>
<ul>
<li>Generate a random password (min. 16 characters recommended) and replace the content of the file.</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Modify the docker-compose.yml file and set environment variables to the appropriate values</p>
<ul>
<li><strong>services -&gt; app -&gt; environment:</strong>
<ul>
<li>
<p><strong>DEV_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE</strong>: <code v-pre>todo.organization.com</code><br>
Set your Organizations DSF identifier, aka the shortest FQDN that resolves the main homepage of the organization, e.g. <code v-pre>hs-heilbronn.de</code></p>
</li>
<li>
<p><strong>DEV_DSF_BPE_FHIR_SERVER_BASE_URL</strong>: <code v-pre>https://dsf.todo.organization.com/fhir</code><br>
Set your FHIR servers external FQDN, e.g. <code v-pre>foo.bar.de</code> -&gt; <code v-pre>https://foo.bar.de/fhir</code></p>
</li>
<li>
<p>For additional environment variables, see the BPE server <a href="bpe/configuration">Configuration Parameters</a> page.</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Start the DSF BPE Server (without process plugins)<br>
Start using: <code v-pre>docker compose up -d &amp;&amp; docker compose logs -f</code> (Ctrl-C will close log, but not stop container)</p>
</li>
<li>
<p>Verify DSF BPE Startup</p>
<ul>
<li>Check that the BPE was able to download new Task resources from the DSF FHIR server during startup.</li>
<li>Check that the BPE was able to download a Subscription resource from the DSF FHIR server during startup.</li>
<li>Check that the BPE was able to connect to the websocket endpoint of the DSF FHIR server during startup.</li>
</ul>
<p>If you need to debug the TLS connection to your DSF FHIR server use for example:<br>
<code v-pre>docker run -it --rm alpine/openssl s_client your-fhir-server.fqdn:443</code><br>
The command above should print the server certificate of your DSF FHIR server (certificate <em>A</em>) and end with a message like <code v-pre>[...]tlsv13 alert certificate required[...]</code></p>
</li>
</ol>
<h3 id="logs" tabindex="-1"><a class="header-anchor" href="#logs"><span>Logs</span></a></h3>
<p>By default, we will log both to the console (collected by docker) and to files in the log directory, so you can use <code v-pre>docker compose logs -f</code> in <code v-pre>/opt/bpe</code> and <code v-pre>/opt/fhir</code> to view informational, warning and error logs. If you encounter any error and the reported information is not detailled enough, you can also check the logs in the <code v-pre>/opt/fhir/log</code> and <code v-pre>/opt/bpe/log</code> directories with debugging logs. There, you will also find older log files. If you have any questions and can't resolve them by yourself please always include the latest logs from <code v-pre>/opt/fhir/log</code> and <code v-pre>/opt/bpe/log</code> in your support request.</p>
<p>On a successful BPE start, you should see the following entries in your BPE log:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>INFO Grizzly(1) - ClientEndpoint.onOpen(37) | Websocket connected {uri: wss://FHIR_SERVER_FQDN/fhir/ws, session-id: SOME_RANDOM_UUID1}</span></span>
<span class="line"><span>INFO Grizzly(1) - ClientEndpoint.onOpen(37) | Websocket connected {uri: wss://FHIR_SERVER_FQDN/fhir/ws, session-id: SOME_RANDOM_UUID2}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="on-boarding" tabindex="-1"><a class="header-anchor" href="#on-boarding"><span>On-Boarding</span></a></h3>
<p>Please visit the on boarding website of your network for more information.</p>
<div class="hint-container tip">
<p class="hint-container-title">Ideas for improvement?</p>
<p>Have you found an error or is something unclear to you? Then please feel free to write to us at <a href="mailto:dsf-gecko@hs-heilbronn.de">gth-gecko@hs-heilbronn.de</a>. Thank you very much!</p>
</div>
</div></template>



<template><div><p>Upgrading the DSF from 1.5.1 to 1.5.2 involves modifying the docker-compose.yml files and recreating the containers.</p>
<div class="hint-container warning">
<p class="hint-container-title">Update to DSF 1.2.0 first</p>
<p>When upgrading from 1.0.0 or 1.1.0 it is important to migrate to <a href="/v1.2.0/maintain/upgrade-from-1">DSF 1.2.0 first</a>.</p>
</div>
<h2 id="modify-dsf-fhir-server-setup" tabindex="-1"><a class="header-anchor" href="#modify-dsf-fhir-server-setup"><span>Modify DSF FHIR Server Setup</span></a></h2>
<ol>
<li>
<p>Preparation / Backup</p>
<ul>
<li>We recommend to create a backup of the <code v-pre>/opt/fhir</code> directory before proceeding with the upgrade.<br>
For example using: <code v-pre>sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.5.2_upgrade</code></li>
</ul>
</li>
<li>
<p>Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.5.2.</p>
</li>
</ol>
<div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">version: '3.8'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">services:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  proxy:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   image: ghcr.io/datasharingframework/fhir_proxy:1.5.1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">+   image: ghcr.io/datasharingframework/fhir_proxy:1.5.2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    restart: on-failure</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  app:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   image: ghcr.io/datasharingframework/fhir:1.5.1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">+   image: ghcr.io/datasharingframework/fhir:1.5.2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    restart: on-failure</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Upgrade the DSF FHIR containers<br>
From <code v-pre>/opt/fhir</code> execute<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker compose up -d &#x26;&#x26; docker compose logs -f</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="modify-dsf-bpe-server-setup" tabindex="-1"><a class="header-anchor" href="#modify-dsf-bpe-server-setup"><span>Modify DSF BPE Server Setup</span></a></h2>
<ol>
<li>
<p>Preparation / Backup</p>
<ul>
<li>We recommend to create a backup of the <code v-pre>/opt/bpe</code> directory before proceeding with the upgrade.<br>
For example using: <code v-pre>sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.5.2_upgrade</code></li>
</ul>
</li>
<li>
<p>Modify the DSF BPE docker-compose.yml file, replace the version number with 1.5.2.</p>
</li>
</ol>
<div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">version: '3.8'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">services:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  app:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   image: ghcr.io/datasharingframework/bpe:1.5.1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">+   image: ghcr.io/datasharingframework/bpe:1.5.2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    restart: on-failure</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>Upgrade the DSF BPE containers<br>
From <code v-pre>/opt/bpe</code> execute</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker compose up -d &#x26;&#x26; docker compose logs -f</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Verify your upgrade:</p>
<ul>
<li>Verify the DSF FHIR server is running in version 1.5.2. The log should contain a message:<br>
<code v-pre>INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.5.2, [...]</code></li>
<li>Verify the DSF FHIR server started without errors</li>
<li>Verify the DSF FHIR server is accessible via https, for example by browsing to <a href="https://your-dsf-endpoint.de/fhir/" target="_blank" rel="noopener noreferrer">https://your-dsf-endpoint.de/fhir/</a> (authentication with your client-certificate)</li>
<li>Verify the DSF BPE server is running in version 1.5.2. The log should contain a message:<br>
<code v-pre>INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.5.2, [...]</code></li>
<li>Verify the DSF BPE server started without errors</li>
<li>Verify your install with a ping/pong test</li>
</ul>
</li>
</ol>
</div></template>



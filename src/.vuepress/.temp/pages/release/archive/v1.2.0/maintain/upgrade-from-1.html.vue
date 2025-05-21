<template><div><p>Upgrading the DSF from 1.1.0 to 1.2.0 involves modifying the docker-compose.yml files and recreating the containers.</p>
<div class="hint-container tip">
<p class="hint-container-title">Upgrade from 0.9.x</p>
<p>If you want to migrate from DSF 0.9.x, please follow <a href="upgrade-from-0">these instructions</a>.</p>
</div>
<h2 id="modify-dsf-fhir-server-setup" tabindex="-1"><a class="header-anchor" href="#modify-dsf-fhir-server-setup"><span>Modify DSF FHIR Server Setup</span></a></h2>
<ol>
<li>
<p>Preparation / Backup</p>
<ul>
<li>We recommend to create a backup of the <code v-pre>/opt/fhir</code> directory before proceeding with the upgrade.<br>
For example using: <code v-pre>sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.2.0_upgrade</code></li>
</ul>
</li>
<li>
<p>Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.2.0 and remove the old healthcheck definition. The new healthcheck is defined as part of the docker image.</p>
</li>
</ol>
<div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">version: '3.8'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">services:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  proxy:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   image: ghcr.io/datasharingframework/fhir_proxy:1.1.0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">+   image: ghcr.io/datasharingframework/fhir_proxy:1.2.0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    restart: on-failure</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  app:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   image: ghcr.io/datasharingframework/fhir:1.1.0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">+   image: ghcr.io/datasharingframework/fhir:1.2.0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    restart: on-failure</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   healthcheck:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     test: ["CMD", "java", "-cp", "dsf_fhir.jar", "dev.dsf.common.status.client.StatusClient"]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     interval: 10s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     timeout: 15s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     retries: 5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>The role configuration is now optional. If you don't use roles, you can remove the role config (default for new installations):</li>
</ol>
<div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  app:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    environment:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     # TODO specify role configuration to allow access to the UI via web-browser or REST API for specific users, see documentation at dsf.dev</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     DEV_DSF_FHIR_SERVER_ROLECONFIG: |</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
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
For example using: <code v-pre>sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.2.0_upgrade</code></li>
</ul>
</li>
<li>
<p>Modify the DSF BPE docker-compose.yml file, replace the version number with 1.2.0 and remove the old healthcheck definition. The new healthcheck is defined as part of the docker image.</p>
</li>
</ol>
<div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">version: '3.8'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">services:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  app:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   image: ghcr.io/datasharingframework/bpe:1.1.0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">+   image: ghcr.io/datasharingframework/bpe:1.2.0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    restart: on-failure</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-   healthcheck:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     test: ["CMD", "java", "-cp", "dsf_bpe.jar", "dev.dsf.common.status.client.StatusClient"]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     interval: 10s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     timeout: 15s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">-     retries: 5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>DSF v1.2.0 is not compatible with the Ping/Pong process plugin v1.0.0.0, upgrade to the <a href="https://github.com/datasharingframework/dsf-process-ping-pong/releases" target="_blank" rel="noopener noreferrer">Ping/Pong plugin v1.0.1.0</a> by removing the old jar file and replacing it with the new v1.0.1.0 one.</p>
</li>
<li>
<p>We have released a new version of the Allow List Process plugin where we added support for delete operations. Please upgrade to the <a href="https://github.com/datasharingframework/dsf-process-allow-list/releases" target="_blank" rel="noopener noreferrer">Allow-List process v1.0.0.1</a> by removing the old jar file and replacing it with the new v1.0.0.1 one.</p>
</li>
<li>
<p>Upgrade the DSF BPE containers<br>
From <code v-pre>/opt/bpe</code> execute</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker compose up -d &#x26;&#x26; docker compose logs -f</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Verify your upgrade:</p>
<ul>
<li>Verify the DSF FHIR server is running in version 1.2.0. The log should contain a message:<br>
<code v-pre>INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.2.0, [...]</code></li>
<li>Verify the DSF FHIR server started without errors</li>
<li>Verify the DSF FHIR server is accessible via https, for example by browsing to <a href="https://your-dsf-endpoint.de/fhir/" target="_blank" rel="noopener noreferrer">https://your-dsf-endpoint.de/fhir/</a> (authentication with your client-certificate)</li>
<li>Verify the DSF BPE server is running in version 1.2.0. The log should contain a message:<br>
<code v-pre>INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.2.0, [...]</code></li>
<li>Verify the DSF BPE server started without errors</li>
<li>Verify your install with a ping/pong test</li>
</ul>
</li>
</ol>
</div></template>



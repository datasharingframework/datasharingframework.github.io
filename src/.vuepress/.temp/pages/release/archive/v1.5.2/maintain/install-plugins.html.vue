<template><div><div class="hint-container tip">
<p class="hint-container-title">Marketplace for process plugins</p>
<p>To install and learn more about each Process Plugin, you can visit the Marketplace <a href="https://hub.dsf.dev/" target="_blank" rel="noopener noreferrer">here</a>.</p>
</div>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span><strong>Overview</strong></span></a></h2>
<ul>
<li>You can find an overview of compatable process plugins below (last updated 14/08/2024).</li>
</ul>
<table>
<thead>
<tr>
<th>Process Plugin</th>
<th>released for test</th>
<th>released for production</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/datasharingframework/dsf-process-ping-pong/releases" target="_blank" rel="noopener noreferrer">Ping-Pong</a></td>
<td><a href="https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0" target="_blank" rel="noopener noreferrer">v1.0.1.0</a></td>
<td><a href="https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0" target="_blank" rel="noopener noreferrer">v1.0.1.0</a></td>
</tr>
<tr>
<td><a href="https://github.com/datasharingframework/dsf-process-allow-list/releases" target="_blank" rel="noopener noreferrer">Allow-List</a></td>
<td><a href="https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1" target="_blank" rel="noopener noreferrer">v1.0.0.1</a></td>
<td><a href="https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1" target="_blank" rel="noopener noreferrer">v1.0.0.1</a></td>
</tr>
<tr>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-feasibility/releases" target="_blank" rel="noopener noreferrer">MII Process Feasibility</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.6" target="_blank" rel="noopener noreferrer">v1.0.0.6</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.6" target="_blank" rel="noopener noreferrer">v1.0.0.6</a></td>
</tr>
<tr>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-report/releases" target="_blank" rel="noopener noreferrer">MII Process Report</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.1.1" target="_blank" rel="noopener noreferrer">v1.1.1.1</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.1.1" target="_blank" rel="noopener noreferrer">v1.1.1.1</a></td>
</tr>
<tr>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases" target="_blank" rel="noopener noreferrer">MII Process Data Transfer</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.2.1" target="_blank" rel="noopener noreferrer">v1.0.2.1</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.2.1" target="_blank" rel="noopener noreferrer">v1.0.2.1</a></td>
</tr>
<tr>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases" target="_blank" rel="noopener noreferrer">MII Process Data Sharing</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.0.1.1" target="_blank" rel="noopener noreferrer">v1.0.1.1</a></td>
<td><a href="https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.0.1.1" target="_blank" rel="noopener noreferrer">v1.0.1.1</a></td>
</tr>
<tr>
<td><a href="https://github.com/num-codex/codex-processes-ap1/releases" target="_blank" rel="noopener noreferrer">NUM-RDP</a></td>
<td><a href="https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.1.0.0" target="_blank" rel="noopener noreferrer">v1.1.0.0</a></td>
<td><a href="https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.1.0.0" target="_blank" rel="noopener noreferrer">v1.1.0.0</a></td>
</tr>
</tbody>
</table>
<ul>
<li>Explore and install Process Plugins in the Marketplace. Details on each plugin are available <a href="https://hub.dsf.dev/" target="_blank" rel="noopener noreferrer">here</a>.</li>
<li>Deploying the process plugin to the DSF involves copy the process jar-file and configuring environment variable for the business process engine (BPE).</li>
</ul>
<h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3>
<ul>
<li>A DSF installation of version 1.3.x or higher. An installation guide can be found <a href="https://dsf.dev/stable/maintain/install.html" target="_blank" rel="noopener noreferrer">here</a>.</li>
</ul>
<h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h3>
<ul>
<li>Add the process jar-file to the DSF BPE folder <code v-pre>/opt/bpe/process</code>:</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>wget (your jar-file download link)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>For example:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> wget https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/download/v1.0.0.1/mii-process-data-sharing-1.0.0.1.jar</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Make sure the process is readable by the bpe user or group, for example by executing:</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo chmod 440 (your jar-file name.jar)</span></span>
<span class="line"><span>sudo chown root:bpe (your jar-file name.jar)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>For example:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo chmod 440 mii-process-data-sharing-1.0.0.1.jar</span></span>
<span class="line"><span>sudo chown root:bpe mii-process-data-sharing-1.0.0.1.jar</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Modify the process exclude config in <code v-pre>/opt/bpe/docker-compose.yml</code></li>
<li><strong>Reminder:</strong> Update/verify required configurations in <code v-pre>docker-compose.yml</code></li>
</ul>
</div></template>



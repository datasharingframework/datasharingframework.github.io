<template><div><div class="hint-container warning">
<p class="hint-container-title">Do not upgrade unless prompted!</p>
<p>Please do not upgrade your DSF installation from DSF 0.9.x to DSF 1.x unless prompted to do so (e.g. from the German MII).</p>
</div>
<p>A direct upgrade from DSF 0.9.x to DSF 1.x is not supported. Instead, please perform the following steps:</p>
<ol>
<li>shut down your DSF instances (DSF FHIR Server and DSF BPE).</li>
<li>backup your DSF instances (e.g. by moving the folders <code v-pre>/opt/bpe</code> and <code v-pre>/opt/fhir</code> to <code v-pre>/opt/bpe_0.9</code> and <code v-pre>/opt/fhir_0.9</code>)</li>
<li>install the new DSF according to the <a href="install">instructions</a>.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">New process plugins</p>
<p>Please do not copy your old process plugins into the new DSF. There will be a new release for each process plugin at the time you will be prompted to update your DSF instance.</p>
</div>
</div></template>



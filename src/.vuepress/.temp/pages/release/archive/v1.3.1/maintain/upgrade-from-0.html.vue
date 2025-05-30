<template><div><p>A direct upgrade from DSF 0.9.x to DSF 1.x is not supported.</p>
<div class="hint-container caution">
<p class="hint-container-title">Do not use your 0.9.x configuration as starting point</p>
<p>There are too many changes between DSF 0.9.x and DSF 1.x to use the old configuration as starting point and just adapt some configuration parameter names.</p>
<p><strong>Please</strong> use the new installation manual to perform a new installation and use the old setup only for reference.</p>
</div>
<p>Instead, please perform the following steps:</p>
<ol>
<li>Shut down your DSF instances (DSF FHIR Server and DSF BPE).</li>
<li>Backup your DSF instances (e.g. by moving the folders <code v-pre>/opt/bpe</code> and <code v-pre>/opt/fhir</code> to <code v-pre>/opt/bpe_0.9</code> and <code v-pre>/opt/fhir_0.9</code>)</li>
<li>Install the new DSF according to the <a href="install">instructions</a>.</li>
<li>You can copy <strong>your</strong> certificates (server- and client certificates) to your new installation. Please do <strong>not</strong> copy the CA certificate files from your old installation, as the new version will contain additional CAs (e.g. D-Trust).</li>
<li>Configure your processes according to the <strong>new</strong> process plugin <a href="./install-plugins">documentation</a>. You can use your <strong>test</strong> environment configuration and your old production setup configuration for reference. Please ensure to use the <strong>new</strong> configuration parameter names, as many of them will have new prefixes (like <code v-pre>DEV_DSF</code> instead of <code v-pre>ORG_HIGHMED</code>).</li>
<li>If you perform the installation before the change of the according environment, you can start the old instances again (out of the <code v-pre>/opt/fhir_0.9</code> and <code v-pre>/opt/bpe_0.9</code> directories).</li>
<li>If you want to replace the old setup with the new one, shutdown the old instances (FHIR + BPE) and start the new ones.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">New process plugins</p>
<p>Please do not copy your old process plugins into the new DSF. There will be a new release for each process plugin at the time you will be prompted to update your DSF instance.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Use your old virtual machine</p>
<p>We recommand the usage of your old DSF 0.9.x virtual machine for your new DSF 1.x setup. This will ensure that you already have the required firewall settings in place.</p>
</div>
</div></template>



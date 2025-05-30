<template><div><div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>This is an outdated version of the Allow List Management documentation. Please use <a href="/stable//maintain/allowList-mgm">the current version</a>, even if you use an outdated DSF version.</p>
</div>
<p>You can read all about the concept of Allow Lists <RouteLink to="/intro/info/allowList.html">here</RouteLink>.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>To simplify the DSF Allow List Management we have built a portal for administration. The portal is managed by the Gecko Institute at Heilbronn University. You as an DSF administrator can create or update your Allow List information. The information you provide on this portal will be transferred to us and will be used to built Allow List bundles that get distributed to the communication partners of the distributed processes.</p>
<p>The DSF Allow List management tool uses client certificates for authentication. You can either use your personal client certificate or the client certificate from your DSF BPE, which needs to be added to your webbrowser. For instructions on how to add a client certificate to your browser, please follow <a href="https://www.ssl.com/how-to/configuring-client-authentication-certificates-in-web-browsers/">here</a>.<br>
Currently, the Allow List Management Tool is only for DSF <b>TEST</b> infrastructure. For production, please write us an <a href="mailto:dsf-gecko@hs-heilbronn.de">E-Mail</a> with your information.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<ol>
<li>Deployed DSF instance (test infrastructure)<br>
1.1  If none exists yet, read <a href="install">here</a></li>
<li>Certificate<br>
2.1  If none exists yet, read <a href="install#client-server-certificates">here</a></li>
<li>Organization identifier (FQDN of your organization, e.g. <em><a href="http://hs-heilbronn.de" target="_blank" rel="noopener noreferrer">hs-heilbronn.de</a></em>)</li>
<li>FHIR Endpoint URL (e.g. <em><a href="https://gth.gecko.hs-heilbronn.de/fhir" target="_blank" rel="noopener noreferrer">https://gth.gecko.hs-heilbronn.de/fhir</a></em> )</li>
<li>Contact details from a responsible person of your organization</li>
<li>Access to the E-Mail address from your organization for verification</li>
</ol>
<h2 id="start-here" tabindex="-1"><a class="header-anchor" href="#start-here"><span>Start here</span></a></h2>
<p>When you have fulfilled all the prerequisites, you can start managing your Allow Lists on the <a href="https://allowlist-test.gecko.hs-heilbronn.de/">DSF Allow List Management Tool</a>.<br>
At the beginning, a popup will appear where you have to select your certificate. Only then you will have access to the website.</p>
<div class="hint-container tip">
<p class="hint-container-title">Ideas for improvement?</p>
<p>Have you found an error or is something unclear to you? Then please feel free to contact us on the <a href="https://mii.zulipchat.com/#narrow/stream/392426-Data-Sharing-Framework-.28DSF.29">MII-Zulip Channel</a> or write us at <a href="mailto:dsf-gecko@hs-heilbronn.de">gth-gecko@hs-heilbronn.de</a>. Thank you very much!</p>
</div>
</div></template>



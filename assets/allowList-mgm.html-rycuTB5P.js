import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,d as i,e as n,f as s,a as l,r as h,o as c}from"./app-C6t45yFC.js";const u={};function d(f,e){const o=h("RouteLink");return c(),r("div",null,[e[3]||(e[3]=t("div",{class:"hint-container caution"},[t("p",{class:"hint-container-title"},"Caution"),t("p",null,[i("This is an outdated version of the Allow List Management documentation. Please use "),t("a",{href:"/stable/maintain/allowList-mgm"},"the current version"),i(", even if you use an outdated DSF version.")])],-1)),t("p",null,[e[1]||(e[1]=i("You can read all about the concept of Allow Lists ")),n(o,{to:"/intro/info/allowList.html"},{default:s(()=>e[0]||(e[0]=[i("in our introduction")])),_:1}),e[2]||(e[2]=i("."))]),e[4]||(e[4]=l('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>To simplify the DSF Allow List Management we have built a portal for administration. The portal is managed by the GECKO Institute at Heilbronn University. You as an DSF administrator can create or update your Allow List information. The information you provide on this portal will be transferred to us and will be used to built Allow List bundles that get distributed to the communication partners of the distributed processes.</p><p>The DSF Allow List management tool uses client certificates for authentication. You can either use a personal client certificate or the client certificate from your DSF BPE, which needs to be added to your web-browsers certificate store.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><ol><li>Deployed DSF instance (test or production infrastructure)<br> 1.1 If none exists yet, read <a href="install">the installation guide</a></li><li>Certificate<br> 2.1 If none exists yet, read <a href="install#client-server-certificates">the certificate requirements</a></li><li>Organization identifier, shortest FQDN of your organizations website, e.g. <code>my-hospital.de</code></li><li>FHIR endpoint URL, e.g. <code>https://dsf.my-hospital.de/fhir</code></li><li>Contact details from a responsible person of your organization</li><li>Access to the E-Mail address from your organization for verification</li></ol><h2 id="start-here" tabindex="-1"><a class="header-anchor" href="#start-here"><span>Start here</span></a></h2><p>When you have fulfilled all the prerequisites, you can start managing your Allow Lists via the environment specific Allow List Management Tool:</p><ul><li><a href="https://allowlist-test.gecko.hs-heilbronn.de" target="_blank" rel="noopener noreferrer"><strong>Test</strong> infrastructure</a></li><li><a href="https://allowlist.gecko.hs-heilbronn.de" target="_blank" rel="noopener noreferrer"><strong>Production</strong> infrastructure</a></li></ul><p>We use different highlight colors for the DSF Allow List Management Tool: Green for the <strong>Test</strong> environment and blue for the <strong>Production</strong> infrastructure. To access the site, you have to authenticate yourself with a client certificate. Your web-browser will show a dialog to choose a valid certificate.</p><div class="hint-container tip"><p class="hint-container-title">Ideas for improvement?</p><p>Have you found an error or is something unclear to you? Then please feel free to contact us on the <a href="https://mii.zulipchat.com/#narrow/stream/392426-Data-Sharing-Framework-.28DSF.29">MII-Zulip Channel</a> or write us at <a href="mailto:dsf-gecko@hs-heilbronn.de">gth-gecko@hs-heilbronn.de</a>. Thank you very much!</p></div>',10))])}const g=a(u,[["render",d],["__file","allowList-mgm.html.vue"]]),v=JSON.parse('{"path":"/v1.5.0/maintain/allowList-mgm.html","title":"Allow List Management","lang":"en-US","frontmatter":{"title":"Allow List Management","icon":"share","gitInclude":[]},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Start here","slug":"start-here","link":"#start-here","children":[]}],"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"v1.5.0/maintain/allowList-mgm.md","excerpt":"<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">Caution</p>\\n<p>This is an outdated version of the Allow List Management documentation. Please use <a href=\\"/stable/maintain/allowList-mgm\\">the current version</a>, even if you use an outdated DSF version.</p>\\n</div>\\n<p>You can read all about the concept of Allow Lists <a href=\\"/intro/info/allowList.html\\" target=\\"_blank\\">in our introduction</a>.</p>"}');export{g as comp,v as data};
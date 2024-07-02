import{_ as e,a as i}from"./highmed_dsf_network_setup_ext_dmz-DyQZOoIs.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as t,e as s}from"./app-ZCWvZDX3.js";const a={},o=s('<p>The Data Sharing Framework consists of two components: A FHIR Endpoint Server used to except Task resources and provide resources for download by other organizations and a Business Process Engine Server run internal and not accessible by other organization to execute and coordinate processes.</p><figure><img src="'+e+'" alt="Network Setup Diagramm" tabindex="0" loading="lazy"><figcaption>Network Setup Diagramm</figcaption></figure><ul><li>FHIR Reverse Proxy: The FHIR Reverse Proxy is used to terminate incoming https connections to the FHIR App Server. The Reverse Proxy needs to be accessible on port 443 from the internet. Incoming https connection will be delegate as http on a docker internal network to the FHIR App Server.</li><li>FHIR App Server: The FHIR App Server is used as a FHIR Endpoint for incoming Task resources and providing resources for download by other organizations. In order to validate incoming FHIR resources the server will communicate with FHIR Servers at other organizations. Access to resources and authorization for creating or updating resources is granted based on the content of the resource and/or based on the client (identified by its client certificate) being part of an allow list. JDBC connections to the FHIR DB Server</li><li>FHIR DB Server: PostgreSQL database for the FHIR App Server.</li><li>BPE App Server: The BPE App Server is executing BPMN 2.0 business processes with the included business process engine. Automatic BPMN service tasks are used for example to check resource, access the PDP- and MPI-servers as well as the MDAT repository. The calculation of record linkage bit vectors (Record Bloom Filters) is also performed using an automatic service task. As of version 0.3.0 the BPE server does not provide any webservices for modifying an server resources.</li><li>BPE DB Server: PostgreSQL database for the BPE App Server.</li><li>PDP: IHE Policy Decision Point for deciding on patient consent.</li><li>MDAT Repo: Repository (e.g. openEHR) for storing medical data (MDAT).</li><li>MPI: IHE Master Patient Index for storing identifying patient date (IDAT) e.g. first name, last name, date of birth.</li><li>Cohort Browser: Example for a system to trigger patient cohort size estimations across multiple organizations.</li></ul><p>More information on Client- and Server-Certificates are available on the dedicated wiki page: <a href="Authentication">Authentication: Client/Server Certificates</a></p><h2 id="additional-reverse-proxy-in-external-dmz" tabindex="-1"><a class="header-anchor" href="#additional-reverse-proxy-in-external-dmz"><span>Additional Reverse Proxy in external DMZ</span></a></h2><p>In some organizations an additional reverse proxy in an external DMZ is needed. This can be accomplished by using for example nginx or haproxy as a TCP-Proxy. Example configurations routing traffic using SNI can be found below. Configuring an additional reverse proxy to terminate the incoming TLS connection early is not recommended.</p><figure><img src="'+i+`" alt="Network Setup Diagramm" tabindex="0" loading="lazy"><figcaption>Network Setup Diagramm</figcaption></figure><p><strong>nginx</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>http {
	# ...
}

stream {
	map $ssl_preread_server_name $name {
		fhir.example.com fhir;
	}

	upstream fhir {
		server 192.168.0.1:443;
	}

	server {
		listen 443;
		proxy_pass $name;
		ssl_preread on;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>haproxy</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>defaults
	timeout connect 5s
	timeout client 30s
	timeout server 30s

frontend ingress
	bind :443
	mode tcp

	tcp-request inspect-delay 5s
	tcp-request content accept if { req_ssl_hello_type 1 }
	use_backend fhir if { req.ssl_sni fhir.example.com }

backend fhir
	mode tcp

	server fhir 192.168.0.1:443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[o];function l(c,v){return r(),t("div",null,d)}const g=n(a,[["render",l],["__file","networkSetup.html.vue"]]),h=JSON.parse('{"path":"/oldstable/generalinformation/networkSetup.html","title":"Network Setup and General Architecture","lang":"en-US","frontmatter":{"title":"Network Setup and General Architecture","icon":"customize"},"headers":[{"level":2,"title":"Additional Reverse Proxy in external DMZ","slug":"additional-reverse-proxy-in-external-dmz","link":"#additional-reverse-proxy-in-external-dmz","children":[]}],"git":{"createdTime":1692783801000,"updatedTime":1692783801000,"contributors":[{"name":"Hauke Hund","email":"hauke.hund@hs-heilbronn.de","commits":1}]},"readingTime":{"minutes":1.62,"words":486},"filePathRelative":"oldstable/generalinformation/networkSetup.md","localizedDate":"August 23, 2023","excerpt":"<p>The Data Sharing Framework consists of two components: A FHIR Endpoint Server used to except Task resources and provide resources for download by other organizations and a Business Process Engine Server run internal and not accessible by other organization to execute and coordinate processes.</p>"}');export{g as comp,h as data};

import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as r,o as a}from"./app-C6t45yFC.js";const s={};function n(o,e){return a(),t("div",null,e[0]||(e[0]=[r('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>Funded by the German Federal Ministry of Research and Education, 25 <a href="https://www.forschen-fuer-gesundheit.de/menu_standorte.php" target="_blank" rel="noopener noreferrer">sites</a> have installed the DSF to execute the <a href="https://github.com/medizininformatik-initiative/feasibility-dsf-process/" target="_blank" rel="noopener noreferrer">Feasibility</a> process. To perform feasibility queries, a researcher can register and query data on the <a href="https://www.forschen-fuer-gesundheit.de/" target="_blank" rel="noopener noreferrer">FDPG (Forschungsdaten Portal für Gesundheit - Research Data Portal)</a> website. Basic data of hospitalizations of over 8 million patients with over 40 million diagnoses and much more such as laboratory values or drug prescriptions are available. After a successful query, the data is made available in standardized FHIR format. Further information can be found in the <a href="https://www.medizininformatik-initiative.de/sites/default/files/2023-05/20230509_TMF_Faltflyer_A4_digital.pdf" target="_blank" rel="noopener noreferrer">flyer</a>.</p><h2 id="the-feasibility-process" tabindex="-1"><a class="header-anchor" href="#the-feasibility-process"><span>The Feasibility Process</span></a></h2><p>Medical routine data holds great promise for advancing research, yet its integration into a research context poses significant challenges. To address this, Medical Data Integration Centers have been established, by the medical informatics initiative to consolidate data from primary information systems into a central repository. However, relying on data from only one organization is rarely sufficient to answer complex research questions, so merging data across institutional boundaries is necessary.</p><p>To enable researchers to leverage this integrated data for specific research projects, there is a critical need for the ability to query cohort sizes across institutions. The <a href="https://github.com/medizininformatik-initiative/feasibility-dsf-process/" target="_blank" rel="noopener noreferrer">feasibility</a> process allows researchers to conduct automated and distributed feasibility queries, i.e., cohort size estimates. This process is executed according to the open standard BPMN 2.0, the underlying process data model is based on HL7 FHIR R4 resources.</p><h2 id="technical-information" tabindex="-1"><a class="header-anchor" href="#technical-information"><span>Technical Information</span></a></h2><ul><li><a href="https://github.com/medizininformatik-initiative/feasibility-deploy/wiki/DSF-Middleware-Setup" target="_blank" rel="noopener noreferrer">DSF Middleware Setup</a>: The DSF middleware connects your site to the central platform. This allows it to receive feasibility query requests as well as reporting back any results of these queries.</li><li><a href="https://github.com/medizininformatik-initiative/feasibility-dsf-process/" target="_blank" rel="noopener noreferrer">Feasibility Process</a>: Core Feasibility Process</li><li><a href="https://github.com/medizininformatik-initiative/feasibility-deploy/tree/main/feasibility-triangle" target="_blank" rel="noopener noreferrer">Feasibility Triangle</a>: The Feasibility Triangle part of this repository provides a site (data integration center) with all the necessary components to set up in order to allow feasibility queries from the central feasibility portal.</li><li><a href="https://github.com/medizininformatik-initiative/mii-dsf-processes/tree/main" target="_blank" rel="noopener noreferrer">Data Transfer</a></li><li><a href="https://github.com/medizininformatik-initiative/mii-dsf-processes/blob/main/mii-dsf-processes-docker-test-setup/README-Process-Projectathon-Data-Sharing.md" target="_blank" rel="noopener noreferrer">Data extraction after successful feasibility query</a></li></ul>',7)]))}const c=i(s,[["render",n],["__file","feasibility.html.vue"]]),f=JSON.parse('{"path":"/intro/use-cases/feasibility.html","title":"Feasibility","lang":"en-US","frontmatter":{"title":"Feasibility","icon":"diagram","gitInclude":[]},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"The Feasibility Process","slug":"the-feasibility-process","link":"#the-feasibility-process","children":[]},{"level":2,"title":"Technical Information","slug":"technical-information","link":"#technical-information","children":[]}],"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"intro/use-cases/feasibility.md","excerpt":"<h2>Overview</h2>\\n<p>Funded by the German Federal Ministry of Research and Education, 25 <a href=\\"https://www.forschen-fuer-gesundheit.de/menu_standorte.php\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">sites</a> have installed the DSF to execute the <a href=\\"https://github.com/medizininformatik-initiative/feasibility-dsf-process/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Feasibility</a> process. To perform feasibility queries, a researcher can register and query data on the <a href=\\"https://www.forschen-fuer-gesundheit.de/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">FDPG (Forschungsdaten Portal für Gesundheit - Research Data Portal)</a> website. Basic data of hospitalizations of over 8 million patients with over 40 million diagnoses and much more such as laboratory values or drug prescriptions are available. After a successful query, the data is made available in standardized FHIR format. Further information can be found in the <a href=\\"https://www.medizininformatik-initiative.de/sites/default/files/2023-05/20230509_TMF_Faltflyer_A4_digital.pdf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">flyer</a>.</p>"}');export{c as comp,f as data};
<template><div><!--<meta http-equiv="refresh" content="0;url=https://audimax.heiconf.uni-heidelberg.de/jxh4-jxx2-tm6c-d37q">-->
<div class="hint-container tip">
<p class="hint-container-title">Gemeinsame technische Sprechstunde der DSF-Community und des FDPG+</p>
<ul>
<li>Montags, 13:00-14:00 Uhr</li>
<li>Ort: <a href="https://dsf.dev/sprechstunde" target="_blank" rel="noopener noreferrer">https://dsf.dev/sprechstunde</a></li>
</ul>
</div>
<h1 id="hackathon-vom-18-06-2024" tabindex="-1"><a class="header-anchor" href="#hackathon-vom-18-06-2024"><span>Hackathon vom 18.06.2024</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Zusammenfassung</p>
<ul>
<li>Konferenz: <a href="https://audimax.heiconf.uni-heidelberg.de/jxh4-jxx2-tm6c-d37q" target="_blank" rel="noopener noreferrer">https://audimax.heiconf.uni-heidelberg.de/jxh4-jxx2-tm6c-d37q</a></li>
<li><a href="#vorbereitung">Vorbereitung</a></li>
<li><a href="#installationshinweise">Installationshinweise</a></li>
</ul>
</div>
<p>Wir laden Sie herzlich zu unserem kommenden Hackathon <strong>am 18.06. von 10:00 Uhr bis 15:30 Uhr</strong> ein. Diese Veranstaltung bietet die Gelegenheit, sich mit den neuesten Updates und Funktionen unserer Komponenten vertraut zu machen.</p>
<p>Agenda:</p>
<ol>
<li>Einführung in Neuerungen (10:00 - 11:00 Uhr):
<ul>
<li>Begrüßung und Einführung in die neuen Funktionen und Verbesserungen des DSFs</li>
<li>Präsentation der Änderungen der MII DSF-Prozessplugins, sowie von Blaze und Flare</li>
</ul>
</li>
<li>Updates MII-Komponenten (ab 11:00 Uhr bis verlängerter Pause, um NUM-DIZ-Meeting besuchen zu können):
<ul>
<li>DSF</li>
<li>Feasibility</li>
<li>Data Sharing</li>
<li>Data Transfer</li>
<li>KDS Report</li>
<li>Blaze</li>
<li>Flare mit neuer KDS Ontologie</li>
</ul>
</li>
<li>Testen des Prozessplugins &quot;Data Sharing&quot; (ab 14:15 Uhr):
<ul>
<li>Praktische Anwendung des &quot;Data Sharing&quot;-Prozessplugins auf unserer Testinfrastruktur.</li>
</ul>
</li>
</ol>
<p>Ziel der Veranstaltung ist es die Test- und Produktivsysteme möglichst aller Standorte auf den neusten Stand zu patchen.</p>
<h2 id="vorbereitung" tabindex="-1"><a class="header-anchor" href="#vorbereitung"><span>Vorbereitung</span></a></h2>
<p>In diesem Hackathon ist das Aktualisieren der Systeme ein aktiver Bestandteil und bedarf keiner speziellen Vorbereitung. Für das Testen der Data Sharing Prozesse sollten jedoch einige Voraussetzungen bereits vor dem Termin erfüllt sein.</p>
<h3 id="netzwerkfreigaben" tabindex="-1"><a class="header-anchor" href="#netzwerkfreigaben"><span>Netzwerkfreigaben</span></a></h3>
<p>Für den Hackathon werden wir primär die Test-DMS aus Heilbronn verwenden, dafür muss neben der Freigabe zur FDPG auch die Freigabe zum und vom MII-Test-System der HHN vorhanden sein (<a href="http://mii-test.gecko.hs-heilbronn.de" target="_blank" rel="noopener noreferrer">mii-test.gecko.hs-heilbronn.de</a>).</p>
<p>In diesem Kontext bietet es sich an, auch die Freigaben für weitere Test-DMSen zu beantragen. Weitere Details dazu befinden sich in der Liste der Firewallregeln im Test-Allowlist-Management-Tool (<a href="http://allowlist-test.gecko.hs-heilbronn.de" target="_blank" rel="noopener noreferrer">allowlist-test.gecko.hs-heilbronn.de</a>) unter dem Punkt “Download Allowlist”. Wir planen während des Termins auch mit ausgewählten DIZen erste Funktionstests der Test-DMSen durchzuführen.</p>
<p>Wir empfehlen auch sicherzustellen, dass Sie Zugriff auf die Weboberfläche Ihres DSF-FHIR-Servers haben.</p>
<h3 id="fhir-store" tabindex="-1"><a class="header-anchor" href="#fhir-store"><span>FHIR-Store</span></a></h3>
<p>Zur Datenausleitung im Kontext des Data Sharing Prozesses werden wir FHIR Bundles mit Testdaten zur Verfügung stellen, die in Form eines FHIR Bundles auf einem FHIR Store gespeichert werden müssen. Dabei kann ein beliebiger FHIR Server (z.B. HAPI FHIR oder Blaze) verwendet werden. Es kann auch der FHIR Server verwendet werden, der z.B. für Feasibility im Testsystem genutzt wird.</p>
<p>Weitere Details zum Data Sharing Prozess sind hier zu finden:</p>
<p><a href="https://github.com/medizininformatik-initiative/mii-process-data-sharing/wiki" target="_blank" rel="noopener noreferrer">https://github.com/medizininformatik-initiative/mii-process-data-sharing/wiki</a></p>
<p>Eine Installation kann vor oder während des Hackathons durchgeführt werden.</p>
<h2 id="installationshinweise" tabindex="-1"><a class="header-anchor" href="#installationshinweise"><span>Installationshinweise</span></a></h2>
<h3 id="dsf" tabindex="-1"><a class="header-anchor" href="#dsf"><span>DSF</span></a></h3>
<p><a href="https://dsf.dev/stable/maintain/install.html" target="_blank" rel="noopener noreferrer">Installation</a> oder <a href="https://dsf.dev/stable/maintain/upgrade-from-1.html" target="_blank" rel="noopener noreferrer">Update</a></p>
<h3 id="prozessplugins" tabindex="-1"><a class="header-anchor" href="#prozessplugins"><span>Prozessplugins</span></a></h3>
<ul>
<li>DSF Ping Pong 1.0.1.0 <a href="https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0" target="_blank" rel="noopener noreferrer">Release Notes</a></li>
<li>DSF Allowlist Plugin 1.0.0.1 <a href="https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1" target="_blank" rel="noopener noreferrer">Release Notes</a></li>
<li>MII Feasibility 1.0.0.5 <a href="https://github.com/medizininformatik-initiative/feasibility-deploy/wiki/DSF-Middleware-Setup" target="_blank" rel="noopener noreferrer">Instructions</a></li>
<li>MII Process Report 1.1.0.0 for Test Infrastructure <a href="https://github.com/medizininformatik-initiative/mii-process-report/wiki/Process-Report-Deployment-v1.1.x.x" target="_blank" rel="noopener noreferrer">Instructions</a>. Please use 1.0.x.x for Prod for now <a href="https://github.com/medizininformatik-initiative/mii-process-report/wiki/Process-Report-Deployment-v1.0.x.x" target="_blank" rel="noopener noreferrer">Instructions</a></li>
<li>MII Process Data Transfer 1.0.1.0 <a href="https://github.com/medizininformatik-initiative/mii-process-data-transfer/wiki/Process-Data-Transfer-Deployment-v1.0.x.x" target="_blank" rel="noopener noreferrer">Instructions</a></li>
<li>MII Process Data Sharing 1.0.0.1 <a href="https://github.com/medizininformatik-initiative/mii-process-data-sharing/wiki/Process-Data-Sharing-Deployment-v1.0.x.x" target="_blank" rel="noopener noreferrer">Instructions</a></li>
</ul>
<h3 id="weitere-anwendungen" tabindex="-1"><a class="header-anchor" href="#weitere-anwendungen"><span>Weitere Anwendungen</span></a></h3>
<ul>
<li>Flare <a href="https://github.com/medizininformatik-initiative/flare" target="_blank" rel="noopener noreferrer">Instructions</a></li>
<li>Blaze 0.27.1 <a href="https://github.com/samply/blaze/blob/master/docs/deployment/README.md" target="_blank" rel="noopener noreferrer">Instructions</a></li>
</ul>
<h2 id="data-sharing-demodaten" tabindex="-1"><a class="header-anchor" href="#data-sharing-demodaten"><span>Data Sharing Demodaten</span></a></h2>
<ul>
<li><a href="https://github.com/medizininformatik-initiative/mii-process-data-sharing/blob/develop/src/test/resources/fhir/Bundle/Dic1FhirStore_Demo_Bundle.xml" target="_blank" rel="noopener noreferrer">https://github.com/medizininformatik-initiative/mii-process-data-sharing/blob/develop/src/test/resources/fhir/Bundle/Dic1FhirStore_Demo_Bundle.xml</a></li>
</ul>
<p>Falls Sie Fragen zum Hackathon oder der Installation des DSF haben, melden Sie sich gerne über den DSF-Community Zulip-Channel oder <a href="mailto:dsf-gecko@hs-heilbronn.de" target="_blank" rel="noopener noreferrer">dsf-gecko@hs-heilbronn.de</a>.</p>
</div></template>



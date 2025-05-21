---
title: Hackathon
icon: guide
---

<meta http-equiv="refresh" content="0;url=https://audimax.heiconf.uni-heidelberg.de/jxh4-jxx2-tm6c-d37q">

::: tip Gemeinsame technische Sprechstunde der DSF-Community und des FDPG+
- Montags, 13:00-14:00 Uhr
- Ort: https://dsf.dev/sprechstunde
:::


# Hackathon vom 22.10.2024

::: tip Zusammenfassung
<!--- Konferenz: -->
- [Vorbereitung](#vorbereitung)
- [Installationshinweise](#installationshinweise)
- [Beitritt](https://audimax.heiconf.uni-heidelberg.de/jxh4-jxx2-tm6c-d37q)
:::

Liebe Community,

die Modul 2B Projekte FDPG+ und DSF Community möchten Sie herzlich zu einem Hackathon am 22.10.2024 von 10:00-16:00 Uhr einladen.
Leiten Sie bitte die Einladung an die technischen Kolleg*innen in den DIZ und den DMSt weiter.

Fokus des Hackathons liegt auf der Erprobung der neuen Machbarkeit und des neuen Datenselektion- und -Extraktionstools ([TORCH](https://github.com/medizininformatik-initiative/torch)) im Zusammenspiel mit den DSF Data Sharing Prozessen. Ergänzend wird der [FHIR Data Evaluator](https://github.com/medizininformatik-initiative/fhir-data-evaluator) vorgestellt und Updates zum DSF, dem Feasibility Prozess Plugin und dem Allowlist Management präsentiert.

Wie üblich sollen die Tools und Prozesse hands-on auf der Testinfrastruktur erprobt und deployed werden, dazu folgen weitere Informationen kurz vor dem Hackathon.

Vorläufiger Zeitplan: 

10:00-12:30 : Vorstellungen und Updates

•	Vorstellung Datenselektion und Extraktionstool TORCH – FDPG+
•	Vorstellung FHIR Evaluator – FDPG+
•	DSF Updates – DSF Community
•	Feasibility Prozessplugin Updates – DSF Community & FDPG+
•	Allowlist Management Updates – DSF Community

12:30-14:00 : Mittagspause

14:00-16:00 : Hands-On

•	Erproben der vorgestellten Tools
•	Datenselektion und Extraktion mit Data Sharing
•	Support und Fragen zum Deployment und Betrieb
•	Wir freuen uns auf Ihre Teilnahme!

Viele Grüße,
Julian Gründner und Maximilian Kurscheidt
für FDPG+ und DSF Community


## Vorbereitung
In diesem Hackathon ist das Aktualisieren der Systeme ein aktiver Bestandteil und bedarf keiner speziellen Vorbereitung. Für das Testen der Data Sharing Prozesse sollten jedoch einige Voraussetzungen bereits vor dem Termin erfüllt sein.

### Netzwerkfreigaben

Für den Hackathon werden wir primär die Test-DMS aus Heilbronn verwenden, dafür muss neben der Freigabe zur FDPG auch die Freigabe zum und vom MII-Test-System der HHN vorhanden sein (mii-test.gecko.hs-heilbronn.de).

In diesem Kontext bietet es sich an, auch die Freigaben für weitere Test-DMSen zu beantragen. Weitere Details dazu befinden sich in der Liste der Firewallregeln im Test-Allowlist-Management-Tool (allowlist-test.gecko.hs-heilbronn.de) unter dem Punkt “Download Allowlist”. Wir planen während des Termins auch mit ausgewählten DIZen erste Funktionstests der Test-DMSen durchzuführen.

Wir empfehlen auch sicherzustellen, dass Sie Zugriff auf die Weboberfläche Ihres DSF-FHIR-Servers haben.

### FHIR-Store

Zur Datenausleitung im Kontext des Data Sharing Prozesses werden wir FHIR Bundles mit Testdaten zur Verfügung stellen, die in Form eines FHIR Bundles auf einem FHIR Store gespeichert werden müssen. Dabei kann ein beliebiger FHIR Server (z.B. HAPI FHIR oder Blaze) verwendet werden. Es kann auch der FHIR Server verwendet werden, der z.B. für Feasibility im Testsystem genutzt wird.

Weitere Details zum Data Sharing Prozess sind hier zu finden:

https://github.com/medizininformatik-initiative/mii-process-data-sharing/wiki

Eine Installation kann vor oder während des Hackathons durchgeführt werden.

## Installationshinweise
::: tip ⚠️ 
Versionen der unten aufgeführten Tools können sich noch bis zum Hackathon ändern.
:::

### DSF
[Installation](https://dsf.dev/stable/maintain/install.html) oder [Update](https://dsf.dev/stable/maintain/upgrade-from-1.html)

### Prozessplugins
- DSF Ping Pong 1.0.1.0 [Release Notes](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0)
- DSF Allowlist Plugin 1.0.0.1 [Release Notes](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1)
- MII Feasibility 1.0.0.6 [Instructions](https://github.com/medizininformatik-initiative/feasibility-deploy/wiki/DSF-Middleware-Setup)
- MII Process Report 1.1.1.1 for Test Infrastructure [Instructions](https://github.com/medizininformatik-initiative/mii-process-report/wiki/Process-Report-Deployment-v1.1.x.x). Please use 1.1.1.1 for Prod for now [Instructions](https://github.com/medizininformatik-initiative/mii-process-report/wiki/Process-Report-Deployment-v1.1.x.x)
- MII Process Data Transfer 1.0.2.1 [Instructions](https://github.com/medizininformatik-initiative/mii-process-data-transfer/wiki/Process-Data-Transfer-Deployment-v1.0.x.x)
- MII Process Data Sharing 1.0.1.1 [Instructions](https://github.com/medizininformatik-initiative/mii-process-data-sharing/wiki/Process-Data-Sharing-Deployment-v1.0.x.x)

### Weitere Anwendungen
- Flare [Instructions](https://github.com/medizininformatik-initiative/flare)
- Blaze 0.30.0 [Instructions](https://github.com/samply/blaze/blob/master/docs/deployment/README.md)
- FHIR Evaluator [Instructions](https://github.com/medizininformatik-initiative/fhir-data-evaluator)
- TORCH [Instructions](https://github.com/medizininformatik-initiative/torch)

## Data Sharing Demodaten
- [Demodaten](https://github.com/medizininformatik-initiative/mii-process-data-sharing/blob/develop/src/test/resources/fhir/Bundle/Dic1FhirStore_Demo_Bundle.xml)



Falls Sie Fragen zum Hackathon oder der Installation des DSF haben, melden Sie sich gerne über den DSF-Community Zulip-Channel oder dsf-gecko@hs-heilbronn.de. 


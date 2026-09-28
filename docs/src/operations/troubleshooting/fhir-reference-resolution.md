---
title: FHIR Reference Resolution
icon: support
---

Sending Task resources to another DSF FHIR Server causes that server to try to resolve any references inside the Task resource (usually on another DSF FHIR server).
If this fails, the Task resource will be rejected and causes Processes like [Ping Pong 2.x](https://github.com/datasharingframework/dsf-process-ping-pong) and 
[Data Sharing](https://github.com/medizininformatik-initiative/mii-process-data-sharing) to fail. Anything that can cause an HTTPS request to fail may also cause reference resolution to fail.
Some specific reasons may include:
- Firewall blocking connection between FHIR servers: A common issue is that firewalls are configured to allow DSF BPE and DSF FHIR servers to communicate but not DSF FHIR servers amongst themselves.
- Certificate validation: The DSF FHIR server sent the Task resource will present its server certificate to the DSF FHIR server trying to resolve the reference. If the reference resolving DSF FHIR does not trust the certificate presented by the requesting DSF FHIR server, the reference won't be resolved. This issue may arise because the trust store of the reference resolving DSF FHIR server is misconfigured or the server certificate presented by requesting DSF FHIR server is invalid, e.g. because it is expired. 
- Connection timeouts
- SSL/TLS handshake failures

This list is not exhaustive. Errors might need specific debugging
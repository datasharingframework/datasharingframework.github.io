---
title: Allow List Generator
icon: tool
---

## Overview

This tool generates a FHIR R4 Bundle (type `transaction`) for deploying an Allow List to a DSF FHIR server. The bundle contains [Organization](https://dsf.dev/fhir/ImplementationGuide/dev.dsf/StructureDefinition-organization.html), [Endpoint](https://dsf.dev/fhir/ImplementationGuide/dev.dsf/StructureDefinition-endpoint.html) and [OrganizationAffiliation](https://dsf.dev/fhir/ImplementationGuide/dev.dsf/StructureDefinition-organization-affiliation.html) resources conforming to the DSF profiles.

For more information about the Allow List concept, see the [Allow List documentation](/explore/concepts/allow-list.html).

::: tip Certificate Thumbprints
SHA-512 certificate thumbprints in HEX form `[a-f0-9]{128}` can be calculated using:
```sh
certtool --fingerprint --hash=sha512 --infile=certificate.pem
```
:::

::: warning
This tool generates a basic Allow List bundle. For production deployments, consider using the [Allow List Management Portal](allowList-mgm) for centralized management.
:::

<AllowListGenerator />

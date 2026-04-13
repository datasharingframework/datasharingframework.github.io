---
title: FHIR Server
icon: module
---

## Purpose

The **DSF FHIR Server** exposes the HL7® FHIR® R4 REST API that other DSF
instances communicate with. It stores and serves the resources required to
coordinate distributed business processes — such as `Task`, `ActivityDefinition`,
`Organization`, `Endpoint`, and project-specific data resources — and enforces
access control on every interaction. Together with the [FHIR Reverse Proxy](../fhir-reverse-proxy/)
it forms the externally reachable component of a DSF instance.

## Docker Image

- Registry: [`ghcr.io/datasharingframework/fhir`](https://github.com/datasharingframework/dsf/pkgs/container/fhir)
- Tag for this release: `2.1.0`

<ImageVerification image="fhir" tag="2.1.0" guide="../image-verification" />

## Useful Pages

- [Configuration Parameters](configuration)
- [Access Control](access-control)
- [OpenID Connect](oidc)
- [Logging](logging)
- [How to Verify Image Signatures](../image-verification)

---
title: FHIR Reverse Proxy
icon: module
---

## Purpose

The **DSF FHIR Reverse Proxy** is the externally reachable Apache HTTP Server based front for the [FHIR Server](../fhir/). It terminates TLS, performs client certificate authentication for inbound DSF-to-DSF traffic, optionally accepts OIDC bearer tokens for human users, and forwards authenticated requests to the FHIR Server backend. It is the only component of a DSF instance that should be exposed to the public internet.

## Docker Image

- Registry: [`ghcr.io/datasharingframework/fhir_proxy`](https://github.com/datasharingframework/dsf/pkgs/container/fhir_proxy)
- Tag for this release: `{{release.tag}}`

## Verify Image Signature

Verify the signed image before deploying. See [How to Verify Image Signatures](../image-verification) for prerequisites, SBOM verification, and troubleshooting.

```bash
cosign verify \
  {{release.image.fhir_proxy}}@sha256:{{release.digest.fhir_proxy}} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

## Useful Pages

- [Configuration Parameters](configuration)
- [How to Verify Image Signatures](../image-verification)

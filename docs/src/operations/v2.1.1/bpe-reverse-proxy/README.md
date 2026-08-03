---
title: BPE Reverse Proxy
icon: module
---

## Purpose

The **DSF BPE Reverse Proxy** is an Apache HTTP Server based front for the [BPE Server](../bpe/). It terminates TLS for the BPE's web UI and OIDC-authenticated administrative endpoints, and forwards authenticated requests to the BPE backend. Unlike the [FHIR Reverse Proxy](../fhir-reverse-proxy/), it is intended for internal operator and administrator access only, not for DSF-to-DSF traffic.

## Docker Image

- Registry: [`ghcr.io/datasharingframework/bpe_proxy`](https://github.com/datasharingframework/dsf/pkgs/container/bpe_proxy)
- Tag for this release: `{{release.tag}}`

## Verify Image Signature

Verify the signed image before deploying. See [How to Verify Image Signatures](../image-verification) for prerequisites, SBOM verification, and troubleshooting.

```bash
cosign verify \
  {{release.image.bpe_proxy}}@sha256:{{release.digest.bpe_proxy}} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

## Useful Pages

- [Configuration Parameters](configuration)
- [How to Verify Image Signatures](../image-verification)

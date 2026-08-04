---
title: BPE Server
icon: module
---

## Purpose

The **DSF Business Process Engine (BPE)** executes the BPMN 2.0 workflows that drive distributed data sharing processes between DSF instances. It listens for new `Task` resources on the local FHIR Server, runs the corresponding process plugin, and creates follow-up `Task` resources on remote FHIR Servers via its configured FHIR client connections. The BPE is an internal component and is not exposed to the public network — it talks to local systeme (e.g., the local FHIR Store) and to remote DSF FHIR Servers through their reverse proxies.

## Docker Image

- Registry: [`ghcr.io/datasharingframework/bpe`](https://github.com/datasharingframework/dsf/pkgs/container/bpe)
- Tag for this release: `{{release.tag}}`

## Verify Image Signature

Verify the signed image before deploying. See [How to Verify Image Signatures](../image-verification) for prerequisites, SBOM verification, and troubleshooting.

```bash
cosign verify \
  {{release.image.bpe}}@sha256:{{release.digest.bpe}} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

## Useful Pages

- [Configuration Parameters](configuration)
- [Access Control](access-control)
- [OpenID Connect](oidc)
- [Logging](logging)
- [FHIR Client Connections](fhir-client-connections)
- [How to Verify Image Signatures](../image-verification)

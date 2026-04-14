---
title: Verify Image Signature
icon: safe
---

# How to Verify Image Signatures

Starting with DSF {{release.tag}}, all official Docker images published to [ghcr.io/datasharingframework](https://github.com/orgs/datasharingframework/packages) are signed using [Cosign](https://docs.sigstore.dev/cosign/overview/) with [keyless signing](https://docs.sigstore.dev/cosign/signing/overview/) backed by GitHub's OIDC identity provider. Each image additionally has a CycloneDX SBOM attached to the registry, which is signed the same way.

Verifying signatures before pulling images into production is strongly recommended. It ensures that the image was built and published by the official DSF GitHub Actions release workflow and has not been tampered with.

## Prerequisites

- [Cosign](https://docs.sigstore.dev/cosign/installation/) v2.0 or newer installed on the host running the verification.
- Network access to `ghcr.io` and the public Sigstore transparency log (`rekor.sigstore.dev`).
- The exact image digest (`sha256:...`) of the image you want to verify. The digest can be looked up on the [GitHub package page](https://github.com/orgs/datasharingframework/packages) of the respective image or via:

  ```bash
  docker buildx imagetools inspect ghcr.io/datasharingframework/<image>:<tag>
  ```

::: warning Always pin the digest
Verifying by tag alone (`:{{release.tag}}`) is not sufficient — tags can be reassigned. Always include the immutable `@sha256:<digest>` in the verification command and in your production `docker-compose.yml`.
:::

## Verify the Image Signature

A successful verification prints the verified claims to stdout and exits with status `0`. The certificate identity confirms the signature was created by a workflow inside the `datasharingframework/dsf` repository, the OIDC issuer confirms it was a GitHub Actions run.

The commands below are pre-filled with the correct image tag for this release. Replace `<digest>` with the digest you looked up for the image you intend to deploy.

### FHIR Server (`fhir`)

- Image: [`ghcr.io/datasharingframework/fhir`](https://github.com/datasharingframework/dsf/pkgs/container/fhir)

```bash
cosign verify \
  {{release.image.fhir}}@sha256:{{release.digest.fhir}} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

### FHIR Reverse Proxy (`fhir_proxy`)

- Image: [`ghcr.io/datasharingframework/fhir_proxy`](https://github.com/datasharingframework/dsf/pkgs/container/fhir_proxy)

```bash
cosign verify \
  {{release.image.fhir_proxy}}@sha256:{{release.digest.fhir_proxy}} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

### BPE Server (`bpe`)

- Image: [`ghcr.io/datasharingframework/bpe`](https://github.com/datasharingframework/dsf/pkgs/container/bpe)

```bash
cosign verify \
  {{release.image.bpe}}@sha256:{{release.digest.bpe}} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

### BPE Reverse Proxy (`bpe_proxy`)

- Image: [`ghcr.io/datasharingframework/bpe_proxy`](https://github.com/datasharingframework/dsf/pkgs/container/bpe_proxy)

```bash
cosign verify \
  {{release.image.bpe_proxy}}@sha256:{{release.digest.bpe_proxy}} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

## Verify the SBOM Attestation

Each image has a signed CycloneDX SBOM attached. Substitute `<image>` with one of `fhir`, `fhir_proxy`, `bpe`, `bpe_proxy` and `<digest>` with the digest of the image you are verifying:

```bash
cosign verify-attestation \
  --type cyclonedx \
  ghcr.io/datasharingframework/<image>:{{release.tag}}@sha256:<digest> \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"
```

To extract the SBOM payload for further processing (e.g. dependency or vulnerability analysis):

```bash
cosign download attestation \
  --predicate-type https://cyclonedx.org/bom \
  ghcr.io/datasharingframework/<image>:{{release.tag}}@sha256:<digest> \
  | jq -r .payload | base64 -d | jq .predicate > sbom.cdx.json
```

## Troubleshooting

- **`no matching signatures`** — The image was not signed by the official DSF release workflow. Do not use it in production. Re-check the registry path (`ghcr.io/datasharingframework/...`) and the digest.
- **`certificate identity ... did not match`** — The signature exists but was produced by a different repository or workflow. Verify you are pulling from the official `datasharingframework/dsf` org.
- **Network errors against `rekor.sigstore.dev`** — Cosign queries the public transparency log during verification. In air-gapped environments, pre-fetch and cache the log entries, or run cosign with `--insecure-ignore-tlog=true` only after carefully assessing the security implications.

## Further Reading

- [Cosign documentation](https://docs.sigstore.dev/cosign/overview/)
- [Sigstore keyless signing](https://docs.sigstore.dev/cosign/signing/overview/)
- [CycloneDX SBOM specification](https://cyclonedx.org/specification/overview/)

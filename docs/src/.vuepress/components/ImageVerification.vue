<template>
  <div class="image-verification">
    <h2>Verify Image Signature</h2>
    <p>
      The <code>{{ image }}</code> image is signed using
      <a href="https://docs.sigstore.dev/cosign/overview/" target="_blank" rel="noopener">Cosign</a>
      keyless signing via the official DSF GitHub Actions release workflow.
      Verify the signature before using the image in production:
    </p>
    <pre><code>cosign verify \
  ghcr.io/datasharingframework/{{ image }}:{{ tag }}@sha256:{{ digestDisplay }} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"</code></pre>
    <p v-if="!digest">
      Replace <code>&lt;digest&gt;</code> with the immutable digest of the image
      you intend to deploy. See
      <a :href="guide">How to Verify Image Signatures</a>
      for the complete guide, SBOM verification, and troubleshooting.
    </p>
    <p v-else>
      See <a :href="guide">How to Verify Image Signatures</a> for the complete
      guide, SBOM verification, and troubleshooting.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true },
    tag: { type: String, default: '2.1.0' },
    digest: { type: String, default: '' },
    guide: { type: String, default: '../image-verification' }
  },
  computed: {
    digestDisplay() {
      return this.digest ? this.digest.replace(/^sha256:/, '') : '<digest>';
    }
  }
}
</script>

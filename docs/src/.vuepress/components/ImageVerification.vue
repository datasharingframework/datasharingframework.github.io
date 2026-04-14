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
  ghcr.io/datasharingframework/{{ image }}:{{ resolvedTag }}@sha256:{{ digestDisplay }} \
  --certificate-identity-regexp "https://github.com/datasharingframework/dsf/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com"</code></pre>
    <p v-if="!resolvedDigest">
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

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getReleaseFromPath } from '../data/releases';

const props = defineProps<{
  image: string;
  tag?: string;
  digest?: string;
  guide?: string;
}>();

const route = useRoute();

const release = computed(() => getReleaseFromPath(route.path));

const resolvedTag = computed(() => props.tag ?? release.value?.tag ?? '<tag>');

const resolvedDigest = computed(() => {
  if (props.digest) return props.digest.replace(/^sha256:/, '');
  const fromData = release.value?.images[props.image as keyof NonNullable<typeof release.value>['images']]?.digest;
  if (fromData && fromData !== 'sha256:TODO') return fromData.replace(/^sha256:/, '');
  return '';
});

const digestDisplay = computed(() => resolvedDigest.value || '<digest>');

const guide = computed(() => props.guide ?? '../image-verification');
</script>

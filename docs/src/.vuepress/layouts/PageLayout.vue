<script setup lang="ts">
import { Layout as ParentLayout, PageContent } from 'vuepress-theme-hope/client'
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from 'vue'
import { allVersions, latestVersion } from '../data/releases'

const version = ref("");
const latestTag = `v${latestVersion}`;

function setVersionBasedOnCurrentPath() : void {
    if (route.path.startsWith('/operations/')) {
        const input = route.path.substring('/operations/'.length);
        const firstSlash = input.indexOf("/");
        var result = firstSlash !== -1 ? input.slice(0, firstSlash) : input;
        if (result === "latest") {
          result = latestTag;
        }
        version.value = result;
    } else {
        version.value = "";
    }
}

const route = useRoute();

const router = useRouter();
router.afterEach((_to, _from) => {
    setVersionBasedOnCurrentPath();
});

onMounted(() => {
  setVersionBasedOnCurrentPath();
})

function navigateToNewVersion() {
    const input = route.path.substring('/operations/'.length);
    const firstSlash = input.indexOf("/");
    const result = firstSlash !== -1 ? input.slice(firstSlash + 1) : "";
    if (version.value === latestTag) {
      router.push('/operations/' + "latest" + "/" + result);
    } else {
      router.push('/operations/' + version.value + "/" + result);
    }
}

</script>

<template>
  <ParentLayout>
    <template #sidebarTop>
      <div class="version-selector" v-if="route.path.startsWith('/operations/')">
        <label class="vp-sidebar-header" for="version-select"><strong>Version:</strong> </label>
        <select id="version-select" class="vp-sidebar-header" v-model="version" @change="navigateToNewVersion">
        <option v-for="v in allVersions" :key="v.tag" :value="'v' + v.tag">
          {{ v.tag === latestVersion ? `latest (${v.tag})` : v.tag }}
        </option>
      </select></div>
    </template>
    <PageContent id="main-content" class="vp-page"/>
  </ParentLayout>
</template>

<style lang="css">
.version-selector {
    margin-top: 20px;
}
</style>

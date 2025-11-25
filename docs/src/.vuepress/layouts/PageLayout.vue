<script setup lang="ts">
import { Layout as ParentLayout, PageContent } from 'vuepress-theme-hope/client'
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from 'vue'

const version = ref("");
const latestVersion = "v2.0.0";


function setVersionBasedOnCurrentPath() : void {
    if (route.path.startsWith('/operations/')) {
        const input = route.path.substring('/operations/'.length);
        const firstSlash = input.indexOf("/");
        var result = firstSlash !== -1 ? input.slice(0, firstSlash) : input;
        if (result === "latest") {
          result = latestVersion;
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
    if (version.value === latestVersion) {
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
        <option value="v2.0.0">latest (2.0.0)</option>
        <option value="v1.9.0">1.9.0</option>
        <option value="v1.8.0">1.8.0</option>
        <option value="v1.7.1">1.7.1</option>
        <option value="v1.7.0">1.7.0</option>
        <option value="v1.6.0">1.6.0</option>
        <option value="v1.5.2">1.5.2</option>
        <option value="v1.5.1">1.5.1</option>
        <option value="v1.5.0">1.5.0</option>
        <option value="v1.4.0">1.4.0</option>
        <option value="v1.3.2">1.3.2</option>
        <option value="v1.3.1">1.3.1</option>
        <option value="v1.3.0">1.3.0</option>
        <option value="v1.2.0">1.2.0</option>
        <option value="v1.1.0">1.1.0</option>
        <option value="v1.0.0">1.0.0</option>
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
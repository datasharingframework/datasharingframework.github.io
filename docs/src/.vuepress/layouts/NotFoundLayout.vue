<script setup lang="ts">
// import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { NotFound as ParentLayout, PageContent } from 'vuepress-theme-hope/client'
import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue'

const route = useRoute();
const router = useRouter();

function removeLastPathComponent(path) {
  const parts = path.replace(/\/+$/, '').split('/');
  parts.pop(); // Remove the last component
  const newPath = parts.join('/');
  return (newPath ? newPath : '') + '/';
}

function redirectToParentDirectoryIfInOperations() : void {
    if (route.path.startsWith('/operations/')) {
        router.push(removeLastPathComponent(route.path));

    }
}


redirectToParentDirectoryIfInOperations();

/*router.afterEach((_to, _from) => {
    redirectToParentDirectoryIfInOperations();

});*/


function goBack() {
  router.go(-1);
}

function goHome() {
  router.push('/'); 
}

</script>

<template>
  <ParentLayout>
    <template #default>
      <div class="not-found-hint"><p class="error-code">404</p><h1 class="error-title">Page not found</h1><p class="error-hint">That’s a Four-Oh-Four.</p></div><div class="actions"><button type="button" class="action-button"  @click="goBack">Go back</button><button type="button" class="action-button" @click="goHome">Take me home</button></div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.version-selector {
    margin-top: 20px;
}
</style>
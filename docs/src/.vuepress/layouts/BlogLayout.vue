<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog";
import { usePageFrontmatter } from "vuepress/client";
import { computed } from "vue";

const frontmatter = usePageFrontmatter<{ cover?: string }>();
const cover = computed(() => frontmatter.value.cover);
</script>

<template>
  <Blog>
     <template #articleCover>
      <img v-if="cover" :src="cover" alt="Cover image" />
    </template>
    <template #infoAfter>
    <div style="text-align: center; font-size: 0.8em; color: #666; margin-top: 8px;">
    Banner image by <a href="https://unsplash.com/de/@fakurian" target="_blank" rel="noopener noreferrer">Milad Fakurian</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
    </div>
    </template>
  </Blog>
</template>
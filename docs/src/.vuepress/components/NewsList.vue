<script setup lang="ts">
import { computed } from "vue";
import { useArticles } from "vuepress-theme-hope/composables/blog/useArticles";

type ArticleInfo = {
  title: string;
  path: string;
  date?: Date;
  excerpt?: string;
  category?: string[];
  tag?: string[];
  sticky?: boolean;
  cover?: string;
  isEncrypted?: boolean;
};

const props = defineProps<{ count?: number }>();
const displayCount = computed(() => props.count ?? 5);

const articlesMap = useArticles();


const sortedArticles = computed(() => {
  const allArticles: ArticleInfo[] = Object.values(articlesMap.value).flat();

  return allArticles
    .filter((a) => a.date) // optional
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());
});
</script>

<template>
  <div class="news-list">
    <h2> Latest News</h2>
    <p v-if="sortedArticles.length === 0"> No articles found.</p>
    <ul>
      <li v-for="article in sortedArticles.slice(0, displayCount)" :key="article.path">
        <RouterLink :to="article.path">
          {{ article.title }} — {{ article.date?.toLocaleDateString?.() }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>


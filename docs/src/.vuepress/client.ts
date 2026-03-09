import { defineClientConfig } from 'vuepress/client'
import { Layout as ParentLayout } from "vuepress-theme-hope/client";

import Layout from './layouts/PageLayout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue';
import AllowListGenerator from './components/AllowListGenerator.vue';



export default defineClientConfig({
    enhance({ app }) {
    app.component('AllowListGenerator', AllowListGenerator);
  },
  layouts: {
    ParentLayout,
    Layout,
    NotFound: NotFoundLayout,
    Blog: BlogLayout,
  },
})
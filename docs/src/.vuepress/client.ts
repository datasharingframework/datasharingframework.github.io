import { defineClientConfig } from 'vuepress/client'
import { Layout as ParentLayout } from "vuepress-theme-hope/client";

import Layout from './layouts/PageLayout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue';
import NewsList from "./components/NewsList.vue"; // adjust if path differs


export default defineClientConfig({
    enhance({ app }) {
    app.component("NewsList", NewsList);
  },
  layouts: {
    ParentLayout,
    Layout,
    NotFound: NotFoundLayout,
    Blog: BlogLayout,
  
  },
})
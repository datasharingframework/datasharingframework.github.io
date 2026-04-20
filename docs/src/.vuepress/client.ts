import { defineClientConfig } from 'vuepress/client'
import { Layout as ParentLayout } from "vuepress-theme-hope/client";

import Layout from './layouts/PageLayout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue';

import OldVersions from './components/OldVersions.vue';

export default defineClientConfig({
    enhance({ app }) {
    app.component('OldVersions', OldVersions);
  },
  layouts: {
    ParentLayout,
    Layout,
    NotFound: NotFoundLayout,
    Blog: BlogLayout,
  },
})
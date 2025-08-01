import { defineClientConfig } from 'vuepress/client'
import { Layout as ParentLayout } from "vuepress-theme-hope/client";

import Layout from './layouts/PageLayout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'

export default defineClientConfig({
  layouts: {
    ParentLayout,
    Layout,
    NotFound: NotFoundLayout,
  },
})
import { defineClientConfig } from 'vuepress/client'
import { Layout as ParentLayout, NotFound } from "vuepress-theme-hope/client";

import Layout from './layouts/PageLayout.vue'

export default defineClientConfig({
  layouts: {
    //ParentLayout,
    Layout
  },
})
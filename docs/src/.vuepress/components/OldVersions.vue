<template>
  <div>
    <h2>DSF v2</h2>
    <ul>
      <li v-for="v in v2" :key="v.tag"><a :href="'./v' + v.tag + '/'">{{ v.tag }}</a></li>
    </ul>
    <h2>DSF v1</h2>
    <ul>
      <li v-for="v in v1" :key="v.tag"><a :href="'./v' + v.tag + '/'">{{ v.tag }}</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { allVersions } from '../data/releases';

const v2 = allVersions.filter(v => v.tag.startsWith('2.'));
const v1 = allVersions.filter(v => v.tag.startsWith('1.'));
</script>

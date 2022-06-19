<template>
  <div class="menu">
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="menu"
      newCreate="新建菜单"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pageContent from '@/components/page-content';
import { pageContentConfig } from './config/pagecontent.config';
export default defineComponent({
  components: {
    pageContent
  },
  setup() {
    return {
      pageContentConfig
    };
  }
});
</script>

<style scoped></style>

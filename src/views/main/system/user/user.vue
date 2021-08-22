<template>
  <div class="user">
    <search-form-page :searchConfig="searchFormConfig"></search-form-page>
    <page-content :pageContentConfig="pageContentConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import searchFormPage from '@/components/search-form';
import pageContent from '@/components/page-content/src/pagecontent.vue';

import { searchFormConfig } from './config/searchform.config';
import { pageContentConfig } from './config/pagecontent.config';

export default defineComponent({
  name: 'user',

  components: {
    searchFormPage,
    pageContent
  },
  setup() {
    return {
      searchFormConfig,
      pageContentConfig
    };
  }
});
</script>

<style scoped lang="less"></style>

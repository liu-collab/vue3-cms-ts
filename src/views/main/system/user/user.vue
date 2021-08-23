<template>
  <div class="user">
    <search-form-page
      :searchConfig="searchFormConfig"
      @handleResetData="handleResetResult"
      @handleSearchData="handleSearchResult"
    ></search-form-page>
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="users"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import searchFormPage from '@/components/search-form';
import pageContent from '@/components/page-content/src/pagecontent.vue';

import { searchFormConfig } from './config/searchform.config';
import { pageContentConfig } from './config/pagecontent.config';

import { usePageContent } from '@/hooks/usePageContent';
export default defineComponent({
  name: 'user',

  components: {
    searchFormPage,
    pageContent
  },
  setup() {
    const [pageContentRef, handleResetResult, handleSearchResult] =
      usePageContent();
    return {
      searchFormConfig,
      pageContentConfig,
      handleResetResult,
      handleSearchResult,
      pageContentRef
    };
  }
});
</script>

<style scoped lang="less"></style>

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
      @handleEditClick="handleEditData"
      @handleNewClick="handleNewData"
    ></page-content>
    ,
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="pageModalConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import searchFormPage from '@/components/search-form';
import pageContent from '@/components/page-content/src/pagecontent.vue';
import pageModal from '@/components/page-modal/src/pageModal.vue';

import { searchFormConfig } from './config/searchform.config';
import { pageContentConfig } from './config/pagecontent.config';
import { pageModalConfig } from './config/pagemodal.config';

import { usePageContent } from '@/hooks/usePageContent';
import { useModalValue } from '@/hooks/useModalValue';
export default defineComponent({
  name: 'user',

  components: {
    searchFormPage,
    pageContent,
    pageModal
  },
  setup() {
    const [pageContentRef, handleResetResult, handleSearchResult] =
      usePageContent();
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      useModalValue();
    return {
      searchFormConfig,
      pageContentConfig,
      pageModalConfig,
      handleResetResult,
      handleSearchResult,
      pageContentRef,
      handleEditData,
      handleNewData,
      pageModalRef,
      defaultInfo
    };
  }
});
</script>

<style scoped lang="less"></style>

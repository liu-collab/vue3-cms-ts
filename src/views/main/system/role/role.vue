<template>
  <div class="role">
    <search-form-page
      :searchConfig="searchFormConfig"
      @handleResetData="handleResetResult"
      @handleSearchData="handleSearchResult"
    ></search-form-page>
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="role"
      newCreate="新建角色"
      ref="pageContentRef"
      @handleEditClick="handleEditData"
      @handleNewClick="handleNewData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="pageModalConfig"
      pageName="role"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import searchFormPage from '@/components/search-form';
import pageContent from '@/components/page-content/src/pagecontent.vue';
import pageModal from '@/components/page-modal/src/pageModal.vue';

import { pageContentConfig } from './config/pagerolecontent';
import { searchFormConfig } from './config/searchform.config';
import { pageModalConfig } from './config/pagemodal.config';

import { usePageContent } from '@/hooks/usePageContent';
import { useModalValue } from '@/hooks/useModalValue';
export default defineComponent({
  name: 'role',
  components: {
    pageContent,
    searchFormPage,
    pageModal
  },
  setup() {
    const [pageContentRef, handleResetResult, handleSearchResult] =
      usePageContent();
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      useModalValue();
    return {
      pageContentConfig,
      searchFormConfig,
      pageModalConfig,
      pageContentRef,
      handleResetResult,
      handleSearchResult,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData
    };
  }
});
</script>

<style scoped></style>

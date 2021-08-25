<template>
  <div class="department">
    <search-form-page
      :searchConfig="searchFormConfig"
      @handleResetData="handleResetResult"
      @handleSearchData="handleSearchResult"
    >
    </search-form-page>
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="category"
      ref="pageContentRef"
      newCreate="新建类别"
      @handleEditClick="handleEditData"
      @handleNewClick="handleNewData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="pageModalConfig"
      pageName="category"
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
  name: 'department',
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
      handleResetResult,
      handleSearchResult,
      pageContentRef,
      pageContentConfig,
      pageModalConfig,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData
    };
  }
});
</script>

<style scoped></style>

<template>
  <div class="goods">
    <search-form-page
      :searchConfig="searchFormConfig"
      @handleResetData="handleResetResult"
      @handleSearchData="handleSearchResult"
    ></search-form-page>
    <page-content
      :pageContentConfig="pageContentConfig"
      ref="pageContentRef"
      pageName="goods"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
      <template #status="scope">
        <el-button size="mini" :type="scope.row.status ? 'success' : 'danger'">
          {{ scope.row.status ? '下架' : '上架' }}
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import searchFormPage from '@/components/search-form';
import pageContent from '@/components/page-content/src/pagecontent.vue';

import { pageContentConfig } from './config/goodsContentConfig';
import { searchFormConfig } from './config/searchform.config';

import { usePageContent } from '@/hooks/usePageContent';

export default defineComponent({
  name: 'goods',
  components: {
    pageContent,
    searchFormPage
  },
  setup() {
    const [pageContentRef, handleResetResult, handleSearchResult] =
      usePageContent();
    return {
      pageContentConfig,
      searchFormConfig,
      pageContentRef,
      handleResetResult,
      handleSearchResult
    };
  }
});
</script>

<style scoped></style>

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

    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="pageModalConfigRef"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

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
    //modal相关hook
    const editCallback = () => {
      const passwordItm = pageModalConfig.formItem.find(
        (item) => item.field === 'password'
      );
      passwordItm!.isHidden = true;
    };
    const newCallback = () => {
      const passwordItm = pageModalConfig.formItem.find(
        (item) => item.field === 'password'
      );
      passwordItm!.isHidden = false;
    };
    //函数科里化
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      useModalValue(editCallback, newCallback);

    //动态添加部门和角色
    //从vuex中获取到部门和角色的数据,赋值给配置文件下拉框中的options中
    //利用computed返回一个响应式的数据
    const store = useStore();
    const pageModalConfigRef = computed(() => {
      const departmentItem = pageModalConfig.formItem.find(
        (item) => item.field === 'departmentId'
      );
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id };
      });

      const roleItem = pageModalConfig.formItem.find(
        (item) => item.field === 'roleId'
      );
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id };
      });
      return pageModalConfig;
    });
    return {
      searchFormConfig,
      pageContentConfig,
      pageModalConfigRef,
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

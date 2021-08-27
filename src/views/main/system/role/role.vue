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
      :otherInfo="otherInfo"
      :modalConfig="pageModalConfig"
      pageName="role"
    >
      <el-tree
        :props="{ children: 'children', label: 'name' }"
        show-checkbox
        :data="menus"
        node-key="id"
        @check="handleCheckMenu"
      >
      </el-tree>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
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
    const store = useStore();
    const menus = computed(() => store.state.entireMenu);

    //权限菜单数据
    const otherInfo = ref({});
    const handleCheckMenu = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };

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
      handleNewData,
      menus,
      otherInfo,
      handleCheckMenu
    };
  }
});
</script>

<style scoped></style>

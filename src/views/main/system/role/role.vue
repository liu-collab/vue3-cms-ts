<template>
  <div class="role">
    <search-form-page :searchConfig="searchFormConfig"></search-form-page>
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="role"
      newCreate="新建角色"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import searchFormPage from '@/components/search-form';
import pageContent from '@/components/page-content/src/pagecontent.vue';
import { pageContentConfig } from './config/pagerolecontent';
import { searchFormConfig } from './config/searchform.config';
export default defineComponent({
  name: 'role',
  components: {
    pageContent,
    searchFormPage
  },
  setup() {
    return {
      pageContentConfig,
      searchFormConfig
    };
  }
});
</script>

<style scoped></style>

<template>
  <div class="user">
    <search-form-page :searchConfig="searchFormConfig"></search-form-page>
    <page-content :pageContentConfig="pageContentConfig"></page-content>
    <div class="user-info"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { searchFormConfig } from './config/searchform.config';
import searchFormPage from '@/components/search-form';

import { pageContentConfig } from './config/pagecontent.config';
import pageContent from '@/components/page-content/src/pagecontent.vue';
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

<style scoped lang="less">
.user {
  background-color: #fff;

  width: 100%;
  .user-info {
    border-top: 20px solid #ebeaef;
    padding: 0 20px;
  }

  .delete {
    color: red;
  }
}
</style>

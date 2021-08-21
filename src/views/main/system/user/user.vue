<template>
  <div class="user">
    <search-form-page :searchConfig="searchFormConfig"></search-form-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { searchFormConfig } from './config/searchform.config';
import searchFormPage from '@/components/search-form';
export default defineComponent({
  name: 'user',

  components: {
    searchFormPage
  },
  setup() {
    return {
      searchFormConfig
    };
  }
});
</script>

<style scoped lang="less">
.user {
  background-color: #fff;

  width: 100%;
}
</style>

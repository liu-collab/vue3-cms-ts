<template>
  <div class="user">
    <YQFrom v-bind="searchFormConfig"></YQFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import YQFrom from '@/base-ui';
import { searchFormConfig } from './config/searchform.config';
export default defineComponent({
  name: 'user',
  components: {
    YQFrom
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

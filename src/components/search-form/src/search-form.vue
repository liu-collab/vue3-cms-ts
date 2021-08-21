<template>
  <div class="search">
    <YQFrom v-bind="searchConfig" v-model="formData">
      <template #header>
        <div class="search">
          <h2>搜索</h2>
        </div>
      </template>
      <template #footer>
        <div class="btn">
          <el-button type="success" icon="el-icon-search"> 搜索</el-button>
          <el-button type="primary" icon="el-icon-refresh">重置</el-button>
        </div>
      </template>
    </YQFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import YQFrom from '@/base-ui';

export default defineComponent({
  props: {
    searchConfig: {
      type: Object,
      require: true
    }
  },
  components: { YQFrom },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      option: '',
      createTime: ''
    });
    return { formData };
  }
});
</script>

<style scoped lang="less">
.search {
  padding: 0 0 20px 30px;
}
.btn {
  text-align: right;
  padding: 0 20px 10px 0;
}
</style>

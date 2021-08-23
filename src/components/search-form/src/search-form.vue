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
          <el-button
            size="mini"
            type="success"
            icon="el-icon-search"
            @click="handleSearch"
          >
            搜索</el-button
          >
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-refresh"
            @click="handleRefresh"
            >重置</el-button
          >
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
  emits: ['handleResetData', 'handleSearchData'],
  setup(props, { emit }) {
    //根据配置文件来获取输入框的数据
    const fromItems = props.searchConfig?.formItem ?? [];
    //保存输入框的数据
    const fromOriginData: any = {};
    for (const item of fromItems) {
      fromOriginData[item.field] = '';
    }
    //将输入框的数据赋值给表单数据
    const formData = ref(fromOriginData);
    //刷新按钮
    const handleRefresh = () => {
      //遍历输入框的数据
      for (const key in fromOriginData) {
        formData.value[`${key}`] = fromOriginData[key];
      }
      //formData.value = fromOriginData;
      emit('handleResetData');
    };
    //搜索按钮
    const handleSearch = () => {
      emit('handleSearchData', formData.value);
    };
    return {
      handleRefresh,
      formData,
      handleSearch
    };
  }
});
</script>

<style scoped lang="less">
.search {
  padding: 0 0 20px 30px;
  background-color: #fff;
}
.btn {
  text-align: right;
  padding: 0 20px 10px 0;
}
</style>

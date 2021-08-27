<template>
  <div class="dashboard">
    <el-row :gutter="10" class="dashboard-row">
      <el-col :span="7">
        <yq-card title="分类商品数量(饼图)"></yq-card>
      </el-col>
      <el-col :span="10">
        <yq-card title="不同城市商品销量"></yq-card>
      </el-col>
      <el-col :span="7">
        <yq-card title="分类商品数量(玫瑰图)"></yq-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <yq-card title="分类商品的销量"></yq-card>
      </el-col>
      <el-col :span="12">
        <yq-card title="分类商品的收藏"></yq-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import YqCard from '@/base-ui/card';
export default defineComponent({
  name: 'dashboard',
  components: {
    YqCard
  },
  setup() {
    const store = useStore();
    store.dispatch('dashboardModule/getDashboardDataAction');
    return {};
  }
});
</script>

<style scoped lang="less">
.dashboard-row {
  margin-bottom: 15px;
}
</style>

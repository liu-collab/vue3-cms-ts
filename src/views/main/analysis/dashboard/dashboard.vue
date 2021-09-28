<template>
  <div class="dashboard">
    <el-row :gutter="10" class="dashboard-row">
      <el-col :span="7">
        <yq-card title="分类商品数量(饼图)">
          <pipe-echart :pieData="categoryGoodsCount"></pipe-echart>
        </yq-card>
      </el-col>
      <el-col :span="10">
        <yq-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </yq-card>
      </el-col>
      <el-col :span="7">
        <yq-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </yq-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <yq-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </yq-card>
      </el-col>
      <el-col :span="12">
        <yq-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </yq-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent, computed } from 'vue';
import YqCard from '@/base-ui/card';
import {
  PipeEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/pipe-echart';
export default defineComponent({
  name: 'dashboard',
  components: {
    YqCard,
    PipeEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore();
    store.dispatch('dashboardModule/getDashboardDataAction');

    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount };
      });
    });
    const categoryGoodsSale = computed(() => {
      const xLable: string[] = [];
      const value: any[] = [];
      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale;
      for (const item of categoryGoodsSale) {
        xLable.push(item.name);
        value.push(item.goodsCount);
      }

      return { xLable, value };
    });
    const categoryGoodsFavor = computed(() => {
      const xLable: string[] = [];
      const value: any[] = [];
      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsFavor;
      for (const item of categoryGoodsSale) {
        xLable.push(item.name);
        value.push(item.goodsFavor);
      }

      return { xLable, value };
    });
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count };
      });
    });
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    };
  }
});
</script>

<style scoped lang="less">
.dashboard-row {
  margin-bottom: 15px;
}
</style>

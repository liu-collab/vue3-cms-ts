<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { BaseEchart } from '@/base-ui/echart';
import { EChartsOption } from 'echarts';
import { IDataType } from '../type';
const props = defineProps<{
  roseData: IDataType[];
}>();
const options: EChartsOption = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: [15, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  };
});
</script>

<style scoped lang="less"></style>

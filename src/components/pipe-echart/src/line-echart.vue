<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { BaseEchart } from '@/base-ui/echart';
import { EChartsOption } from 'echarts';
const props = defineProps<{
  xLable: string[];
  value: any[];
}>();
const options: EChartsOption = computed(() => {
  return {
    xAxis: {
      type: 'category',
      data: props.xLable
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.value,
        type: 'line',
        smooth: true
      }
    ]
  };
});
</script>

<style scoped lang="less"></style>

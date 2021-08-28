<template>
  <div class="base-echart">
    <div ref="divRef" :style="{ width: width, height: height }">
      <h2>555</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
const divRef = ref<HTMLElement>();

//定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: '100%',
    height: '360px'
  }
);

onMounted(() => {
  const echartsInstance = echarts.init(divRef.value!);

  //数据发生更新时监听
  watchEffect(() => {
    echartsInstance.setOption(props.options);
  });
});
</script>

<style scoped lang="less"></style>

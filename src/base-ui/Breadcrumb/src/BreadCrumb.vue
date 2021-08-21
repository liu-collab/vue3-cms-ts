<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in BreadCrumb" :key="item.name">
        <el-breadcrumb-item :to="{ path: 'item.path' }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBread } from '../type/type';
export default defineComponent({
  props: {
    BreadCrumb: {
      type: Array as PropType<IBread[]>,
      default: () => []
    }
  },
  components: {},
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>

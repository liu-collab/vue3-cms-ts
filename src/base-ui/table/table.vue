<template>
  <div>
    <el-table :data="userList" border style="width: 100%">
      <template v-for="item in tableData" :key="item.id">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    userList: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
  components: {},
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>

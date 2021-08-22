<template>
  <div>
    <el-table
      :data="userList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectcolumn"
        type="selection"
        align="center"
        width="80px"
      ></el-table-column>
      <el-table-column
        v-if="showIndecCloum"
        type="index"
        label="序号"
        align="center"
        width="80px"
      ></el-table-column>
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
    },
    showIndecCloum: {
      type: Boolean,
      default: false
    },
    showSelectcolumn: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  emits: ['changeSelect'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('changeSelect', value);
    };
    return {
      handleSelectionChange
    };
  }
});
</script>

<style scoped lang="less"></style>

<template>
  <div>
    <div class="header">
      <slot class="title" name="title">{{ title }}</slot>
      <slot name="handler"></slot>
    </div>
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
    <div class="footer">
      <slot name="footer-page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </slot>
    </div>
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
    },
    title: {
      type: String,
      default: '用户列表'
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

<style scoped lang="less">
.header {
  display: flex;
  padding: 20px 5px;
  align-items: center;
  justify-content: space-between;
}
.footer {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px 0;
}
</style>

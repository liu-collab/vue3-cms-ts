<template>
  <div>
    <div class="header" v-if="showHeader">
      <slot class="title" name="title">{{ title }}</slot>
      <slot name="handler"></slot>
    </div>
    <div class="table">
      <el-table
        :data="userList"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
        v-bind="childrenProps"
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
          <el-table-column v-bind="item" align="center" show-overflow-tooltip>
            <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="footer" v-if="showFooter">
      <slot name="footer-page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="ListCounnt"
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
    ListCounnt: {
      type: Number,
      default: 0
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
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  emits: ['changeSelect', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('changeSelect', value);
    };
    //分页数据的总页数和每页数据改变时
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize });
    };
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage });
    };
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
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
.table {
  padding: 0 0 20px 0;
}
.footer {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px 0;
}
</style>

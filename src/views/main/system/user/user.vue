<template>
  <div class="user">
    <search-form-page :searchConfig="searchFormConfig"></search-form-page>
    <div class="user-info">
      <YQTable
        :tableData="tableData"
        :userList="userList"
        :showIndecCloum="showIndecCloum"
        :showSelectcolumn="showSelectcolumn"
      >
        <template #enable="scope">
          <el-button
            size="mini"
            :type="scope.row.enable ? 'success' : 'danger'"
          >
            {{ scope.row.enable ? '启用' : '禁止' }}
          </el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handle>
          <div class="handel-btns">
            <el-button type="text" size="mini" icon="el-icon-edit">
              编辑</el-button
            >
            <el-button type="text" size="mini" icon="el-icon-delete">
              删除</el-button
            >
          </div>
        </template>
      </YQTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { searchFormConfig } from './config/searchform.config';
import searchFormPage from '@/components/search-form';
import YQTable from '@/base-ui/table';
export default defineComponent({
  name: 'user',

  components: {
    searchFormPage,
    YQTable
  },
  setup() {
    const store = useStore();
    store.dispatch('systemModule/getPageListAction', {
      url: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    });
    const userList = computed(() => store.state.systemModule.userList);
    const tableData = [
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100',
        slotName: 'realname'
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '100',
        slotName: 'cellphone'
      },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '200',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '200',
        slotName: 'updateAt'
      },
      { label: '操作', minWidth: '120', slotName: 'handle' }
    ];
    const showIndecCloum = true;
    const showSelectcolumn = true;
    return {
      searchFormConfig,
      tableData,
      userList,
      showIndecCloum,
      showSelectcolumn
    };
  }
});
</script>

<style scoped lang="less">
.user {
  background-color: #fff;

  width: 100%;
  .user-info {
    border-top: 20px solid #ebeaef;
    padding: 0 20px;
  }
}
</style>

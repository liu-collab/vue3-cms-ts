<template>
  <div class="user">
    <search-form-page :searchConfig="searchFormConfig"></search-form-page>
    <div class="user-info">
      <YQTable :tableData="tableData" :userList="userList">
        <template #enable="scope">
          <el-button type="primary">{{
            scope.row.enable ? '启用' : '禁止'
          }}</el-button>
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
      }
    ];
    return {
      searchFormConfig,
      tableData,
      userList
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

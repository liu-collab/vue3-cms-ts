<template>
  <div class="user">
    <div class="user-info">
      <YQTable v-bind="pageContentConfig" :userList="userList">
        <template #handler>
          <div class="header-handle">
            <el-button type="primary" size="mini">新建用户</el-button>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-refresh"
            ></el-button>
          </div>
        </template>
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
            <el-button
              class="delete"
              type="text"
              size="mini"
              icon="el-icon-delete"
            >
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
import YQTable from '@/base-ui/table';
import { useStore } from '@/store';
export default defineComponent({
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    }
  },
  components: {
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
    return {
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

  .delete {
    color: red;
  }
}
</style>

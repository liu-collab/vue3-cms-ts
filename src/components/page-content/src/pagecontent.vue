<template>
  <div class="user">
    <div class="user-info">
      <YQTable v-bind="pageContentConfig" :userList="dataList">
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
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    YQTable
  },
  setup(props) {
    const store = useStore();
    //通过发送相应的pageName去处理不同的网络请求模块
    const getPageData = (searchInfo: any = {}) => {
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...searchInfo
        }
      });
    };
    getPageData();
    //通过模块内的getters处理发送的相应模块数据
    const dataList = computed(() =>
      store.getters['systemModule/pageListData'](props.pageName)
    );
    return {
      dataList,
      getPageData
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

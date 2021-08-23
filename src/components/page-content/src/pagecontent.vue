<template>
  <div class="user">
    <div class="user-info">
      <YQTable
        v-bind="pageContentConfig"
        :ListCounnt="dataCount"
        :userList="dataList"
        v-model:page="pageInfo"
      >
        <template #handler>
          <div class="header-handle" v-if="isCreate">
            <el-button type="primary" size="mini">{{ newCreate }}</el-button>
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
            {{ scope.row.enable ? '启用' : '禁用' }}
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
            <el-button
              v-if="isUpdate"
              type="text"
              size="mini"
              icon="el-icon-edit"
            >
              编辑</el-button
            >
            <el-button
              v-if="isDelete"
              class="delete"
              type="text"
              size="mini"
              icon="el-icon-delete"
            >
              删除</el-button
            >
          </div>
        </template>
        <!-- 动态插槽, 遍历配置的slotName ,将SlotName 绑定到插槽上,传递给使用的.vue文件 -->
        <template
          v-for="item in otherTableSlot"
          :key="item.prop"
          #[item.slotName]="scope"
        >
          <template v-if="item.slotName">
            <slot :name="item.slotName" :row="scope.row"></slot>
          </template>
        </template>
      </YQTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import YQTable from '@/base-ui/table';
import { useStore } from '@/store';
import { usePermission } from '@/hooks/usePermission';
export default defineComponent({
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    newCreate: {
      type: String,
      default: '新建用户'
    }
  },
  components: {
    YQTable
  },
  setup(props) {
    const isCreate = usePermission(props.pageName, 'create');
    const isUpdate = usePermission(props.pageName, 'update');
    const isDelete = usePermission(props.pageName, 'delete');
    const isQuery = usePermission(props.pageName, 'query');

    const store = useStore();

    const pageInfo = ref({ currentPage: 0, pageSize: 10 });
    watch(pageInfo, () => getPageData());
    //通过发送相应的pageName去处理不同的网络请求模块
    const getPageData = (searchInfo: any = {}) => {
      //没有查询权限直接return
      if (!isQuery) return;
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...searchInfo
        }
      });
    };
    getPageData();
    //通过模块内的getters处理发送的相应模块数据
    //处理数据列表
    const dataList = computed(() =>
      store.getters['systemModule/pageListData'](props.pageName)
    );
    //处理所有数据的长度
    const dataCount = computed(() =>
      store.getters['systemModule/pageListCount'](props.pageName)
    );
    //动态插槽 ,拿到配置的插槽名
    const otherTableSlot = props.pageContentConfig?.tableData.filter(
      (item: any) => {
        if (item.slotName === 'createAt') return false;
        if (item.slotName === 'updateAt') return false;
        if (item.slotName === 'handle') return false;
        return true;
      }
    );
    return {
      dataList,
      getPageData,
      pageInfo,
      dataCount,
      otherTableSlot,
      isCreate,
      isDelete,
      isUpdate
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

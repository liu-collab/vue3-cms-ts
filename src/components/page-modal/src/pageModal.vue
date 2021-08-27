<template>
  <div>
    <el-dialog
      title="新建用户"
      v-model="btnDialogVisible"
      destroy-on-close
      width="30%"
      center
    >
      <YQFrom v-bind="modalConfig" v-model="tbaleData"></YQFrom>
      <slot></slot>
      <template #footer>
        <span>
          <el-button @click="btnDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from '@/store';
import YQFrom from '@/base-ui';
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      reuquired: true
    }
  },
  components: {
    YQFrom
  },
  setup(props) {
    const btnDialogVisible = ref(false);
    const tbaleData = ref<any>({});
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItem) {
          tbaleData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    //新建和编辑用户
    const store = useStore();
    const handleConfirmClick = () => {
      btnDialogVisible.value = false;
      console.log(tbaleData);
      console.log(Object.keys(props.defaultInfo).length);
      if (Object.keys(props.defaultInfo).length) {
        //编辑操作
        store.dispatch('systemModule/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...tbaleData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        });
      } else {
        //新建操作
        store.dispatch('systemModule/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...tbaleData.value, ...props.otherInfo }
        });
      }
    };
    return {
      btnDialogVisible,
      tbaleData,
      handleConfirmClick
    };
  }
});
</script>

<style scoped lang="less"></style>

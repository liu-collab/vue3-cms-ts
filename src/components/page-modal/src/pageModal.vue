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
      <template #footer>
        <span>
          <el-button @click="btnDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="btnDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
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
    }
  },
  components: {
    YQFrom
  },
  setup(props) {
    const btnDialogVisible = ref(true);
    const tbaleData = ref<any>({});
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItem) {
          tbaleData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    return {
      btnDialogVisible,
      tbaleData
    };
  }
});
</script>

<style scoped lang="less"></style>

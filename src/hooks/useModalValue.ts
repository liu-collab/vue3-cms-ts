import { ref } from 'vue';
import pageModal from '@/components/page-modal';

type CallbackFn = (item?: any) => void;

export function useModalValue(editCb?: CallbackFn, newCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>();
  const defaultInfo = ref({});
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.btnDialogVisible = true;
    }
    editCb && editCb(item);
  };
  const handleNewData = () => {
    //点击新建按钮重置表单
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.btnDialogVisible = true;
    }

    newCb && newCb();
  };

  return [pageModalRef, defaultInfo, handleEditData, handleNewData];
}

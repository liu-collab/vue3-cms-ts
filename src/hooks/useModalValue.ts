import { ref } from "vue";
import pageModal from '@/components/page-modal';

export function useModalValue() {
  const pageModalRef = ref<InstanceType<typeof pageModal>>();
  const defaultInfo = ref({});
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.btnDialogVisible = true;
    }
  };
  const handleNewData = () => {
    if (pageModalRef.value) {
      pageModalRef.value.btnDialogVisible = true;
    }
  };

  return [pageModalRef, defaultInfo, handleEditData, handleNewData]
}

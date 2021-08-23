import { ref } from "vue";
import pageContent from "@/components/page-content";

export function usePageContent() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>();
  const handleResetResult = () => {
    pageContentRef.value?.getPageData();
  };
  const handleSearchResult = (searchInfo: any) => {
    pageContentRef.value?.getPageData(searchInfo);
  };
  return [pageContentRef, handleResetResult, handleSearchResult]
}

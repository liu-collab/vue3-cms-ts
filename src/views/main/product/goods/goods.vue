<template>
  <div class="goods">
    <page-content :pageContentConfig="pageContentConfig" pageName="goods">
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
      <template #status="scope">
        <el-button size="mini" :type="scope.row.status ? 'success' : 'danger'">
          {{ scope.row.status ? '下架' : '上架' }}
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pageContent from '@/components/page-content/src/pagecontent.vue';
import { pageContentConfig } from './config/goodsContentConfig';
export default defineComponent({
  name: 'goods',
  components: {
    pageContent
  },
  setup() {
    return {
      pageContentConfig
    };
  }
});
</script>

<style scoped></style>

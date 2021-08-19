<template>
  <div>
    <div class="folder-menu">
      <i
        :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        class="foldbtn"
        @click="folderChangeBtn"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {},
  emits: ['folderChangeBtn'],
  setup(props, { emit }) {
    const isFold = ref(false);
    const folderChangeBtn = () => {
      isFold.value = !isFold.value;
      emit('folderChangeBtn', isFold.value);
    };
    return {
      folderChangeBtn,
      isFold
    };
  }
});
</script>

<style scoped lang="less">
.folder-menu {
  .foldbtn {
    font-size: 30px;
    margin: 9px 0;
    cursor: pointer;
  }
}
</style>

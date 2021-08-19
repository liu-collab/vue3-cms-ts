<template>
  <div class="container">
    <el-container class="el-container">
      <el-aside
        class="aside v-enter-active v-leave-active"
        :width="isCollapse ? '60px' : '210px'"
      >
        <nav-menu :collapse="isCollapse" />
      </el-aside>

      <el-container class="el-main">
        <el-header class="header">
          <nav-header @folderChangeBtn="handleFoldChange" />
        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavMenu from '@/components/nav-menu';
import NavHeader from '@/components/nav-header';
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false);
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold;
    };
    return {
      handleFoldChange,
      isCollapse
    };
  }
});
</script>

<style scoped lang="less">
.container {
  position: fixed;
  top: 0;
  left: 0;

  overflow: hidden;
  .el-container {
    .aside {
      background-color: #a6a7c0;
      height: 1000px;
      overflow: hidden;
    }
    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s;
    }
    .el-main {
      padding: 0;

      overflow: hidden;
      .header {
        display: flex;
        align-content: center;

        background-color: #b5b5b5;
        height: 48px;
      }
      .main {
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: #ebeaef;
        width: 1500px;
        overflow: hidden;
      }
    }
  }
}
</style>

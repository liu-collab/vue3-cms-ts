<template>
  <div class="container">
    <el-container class="el-container">
      <el-aside class="aside" width="210px">
        <nav-menu></nav-menu>
      </el-aside>

      <el-container class="el-main">
        <el-header class="header">Header</el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavMenu from '@/components/nav-menu';
export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    return {};
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
    .el-main {
      padding: 0;

      overflow: hidden;
      .header {
        display: flex;
        align-content: center;
        justify-content: center;
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

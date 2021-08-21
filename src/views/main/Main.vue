<template>
  <div class="container">
    <el-container class="el-containers">
      <el-aside
        class="asides v-enter-active v-leave-active v-leave-to"
        :width="isCollapse ? '60px' : '210px'"
        :class="isCollapse ? 'bgc' : 'bg'"
      >
        <nav-menu :collapse="isCollapse" />
      </el-aside>

      <el-container class="el-maincontent">
        <el-header class="heades">
          <nav-header @folderChangeBtn="handleFoldChange" />
        </el-header>
        <el-main class="main">
          <div class="main-content">
            <router-view></router-view>
          </div>
        </el-main>
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
  width: 100%;
  height: 100%;

  overflow: hidden;
  .el-containers {
    height: 100%;
    .asides {
      background-color: #a6a7c0;

      overflow: hidden;
    }
    .bgc {
      background-color: #d8d9f5;
    }
    .bg {
      background-color: #a6a7c0;
    }
    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s;
    }

    .el-maincontent {
      padding: 0;
      height: 100%;
      overflow: hidden;
      .heades {
        display: flex;
        align-content: center;

        background-color: #b5b5b5;
        height: 48px;
      }
      .main {
        height: calc(100%-48px);
        background-color: #ebeaef;

        overflow: hidden;
        padding: 20px 20px 20px 20px;

        .main-content {
          background-color: #ebeaef;
        }
      }
    }
  }
}
</style>

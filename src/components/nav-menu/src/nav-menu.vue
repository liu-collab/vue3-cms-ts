<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">vue3 + ts</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#d8d9f5"
      text-color="#000000"
      active-text-color="#000000"
    >
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <i v-if="subitem.icon" :class="item.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const userMenu = computed(() => store.state.loginModule.userInfoMenu);

    return {
      userMenu
    };
  }
});
</script>

<style scoped lang="less">
.nav-menu {
  width: 100%;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 12px;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
    }
  }
}
// 目录
.el-submenu {
  // 二级菜单 ( 默认背景 )
  background-color: #d8d9f5 !important;
  .el-menu-item {
    padding-left: 50px !important;
  }
}

::v-deep .el-submenu__title {
  background-color: #d8d9f5 !important;
}

// hover 高亮
.el-menu-item:hover {
  color: #000000 !important; // 菜单
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #b5b5b5 !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>

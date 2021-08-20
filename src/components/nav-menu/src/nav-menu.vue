<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Echo</span>
    </div>
    <el-menu
      default-active="3"
      class="el-menu-vertical v-enter-to"
      background-color="#d8d9f5"
      :collapse="collapse"
      text-color="#000000"
      active-text-color="#000000"
      :collapse-transition="ad"
      router
    >
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleRoutrclick(subitem)"
              >
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
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  setup() {
    const ad = ref(true);
    const store = useStore();
    const userMenu = computed(() => store.state.loginModule.userInfoMenu);
    const router = useRouter();
    const handleRoutrclick = (item: any) => {
      router.push({
        path: item.url ?? '/404'
      });
    };
    return {
      userMenu,
      ad,
      handleRoutrclick
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

    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
    }
  }
}
.el-menu {
  border-right: none;
}

// 目录
.el-submenu {
  // 二级菜单 ( 默认背景 )
  background-color: #d8d9f5 !important;
  .el-menu-item {
    padding-left: 50px !important;
  }
}

.el-submenu__title {
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
</style>

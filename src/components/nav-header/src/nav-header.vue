<template>
  <div class="herder-menu">
    <div class="folder-menu">
      <i
        :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        class="foldbtn"
        @click="folderChangeBtn"
      ></i>
    </div>
    <div class="heder-info">
      <div class="left">
        <bread-crumb
          class="bread-crumb"
          :BreadCrumb="BreadcrumbInfo"
        ></bread-crumb>
      </div>
      <div class="right">
        <div class="block">
          <el-avatar
            src="https://avatars.githubusercontent.com/u/63389142?s=400&u=387e9b277169da1415e0795f28a83f649f4dc5d6&v=4"
          ></el-avatar>
        </div>
        <user-info class="user-info"></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import userInfo from './user-info.vue';
import BreadCrumb from '@/base-ui/Breadcrumb/src/BreadCrumb.vue';

import { pathBreadCrumb } from '@/utlis/map-menuinfo';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: {
    userInfo,
    BreadCrumb
  },
  emits: ['folderChangeBtn'],
  setup(props, { emit }) {
    const isFold = ref(false);
    const folderChangeBtn = () => {
      isFold.value = !isFold.value;
      emit('folderChangeBtn', isFold.value);
    };

    //面包屑数据
    const store = useStore();

    const BreadcrumbInfo = computed(() => {
      const userInfoMenu = store.state.loginModule.userInfoMenu;
      const route = useRoute();
      const crrentPath = route.path;
      return pathBreadCrumb(userInfoMenu, crrentPath);
    });
    return {
      folderChangeBtn,
      isFold,
      BreadcrumbInfo
    };
  }
});
</script>

<style scoped lang="less">
.herder-menu {
  display: flex;
  width: 100%;
  .folder-menu {
    .foldbtn {
      font-size: 30px;
      margin: 10px 0;
      cursor: pointer;
    }
  }
  .heder-info {
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: space-between;
    line-height: 56px;
    padding: 0 60px 0 20px;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right {
      display: flex;
      .block {
        padding: 5px 20px;
      }
      .user-info {
        margin-top: -5px;
      }
    }
  }
}
</style>

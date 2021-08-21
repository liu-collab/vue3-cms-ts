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
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      </div>
      <div class="right">
        <div class="block">
          <el-avatar
            size="number"
            src="https://avatars.githubusercontent.com/u/63389142?s=400&u=387e9b277169da1415e0795f28a83f649f4dc5d6&v=4"
          ></el-avatar>
        </div>
        <user-info class="user-info"></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import userInfo from './user-info.vue';
export default defineComponent({
  components: {
    userInfo
  },
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
      margin-top: -5px;
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

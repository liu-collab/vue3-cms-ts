<template>
  <div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link dropdownInfo">
        {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-s-custom">用户信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-tools" divided
            >修改密码</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-s-promotion" divided
            >退出系统</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const name = computed(() => store.state.loginModule.userinfo.name);
    return {
      name
    };
  }
});
</script>

<style scoped lang="less">
.dropdownInfo {
  cursor: pointer;
}
</style>

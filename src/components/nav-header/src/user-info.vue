<template>
  <div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link dropdownInfo">
        用户信息<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item divided>修改密码</el-dropdown-item>
          <el-dropdown-item divided>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.dropdownInfo {
  cursor: pointer;
}
</style>

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
          <el-dropdown-item
            icon="el-icon-s-promotion"
            divided
            @click="handleExit"
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
import LocalCahe from '@/utlis/Cache';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const name = computed(() => store.state.loginModule.userinfo.name);
    const handleExit = () => {
      //清除登录信息
      LocalCahe.removeCache('token');
      //重定向
      router.push('/main');
    };
    return {
      name,
      handleExit
    };
  }
});
</script>

<style scoped lang="less">
.dropdownInfo {
  cursor: pointer;
}
</style>

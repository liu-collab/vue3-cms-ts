<template>
  <div class="pane">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-phone"></i> 手机登录</span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import loginAccount from './login-account.vue';
import loginPhone from './login-phone.vue';
export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.pane {
  width: 450px;
  margin-bottom: 150px;
  h2 {
    text-align: center;
  }
}
</style>

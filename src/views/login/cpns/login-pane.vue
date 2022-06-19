<template>
  <div class="pane">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="checkBox">
      <el-checkbox v-model="checked">记住我</el-checkbox>
      <el-link type="primary">主要链接</el-link>
    </div>
    <div class="login-btn">
      <el-button class="btn" type="primary" @click="handleClick">
        登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import loginAccount from './login-account.vue';
import loginPhone from './login-phone.vue';
export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const checked = ref(true);
    const accountRef = ref<InstanceType<typeof loginAccount>>();
    const currentTab = ref('account');
    const phoneRef = ref<InstanceType<typeof loginPhone>>();

    const handleClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(checked.value);
      } else {
        alert(`手机登录方法调用 ${phoneRef.value}`);
      }
    };

    return {
      checked,
      accountRef,
      currentTab,
      handleClick
    };
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
  .checkBox {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .login-btn {
    width: 100%;
    margin-top: 15px;
    .btn {
      width: 100%;
    }
  }
}
</style>

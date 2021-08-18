<template>
  <div>
    <el-form :rules="rules" :model="account" label-width="80px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex';

import { rules } from '../config/login-config';
import LocalCache from '@/utlis/Cache';
export default defineComponent({
  setup() {
    const store = useStore();
    const account = reactive({
      //从本地获取登录用户
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    });
    //用实例类型来获取实例的类型
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (checked: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //1.记住密码
          if (checked) {
            //本地缓存
            LocalCache.setCache('name', account.name);
            LocalCache.setCache('password', account.password);
          } else {
            LocalCache.removeCache('name');
            LocalCache.removeCache('password');
          }

          //2.登录提交账户信息
          store.dispatch('loginModule/accountAction', { ...account });
        }
      });
    };
    return {
      account,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>

<style scoped lang="less"></style>

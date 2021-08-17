<template>
  <div>
    <el-form
      status-icon
      :rules="rules"
      ref="acount"
      :model="account"
      label-width="80px"
    >
      <el-form-item label="账号" prop="name">
        <el-input
          type="password"
          v-model="account.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="account.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item> -->
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { rules } from '../config/login-config';
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    });

    return {
      account,
      rules
    };
  }
});
</script>

<style scoped lang="less"></style>

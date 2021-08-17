<template>
  <div>
    <el-form
      status-icon
      :rules="rules"
      ref="acount"
      :model="account"
      label-width="80px"
    >
      <el-form-item label="手机号码" prop="name">
        <el-input
          type="password"
          v-model="account.phone"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="vcode">
          <el-input
            type="password"
            v-model="account.Vcode"
            autocomplete="off"
          ></el-input>
          <el-button class="vbtn" type="primary">获取验证码</el-button>
        </div>
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
import { rules } from '../config/login-phone';
export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      phone: '',
      Vcode: ''
    });
    return {
      account,
      rules
    };
  }
});
</script>

<style scoped lang="less">
.vcode {
  display: flex;
  justify-content: space-between;
  .vbtn {
    margin-left: 18px;
  }
}
</style>

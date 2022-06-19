<template>
  <div class="login">
    <login-pane></login-pane>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import loginPane from './cpns/login-pane.vue';
export default defineComponent({
  components: {
    loginPane
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  background: url('../../assets/img/login-bg.svg');
}
</style>

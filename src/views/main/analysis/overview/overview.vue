<template>
  <div class="overview">
    <yq-card title="关于"  class="fist-title">
      <div>
        Vue3Admin 是基于 Vue3、Vuex、VueRouter4、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </yq-card>
    <yq-card title="技术栈">
      <text-link :TextAttrs = technologyStack></text-link>
    </yq-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  YqCard from '@/base-ui/card';
import TextLink from '@/base-ui/textLink'

import { technologyStack} from './config/technoStack.config'
export default defineComponent({
  name: 'overview',
  components:{
   YqCard,
   TextLink
  },
  setup() {
  //  const technologyStack = [{ title: '自动部署',
  //     desc: 'Centos + Jenkins + Nginx'}]
    return {
      technologyStack
    };
  }
});
</script>

<style scoped lang="less">
.fist-title{
  margin-bottom: 20px;
}

</style>

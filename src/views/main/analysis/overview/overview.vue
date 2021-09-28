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
      <yq-descript :tableDatas = ProtableDatas :column="2" title="生产环境依赖"></yq-descript>
      <yq-descript :tableDatas= DevtableDatas  title="开发环境依赖"> </yq-descript>
    </yq-card>
    <yq-card class="git-card"  title="Git提交规范">
      <yq-descript :column="1"    :tableDatas="[ { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }]">

      </yq-descript>
    </yq-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  YqCard from '@/base-ui/card';
import TextLink from '@/base-ui/textLink'
import YqDescript from '@/base-ui/description'

import { technologyStack} from './config/technoStack.config'
import {  ProtableDatas } from './config/desc-table.config'
import { DevtableDatas } from './config/dev-table.config'
export default defineComponent({
  name: 'overview',
  components:{
   YqCard,
   TextLink,
   YqDescript
  },
  setup() {

    return {
      technologyStack,
      ProtableDatas,
      DevtableDatas
    };
  }
});
</script>

<style scoped lang="less">
.fist-title{
  margin-bottom: 20px;
}
.git-card {
  margin-top: 20px;
}

</style>

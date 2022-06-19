<template>
  <div class="text-link">
   <template v-for="(item,index) in TextAttrs" :key="index">
     <div class="item">
       <span class="title">{{item.title}} : </span>
       <el-link href="#" type="primary"> {{item.desc}}</el-link>
     </div>
   </template>

  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "@vue/runtime-core";
//import  ITextLink   from '../type/index'
interface IItem {
  title?: string;
  desc?: string;
}

 interface ITextLink {
  TextAttrs: IItem[];
}

 withDefaults( defineProps<ITextLink>() ,{
    TextAttrs:()=>[]
  })
</script>

<style scoped lang="less">
.text-link {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .title {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .item {
    margin: 5px;
  }

  .title::before {
    position: absolute;
    top: 40%;
    left: -15px;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 100%;
    content: '';
  }
}
</style>

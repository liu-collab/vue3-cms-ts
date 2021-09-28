<template>
  <div class="desc">
   <el-descriptions
    class="margin-top"
    :title="title"
    :column="column"
    :size="size"
    border
  >
  <template v-for="(item,index) in tableDatas" :key="index">
     <el-descriptions-item>
      <template #label>
       {{item.name}}
      </template>
      <el-tag>{{item.description}}</el-tag>

    </el-descriptions-item>
  </template>
   </el-descriptions>
  </div>
</template>

<script setup lang="ts">


import {withDefaults, defineProps} from 'vue'
//import  IDescriptionProp  from '../type'
type Size = 'medium' | 'small' | 'mini'
 interface DescriptionProp {
  name: string;
  description: string;

}
 interface IDescriptionProp {
  tableDatas: DescriptionProp[];
  column:number,
  title:string,
   size:Size
}


withDefaults( defineProps<IDescriptionProp>() ,{
    tableDatas:()=>[],
    column:3,
    title:'',
    size:"medium"
  })


</script>

<style scoped lang="less">
.desc{
  margin-bottom: 20px;
}

</style>

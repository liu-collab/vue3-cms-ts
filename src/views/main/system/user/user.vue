<template>
  <div class="user">
    <YQFrom
      :formItems="formItem"
      :labelWidth="labelWidth"
      :itemStyle="itemStyle"
    ></YQFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import YQFrom, { IFormType } from '@/base-ui';
export default defineComponent({
  name: 'user',
  components: {
    YQFrom
  },
  setup() {
    const formItem: IFormType[] = [
      {
        type: 'input',
        label: '用户名',
        title: '用户名',
        placeholder: '用户名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '密码'
      },
      {
        type: 'select',
        label: '账号',
        placeholder: '账号',
        options: [
          {
            title: '篮球',
            value: 'fotablse'
          },
          {
            title: '足球',
            value: 'foot'
          }
        ]
      },
      {
        type: 'datepicker',
        label: '选择时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ];
    const labelWidth = '80px';
    const itemStyle = {
      padding: '10px 40px'
    };
    return {
      formItem,
      labelWidth,
      itemStyle
    };
  }
});
</script>

<style scoped lang="less">
.user {
  background-color: #fff;

  width: 100%;
}
</style>

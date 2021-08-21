import { IForm } from "@/base-ui";
export const searchFormConfig: IForm = {
  formItem: [
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
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 40px'
  }
};

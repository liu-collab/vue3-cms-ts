import { IForm } from "@/base-ui";
export const searchFormConfig: IForm = {
  formItem: [

    {
      type: 'input',
      field: 'name',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      type: 'input',
      field: 'intro',
      label: '部门',
      placeholder: '请输入部门'
    },

    {
      type: 'datepicker',
      field: 'createAt',
      label: '选择时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: {
    padding: '10px 30px 10px 5px',

  },
}

import { IForm } from "@/base-ui";
export const searchFormConfig: IForm = {
  formItem: [
    {
      type: 'input',
      field: 'id',
      label: 'id',
      title: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'input',
      field: 'name',
      label: '部门名称',
      title: 'name',
      placeholder: '请输入部门名称'
    },

    {
      type: 'input',
      field: 'leader',
      label: '领导',
      placeholder: '请输入领导名称'
    },



  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 30px'
  }
};



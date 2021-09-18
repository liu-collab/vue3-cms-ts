import { IForm } from '@/base-ui';
const pageModalConfig: IForm = {
  formItem: [
    {
      type: 'input',
      field: 'name',
      label: '部门名称',
      title: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      type: 'input',
      field: 'leader',
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      type: 'input',
      field: 'parentId',
      label: '上级部门',
      placeholder: '请输入上级部门'
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '-5px 20px'
  },
  collLayout: { span: 24 }
};

export { pageModalConfig };

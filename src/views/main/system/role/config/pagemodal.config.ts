import { IForm } from '@/base-ui';
const pageModalConfig: IForm = {
  formItem: [
    {
      type: 'input',
      field: 'name',
      label: '姓名',
      title: '姓名',
      placeholder: '请输入姓名'
    },
    {
      type: 'input',
      field: 'intro',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '-5px 20px'
  },
  collLayout: { span: 24 }
};

export { pageModalConfig };

import { IForm } from '@/base-ui';
const pageModalConfig: IForm = {
  formItem: [
    {
      type: 'input',
      field: 'name',
      label: '类别名称',
      title: '类别名称',
      placeholder: '请输入类别名称'
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '-5px 20px'
  },
  collLayout: { span: 24 }
};

export { pageModalConfig };

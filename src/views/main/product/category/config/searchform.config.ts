import { IForm } from '@/base-ui';
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
      label: '类别名称',
      title: 'name',
      placeholder: '请输入类别名称'
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 30px'
  }
};

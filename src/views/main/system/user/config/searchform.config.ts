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
      label: '用户名',
      title: '用户名',
      placeholder: '请输入用户名'
    },

    {
      type: 'input',
      field: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input',
      field: 'cellphone',
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      type: 'select',
      field: 'enable',
      label: '状态',
      placeholder: '请输入状态',
      options: [
        {
          title: '启用',
          value: '1'
        },
        {
          title: '禁用',
          value: '0'
        }
      ]
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
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 30px'
  }
};

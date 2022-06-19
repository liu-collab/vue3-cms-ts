import { IForm } from '@/base-ui';
const pageModalConfig: IForm = {
  formItem: [
    {
      type: 'input',
      field: 'name',
      label: '用户名',
      title: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      field: 'password',
      label: '密码',
      placeholder: '请输入密码',
      isHidden: false
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
      field: 'departmentId',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      type: 'select',
      field: 'roleId',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '-5px 20px'
  },
  collLayout: { span: 24 }
};

export { pageModalConfig };

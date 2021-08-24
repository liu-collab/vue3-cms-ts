
const pageModalConfig = {
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
      placeholder: '请输入密码'
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
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '5px 30px'
  },
  collLayout: { span: 24 }

}

export { pageModalConfig }

export const rules = {
  name: [
    {
      require: true,
      message: '账号不能为空',
      trigger: 'blur'
    },
    {
      require: true,
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号长度为五到十位字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      require: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      require: true,
      pattern: /^[a-z0-9]{5,10}$/,
      message: '密码长度为五到十位字母或数字',
      trigger: 'blur'
    }
  ]
};

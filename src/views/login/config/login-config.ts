export const rules = {
  name: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur'
    },
    {

      pattern: /^[a-z0-9]{3,10}$/,
      message: '账号长度为三到十位字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {

      pattern: /^[a-z0-9]{5,10}$/,
      message: '密码长度为五到十位字母或数字',
      trigger: 'blur'
    }
  ]
};

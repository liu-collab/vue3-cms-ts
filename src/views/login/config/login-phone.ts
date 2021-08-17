export const rules = {
  phone: [
    {
      require: true,
      message: '手机号码不能为空',
      trigger: 'blur'
    },
    {
      require: true,
      pattern: /^[0-9]{11}$/,
      message: '手机号码位数不对',
      trigger: 'blur'
    }
  ],
  Vcode: [
    {
      require: true,
      message: '验证码不能为空',
      trigger: 'blur'
    }

  ]
};

export const rules = {
  phone: [
    {
      required: true,
      message: '手机号码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11,11}$/,
      message: '手机号码只能为数字或者位数不对',
      trigger: 'blur'
    }
  ],
  Vcode: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    }
  ]
};

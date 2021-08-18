import { Module } from 'vuex'


import { accountLoginRequest } from '@/service/login/login'

import { IAccount } from '@/service/login/type'
import { ILoginType } from './type'
import { IRootState } from '../type'

const loginModule: Module<ILoginType, IRootState> = {
  //命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: ''
    }
  },
  actions: {
    async accountAction({ commit }, paload: IAccount) {
      const result = await accountLoginRequest(paload)

      console.log(result)
    }
  }
}
export default loginModule

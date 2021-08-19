import { createStore, Store, useStore as usevuexStore } from 'vuex';

import { IRootState, IRootType } from './type';
import loginModule from './login/login';

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'jack',
      age: 18
    };
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    loginModule
  }

});
export function setupStore() {
  store.dispatch('loginModule/LocalLogin')
}
//对usestore进行一层代理,
//用根state的接口和模块的接口用联合类型重新赋值给新的类型
//这样导出的uesstore就有了模块内的数据
export function useStore(): Store<IRootType> {
  return usevuexStore()
}
export default store;

import { createStore, Store, useStore as usevuexStore } from 'vuex';

import { IRootState, IRootType } from './type';
import loginModule from './login/login';
import systemModule from './main/system';
import { getPageListData } from '@/service/main/system';
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'jack',
      age: 18,
      entireDepartment: [],
      entireRole: []
    };
  },
  getters: {},
  mutations: {
    changeDepartmentList(state, list) {
      state.entireDepartment = list
    },
    changeRoleList(state, list) {
      state.entireRole = list
    }
  },
  actions: {
    async getInitialData({ commit }) {
      const DepartMentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })

      const RoleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const { list: DeList } = DepartMentResult.data
      const { list: RoelList } = RoleResult.data
      commit('changeDepartmentList', DeList)
      commit('changeRoleList', RoelList)

    }
  },

  modules: {
    loginModule,
    systemModule
  }

});
export function setupStore() {
  store.dispatch('loginModule/LocalLogin')
  store.dispatch('getInitialData')
}
//对usestore进行一层代理,
//根state的接口和模块的接口用联合类型重新赋值给新的类型
//这样导出的uesstore就有了模块内的数据
export function useStore(): Store<IRootType> {
  return usevuexStore()
}
export default store;

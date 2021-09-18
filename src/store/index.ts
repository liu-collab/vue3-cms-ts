import { createStore, Store, useStore as usevuexStore } from 'vuex';

import { IRootState, IRootType } from './type';
import loginModule from './login/login';
import systemModule from './main/system';
import dashboardModule from './main/alalysis/dashboard';
import { getPageListData } from '@/service/main/system';
const store = createStore<IRootState>({
  state: () => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    };
  },
  getters: {},
  mutations: {
    changeDepartmentList(state, list) {
      state.entireDepartment = list;
    },
    changeRoleList(state, list) {
      state.entireRole = list;
    },
    chnageMenuList(state, list) {
      state.entireMenu = list;
    }
  },
  actions: {
    //获取部门和角色列表数据
    async getInitialData({ commit }) {
      const DepartMentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      });

      const RoleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      });
      //获取权限列表
      const menuResult = await getPageListData('menu/list', {});

      const { list: DeList } = DepartMentResult.data;
      const { list: RoelList } = RoleResult.data;
      const { list: menuList } = menuResult.data;

      commit('changeDepartmentList', DeList);
      commit('changeRoleList', RoelList);
      commit('chnageMenuList', menuList);
    }
  },

  modules: {
    loginModule,
    systemModule,
    dashboardModule
  }
});
export function setupStore() {
  store.dispatch('loginModule/LocalLogin');
  store.dispatch('getInitialData');
}
//对usestore进行一层代理,
//根state的接口和模块的接口用联合类型重新赋值给新的类型
//这样导出的uesstore就有了模块内的数据
export function useStore(): Store<IRootType> {
  return usevuexStore();
}
export default store;

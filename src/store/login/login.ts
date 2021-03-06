import { Module } from 'vuex';

import {
  accountLoginRequest,
  userinfoRequest,
  userMenuRequest
} from '@/service/login/login';
import LocalCache from '@/utlis/Cache';
import router from '@/router';
import { mapMenuInfo, mapMenuInfoToPermisssion } from '@/utlis/map-menuinfo';

import { IAccount } from '@/service/login/type';
import { ILoginType } from './type';
import { IRootState } from '../type';
const loginModule: Module<ILoginType, IRootState> = {
  //命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: {},
      userInfoMenu: [],
      permission: []
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userinfo = userInfo;
    },
    changeUserMenu(state, userInfoMenu: any) {
      state.userInfoMenu = userInfoMenu;

      //处理路由映射表
      const routes = mapMenuInfo(userInfoMenu);
      //添加路由
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
      //保存用户权限
      const permission = mapMenuInfoToPermisssion(userInfoMenu);
      state.permission = permission;
    }
  },
  actions: {
    async accountAction({ commit, dispatch }, paload: IAccount) {
      const result = await accountLoginRequest(paload);
      //1.获取token,进行保存
      const { id, token } = result.data;
      commit('changeToken', token);
      LocalCache.setCache('token', token);

      //获取初始化的数据
      dispatch('getInitialData', null, { root: true });

      //2.根据id获取用户信息
      const userinfoResult = await userinfoRequest(id);
      const userInfo = userinfoResult.data;
      commit('changeUserInfo', userInfo);
      LocalCache.setCache('userInfo', userInfo);
      //3.请求用户菜单
      const userInfoMenuRequest = await userMenuRequest(userInfo.role.id);
      const userInfoMenu = userInfoMenuRequest.data;

      commit('changeUserMenu', userInfoMenu);
      LocalCache.setCache('userInfoMenu', userInfoMenu);
      //4.跳转到首页
      router.push('/main');
    },
    //每次刷新重本地获取数据重新提交到vuex中,保持数据持久化
    LocalLogin({ commit, dispatch }) {
      const token = LocalCache.getCache('token');
      if (token) {
        commit('changeToken', token);

        //获取初始化的数据
        dispatch('getInitialData', null, { root: true });
      }
      const userInfo = LocalCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userInfoMenu = LocalCache.getCache('userInfoMenu');
      if (userInfoMenu) {
        commit('changeUserMenu', userInfoMenu);
      }
    }
  }
};
export default loginModule;

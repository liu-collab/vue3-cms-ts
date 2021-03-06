import { ElMessage } from 'element-plus';
import { Module } from 'vuex';

import { IRootState } from './../../type';
import { ISystemType, IPayloadType } from './type';
import {
  getPageListData,
  delelePageData,
  createPageData,
  editPageData
} from '@/service/main/system';
import { returnCode } from '@/utlis/returnCode';
const systemModule: Module<ISystemType, IRootState> = {
  namespaced: true,

  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
    };
  },
  mutations: {
    changeusersList(state, list: any[]) {
      state.usersList = list;
    },
    changeusersCount(state, count: number) {
      state.usersCount = count;
    },
    changeroleList(state, list: any[]) {
      state.roleList = list;
    },
    changeroleCount(state, count: number) {
      state.roleCount = count;
    },
    changegoodsList(state, list: any[]) {
      state.goodsList = list;
    },
    changegoodsCount(state, count: number) {
      state.goodsCount = count;
    },
    changemenuList(state, list: any[]) {
      state.menuList = list;
    },
    changemenuCount(state, count: number) {
      state.menuCount = count;
    },
    changedepartmentList(state, list: any[]) {
      state.departmentList = list;
    },
    changedepartmentCount(state, count: number) {
      state.departmentCount = count;
    },
    changecategoryList(state, list: any[]) {
      state.categoryList = list;
    },
    changecategoryCount(state, count: number) {
      state.categoryCount = count;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    //??????????????????????????????
    async getPageListAction({ commit }, payload: IPayloadType) {
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;
      //??????????????????pageName,?????????????????????
      // switch (pageName) {
      //   case 'user':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      // console.log(payload.url)
      // console.log(payload.queryInfo)
      //??????????????????
      const pageListResult = await getPageListData(pageUrl, payload.queryInfo);

      // console.log(pageListResult)
      const { list, totalCount } = pageListResult.data;
      //??????????????????????????????????????????mutations
      commit(`change${pageName}List`, list);
      commit(`change${pageName}Count`, totalCount);
    },
    //??????????????????
    async deletePageDataAction({ dispatch }, payload: IPayloadType) {
      const { pageName, id } = payload;
      //????????????
      const pageUrl = `/${pageName}/${id}`;
      //????????????
      const { code, data } = await delelePageData(pageUrl);

      //????????????
      ElMessage({
        showClose: true,
        message: data,
        type: returnCode(code)
      });
      //??????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    //???????????????????????????
    async createPageDataAction({ dispatch }, payload: IPayloadType) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;

      const { code, data } = await createPageData(pageUrl, newData);

      //????????????
      ElMessage({
        showClose: true,
        message: data,
        type: returnCode(code)
      });
      //??????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    //???????????????????????????
    async editPageDataAction({ dispatch }, payload: IPayloadType) {
      const { pageName, editData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      const { code, data } = await editPageData(pageUrl, editData);

      //????????????
      ElMessage({
        showClose: true,
        message: data,
        type: returnCode(code)
      });
      //??????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;

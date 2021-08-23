import { Module } from "vuex";

import { IRootState } from './../../type';
import { ISystemType, IPayloadType } from "./type";
import { getPageListData } from "@/service/main/system";
const systemModule: Module<ISystemType, IRootState> = {
  namespaced: true,

  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeusersList(state, list: any[]) {
      state.usersList = list
    },
    changeusersCount(state, count: number) {
      state.usersCount = count
    },
    changeroleList(state, list: any[]) {
      state.roleList = list
    },
    changeroleCount(state, count: number) {
      state.roleCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IPayloadType) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      //通过接收到的pageName,调用对应的接口
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
      //获取网页数据
      const pageListResult = await getPageListData(pageUrl, payload.queryInfo)

      // console.log(pageListResult)
      const { list, totalCount } = pageListResult.data
      //用字符串拼接来处理提交不同的mutations
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    }
  }
}

export default systemModule

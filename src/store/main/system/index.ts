import { Module } from "vuex";

import { IRootState } from './../../type';
import { ISystemType, IPayloadType } from "./type";
import { getPageListData } from "@/service/main/system";
const systemModule: Module<ISystemType, IRootState> = {
  namespaced: true,

  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IPayloadType) {
      // console.log(payload.url)
      // console.log(payload.queryInfo)
      //获取网页数据
      const pageListResult = await getPageListData(payload.url, payload.queryInfo)
      //console.log(pageListResult)
      const { list, totalCount } = pageListResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule

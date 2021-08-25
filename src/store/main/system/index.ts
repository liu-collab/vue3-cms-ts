import { ElMessage } from 'element-plus';
import { Module } from "vuex";

import { IRootState } from './../../type';
import { ISystemType, IPayloadType } from "./type";
import { getPageListData, delelePageData, createPageData, editPageData } from "@/service/main/system";
import { returnCode } from '@/utlis/returnCode'
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
      departmentCount: 0
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
    },
    changegoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changegoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changemenuList(state, list: any[]) {
      state.menuList = list
    },
    changemenuCount(state, count: number) {
      state.menuCount = count
    },
    changedepartmentList(state, list: any[]) {
      state.departmentList = list
    },
    changedepartmentCount(state, count: number) {
      state.departmentCount = count
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
    //请求数据列表网络请求
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
    },
    //删除网络请求
    async deletePageDataAction({ dispatch }, payload: IPayloadType) {
      const { pageName, id } = payload
      //拼接地址
      const pageUrl = `/${pageName}/${id}`
      //删除请求
      const { code, data } = await delelePageData(pageUrl)
      console.log(data, code)
      //消息提示
      ElMessage({
        showClose: true,
        message: data,
        type: returnCode(code)

      })
      //重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: IPayloadType) {

      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`

      const { code, data } = await createPageData(pageUrl, newData)

      //消息提示
      ElMessage({
        showClose: true,
        message: data,
        type: returnCode(code)

      })
      //重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: IPayloadType) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      const { code, data } = await editPageData(pageUrl, editData)
      console.log(data, code)
      //消息提示
      ElMessage({
        showClose: true,
        message: data,
        type: returnCode(code)

      })
      //重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule

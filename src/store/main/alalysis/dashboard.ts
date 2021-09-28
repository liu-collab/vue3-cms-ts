import { Module } from 'vuex';
import { IDashBoard } from './type';
import { IRootState } from '@/store/type';

import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAddressGoodsSale
} from '@/service/main/analysis';
const dashboardModule: Module<IDashBoard, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeGoodsCount(state, data) {
      state.categoryGoodsCount = data;
    },
    changeGoodsSale(state, data) {
      state.categoryGoodsSale = data;
    },
    changeGoodsFavor(state, data) {
      state.categoryGoodsFavor = data;
    },
    changeaddressGoodsSale(state, data) {
      state.addressGoodsSale = data;
    }
  },

  actions: {
    async getDashboardDataAction({ commit }) {
      const goodsCountdata = await getCategoryGoodsCount();
      commit('changeGoodsCount', goodsCountdata.data);

      const goodsSaleData = await getCategoryGoodsSale();
      commit('changeGoodsSale', goodsSaleData.data);

      const goodsFavorData = await getCategoryGoodsFavor();
      commit('changeGoodsFavor', goodsFavorData.data);

      const addressGoodsSale = await getAddressGoodsSale();
      commit('changeaddressGoodsSale', addressGoodsSale.data);
    }
  }
};
export default dashboardModule;

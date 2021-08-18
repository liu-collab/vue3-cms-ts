import { createStore } from 'vuex';

import { IRootState } from './type';
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
export default store;

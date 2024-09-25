import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 左侧菜单栏的折叠状态
    collapsed: false,
  },
  getters: {
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;;
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    }
  },
  modules: {
  },
});

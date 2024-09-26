import Vue from 'vue';
import Vuex from 'vuex';
import { setUserInfo, getUserInfo, removeUserInfo } from '@/utils/userCookie';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 左侧菜单栏的折叠状态
    collapsed: false,
    // 存储用户信息
    user: getUserInfo(),
  },
  getters: {
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    loginOut(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      }
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    loginOut({ commit }) {
      commit('loginOut');
      removeUserInfo();
    }
  },
  modules: {
  },
});

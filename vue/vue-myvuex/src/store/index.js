import Vue from 'vue'
import Vuex from './myVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    getNum: (state) => {
      return state.num + 10
    }
  },
  mutations: {
    add(state,arg) {
      state.num += arg
    }
  },
  actions: {
    add({ commit }, arg) { // 解构会影响this 作用域
        commit('add',arg)
    }
  },
  modules: {
  }
})

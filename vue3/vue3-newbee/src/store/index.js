import { createStore } from 'vuex'
import { getCart } from '@/service/cart'

export default createStore({
  state: {
    cartCount: 0
  },
  mutations: {
    addCart(state,payload) {
      state.cartCount = payload.count
    }
  },
  actions: {
    async updateCart(ctx,params) {
    const { data } = await getCart()
    ctx.commit('addCart', {
      count: data.length || 0
    })
    }
  },
  modules: {
  }
})

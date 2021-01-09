import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// vue.use() 的一个原则是 use 的对象必须具备 install 这个方法

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

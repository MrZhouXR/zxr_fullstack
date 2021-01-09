import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import util from './assets/js/util'

import 'amfe-flexible'
import { Swipe, SwipeItem, Toast, Icon, Field , Uploader,Button,  Picker ,  ActionSheet } from 'vant'
import 'vant/lib/index.css'

import VueQuillEditor from 'vue-quill-editor'
 // require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
Vue.use(VueQuillEditor, /* { default global options } */)

Vue.use(Swipe)
Vue.use(SwipeItem).use( Picker ).use( ActionSheet )
Vue.use(Toast).use(Icon).use(Field).use(Uploader).use(Button)
Vue.use(axios)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$util = util

router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

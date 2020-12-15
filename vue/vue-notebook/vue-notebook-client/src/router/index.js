import Vue from 'vue'
import VueRouter from 'vue-router'
import StarLogin from '@/views/login/StarLogin'

Vue.use(VueRouter)

const routes = [
 {
   path: '/starLogin',
   name: 'starLogin',
   component: StarLogin,
   meta: {
     title: 'login'
   }
 },
 {
   path: '/register',
   name: 'register',
   component: () => import('@/views/register/Register'),
   meta: {
     title: 'register'
   }
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

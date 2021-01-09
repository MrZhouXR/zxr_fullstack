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
 },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: () => import('@/views/noteClass/noteClass'),
    meta: {
      title: 'noteClass'
    }
  },
  {
    path: '/noteList',
    name: 'noteList',
    component: () => import('@/views/noteList/noteList'),
    meta: {
      title: 'noteList'
    }
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: () => import('@/views/noteDetail/noteDetail'),
    meta: {
      title: 'noteDetail'
    }
  },
    {
      path: '/noteEdit',
      name: 'noteEdit',
      component: () => import('@/views/noteEdit/noteEdit'),
      meta: {
        title: 'noteEdit'
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

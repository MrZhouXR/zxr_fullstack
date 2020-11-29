import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import UserInfo from '@/views/UserInfo'
import Form from '@/views/Form'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
      {
        path: 'userinfo',
        name: 'userinfo',
        component: UserInfo
      },
      {
        path: 'form',
        name: 'form',
        component: Form
      },
    ]
    }
  ]
})
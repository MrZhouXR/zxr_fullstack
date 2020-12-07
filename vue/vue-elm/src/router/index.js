import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/goods'
// import Comment from '@/views/comment/comment'
// import Seller from '@/views/seller/seller'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goods',
    component: Goods
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/views/comment/comment')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('@/views/seller/seller')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

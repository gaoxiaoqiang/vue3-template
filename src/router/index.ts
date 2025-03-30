import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Goods from '@/views/goods/index.vue'
import GoodsList from '@/views/goods/goodsList.vue'
import Category from '@/views/goods/category.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/goods',
        name: 'goods',
        component: Goods,
        children: [
          { path: 'goodsList', name: 'goodsList', component: GoodsList },
          { path: 'category', name: 'category', component: Category },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

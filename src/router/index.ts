/*
 * @Author: BGG
 * @Date: 2021-12-10 17:34:21
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-20 22:25:27
 * @Description:  
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layouts/default/index.vue'),
    redirect: { name: 'Home' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/laboratory',
        name: 'Laboratory',
        component: () => import('@/views/laboratory/index.vue'),
      },
      {
        path: '/gallery',
        name: 'Gallery',
        component: () => import('@/views/gallery/index.vue'),
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/message/index.vue'),
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

/*
 * @Author: your name
 * @Date: 2020-04-09 22:49:00
 * @LastEditTime: 2020-04-09 23:12:03
 * @LastEditors: Please set LastEditors
 * @Description: 每个子模块中导出一个路由配置数组
 * @FilePath: /vue-node-mongo/client-app/src/router/Dashboard/index.js
 */
export default [
  {
    path: '/dashboard',
    componets: () => import('../../views/dashboard/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../../views/About.vue')
  }
]

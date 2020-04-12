/*
 * @Author: your name
 * @Date: 2020-04-09 22:49:00
 * @LastEditTime: 2020-04-12 00:21:49
 * @LastEditors: Please set LastEditors
 * @Description: 每个子模块中导出一个路由配置数组
 * @FilePath: /vue-node-mongo/client-app/src/router/Dashboard/index.js
 */
export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../../views/blue/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../../views/blue/Blue.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../../views/blue/About.vue')
  }
]

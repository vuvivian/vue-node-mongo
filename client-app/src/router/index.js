/*
 * @Author: vuvivian
 * @Date: 2020-04-09 11:57:24
 * @LastEditTime: 2020-04-11 00:52:29
 * @LastEditors: Please set LastEditors
 * @Description: 自动扫描子模块路由并导入
 * @FilePath: /vue-node-mongo/client-app/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 忽略跟目录的index.js
  if (route.startsWith('./index')) return
  const routerModule = routerContext(route)
  // 兼容两种导出规范
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

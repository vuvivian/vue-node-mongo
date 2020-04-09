/*
 * @Author: vuvivian
 * @Date: 2020-04-09 12:00:57
 * @LastEditTime: 2020-04-09 23:26:27
 * @LastEditors: Please set LastEditors
 * @Description: 扫描全局对象并自动注册。
 * @FilePath: /vue-node-mongo/client-app/src/components/index.js
 */
import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
const componentsContext = require.context('./global', true, /\.js$/)
console.log('aa', componentsContext.keys())
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})

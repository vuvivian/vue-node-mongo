/*
 * @Author: vuvivian
 * @Date: 2020-04-09 11:57:24
 * @LastEditTime: 2020-04-10 23:54:57
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: /vue-node-mongo/client-app/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

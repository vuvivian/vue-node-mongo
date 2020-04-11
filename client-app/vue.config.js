/*
 * @Author: vuvivian
 * @Date: 2020-04-11 17:05:02
 * @LastEditTime: 2020-04-11 17:12:12
 * @LastEditors: Please set LastEditors
 * @Description: 配置文件
 * @FilePath: /vue-node-mongo/client-app/vue.config.js
 */
const path = require("path");
const axios = require('axios');

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  chainWebpack: config => {
    // 别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@api", resolve("src/api"))
      .set("@views", resolve("src/views"))
      .set("@assets", resolve("src/assets"))
      .set("@scripts", resolve("src/assets/js"));
  },
}
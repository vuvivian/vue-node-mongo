/*
 * @Author: vuvivian
 * @Date: 2020-04-09 23:30:56
 * @LastEditTime: 2020-04-09 23:31:24
 * @LastEditors: Please set LastEditors
 * @Description: 放置组件模板的代码
 * @FilePath: /vue-node-mongo/client-app/scripts/template.js
 */
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}">
    ${compoenntName}组件
  </div>
</template>
<script>
export default {
  name: '${compoenntName}'
}
</script>
<style lang="scss" scoped>
.${compoenntName} {

}
</style>
`
  },
  entryTemplate: `import Main from './main.vue'
export default Main`
}

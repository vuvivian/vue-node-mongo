<!--
 * @Author: vuvivian
 * @Date: 2020-04-11 18:05:31
 * @LastEditTime: 2020-04-12 13:28:08
 * @LastEditors: Please set LastEditors
 * @Description: 可模糊搜索的菜单组件 client-app/public/mock/get_menu_data.json
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-menu/main.vue
 -->
<template>
  <div class="v-menu">
    v-menu组件
  </div>
</template>
<script>
export default {
  name: 'v-menu',
  created () {
    this.$axios.get('/api/getMenu.json').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang="less" scoped>
.v-menu {

}
</style>

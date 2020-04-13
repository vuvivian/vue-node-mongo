<!--
 * @Author: vuvivian
 * @Date: 2020-04-10 23:06:00
 * @LastEditTime: 2020-04-13 17:58:30
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: /vue-node-mongo/client-app/src/views/Home.vue
 -->
<template>
  <div>
    <v-menu :menuList="menuList" />
    <v-upload />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menuList: []
    }
  },
  created () {
    // 查询菜单数据
    this.$axios.get('/api/getMenu.json').then(res => {
      this.menuList = res.data.menuList
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped></style>

<!--
 * @Author: vuvivian
 * @Date: 2020-04-11 18:05:31
 * @LastEditTime: 2020-04-12 21:55:06
 * @LastEditors: Please set LastEditors
 * @Description: 可模糊搜索的菜单组件 client-app/public/mock/get_menu_data.json
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-menu/main.vue
 -->
<template>
  <div class="v-menu">
    <Input v-show="isSearch" suffix="ios-search" class="v-menu-search" placeholder="搜索..." clearable />
    <Menu theme="dark">
      <template v-for="item in menuList">
        <v-submenu v-if="item.children && item.children.length > 0" :key="item.index" :subMenuList='item' />
        <MenuItem v-else :key="item.id" :name="item.id">
          {{item.name}}
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>
<script>
import VSubmenu from '@components/global/v-menu/v-subMenu.vue'
export default {
  name: 'v-menu',
  components: {
    VSubmenu
  },
  props: {
    isSearch: {
      type: Boolean,
      default: true
    }, // 是否开启模糊搜索
    menuList: {
      type: Array,
      default: () => []
    } // 菜单数据
  }
}
</script>
<style lang="less" scoped>
.v-menu {
  padding: 20px;
  .v-menu-search {
    width: 240px;
    margin-bottom: 10px;
  }
}
</style>

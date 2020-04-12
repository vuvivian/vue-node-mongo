<!--
 * @Author: vuvivian
 * @Date: 2020-04-12 19:16:37
 * @LastEditTime: 2020-04-12 21:58:02
 * @LastEditors: Please set LastEditors
 * @Description: 无限下级菜单
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-menu/subMenu.vue
 -->
<template>
  <div class="v-submenu">
    <Submenu :name="subMenuList.id">
      <template slot="title">
        {{subMenuList.name}}
      </template>
      <template v-for="item in subMenuList.children">
        <v-submenu v-if="item.children && item.children.length > 0" :key="item.index" :subMenuList='item' />
        <MenuItem v-else :key="item.id" :name="item.id">
          {{item.name}}
        </MenuItem>
      </template>
    </Submenu>
  </div>
</template>

<script>
export default {
  name: 'v-submenu',
  props: {
    subMenuList: {
      type: Object,
      default: () => {}
    } // 子级菜单数据
  }
}
</script>

<style lang="less" scoped></style>

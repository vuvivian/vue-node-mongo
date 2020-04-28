<!--
 * @Author: vuvivian
 * @Date: 2020-04-11 18:05:31
 * @LastEditTime: 2020-04-28 18:00:54
 * @LastEditors: Please set LastEditors
 * @Description: 可模糊搜索的菜单组件 client-app/public/mock/get_menu_data.json
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-menu/main.vue
 -->
<template>
  <div class="v-menu">
    <Input v-show="isSearch" prefix="ios-search" class="v-menu-search" placeholder="搜索..." clearable v-model="searchValue" @on-click="onSearch" @on-enter="onEnter" @on-clear="clearSearch"/>
    <Menu ref="v-menu" theme="dark" :active-name="activeName" :open-names="openNames">
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
import { copyObject } from '@/utils/tools.js'
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
  },
  data () {
    return {
      activeName: '', // 当前选中菜单
      openNames: [], // 打开的菜单项
      searchValue: '', // 搜索框的内容
      searchResult: [], // 模糊搜素的结果集
      index: -1, // 第几次搜索
      activeNameList: [] // 精确到匹配模糊搜索的item
    }
  },
  computed: {},
  watch: {
    openNames () {
      this.$nextTick(() => {
        this.$refs['v-menu'].updateOpened()
      })
    },
    activeName () {
      this.$nextTick(() => {
        this.$refs['v-menu'].updateActiveName()
      })
    },
    searchValue (val, oldValue) {
      console.log('12321', val, oldValue)
      if (val !== oldValue) {
        this.index = -1
        this.activeNameList = []
        this.searchResult = []
      }
    }
  },
  methods: {
    onSearch () {
      const { menuList, searchValue } = this
      // 搜搜结果
      this.searchResult = this.generatorSearch(menuList, searchValue)
      if (this.searchResult.length > 0) {
        this.openNames = []
        this.activeName = ''
        this.makeNames(this.searchResult)
      }
    },
    // 生成模糊搜素结果
    generatorSearch (menuList, searchValue) {
      const resultList = []
      const that = this
      menuList.map(item => {
        const copyOfItem = copyObject(item)
        if (item.children && item.children.length > 0) {
          if (item.name.indexOf(searchValue) > -1) {
            copyOfItem.children = copyObject(item.children)
            resultList.push(copyOfItem)
          } else {
            const childrenItems = that.generatorSearch(item.children, searchValue)
            if (childrenItems.length > 0) {
              copyOfItem.children = childrenItems
              resultList.push(copyOfItem)
            }
          }
        } else {
          if (item.name.indexOf(searchValue) > -1) {
            resultList.push(copyObject(item))
          }
        }
      })
      return resultList
    },
    // todo 处理模糊搜索结果
    makeNames (result) {
      const that = this
      result.map(item => {
        if (item.children && item.children.length > 0) {
          this.openNames.push(item.id)
          that.makeNames(item.children)
        } else {
          that.openNames.push(item.id)
          if (item.name.indexOf(this.searchValue) > -1) {
            this.activeNameList.push({
              name: item.name,
              id: item.id
            })
          }
        }
      })
    },
    // 回车
    onEnter () {
      if (this.index === -1) {
        this.onSearch()
        this.index = 0
      } else if (this.index >= this.activeNameList.length) {
        this.index = 0
      }
      this.activeName = this.activeNameList[this.index].id
      this.index = this.index + 1
    },
    // 清空模糊搜索
    clearSearch () {
      this.openNames = []
      this.activeName = ''
    }
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
  /deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
    background: #6b675d;
  }
}
</style>

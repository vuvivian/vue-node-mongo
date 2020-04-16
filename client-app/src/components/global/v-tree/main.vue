<!--
 * @Author: your name
 * @Date: 2020-04-15 22:08:51
 * @LastEditTime: 2020-04-16 17:52:43
 * @LastEditors: Please set LastEditors
 * @Description: 模糊搜索的checkbox树
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-tree/main.vue
 -->
<template>
  <div class="v-tree">
    <Input v-model="value" @on-enter="search" style="width: 200px"/>
    <Tree :data="data4" show-checkbox multiple></Tree>
  </div>
</template>
<script>
export default {
  name: 'v-tree',
  data () {
    return {
      value: '',
      data4: [
        {
          title: 'parent 1',
          children: [
            {
              title: 'parent 1-1',
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }, {
          title: '232'
        }
      ]
    }
  },
  methods: {
    search () {
      this._eventGroup(this.data4)
    },
    _eventGroup (data) {
      const that = this
      data.map(item => {
        // 任意节点含有该搜索值， 都设置expand
        if (item.title.indexOf(that.value) > -1) {
          that.$set(item, 'expand', true)
          // 如果是叶子节点就选中
          if (!item.children || item.children.length < 1) {
            that.$set(item, 'checked', true)
          }
        }
        // 如果节点含有孩子节点，继续遍历
        if (item.children && item.children.length > 0) {
          this._eventGroup(item.children)
        }
        // todo 如果子节点含有含有搜索值 需要逐层展开其父级
      })
    }
  }
}
</script>
<style lang="less" scoped>
.v-tree {

}
</style>

<!--
 * @Author: vuvivian
 * @Date: 2020-04-10 23:06:00
 * @LastEditTime: 2020-04-17 14:17:13
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: /vue-node-mongo/client-app/src/views/Home.vue
 -->
<template>
  <div>
    <v-form-upload
      action="/menu/upload_menu_icon"
      fileId="test"
      :data="params"
      name="ufile"
      accept="image/*"
      />
      <br />
      <v-tree></v-tree>
      <br />
      <v-dragger-tree v-modal="buttonList" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menuList: [],
      params: {
        model: 'aa'
      },
      buttonList: [{
        func_type: 'action', // action表示跳转视图按钮，object表示执行函数
        func_name: 'xxx', // 函数名
        button_string: '按钮一', // 按钮名称
        is_group: 1, // 1表示分组，0表示不分组
        group_name: '分组一', // 分组名
        is_batch: 1 // 1表示批量按钮，0表示不是批量
      }, {
        func_type: '123',
        func_name: 'xxx',
        button_string: '按钮一',
        is_group: 1,
        group_name: '分组一',
        is_batch: 1
      }, {
        group_name: '',
        children: [{
          func_type: '123',
          func_name: 'xxx',
          button_string: '按钮一',
          is_group: 1,
          group_name: '分组一',
          is_batch: 1
        }, {
          func_type: '123',
          func_name: 'xxx',
          button_string: '按钮一',
          is_group: 1,
          group_name: '分组一',
          is_batch: 1
        }]
      }]
    }
  },
  created () {
    // 查询菜单数据
    this.$axios.get('/api/getMenu.json').then(res => {
      this.menuList = res.data.menuList
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    uploadA () {
      this.$axios.post('https://wangjuan-13.studio.mypscloud.com/api/studio/menu/upload_menu_icon', this.upl)
        .then((res) => {
          console.log('aa', res)
        })
    },
    handleChange (e) {
      const files = e.target.files
      if (!files) {
        return
      }
      const reads = new FileReader()
      const f = document.getElementById('upload22').files[0]
      reads.readAsDataURL(f)
      reads.οnlοad = function (e) {
        document.getElementById('show').src = this.result
      }
      // this.uploadFiles(files);
      this.$refs.input.value = null
    },
    changepic () {
      const reads = new FileReader()
      const f = document.getElementById('upload22').files[0]
      reads.readAsDataURL(f)
      reads.οnlοad = function (e) {
        document.getElementById('show').src = this.result
      }
    }
  }
}
</script>

<style lang="less" scoped></style>

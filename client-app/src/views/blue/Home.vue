<!--
 * @Author: vuvivian
 * @Date: 2020-04-10 23:06:00
 * @LastEditTime: 2020-04-16 14:04:35
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
      <br />
       <Cascader v-model="value3" :data="data" filterable></Cascader>
      <br />
     <v-tree></v-tree>
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
      data: [{
        value: 'beijing',
        label: '北京',
        children: [
          {
            value: 'gugong',
            label: '故宫'
          },
          {
            value: 'tiantan',
            label: '天坛'
          },
          {
            value: 'wangfujing',
            label: '王府井'
          }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园'
              },
              {
                value: 'shizilin',
                label: '狮子林'
              }
            ]
          }
        ]
      }],
      value3: []
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

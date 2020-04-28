<!--
 * @Author: your name
 * @Date: 2020-04-16 22:27:34
 * @LastEditTime: 2020-04-17 12:53:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-dragger-tree/main.vue
 -->
<template>
  <div class="v-dragger-tree">
    <ul>
      <li>
        qqqqqq
        <ul>
          <li>
            oooooooo
          </li>
          <li>
            ppppppp
          </li>
        </ul>
      </li>
    </ul>
    <br />
    <div>
      <Button type="primary" @click="add">增加按钮</Button>
    </div>
    <div>
    </div>
    <v-modal
     title="增加按钮"
     hasDelete="true"
     v-model="visible"
     @on-cancel="cancle"
     @on-ok="ok"
     @on-delete="delte">
     <div slot="modal-content">
      <Form ref="btnForm">
        <FormItem label="按钮名称">
          <Input placeholder="请输入按钮名称" />
        </FormItem>
        <FormItem label="所属分组">
          <Select>
            <Option value="beijing">分组一</Option>
            <Option value="shanghai">分组二</Option>
            <Option value="shenzhen">分组三</Option>
          </Select>
        </FormItem>
        <FormItem label="按钮绑定事件">
          <RadioGroup type="button" size="large">
            <Radio label="绑定动作事件"></Radio>
            <Radio label="绑定云函数"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
           <Cascader :data="[]"></Cascader>
        </FormItem>
        <FormItem>
          <Input placeholder="请输入云函数名" />
        </FormItem>
      </Form>
     </div>
</v-modal>
  </div>
</template>
<script>
export default {
  name: 'v-dragger-tree',
  computed: {
    groupList () {
      const group = []
      this.buttonList.map((item) => {
        if (item.children && item.children.length > 0) {
          group.push(item.group_name)
        }
      })
      return group
    },
    // 生成最终的数据格式
    buttonList () {
      const buttonList = [{
        func_type: 'action', // action表示跳转视图按钮，object表示执行函数
        func_name: 'xxx', // 函数名
        button_string: '按钮一', // 按钮名称
        group_name: '分组一', // 分组名
        is_group: 1, // 1表示分组，0表示不分组
        is_batch: 1 // 1表示批量按钮，0表示不是批量
      }, {
        func_type: 'action', // action表示跳转视图按钮，object表示执行函数
        func_name: 'xxx', // 函数名
        button_string: '按钮二', // 按钮名称
        group_name: '', // 分组名
        is_group: 0, // 1表示分组，0表示不分组
        is_batch: 1 // 1表示批量按钮，0表示不是批量
      }, {
        func_type: 'action', // action表示跳转视图按钮，object表示执行函数
        func_name: 'xxx', // 函数名
        button_string: '按钮三', // 按钮名称
        group_name: '分组三', // 分组名
        is_group: 1, // 1表示分组，0表示不分组
        is_batch: 1 // 1表示批量按钮，0表示不是批量
      }]
      console.log('aasdsa', buttonList)
      return buttonList
    }
  },
  data () {
    return {
      visible: false,
      buttonData: [{
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
  methods: {
    // 添加按钮
    add () {
      console.log(23434)
    },
    //
    cancle () {
      console.log(1)
    },
    ok () {
      console.log(2)
    },
    delete () {
      console.log(3)
    }
  }
}
</script>
<style lang="less" scoped>
.v-dragger-tree {

}
</style>

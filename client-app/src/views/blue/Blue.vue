<!--
 * @Author: your name
 * @Date: 2020-04-10 23:08:36
 * @LastEditTime: 2020-04-16 10:29:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-node-mongo/client-app/src/views/Dashboard.vue
 -->
<template>
  <div>
    <Button type="primary" @click="handle">modal</Button>
    <v-modal
      title="demo"
      :hasDelete="deleteShow"
      :isShow="isShow"
      @on-cancel="cancle"
      @on-ok="ok"
      @on-delete="delte"
      formRef="formInline">
      <div slot="modal-content">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username" />
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password" />>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
          </FormItem>
      </Form>
        <img src="@assets/logo.png" alt="图片" style="text-align:'center'">
      </div>
    </v-modal>
  </div>
</template>

<script>
// import vmodal from '@/components/global'
export default {
  name: 'Dashboard',
  data () {
    return {
      isShow: false,
      deleteShow: true,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handle () {
      this.isShow = !this.isShow
    },
    ok (run) {
      this.$Message.success('Clicked ok2')
      // this.isShow = false
      setTimeout(() => {
        run()
      }, 2000)
    },
    cancle () {
      this.$Message.info('Clicked cancel2')
    },
    delte () {
      this.$Message.info('Clicked delte2')
      this.deleteShow = false
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>

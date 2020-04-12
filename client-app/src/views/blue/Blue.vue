<!--
 * @Author: your name
 * @Date: 2020-04-10 23:08:36
 * @LastEditTime: 2020-04-12 13:08:34
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
      @on-delete="delte">
      <div slot="modal-content">
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
      deleteShow: true
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
    }
  }
}
</script>

<style lang="less" scoped></style>

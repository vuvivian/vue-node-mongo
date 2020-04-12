<!--
 * @Author: vuvivian
 * @Date: 2020-04-09 22:42:22
 * @LastEditTime: 2020-04-12 12:56:55
 * @LastEditors: Please set LastEditors
 * @Description: 基于iview的modal组件封装
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-modal/main.vue
 -->
<template>
  <Modal
    class-name="v-modal"
    v-model="visible"
    :closable="true"
    :mask-closable="true"
    :scrollable="true"
    :title="title"
    >
    <slot name="modal-content" />
    <div slot="footer" class="v-modal-footer">
      <div class="v-modal-footer-left" v-if="hasDelete">
        <Poptip
          confirm
          title="确定要删除这条记录吗？"
          @on-ok="handleDelete">
            <Button type="error" ghost>删除</Button>
        </Poptip>
      </div>
      <div class="v-modal-footer-right">
        <Button type="default" @click="handleCancel">取消</Button>
        <Button type="primary" :loading="loading" @click="handleOk">确定</Button>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'v-modal',
  props: {
    isShow: Boolean, // 是否打开
    title: {
      type: String,
      default: 'v-modal'
    }, // 模态框名称
    hasDelete: {
      type: Boolean,
      default: false
    }, // 是否显示删除按钮
    formRef: String // 如果模态框中是form的话，需要将其refs传过来，便于重置
  },
  data () {
    return {
      visible: false,
      loading: false
    }
  },
  watch: {
    isShow (curValue, prevValue) {
      this.visible = curValue
    }
  },
  methods: {
    // 确认事件
    handleOk () {
      this.loading = true
      this.$emit('on-ok', run => {
        this.closeModal()
      })
    },
    // 取消事件
    handleCancel () {
      if (this.$listeners('on-cancel')) {
        this.$emit('on-cancel')
      }
      this.closeModal()
    },
    // 删除事件
    handleDelete () {
      // 删除确认
      this.$emit('on-delete', run => {
        this.closeModal()
      })
    },
    // 关闭modal框
    closeModal () {
      this.loading = false
      this.visible = false
      if (this.listeners('formRef')) {
        this.$refs[this.formRef].resetFields()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .v-modal-footer {
    display: flex;
    flex-direction: row;
    .v-modal-footer-left {
      flex-grow: 1 1;
    }
    .v-modal-footer-right {
      flex: auto;
    }
    /deep/ .ivu-poptip-confirm .ivu-poptip-body .ivu-icon {
      left: 16px;
    }
  }
</style>

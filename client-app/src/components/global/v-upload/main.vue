<!--
 * @Author: vuvivia
 * @Date: 2020-04-09 23:39:01
 * @LastEditTime: 2020-04-15 16:17:25
 * @LastEditors: Please set LastEditors
 * @Description: 基于iview上传组件封装
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-upload/main.vue
 -->
<template>
  <div class="v-upload">
    <button @click="handle">ss</button>
    <div class="v-upload-list" v-for="item in uploadList" :key="item.url">
      <template v-if="item.status === 'finished'">
        <img :src="item.url" />
        <div class="v-upload-list-cover" >
            <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleDelete(item)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload
      ref="v-upload"
      :show-upload-list="true"
      :format="fileType"
      :max-size="maxSize"
      :multiple="isMultiple"
      :type="type"
      :default-file-list="defaultList"
      :before-upload="handleBeforeUpload"
      :on-progress="handleOnprogress"
      :on-success="handleSuccess"
      :on-exceeded-size="handleMaxSize"
      :on-format-error="handleFormatError"
      :on-error="handleError"
      :on-remove="handleRemove"
      :on-preview="handlePreview"
      :clearFiles="handleClear"
      action="">
       <div class="v-add-upload">
          <Icon type="ios-camera" size="30"></Icon>
        </div>
    </Upload>
    <Modal title="图片预览" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'v-upload',
  props: {
    fileType: {
      type: Array,
      default: () => ['jpg', 'jpeg', 'png']
    }, // 上传文件接受的类型
    maxSize: {
      type: Number,
      default: 2048
    }, // 文件大小限制
    isMultiple: {
      type: Boolean,
      default: false
    }, // 是否支持多选
    type: {
      type: String,
      default: 'drag'
    }, // 上传控件的类型 select/drag
    defaultList: {
      type: Array,
      default: () => []
    } // 默认文件列表
  },
  data () {
    return {
      imgName: '',
      visible: false, // 预览弹框显隐
      uploadList: [] // 上传文件列表
    }
  },
  methods: {
    handle () {
      console.log('sda')
    },
    // 上传文件之前
    handleBeforeUpload (file) {
      console.log('before', file)
      // console.log(this.$refs['v-upload'].fileList)
      this.uploadList.push(file)
      return false
    },
    // 文件上传时
    handleOnprogress (event, file, fileList) {
      console.log('on', event, file, fileList)
    },
    // 文件上传成功时
    handleSuccess (response, file, fileList) {
      console.log('succ', event, file, fileList)
    },
    // 文件上传失败时
    handleError (error, field, fileList) {
      if (error) {
        this.$Message.info(`${fileList.name}上传失败`)
      }
    },
    // 点击已上传的文件链接时
    handlePreview (file) {
      console.log('pre', file)
    },
    // 文件列表移除文件时
    handleRemove (file, fileList) {
      console.log('remove', file, fileList)
    },
    // 文件格式验证失败
    handleFormatError (file, fileList) {
      console.log('format', file, fileList)
    },
    // 文件超出指定大小限制
    handleMaxSize (file, fileList) {
      console.log('max', file, fileList)
    },
    // 清空已上传的文件列表
    handleClear () {
      console.log('clear')
    },
    // 删除文件
    handleDelete () {
      console.log('dele')
    },
    // 预览文件
    handleOverflow () {
      console.log('yulan')
      this.visible = true
    }
  },
  mounted () {
    this.uploadList = this.$refs['v-upload'].fileList
    console.log('aa', this.uploadList)
  }
}
</script>
<style lang="less" scoped>
.v-upload {
  width:108px;
  margin: 20px 40px;
  .v-add-upload {
    width: 108px;
    height: 108px;
    // border: 1px solid #ccc;
    // font-size: 40px;
    line-height: 108px;
    // text-align: center;
  }
  .v-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .v-upload-list img{
    width: 100%;
    height: 100%;
  }
  .v-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .v-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .v-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
}
</style>

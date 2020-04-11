<!--
 * @Author: vuvivia
 * @Date: 2020-04-09 23:39:01
 * @LastEditTime: 2020-04-11 11:28:43
 * @LastEditors: Please set LastEditors
 * @Description: 上传组件封装
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-upload/main.vue
 -->
<template>
  <div class="v-upload">
    <Upload
      :before-upload="handleUpload"
      action="//jsonplaceholder.typicode.com/posts/">
      <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
    </Upload>
  </div>
</template>
<script>
export default {
  name: 'v-upload'
}
</script>
<style lang="less" scoped>
.v-upload {

}
</style>

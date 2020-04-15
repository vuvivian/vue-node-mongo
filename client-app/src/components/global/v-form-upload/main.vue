<!--
 * @Author: vuvivian
 * @Date: 2020-04-15 22:23:45
 * @LastEditTime: 2020-04-15 22:58:48
 * @LastEditors: Please set LastEditors
 * @Description: 单文件上传
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-form-upload/main.vue
 -->
<template>
  <div class="studio-upload">
    <form ref="upload-form" method="POST" target="v_iframe" action="https://wangjuan-13.studio.mypscloud.com/api/studio/menu/upload_menu_icon" enctype="multipart/form-data" >
      <input
        ref="input"
        type="file"
        id="upload"
        name="ufile"
        class="upload-file"
        accept="audio/*,video/*,image/*"
        @change="handleChange"
      />
      <label v-show="this.fileList.length <= 0" for="upload" class='add-file'>
        <Icon type="ios-camera" size="40" class="add-file-icon"/>
        <span class="add-file-text">应用图标</span>
      </label>
    </form>
    <div class="upload-file-list" v-show="this.fileList.length > 0">
       <img :src="imgUrl" class="upload-img" />
       <div class="upload-img-mask">
        <a :href="imgUrl" target="_parent" title="预览" rel="noopener noreferrer">
          <Icon type="ios-eye-outline" class="upload-img-operation upload-img-preview" />
        </a>
        <Icon type="ios-trash-outline" class="upload-img-operation upload-img-delete" />
       </div>
    </div>
    <iframe id="id_iframe" name="v_iframe" style="display:none" />
  </div>
</template>

<script>
export default {
  name: 'v-form-upload',
  data () {
    return {
      fileList: [], // 上传文件列表
      imgUrl: ''
    }
  },
  props: {
    
  },
  methods: {
    handleChange (e) {
      const file = e.target.files[0]
      this.imgUrl = this.processFile(file)
      this.fileList.push(file)
      // 触发submit提交
      this.$refs['upload-form'].submit()
    },
    // 获取文件url
    processFile (file) {
      let url
      if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      }
      return url
    }
  }
}
</script>

<style lang="less" scoped>
.studio-upload {
  .upload-file {
    display: none;
  }
  .add-file {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #fff;
    border: 1px dotted #e3e5e8;
    border-radius: 10px;
    .add-file-icon {
      color: #60c2c2;
      font-size: 40px;
    }
    .add-file-text {
      font-size: 14px;
    }
  }
  .upload-file-list {
    position: relative;
    .upload-img {
      width: 100px;
      height: 100px;
    }
    .upload-img-mask {
      position: absolute;
      top: 0;
      left: 0;
      height: 100px;
      width: 100px;
      &:hover {
        background: rgba(0,0,0,0.5);
        display: block;
        .upload-img-operation  {
          display: block;
          position: absolute;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          top: 45%;
          transform: translateY(-45%);
        }
        .upload-img-preview {
          left: 30%;
          transform: translateX(-30%);
        }
        .upload-img-delete {
          left: 70%;
          transform: translateX(-70%);
        }
      }
      .upload-img-operation{
        display: none
      }
    }

  }

}
</style>

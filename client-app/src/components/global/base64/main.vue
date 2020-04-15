<template>
  <div>
    <Drawer title="上传照片"
            class="uploadPhotoDrawerClass"
            v-model="drawerVmodel"
            width="550"
            :mask-closable="false">
      <div class='divFormClass'>

        <Upload :action="'https://wangjuan-13.studio.mypscloud.com/api/studio/menu/upload_menu_icon'"
                :show-upload-list="false"
                ref='upload'
                name="uploadFile"
                type="drag"
                :before-upload="handleBeforeUpload">
          <!-- :data='upData' -->
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload"
                  size="52"
                  style="color: #3399ff"></Icon>
            <p>选择 jpg 文件</p>
          </div>

        </Upload>
        <div style="margin:10px;">{{xFile.name}}</div>

      </div>
      <div class='demo-drawer-footer'>
        <Button @click="modalCancel"
                style='margin-right:10px;'>关闭</Button>

        <Button type="primary"
                @click="modalSave">保存</Button>

      </div>
    </Drawer>
    <!-- <Modal @on-cancel="modalCancel"
           class="uploadPhoto"
           v-model="modalVmodel"
           width="900"
           :mask-closable="false"
           title="上传图片">
      <div class='divFormClass'>
        111
      </div>

      <div slot="footer">
        <Button @click="modalCancel">关闭</Button>

        <Button type="primary"
                @click="modalSave">保存</Button>

      </div>
    </Modal> -->
  </div>
</template>

<script>
export default {
  name: 'base64',
  data () {
    return {
      xFile: {
        name: ''
      },
      base64: '',
      drawerVmodel: false,
      modalVmodel: false
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.drawerVmodel = true
  },

  methods: {
    handleBeforeUpload (item) {
      const _this = this
      let warningStr = ''
      const format = ['jpeg']
      if (this.checkFormat(item.name, format)) { warningStr += '文件格式不符，请上传jpg格式 ' }
      if (this.checkSize(item.size, 5)) { warningStr += '文件大小超过5M，请检查后重新上传！' }
      if (warningStr.length !== 0) {
        this.$Message.warning({
          content: warningStr,
          duration: 3,
          closable: true
        })
      }
      if (warningStr.length === 0) {
        this.xFile = item
        console.info('this.xFile', this.xFile)
        const reader = new FileReader()
        reader.readAsDataURL(item)
        // console.info('reader', item)
        reader.onload = function (e) {
          // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
          // console.info('e', e)
          // console.info('e.target.result', e.target.result)
          // console.info('modalVmodel', format)
          _this.base64 = e.target.result
          // console.info('this.base64', _this.base64)
        }
      }
      return false
    },
    checkSize (size, maxSize) {
      // size 单位是byte maxSize 单位是mb
      const maxSizeByte = maxSize * 1024 * 1024
      if (size > maxSizeByte) {
        return true
      } else {
        return false
      }
    },
    checkFormat (fileName, format) {
      const index = fileName.lastIndexOf('.')
      const suffix = fileName.substr(index + 1)
      // console.info('suffix', suffix)
      let ret = true
      format.some((item, index, arr) => {
        if (item === suffix) {
          ret = false
        }
      })
      return ret
    },
    modalCancel () {
      this.drawerVmodel = false
    },
    modalSave () {
      console.info('this.base64', this.base64)
      if (this.base64 === '') {
        this.$Message.warning('未上传照片')
      } else {
        // this.$emit('save-base64', this.base64);

      }
      this.modalCancel()
    }
  }
}

</script>
<style lang='less'>
.ivu-message {
  z-index: 3000 !important;
}
// .uploadPhoto {
//   .divFormClass {
//     height: calc(~"100vh - 350px");
//     overflow-y: auto;
//     padding-right: 15px;
//   }
// }
.uploadPhotoDrawerClass {
  .ivu-drawer-mask {
    z-index: 2000 !important;
  }
  .ivu-drawer-wrap {
    z-index: 2000 !important;
  }

  .demo-drawer-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
  .divFormClass {
    height: calc(~"100vh - 140px");
    overflow-y: auto;
    padding-right: 15px;
  }
}
</style>

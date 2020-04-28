<!--
 * @Author: your name
 * @Date: 2020-04-16 00:10:09
 * @LastEditTime: 2020-04-28 18:08:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-node-mongo/client-app/src/components/global/readme.md
 -->

 <v-form-upload
      action=""
      fileId="test"
      :data="params"
      name="ufile"
      accept="image/*"
      />

<v-modal 
     v-model="modalStatus" 
     title="创建视图" 
     @on-ok="onk" 
     @on-cancel="onCancel"
     />

<v-modal
     title="demo"
     :hasDelete="deleteShow"
     :isShow="isShow"
     @on-cancel="cancle"
     @on-ok="ok"
     @on-delete="delte"
     formRef="formInline">
     <div slot="modal-content">
     </div>
</v-modal> 

 <v-menu
        :menuList = "menuList"
      >
      </v-menu>
      
### todo
* form-upload文件预览
* upload多文件上传
* menu菜单模糊搜素定位
* tree模糊搜素展开问题

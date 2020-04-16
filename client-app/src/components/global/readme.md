<!--
 * @Author: your name
 * @Date: 2020-04-16 00:10:09
 * @LastEditTime: 2020-04-16 22:20:05
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
     
     ### todo
     * form-upload文件预览
     * upload多文件上传
     * menu菜单模糊搜素定位
     * tree模糊搜素展开问题

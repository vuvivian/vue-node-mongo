<!--
 * @Author: your name
 * @Date: 2020-04-16 00:10:09
 * @LastEditTime: 2020-04-17 11:50:51
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
     ### todo
     * form-upload文件预览
     * upload多文件上传
     * menu菜单模糊搜素定位
     * tree模糊搜素展开问题

 buttonData: [{
        func_type: 'action', // action表示跳转视图按钮，object表示执行函数
        func_name: 'xxx', // 函数名
        button_string: '按钮三', // 按钮名称
        group_name: '分组三', // 分组名
        is_group: 1, // 1表示分组，0表示不分组
        is_batch: 1 // 1表示批量按钮，0表示不是批量
  	  },
  	  {
        group_name: '',
        children: [{
          func_type: 'action', // action表示跳转视图按钮，object表示执行函数
          func_name: 'xxx', // 函数名
          button_string: '按钮二', // 按钮名称
          group_name: '', // 分组名
          is_group: 0, // 1表示分组，0表示不分组
          is_batch: 1 // 1表示批量按钮，0表示不是批量
        }, {
          func_type: 'action', // action表示跳转视图按钮，object表示执行函数
          func_name: 'xxx', // 函数名
          button_string: '按钮二', // 按钮名称
          group_name: '', // 分组名
          is_group: 0, // 1表示分组，0表示不分组
          is_batch: 1 // 1表示批量按钮，0表示不是批量
        }]
      }]
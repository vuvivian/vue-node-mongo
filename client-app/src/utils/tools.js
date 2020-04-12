/*
 * @Author: your name
 * @Date: 2020-04-13 00:41:00
 * @LastEditTime: 2020-04-13 00:45:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-node-mongo/client-app/src/utils/tool.js
 */
export const copyObject = (obj) => {
  if (!(obj instanceof Array)) {
    const newObj = Object.assign({}, obj)
    return newObj
  } else {
    return obj.map((item) => {
      const newObj = Object.assign({}, item)
      if (item.children && item.children.length > 0) {
        const temp = copyObject(item.children)
        newObj.children = temp
      }
      return newObj
    })
  }
}

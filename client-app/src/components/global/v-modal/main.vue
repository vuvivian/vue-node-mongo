<!--
 * @Author: vuvivian
 * @Date: 2020-04-09 22:42:22
 * @LastEditTime: 2020-04-09 23:27:54
 * @LastEditors: Please set LastEditors
 * @Description: 基于iview的modal组件封装
 * @FilePath: /vue-node-mongo/client-app/src/components/global/v-modal/main.vue
 -->
<template>
  <button class="v-button v-button-primary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-modal'
}
</script>

<style lang="less" scoped></style>

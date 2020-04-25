<template>
  <div class="asideBox">
      <aside>
        <ul class="asideMenu">
          <li v-for="(item,index) in menuList" :key="index">
            <div class="oneMenu" @click="showToggle(item,index)">
              <img v-bind:src="item.imgUrl" />
              <span>{{item.name}}</span>
            </div>
            <ul v-show="item.isSubShow">
              <li v-for="subItem in item.subItems" :key="subItem.name">
                <div class="oneMenuChild">{{subItem.name}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
</template>

<script>
export default {
  name: 'v-dragger-tree',
  methods: {
    // 点击展开折叠菜单事件
    showToggle: function (item, ind) {
      this.menuList.forEach(i => {
        // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
        if (i.isSubShow !== this.menuList[ind].isSubShow) {
          i.isSubShow = false
        }
      })
      item.isSubShow = !item.isSubShow
      console.log(item.name)
    }
  },
  data () {
    return {
      menuList: [
        {
          name: '字符录入',
          isSubShow: false,
          subItems: [
            {
              name: '字符录入'
            },
            {
              name: '白话文录入'
            },
            {
              name: '文言文录入'
            },
            {
              name: '小写数字录入'
            }
          ]
        },
        {
          name: '票据数据录入',
          isSubShow: false,
          subItems: [
            {
              name: '票据录入'
            },
            {
              name: '翻打传票'
            }
          ]
        },
        {
          name: '交易码录入',
          isSubShow: false,
          subItems: [
            {
              name: '交易码录入'
            },
            {
              name: '交易名称录入'
            }
          ]
        },
        {
          name: '操作码录入',
          isSubShow: false,
          subItems: [
            {
              name: '操作码录入'
            },
            {
              name: '操作名称录入'
            }
          ]
        },
        {
          name: '票据学习',
          isSubShow: false,
          subItems: [

          ]
        },
        {
          name: '内部凭证学习',
          isSubShow: false,
          subItems: [

          ]
        },
        {
          name: '现金管理学习',
          isSubShow: false,
          subItems: [

          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .asideBox{
    height: 100%;
    width: 300px;
    aside{
      background: #f1f1f1;
      height: 100%;
      .asideMenu{
        .oneMenu{
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          font-weight: normal;
          color: #ffffff;
          border-bottom: 1px solid #669cd9;
          img{
            width: 20px;
            height: 20px;
            margin: 15px 16px 15px 20px;
            vertical-align: top;
          }
        }
        .oneMenuChild{
          padding: 0 20px 0 60px;
          height: 40px;
          line-height: 40px;
          background: #f1f1f1;
          border-bottom: 1px solid #ffffff;
          color: #454343;
          font-size: 18px;
        }
      }
    }
  }
</style>

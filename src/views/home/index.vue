<template>
  <div class="home_index">
    <headerCop/>
    <div class="router_list_wrap">
      <div
        class="item"
        v-for="(rItem, rIndex) in routeList"
        :key="rIndex"
        @click="routerJumpFn(rItem)"
      >{{rItem._meta? rItem._meta.title:rItem.name}}</div>
    </div>

    <reander-test level="1" >
      <div @click="onShowMessage">messageBox</div>
    </reander-test>

    <div><button @click="onShowNotice">显示 notice</button></div>
    <div><button @click="onShowCreate">通过编程式 的方式 使用指定的vue组件</button></div>
  </div>
</template>

<script>
import { messageBox } from '../../components/js/index.js'
import mNotice from '../../components/mNotice/mNotice'

import { routes } from '../../router'

export default {
  name: 'home_index',
  beforeRouteUpdate(to, from, next) {
    console.log(to, 'beforeRouteUpdate')
    next()
  },
  data() {
    return {
      routeList: []
    }
  },
  created() {
    // console.log(routes, 'routes')
    console.log(process.env.NODE_ENV, 'process.env.NODE_ENV home')
    this.routeList = routes.map(item => {
      return {
        path: item.path,
        name: item.name,
        _meta: item._meta
      }
    })
  },
  methods: {
    routerJumpFn(route) {
      console.log(route.path, 'route.path')
      this.$router.push(route.path)
    },
    // 显示弹框
    onShowMessage() {
      messageBox({
        ok: '确定',
        cancel: '取消',
        handleCancel() {
          console.log('---')
        },
        handleOk() {
          console.log('ok')
        }
      })
    },
    onShowNotice(){
      this.$mNotice({
        txt: '万茜'
      })
    },
    onShowCreate(){
      this.$mCreate(mNotice, {
        txt: '杨紫'
      })
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.home_index {
  .router_list_wrap {
    display: flex;
    flex-wrap: wrap;
    color: #ffffff;
    .item {
      width: 200px;
      height: 200px;
      background: pink;
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

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

    <reander-test level='1'>aaa</reander-test>
  </div>
</template>

<script>
import { messageBox } from "../../components/js/index.js";

import { routes } from "../../router";

export default {
  name: "home_index",
  beforeRouteUpdate(to, from, next){
    console.log(to, 'beforeRouteUpdate')
    next()
  },
  data() {
    return {
      routeList: []
    };
  },
  created() {
    // console.log(routes, 'routes')
    console.log(process.env.NODE_ENV, "process.env.NODE_ENV home");
    this.routeList = routes.map(item => {
      return {
        path: item.path,
        name: item.name,
        _meta: item._meta
      };
    });
  },
  methods: {
    routerJumpFn(route) {
      console.log(route.path, "route.path");
      this.$router.push(route.path);
    }
  },
  mounted() {
    // console.log(messageBox, '--')
    // messageBox({
    //   ok: '确定',
    //   cancel: '取消',
    //   handleCancel(){
    //     console.log('---')
    //   },
    //   handleOk(){
    //     console.log('ok');
    //   }
    // })
  }
};
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

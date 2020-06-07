<template>
  <div class="home_index">
    <headerCop/>
    <div class="router_list_wrap">
      <div class="item" v-for="(rItem, rIndex) in routeList" :key="rIndex" @click="routerJumpFn(rItem)">{{rItem.name}}</div>
    </div>

    <div class="btn">btn</div>
  </div>
</template>

<script>
import { messageBox } from "../../components/js/index.js";

import { routes } from "../../router";

export default {
  name: "home_index",
  data() {
    return {
      routeList: []
    };
  },
  created() {
    // console.log(routes, 'routes')
    console.log(process.env.NODE_ENV, 'process.env.NODE_ENV home')
    this.routeList = routes.map(item => {
      return {
        path: item.path,
        name: item.name
      };
    });
  },
  methods: {
    routerJumpFn(route){
      console.log(route.path, 'route.path');
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
    .item {
      width: 200px;
      height: 200px;
      line-height: 200px;
      background: yellow;
      margin: 20px;
      text-align: center;
    }
  }

  .btn{
    width: 750px;
    height: 100px;
    background: pink;
    text-align: center;
  }
}
</style>

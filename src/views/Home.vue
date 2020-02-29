<template>
  <div class="home">
    <headerCop />
    <div class="num">{{getNum}}</div>
    <button @click="changeNumHandler">点击</button>
    <div class="name">{{GETname}}</div>
    <button @click="changeNameHandler">点击</button>
  </div>
</template>

<script>
import {messageBox} from '../components/js/index.js'

import {createNamespacedHelpers}  from 'vuex'
const {mapGetters} = createNamespacedHelpers('home');

export default {
  name: 'Home',
  computed: {
    getNum(){
      return this.$store.state.home.num;
    },
    ...mapGetters([
      'GETname'
    ])
  },
  methods: {
    changeNumHandler(){
      let {getNum} = this;
      this.$store.commit("home/SETnum", ++getNum);
    },
    changeNameHandler(){
      this.$store.dispatch('home/CHANGEname', '小猴子');
    }
  },
  mounted(){
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
}
</script>

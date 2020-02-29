<template>
  <div class="vuex_test">
    <div class="num">{{getNum}}</div>
    <button @click="changeNumHandler">点击</button>
    <div class="name">{{GETname}}</div>
    <button @click="changeNameHandler">点击</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("home");

export default {
  name: "vuex_test",
  computed: {
    getNum() {
      return this.$store.state.home.num;
    },
    ...mapGetters(["GETname"])
  },
  methods: {
    changeNumHandler() {
      let { getNum } = this;
      this.$store.commit("home/SETnum", ++getNum);
    },
    changeNameHandler() {
      this.$store.dispatch("home/CHANGEname", "小猴子");
    }
  }
};
</script>

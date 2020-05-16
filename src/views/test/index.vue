<template>
  <div class="test">
    <button class="btn" v-m-drag>btn</button>
    <!-- <mCircleMenu :mRadian="180" @itemClick='itemClickHandler' :mScalings="{max: 1, min: 0.3}" /> -->
  </div>
</template>

<script>
import mCircleMenu from "../../components/mCircleMenu";
export default {
  name: "test",
  components: {
    mCircleMenu
  },
  mounted() {},
  methods: {
    itemClickHandler(arg) {
      console.log(arg, "-----------");
    }
  }
};
</script>
<style lang="scss" scoped>
.test {
  width: 100vw;
  height: 100vh;
  .btn {
    margin: 100px;
    width: 100px;
    height: 100px;
    background: red;
    animation: notifyRun 0.5s infinite alternate;
    @keyframes notifyRun {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-20px);
      }
    }
  }
}
</style>

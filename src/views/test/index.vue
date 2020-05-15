<template>
  <div class="test">
    <button class="btn" v-m-drag>btn</button>
    <!-- <div class="menu_box">
      <mCircleMenu :mRadian="180" :mBoxStyle="{width: '100%', height: '100%'}" @itemClick='itemClickHandler' />
    </div> -->
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
    itemClickHandler(arg){
      console.log(arg, '-----------')
    }
  }
};
</script>
<style lang="scss" scoped>
.test {
  position: relative;
  .btn {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background: red;
  }

  .menu_box{
    width: 60vw;
    height: 60vw;
    position: absolute;
    right: 0;
    top: 100px;
    
  }
}
</style>

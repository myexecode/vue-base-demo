<template>
  <div class="notice">{{txt}}</div>
</template>

<script>
export default {
  name: 'mNotice',
  props: {
    txt: {
      type: String,
      default: ''
    }
  },
  mounted(){
    setTimeout(()=> {
      this.remove() // 三秒后消失
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.notice{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  font-size: 30px;
  line-height: 100px;
  text-align: center;
}
</style>

<template>
  <div>
    <div class="test_a" @click="onClickFn">{{foo}}</div>
    <div>
      <button @click="getParents">向指定的祖籍组件，派发事件</button>
    </div>
  </div>
</template>

<script>
import emitter from '../../mixins/emitter.js'
export default {
  name: "test_a",
  mixins: [emitter],
  props: {
    foo: String
  },
  methods: {
    onClickFn() {
      this.$emit("update:foo", "123");
    },
    getParents(){
      this.dispatch('test', 'my.test', '杨紫')
    }
  }
};
</script>
<style lang="scss" scoped>
.test_a {
  width: 100px;
  height: 100px;
  background: pink;
}
</style>

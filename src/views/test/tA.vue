<template>
  <div class="test_a" @click="onClickFn">{{foo}}</div>
</template>

<script>
export default {
  name: "test_a",
  props: {
    foo: String
  },
  methods: {
    onClickFn() {
      this.$emit("update:foo", "123");
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

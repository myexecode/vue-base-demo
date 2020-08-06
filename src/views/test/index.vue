<template>
  <div class="test" >
    <svg-Icon />
    <svg-Icon iconClass="qq" />
    <tA :foo.sync="modal.name"/>
  </div>
</template>

<script>
import tA from "./tA";
export default {
  name: "test",
  components: {
    tA
  },
  data() {
    return {
      modal: {
        name: "a"
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.test {
}
</style>

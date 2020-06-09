<template>
  <div class="test" >
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

<template>
  <div class="formui">
    form
    <SInput v-model="model.username" ></SInput>
    {{model}}
  </div>
</template>

<script>
import SInput from "./sInput";
export default {
  name: "formui",
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      }
    };
  },
  components: {
    SInput
  }
};
</script>
<style lang="scss" scoped>
</style>

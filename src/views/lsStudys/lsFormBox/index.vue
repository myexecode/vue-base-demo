<template>
  <div class="ls_form_box">
    <lsForm :model="formData" >
      <lsFormItem label="姓名">
        <lsInput v-model="formData.nameValue"/>
      </lsFormItem>
      <lsFormItem label="密码">
        <lsInput v-model="formData.passWorldValue" type="password"/>
      </lsFormItem>
    </lsForm>

    <div>{{formData}}</div>
  </div>
</template>
<script>
import lsInput from "./lsInput";
import lsFormItem from "./lsFormItem";
import lsForm from "./lsForm";
export default {
  name: "ls_form_box",
  components: {
    lsInput,
    lsFormItem,
    lsForm
  },
  data() {
    return {
      formData: {
        nameValue: "",
        passWorldValue: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>


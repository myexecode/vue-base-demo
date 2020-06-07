<template>
  <div class="ls_form_box">
    <lsForm :model="formData" :rules="formRules" ref="lsForm" >
      <lsFormItem label="姓名" prop="nameValue" >
        <lsInput v-model="formData.nameValue"/>
      </lsFormItem>
      <lsFormItem label="密码" prop="passWorldValue" >
        <lsInput v-model="formData.passWorldValue" type="password"/>
      </lsFormItem>
      <lsFormItem>
        <button @click="onLogin" >登陆</button>
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
      },
      formRules: {
        nameValue: [
            {required: true, message: '用户名必填'}
        ],
        passWorldValue: [
            {required: true, message: '密码必填'}
        ]
      }
    };
  },
  methods: {
      onLogin(){
          this.$refs.lsForm.validate(err => {
              if(err){
                  alert('成功')
              }else{
                  alert('失败')
              }
          })
      }
  }
};
</script>
<style lang="scss" scoped>
</style>


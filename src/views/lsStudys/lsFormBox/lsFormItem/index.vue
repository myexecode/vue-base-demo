<template>
  <div class="ls_form_item">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-show="errMessage">{{errMessage}}</p>
  </div>
</template>
<script>
import Schema from "async-validator";

export default {
  name: "ls_form_item",
  inject: ["form"],
  data() {
    return {
      errMessage: ""
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: String
  },
  mounted() {
    this.$on("onValidate", () => {
      // 没有传prop属性则不会进行校验
      if (this.prop) {
        this.validate();
      }
    });
  },
  methods: {
    validate() {
      let rules = this.form.rules[this.prop]; // 获取校验规则
      let value = this.form.model[this.prop]; // 获取当前对应的input值

      const schema = new Schema({
        [this.prop]: rules
      });
      return schema.validate(
        {
          [this.prop]: value
        },
        errs => {
          console.log(errs, "errs");
          if (errs) {
            this.errMessage = errs[0].message;
          } else {
            this.errMessage = "";
          }
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

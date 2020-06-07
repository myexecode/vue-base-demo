<template>
    <div class="ls_input">
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>
<script>
export default {
    name: 'ls_input',
    inheritAttrs: false, // 避免顶层的容器继承$attrs属性
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e){
            this.$emit('input', e.target.value);

            this.$parent.$emit('onValidate'); // 通知父级校验
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


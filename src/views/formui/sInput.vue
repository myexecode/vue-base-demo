<template>
    <div class="s_input">
        <input type="text" :value="value" @input="onInput">
    </div>
</template>

<script>
export default {
    name: 's_input',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e){
            this.$emit('input', e.target.value);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

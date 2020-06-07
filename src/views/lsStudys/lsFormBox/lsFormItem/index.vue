<template>
    <div class="ls_form_item">
        <label v-if="label">{{label}}</label>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'ls_form_item',
    props: {
        label: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

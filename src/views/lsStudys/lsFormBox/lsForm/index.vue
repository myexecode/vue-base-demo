<template>
    <div class="ls_form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'ls_form',
    provide(){
        return {
            form: this // 传递当前实例给后代
        }
    },
    props: {
        model: {
            type: Object,
            default: () => {},
            required: true
        },
        rules: {
            type: Object
        }
    },
    methods: {
        validate(callBack){
            const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
            Promise.all(tasks).then(res => {
                callBack(true);
            }).catch(err => {
                callBack(false);
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

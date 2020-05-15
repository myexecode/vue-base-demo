<template>
    <div class="m_drag" :style="cProps">
        <slot>m_drag</slot>
    </div>
</template>

<script>
export default {
    name: 'm_drag',
    props: {
        cProps: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.m_drag{
    position: absolute;
    left: 0;
    top: 0;
}
</style>

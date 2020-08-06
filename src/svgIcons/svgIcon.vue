<template>
    <svg>
        <use :xlink:href="iconName" ></use>
    </svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        iconClass: {
            type: String,
            default: 'wx'
        }
    },
    computed: {
        iconName(){
            console.log(this.iconClass, 'this.iconClass')
            return `#icon-${this.iconClass}`;
        }
    }
}
</script>


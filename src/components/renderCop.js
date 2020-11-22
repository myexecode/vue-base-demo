// 使用render函数 自定义组件
export default {
  install(Vue){
    Vue.component('reander-test', {
      props: {
        level: {
          type: String,
          default: '1'
        }
      },
      render(h){
        return h(
          'h'+ this.level,
          this.$slots.default
        )
      }
    })
  }
}

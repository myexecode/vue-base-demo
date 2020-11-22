// 实现crate函数，通过编程式 的方式 使用指定的vue组件
export default {
  install(Vue){
    Vue.prototype.$mCreate = function(component, props){
      const vm = new Vue({
        render: h => h(component, {props})
      }).$mount()

      document.body.appendChild(vm.$el)

      const comp = vm.$children[0]

      comp.remove = function(){
        document.body.removeChild(vm.$el) // 销毁dom
        vm.$destroy() // 释放内存
      }

      return comp;
    }
  }
}
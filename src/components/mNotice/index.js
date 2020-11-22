import mNotice from './mNotice.vue'
export default {
  install(Vue){
    Vue.prototype.$mNotice = function(props){
      const vm = new Vue({
        render: h => h(mNotice, {props})
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
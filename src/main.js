import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置全局过滤器
Vue.filter('setWH', (url, arg) => {
  // 图片路径尺寸自定义：https://lsj.com/w.h/img/1.jpg -> https://lsj.com/100.200/img/1.jpg
  return url.replace(/w\.h/, arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
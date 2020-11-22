import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './lsRouter'
import store from './store'

import './components/customInstruct/mDrag'

import headerCop from './components/header'
// 设置全局组件
Vue.component('headerCop', headerCop);

import svgIcons from './svgIcons'
Vue.use(svgIcons); // svg全局组件

import renderCop from './components/renderCop.js'
Vue.use(renderCop); // renderCop 组件

// 设置全局过滤器
Vue.filter('setWH', (url, arg) => {
  // 图片路径尺寸自定义：https://lsj.com/w.h/img/1.jpg -> https://lsj.com/100.200/img/1.jpg
  return url.replace(/w\.h/, arg);
})



Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

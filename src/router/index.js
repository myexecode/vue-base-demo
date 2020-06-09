import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home')
  },
  {
    path: '/VuexTest',
    name: 'VuexTest',
    component: () => import(/* webpackChunkName: "vuexTest" */ '../views/vuexTest')
  },
  {
    path: '/AxiosTeset',
    name: 'AxiosTeset',
    component: () => import(/* webpackChunkName: "AxiosTeset" */ '../views/AxiosTeset')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "AxiosTeset" */ '../views/test')
  },
  {
    path: '/formui',
    name: 'formui',
    component: () => import(/* webpackChunkName: "AxiosTeset" */ '../views/formui')
  },
  {
    path: '/lsStydys/lsFormBox',
    name: 'lsStydys/lsFormBox',
    _meta:{title: '自定义双向绑定 表单组件'},
    component: () => import('../views/lsStudys/lsFormBox')
  },
  {
    path: '/lsStydys/lsTree',
    name: 'lsStydys/lsTree',
    _meta:{title: '自定义 递归组件'},
    component: () => import('../views/lsStudys/lsTree')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

export {
  routes
}
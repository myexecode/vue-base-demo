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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

export {
  routes
}
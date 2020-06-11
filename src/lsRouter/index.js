import Vue from 'vue'
import LsVueRouter from './lsRouter'

Vue.use(LsVueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home')
  }
]

const router = new LsVueRouter({
    routes
})

export default router

export {
  routes
}
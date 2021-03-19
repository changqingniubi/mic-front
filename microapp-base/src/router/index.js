import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  // {
  //   path: '/app-vue/*/*',
  //   name: 'VueMain',
  //   component: () => import(/* webpackChunkName: "VueMain" */ '../views/VueMain.vue')
  // },
  // {
  //   path: '/app-react',
  //   name: 'ReactMain',
  //   component: () => import(/* webpackChunkName: "ReactMain" */ '../views/ReactMain.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

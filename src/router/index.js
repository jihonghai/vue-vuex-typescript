import Vue from 'vue'
import Router from 'vue-router'
import modules from './modules'

if (process.env.NODE_ENV === 'development') {
  Vue.use(Router)
}

const CommonView = () => import(/* webpackChunkName: "CommonView" */ '@/view/CommonView.vue')
const Login = () => import('@/view/auth/Login.vue')
const Page404 = () => import('@/view/404.vue')

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: CommonView,
      children: [
        ...modules,
        {
          path: '/', redirect: '/dashboard'
        }
      ]
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
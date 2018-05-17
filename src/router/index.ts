import Vue from 'vue'
import Router, { Route } from 'vue-router'
import modules from './modules'

if (process.env.NODE_ENV === 'development') {
  Vue.use(Router)
}

const Page404 = () => import('@/view/404.vue')

const router = new Router({
  routes: [
    ...modules,
    {
      path: '*',
      component: Page404
    }
  ]
})

router.beforeEach((to: Route, from: Route, next: any) => {
  next()
})

export default router

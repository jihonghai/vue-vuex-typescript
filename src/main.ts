// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import ELEMENT from 'element-ui'

import App from './App.vue'
import router from './router'

import store from './store'

// axios ajax 配置
import './http'

Vue.use(ELEMENT)
/*
if (process.env.NODE_ENV === 'development') {
  require('element-ui/lib/theme-chalk/index.css')
}
*/
Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
const AppVue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

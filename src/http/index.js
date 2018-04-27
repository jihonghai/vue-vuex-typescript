import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Message} from 'element-ui'
import store from '../store'
import router from '../router'

Vue.router = router

// 使用VueAxios，vue-auth依赖于vue-axios
Vue.use(VueAxios, axios)

// axios 配置
// 请求超时时间： 毫秒
Vue.axios.defaults.timeout = 50000
Vue.axios.defaults.baseURL = '/api'

// http request 拦截器
Vue.axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
Vue.axios.interceptors.response.use(
  response => {
    const headers = response.headers
    // 请求超时拦截
    if (headers['session-status'] === 'timeout') {
      Message.error('登录超时')
      setTimeout(() => {
        store.commit('LOGOUT')
        router.replace({
          path: '/login'
        })
      }, 1000)

      return
    }

    return response.data
  },
  error => {
    if (error.response) {
      const status = error.response.status

      // 权限受限
      if (status === 401) {
        Message.error('权限受限')
        // 401 清除token信息并跳转到登录页面
        store.commit('LOGOUT')
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
      }

      if (status === 404) {
        Message.error('请求路径错误')
      }

      if (status === 500) {
        Message.error('系统内部错误')
      }
    }
    return Promise.reject(error.response)
  })

export default Vue.axios

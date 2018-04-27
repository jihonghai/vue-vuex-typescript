import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

if (process.env.NODE_ENV === 'development') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: modules
})

export default store

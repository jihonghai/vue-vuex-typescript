import { ActionContext, ActionTree, MutationTree } from 'vuex'
import * as types from '@/store/mutation-types'
import { RootState } from '@/store/state'
import { LoginState } from './loginState'
import * as API from '@/api'
import { LoginRequest, LoginResponse } from '@/types'

type LoginContext = ActionContext<LoginState, RootState>

const state: LoginState = {
  userName: '',
  isLoggedIn: false
}

const getters = {
  userName: (state: LoginState) => state.userName,
  isLoggedIn: (state: LoginState) => state.isLoggedIn
}

const mutations: MutationTree<LoginState> = {
  [types.LOGIN] (state: LoginState) {
    state.userName = 'Alex'
    state.isLoggedIn = !state.isLoggedIn
  }
}

const actions: ActionTree<LoginState, RootState> = {
  login (context: LoginContext, params: LoginRequest) {
    context.commit(types.LOGIN)

    API.login(params).then((res: LoginResponse) => {
      console.log(res)
    })
  }
}

export const login = {
  state,
  getters,
  mutations,
  actions
}

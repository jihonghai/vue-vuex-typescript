import { ActionContext, ActionTree, MutationTree } from 'vuex'
import * as API from '@/api'
import * as types from '@/store/mutation-types'
import { RootState, LoginState } from '@/store/state'
import { LoginRequest, LoginResponse, User } from '@/types'

type LoginContext = ActionContext<LoginState, RootState>

const state: LoginState = {
  userId: '',
  userName: '',
  loginName: '',
  permissions: [],
  isLoggedIn: false
}

const getters = {
  userName: (state: LoginState) => state.userName,
  isLoggedIn: (state: LoginState) => state.isLoggedIn
}

const mutations: MutationTree<LoginState> = {
  [types.LOGIN] (state: LoginState, user: User) {
    state.userName = 'Alex'
    state.isLoggedIn = !state.isLoggedIn
  },
  [types.LOGOUT] (state: LoginState) {
    state.userName = ''
    state.isLoggedIn = false
  }
}

const actions: ActionTree<LoginState, RootState> = {
  login ({ commit, dispatch }: LoginContext, params: LoginRequest) {
    commit(types.LOGIN)

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

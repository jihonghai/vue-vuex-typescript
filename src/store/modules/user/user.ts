import { ActionContext, ActionTree, MutationTree } from 'vuex'
import * as types from '@/store/mutation-types'
import * as API from '@/api'
import { RootState, UserState } from '@/store/state'
import { UserRequest, UserResponse, User } from '@/types'

type UserContext = ActionContext<UserState, RootState>

const state: UserState = {
  userList: [],
  user: {
    name: ''
  }
}

const getters = {
}

const mutations: MutationTree<UserState> = {
  [types.GET_USER_LIST] (state: UserState, list: User[]) {
    state.userList = list
  },
  [types.GET_USER_DETAIL] (state: UserState, user: User) {
    state.user = user
  }
}

const actions: ActionTree<UserState, RootState> = {
  queryUserList ({ commit, dispatch, state }: UserContext, params: UserRequest) {
    commit(types.GET_USER_LIST, [])
  },
  queryUserDetail ({ commit, dispatch }: UserContext, params: UserRequest) {
    commit(types.GET_USER_DETAIL, {
      name: '1'
    })
  }
}

export const user = {
  state,
  getters,
  mutations,
  actions
}

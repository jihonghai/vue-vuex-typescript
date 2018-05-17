import { ActionContext, ActionTree, MutationTree } from 'vuex'
import * as types from '@/store/mutation-types'
import { RootState, CommonState } from '@/store/state'
// import { CommonState } from './commonState'

type CommonContext = ActionContext<CommonState, RootState>

const state: CommonState = {
  isCollapse: false
}

const getters = {
  isCollapse: (state: CommonState) => state.isCollapse
}

const mutations: MutationTree<CommonState> = {
  [types.CHANGE_SIDE_BAR_STATE] (state: CommonState) {
    state.isCollapse = !state.isCollapse
  }
}

const actions: ActionTree<CommonState, RootState> = {
  changeSideBarState (context: CommonContext) {
    context.commit(types.CHANGE_SIDE_BAR_STATE)
  }
}

export const common = {
  actions,
  state,
  getters,
  mutations
}

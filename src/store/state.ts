// import { CommonState } from './modules/common'
// import { LoginState } from './modules/login/loginState'
// import { UserState } from './modules/user/userState'

import { User } from '@/types'

export interface ModuleState {
}

export interface CommonState extends ModuleState {
  isCollapse: boolean
}

export interface LoginState extends ModuleState {
  userName: string,
  isLoggedIn: boolean
}

export interface UserState extends ModuleState {
  userList: User[],
  user: User
}

export interface RootState {
  common: CommonState,
  login: LoginState,
  user: UserState
}

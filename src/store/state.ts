import { User } from '@/types'

export interface ModuleState {
}

export interface CommonState extends ModuleState {
  isCollapse: boolean
}

export interface LoginState extends ModuleState {
  userId: string,
  userName: string,
  loginName: string,
  permissions: object[],
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

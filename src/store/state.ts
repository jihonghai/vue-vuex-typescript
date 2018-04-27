import { LoginState } from './modules/login/loginState'
import { CommonState } from './modules/common/commonState'

export interface RootState {
  login: LoginState,
  common: CommonState
}

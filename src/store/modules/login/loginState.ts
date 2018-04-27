
import { ModuleState } from '../index'

export interface LoginState extends ModuleState {
  userName: string,
  isLoggedIn: boolean
}

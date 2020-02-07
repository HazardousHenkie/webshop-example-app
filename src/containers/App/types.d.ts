import { ActionType } from 'typesafe-actions'
import setLocation from './actions'
import {
  login,
  loginSuccess,
  loginError,
  logout,
  logoutSuccess,
  logoutError
} from './actions'
import { ApplicationRootState } from '../../types'

interface AuthenticationState {
  readonly loading: boolean
  readonly error?: object | boolean
  readonly loggedIn: boolean
  readonly currentUser: string
}

type authenticationActions = ActionType<
  | typeof login
  | loginSuccess
  | loginError
  | logout
  | logoutSuccess
  | logoutError
>

type RootState = ApplicationRootState
type ContainerStateAuthentication = AuthenticationState
type ContainerAuthenticationActions = authenticationActions

export {
  RootState,
  ContainerStateAuthentication,
  ContainerAuthenticationActions
}

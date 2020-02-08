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

interface LoaderState {
  readonly loading: boolean
}

interface AuthenticationState {
  readonly error?: object | boolean
  readonly loggedIn: boolean
  readonly currentUser: string
}

type LoaderActions = ActionType<typeof loaderStart | loaderEnd>

type authenticationActions = ActionType<
  | typeof login
  | loginSuccess
  | loginError
  | logout
  | logoutSuccess
  | logoutError
>

type RootState = ApplicationRootState
type ContainerStateLoader = LoaderState
type ContainerStateAuthentication = AuthenticationState
type ContainerLoaderActions = loaderActions
type ContainerAuthenticationActions = authenticationActions

export {
  RootState,
  ContainerStateLoader,
  ContainerStateAuthentication,
  ContainerLoaderActions,
  ContainerAuthenticationActions
}

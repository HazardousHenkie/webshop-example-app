import { ActionType } from 'typesafe-actions'
import setLocation from './actions'
import * as actions from './actions'
import { ApplicationRootState } from '../../types'

interface AuthenticationState {
  readonly loading: boolean
  readonly error?: object | boolean
  readonly loggedIn: boolean
  readonly currentUser: string
}

type authenticationActions = ActionType<actions>

type ContainerStateAuthentication = AuthenticationState
type ContainerAuthenticationActions = authenticationActions

export { ContainerStateAuthentication, ContainerAuthenticationActions }

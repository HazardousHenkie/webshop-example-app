import { ActionType } from 'typesafe-actions'
import setLocation from './actions'
import * as actions from './actions'
import { ApplicationRootState } from '../../types'

interface AuthenticationState {
  readonly loading: boolean
  readonly error?: Error | boolean
  readonly loggedIn: boolean
  readonly currentUser: string
}

type authenticationActions = ActionType<actions>

type ContainerAuthenticationState = AuthenticationState
type ContainerAuthenticationActions = authenticationActions

export { ContainerAuthenticationState, ContainerAuthenticationActions }

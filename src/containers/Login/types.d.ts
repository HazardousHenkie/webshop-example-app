import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { ApplicationRootState } from 'types'

/* --- STATE --- */
interface LoginState {
  readonly error?: object | boolean
  readonly loginData: object
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>

/* --- EXPORTS --- */
type RootState = ApplicationRootState
type ContainerState = LoginState
type ContainerActions = AppActions

export { RootState, ContainerState, ContainerActions }

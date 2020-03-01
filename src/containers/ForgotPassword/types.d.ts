import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

interface ForgotPasswordState {
  readonly message: boolean
  readonly error?: Error | boolean
  readonly loading: boolean
}

type ForgotPasswordActions = ActionType<typeof actions>

type ContainerForgotPasswordState = ForgotPasswordState
type ContainerForgotPasswordActions = ForgotPasswordActions

export { ContainerForgotPasswordState, ContainerForgotPasswordActions }

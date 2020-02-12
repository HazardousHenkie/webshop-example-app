import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

interface ForgotPasswordState {
  readonly message: string
  readonly error?: object | boolean
  readonly loading: boolean
}

type ForgotPasswordActions = ActionType<typeof actions>

type ContainerForgotPasswordState = ForgotPasswordState
type ContainerForgotPasswordActions = ForgotPasswordActions

export { ContainerForgotPasswordState, ContainerForgotPasswordActions }

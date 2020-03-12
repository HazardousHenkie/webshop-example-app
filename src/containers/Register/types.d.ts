import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

interface RegisterState {
  readonly message: boolean
  readonly error?: Error | boolean
  readonly loading: boolean
}

type RegisterActions = ActionType<typeof actions>

type ContainerRegisterState = RegisterState
type ContainerRegisterActions = RegisterActions

export { ContainerRegisterState, ContainerRegisterActions }

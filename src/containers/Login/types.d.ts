import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

interface LoginState {
  readonly error?: object | boolean
  readonly loginData: object
}

type ContainerLoginState = LoginState

export { ContainerLoginState }

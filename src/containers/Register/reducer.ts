import { ContainerRegisterState, ContainerRegisterActions } from './types'
import ActionTypes from './constants'

export const initialStateRegister: ContainerRegisterState = {
  message: false,
  error: false,
  loading: false
}

function registerReducer(
  state: ContainerRegisterState = initialStateRegister,
  action: ContainerRegisterActions
): ContainerRegisterState {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return {
        message: false,
        error: false,
        loading: true
      }
    case ActionTypes.REGISTER_SUCCESS:
      return {
        message: true,
        error: false,
        loading: false
      }
    case ActionTypes.REGISTER_ERROR:
      return {
        message: false,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default registerReducer

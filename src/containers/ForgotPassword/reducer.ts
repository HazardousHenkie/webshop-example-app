import {
  ContainerForgotPasswordState,
  ContainerForgotPasswordActions
} from './types'
import ActionTypes from './constants'

export const initialStateForgotPassword: ContainerForgotPasswordState = {
  message: '',
  error: false,
  loading: false
}

function forgotPasswordReducer(
  state: ContainerForgotPasswordState = initialStateForgotPassword,
  action: ContainerForgotPasswordActions
): ContainerForgotPasswordState {
  switch (action.type) {
    case ActionTypes.SEND_PASSWORD_RESET_EMAIL:
      return {
        message: state.message,
        error: state.error,
        loading: true
      }
    case ActionTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS:
      return {
        message: 'an email with instructions has been send.',
        error: false,
        loading: false
      }
    case ActionTypes.SEND_PASSWORD_RESET_EMAIL_ERROR:
      return {
        message: '',
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default forgotPasswordReducer

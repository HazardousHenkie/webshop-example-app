import {
  ContainerForgotPasswordState,
  ContainerForgotPasswordActions
} from './types'
import ActionTypes from './constants'

export const initialStateForgotPassword: ContainerForgotPasswordState = {
  message: '',
  error: false
}

function forgotPasswordReducer(
  state: ContainerForgotPasswordState = initialStateForgotPassword,
  action: ContainerForgotPasswordActions
): ContainerForgotPasswordState {
  switch (action.type) {
    case ActionTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS:
      return {
        message: 'an email with instructions has been send.',
        error: false
      }
    case ActionTypes.SEND_PASSWORD_RESET_EMAIL_ERROR:
      return {
        message: state.message,
        error: action.payload
      }
    default:
      return state
  }
}

export default forgotPasswordReducer

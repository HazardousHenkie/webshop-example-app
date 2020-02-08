import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const sendPasswordResetEmail = (params: Record<string, any>) =>
  action(ActionTypes.SEND_PASSWORD_RESET_EMAIL, params)
export const sendPasswordResetEmailSuccess = () =>
  action(ActionTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS)
export const sendPasswordResetEmailError = (error: object) =>
  action(ActionTypes.SEND_PASSWORD_RESET_EMAIL_ERROR, error)

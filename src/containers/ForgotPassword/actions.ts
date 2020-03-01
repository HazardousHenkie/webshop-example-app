import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const sendPasswordResetEmail = (params: string) =>
  action(ActionTypes.SEND_PASSWORD_RESET_EMAIL, params)
export const sendPasswordResetEmailSuccess = () =>
  action(ActionTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS)
export const sendPasswordResetEmailError = (error: Error) =>
  action(ActionTypes.SEND_PASSWORD_RESET_EMAIL_ERROR, error)

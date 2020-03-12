import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const registerAction = (email: string, password: string) =>
  action(ActionTypes.REGISTER, { email, password })
export const registerSuccess = () => action(ActionTypes.REGISTER_SUCCESS)
export const registerError = (error: Error) =>
  action(ActionTypes.REGISTER_ERROR, error)

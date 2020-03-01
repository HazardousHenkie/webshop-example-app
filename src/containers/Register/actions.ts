import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const registerAction = (params: string) =>
  action(ActionTypes.REGISTER, params)
export const registerSuccess = () => action(ActionTypes.REGISTER_SUCCESS)
export const registerError = (error: Error) =>
  action(ActionTypes.REGISTER_ERROR, error)

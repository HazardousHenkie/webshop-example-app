import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const login = (params: Record<string, any>) =>
  action(ActionTypes.LOGIN, params)
export const loginSuccess = (username: string) =>
  action(ActionTypes.LOGIN_SUCCESS, username)
export const loginError = (error: Error) =>
  action(ActionTypes.LOGIN_ERROR, error)

export const logout = () => action(ActionTypes.LOGOUT)
export const logoutSuccess = () => action(ActionTypes.LOGOUT_SUCCESS)
export const logoutError = (error: Error) =>
  action(ActionTypes.LOGOUT_ERROR, error)

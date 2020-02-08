import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const login = (params: Record<string, any>) =>
  action(ActionTypes.LOGIN, params)
export const loginSuccess = (username: string) =>
  action(ActionTypes.LOGIN_SUCCESS, username)
export const loginError = (error: object) =>
  action(ActionTypes.LOGIN_ERROR, error)

export const logout = () => action(ActionTypes.LOGOUT)
export const logoutSuccess = () => action(ActionTypes.LOGOUT_SUCCESS)
export const logoutError = (error: object) =>
  action(ActionTypes.LOGOUT_ERROR, error)

export const loaderStart = () => action(ActionTypes.LOADER_START)
export const loaderEnd = () => action(ActionTypes.LOADER_END)

import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const login = (params: object) =>
  action(ActionTypes.CHANGE_LOGIN_DATA, params)

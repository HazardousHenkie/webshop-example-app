import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const changeAwesome = (awesome: boolean) =>
  action(ActionTypes.CHANGE_AWESOME, awesome)

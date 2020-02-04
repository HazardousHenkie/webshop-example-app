import ActionTypes from './constants'
import { action } from 'typesafe-actions'

export const changeBoolean = (myBoolean: boolean) =>
  action(ActionTypes.CHANGE_BOOLEAN, myBoolean)

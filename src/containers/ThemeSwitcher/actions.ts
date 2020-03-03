import { action } from 'typesafe-actions'

import ActionTypes from './constants'

export const switchTheme = (darkMode: boolean) =>
  action(ActionTypes.SWITCH_THEME, darkMode)

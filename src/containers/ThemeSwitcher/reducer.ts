import {
  ContainerThemeSwitcherState,
  ContainerThemeSwitcherActions
} from './types'
import ActionTypes from './constants'

export const initialStateThemeSwitcher: ContainerThemeSwitcherState = {
  darkMode: false
}

function themeSwitcherReducer(
  state: ContainerThemeSwitcherState = initialStateThemeSwitcher,
  action: ContainerThemeSwitcherActions
): ContainerThemeSwitcherState {
  switch (action.type) {
    case ActionTypes.SWITCH_THEME:
      return {
        darkMode: action.payload
      }

    default:
      return state
  }
}

export default themeSwitcherReducer

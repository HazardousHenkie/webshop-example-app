import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

interface ThemeSwitcherState {
  readonly darkMode: boolean
}

type ThemeSwitcherActions = ActionType<typeof actions>

type ContainerThemeSwitcherState = ThemeSwitcherState
type ContainerThemeSwitcherActions = ThemeSwitcherActions

export { ContainerThemeSwitcherState, ContainerThemeSwitcherActions }

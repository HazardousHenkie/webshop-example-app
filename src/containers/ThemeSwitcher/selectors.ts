import { createSelector } from 'reselect'
import { initialStateThemeSwitcher } from './reducer'
import { ApplicationRootState } from 'types'

const selectThemeSwitcher = (state: ApplicationRootState) => {
  return state.themeSwitcher || initialStateThemeSwitcher
}

const makeSelectDarkMode = () =>
  createSelector(selectThemeSwitcher, substate => {
    return substate.darkMode
  })

export { makeSelectDarkMode }

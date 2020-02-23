import { createSelector } from 'reselect'
import { ApplicationRootState } from 'types'
import { initialState } from './reducer'

const selectLanguage = (state: ApplicationRootState) =>
  state.language || initialState

const makeSelectLocale = () =>
  createSelector(selectLanguage, languageState => languageState.locale)

export { selectLanguage, makeSelectLocale }

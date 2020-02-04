import { createSelector } from 'reselect'
import { ApplicationRootState } from 'types'
import { initialState } from './reducer'

/**
 * Direct selector to the languageToggle state domain
 */
const selectMyBoolean = (state: ApplicationRootState) =>
  state.myBoolean || initialState

/**
 * Select the language locale
 */

const makeSelectMyBoolean = () =>
  createSelector(selectMyBoolean, myBooleanState => myBooleanState.myBoolean)

export { selectMyBoolean, makeSelectMyBoolean }

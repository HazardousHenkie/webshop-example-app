/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'
import { ApplicationRootState } from 'types'

const selectHome = (state: ApplicationRootState) => {
  // home is the key for the reducer
  return state.home || initialState
}

const makeSelectUsername = () =>
  createSelector(selectHome, substate => {
    return substate.awesome
  })

export { selectHome, makeSelectUsername }

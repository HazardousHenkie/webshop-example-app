/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'
import { ApplicationRootState } from 'types'

const selectLogin = (state: ApplicationRootState) => {
  return state.login || initialState
}

const makeSelectLoginData = () =>
  createSelector(selectLogin, substate => {
    return substate.loginData
  })

export { selectLogin, makeSelectLoginData }

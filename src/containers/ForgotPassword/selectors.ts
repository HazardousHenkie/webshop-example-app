import { createSelector } from 'reselect'
import { ApplicationRootState } from '../../types'
import { initialStateForgotPassword } from './reducer'

const selectForgotPassword = (state: ApplicationRootState) => {
  return state.passwordrequest || initialStateForgotPassword
}

const makeSelectMessage = () =>
  createSelector(selectForgotPassword, subState => subState.message)
const makeSelectError = () =>
  createSelector(selectForgotPassword, subState => subState.error)
const makeSelectLoader = () =>
  createSelector(selectForgotPassword, subState => subState.loading)

export { makeSelectMessage, makeSelectError, makeSelectLoader }

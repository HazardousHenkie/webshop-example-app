import { createSelector } from 'reselect'
import { ApplicationRootState } from '../../types'

const selectAuthentication = (state: ApplicationRootState) => {
  return state.authentication
}

const makeSelectLoading = () =>
  createSelector(selectAuthentication, subState => subState.loading)
const makeSelectError = () =>
  createSelector(selectAuthentication, subState => subState.error)
const makeSelectLoggedIn = () =>
  createSelector(selectAuthentication, subState => subState.loggedIn)
const makeSelectCurrentUser = () =>
  createSelector(selectAuthentication, subState => subState.currentUser)

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectLoggedIn,
  makeSelectCurrentUser
}

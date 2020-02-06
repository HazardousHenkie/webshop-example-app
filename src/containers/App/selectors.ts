import { createSelector } from 'reselect'
import { ApplicationRootState } from '../../types'

const selectGlobal = (state: ApplicationRootState) => {
  return state.global
}

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading)

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error)

export { selectGlobal, makeSelectLoading, makeSelectError }

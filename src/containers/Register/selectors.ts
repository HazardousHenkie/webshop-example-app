import { createSelector } from 'reselect'
import { ApplicationRootState } from '../../types'
import { initialStateRegister } from './reducer'

const selectRegister = (state: ApplicationRootState) => {
  return state.register || initialStateRegister
}

const makeSelectMessage = () =>
  createSelector(selectRegister, subState => subState.message)
const makeSelectError = () =>
  createSelector(selectRegister, subState => subState.error)
const makeSelectLoader = () =>
  createSelector(selectRegister, subState => subState.loading)

export { makeSelectMessage, makeSelectError, makeSelectLoader }

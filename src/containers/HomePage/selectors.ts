import { createSelector } from 'reselect'
import { initialStateProducts } from './reducer'
import { ApplicationRootState } from 'types'

const selectProducts = (state: ApplicationRootState) => {
  return state.products || initialStateProducts
}

const makeSelectProducts = () =>
  createSelector(selectProducts, substate => {
    return substate.productsData.products
  })

const makeSelectLoader = () =>
  createSelector(selectProducts, substate => {
    return substate.loading
  })

const makeSelectError = () =>
  createSelector(selectProducts, substate => {
    return substate.error
  })

export { selectProducts, makeSelectProducts, makeSelectLoader, makeSelectError }

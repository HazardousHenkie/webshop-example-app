import { createSelector } from 'reselect'
import { initialStateProduct } from './reducer'
import { ApplicationRootState } from 'types'

const selectProduct = (state: ApplicationRootState) => {
  return state.product || initialStateProduct
}

const makeSelectProductDetail = () =>
  createSelector(selectProduct, substate => {
    return substate.product
  })

const getProductDetailsLoader = () =>
  createSelector(selectProduct, substate => {
    return substate.loading
  })

const getProductDetailFailed = () =>
  createSelector(selectProduct, substate => {
    return substate.error
  })

export {
  selectProduct,
  makeSelectProductDetail,
  getProductDetailsLoader,
  getProductDetailFailed
}

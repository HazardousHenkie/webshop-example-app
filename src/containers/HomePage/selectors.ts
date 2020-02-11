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

export { selectProducts, makeSelectProducts }

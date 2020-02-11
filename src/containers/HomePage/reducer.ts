import { ContainerProductsState, ContainerProductsActions } from './types'
import ActionTypes from './constants'

export const initialStateProducts: ContainerProductsState = {
  productsData: {
    products: []
  },
  error: false
}

function productsReducer(
  state: ContainerProductsState = initialStateProducts,
  action: ContainerProductsActions
): ContainerProductsState {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        error: state.error,
        productsData: {
          products: action.payload.products
        }
      }
    case ActionTypes.GET_PRODUCTS_FAILED:
      const { ...rest } = state
      return {
        error: action.payload,
        ...rest
      }
    default:
      return state
  }
}

export default productsReducer

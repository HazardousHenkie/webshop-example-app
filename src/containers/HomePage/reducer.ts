import { ContainerProductsState, ContainerProductsActions } from './types'
import ActionTypes from './constants'

export const initialStateProducts: ContainerProductsState = {
  productsData: {
    products: []
  },
  error: false,
  loading: false
}

function productsReducer(
  state: ContainerProductsState = initialStateProducts,
  action: ContainerProductsActions
): ContainerProductsState {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        loading: true,
        error: state.error,
        productsData: state.productsData
      }
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: true,
        error: state.error,
        productsData: {
          products: action.payload.products
        }
      }
    case ActionTypes.GET_PRODUCTS_FAILED:
      const { ...rest } = state
      return {
        loading: true,
        error: action.payload,
        ...rest
      }
    default:
      return state
  }
}

export default productsReducer

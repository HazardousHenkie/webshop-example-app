import { ContainerProductState, ContainerProductActions } from './types'
import ActionTypes from './constants'

export const initialStateProduct: ContainerProductState = {
  product: undefined,
  error: undefined,
  loading: false
}

function productReducer(
  state: ContainerProductState = initialStateProduct,
  action: ContainerProductActions
): ContainerProductState {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_DETAIL:
      return {
        loading: true,
        error: undefined,
        product: undefined
      }
    case ActionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        error: undefined,
        product: action.payload.product
      }
    case ActionTypes.GET_PRODUCT_DETAIL_FAILED:
      return {
        loading: false,
        error: action.payload,
        product: undefined
      }
    default:
      return state
  }
}

export default productReducer

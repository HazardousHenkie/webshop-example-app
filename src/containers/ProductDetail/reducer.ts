import { ContainerProductState, ContainerProductActions } from './types'
import ActionTypes from './constants'

export const initialStateProduct: ContainerProductState = {
  product: {
    id: 0,
    image: '',
    title: '',
    description: ''
  },
  error: false,
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
        error: state.error,
        product: state.product
      }
    case ActionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        error: state.error,
        product: action.payload.product
      }
    case ActionTypes.GET_PRODUCT_DETAIL_FAILED:
      const { ...rest } = state
      return {
        loading: false,
        error: action.payload,
        ...rest
      }
    default:
      return state
  }
}

export default productReducer

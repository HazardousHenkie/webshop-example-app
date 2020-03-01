import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

import { Product } from 'containers/ProductDetail/types'

interface Products {
  readonly products?: Product[]
}

interface ProductsState {
  readonly productsData: Products
  readonly loading: boolean
  readonly error?: Error | boolean
}

type ProductsActions = ActionType<typeof actions>

type ContainerProductsState = ProductsState
type ContainerProductsActions = ProductsActions

export { ContainerProductsState, ContainerProductsActions }

import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

// move to product page when we have it
export interface Product {
  product_id: number
  image: string
  title: string
  description: string
}

interface Products {
  readonly products?: Product[]
}

interface ProductsState {
  readonly productsData: Products
  readonly loading: boolean
  readonly error?: object | boolean
}

type ProductsActions = ActionType<typeof actions>

type ContainerProductsState = ProductsState
type ContainerProductsActions = ProductsActions

export { ContainerProductsState, ContainerProductsActions }

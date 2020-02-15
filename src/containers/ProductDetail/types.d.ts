import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export interface Product {
  id: number
  image: string
  title: string
  description: string
}

interface ProductState {
  readonly product: Product
  readonly loading: boolean
  readonly error?: object | boolean
}

type ProductActions = ActionType<typeof actions>

type ContainerProductState = ProductState
type ContainerProductActions = ProductActions

export { ContainerProductState, ContainerProductActions }

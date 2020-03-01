import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

import CustomError from 'utils/customError'

export interface Product {
  id: number
  image: string
  title: string
  short_description: string
  description: string
}

interface ProductState {
  readonly product: Product | undefined
  readonly loading: boolean
  readonly error?: CustomError
}

type ProductActions = ActionType<typeof actions>

type ContainerProductState = ProductState
type ContainerProductActions = ProductActions

export { ContainerProductState, ContainerProductActions }

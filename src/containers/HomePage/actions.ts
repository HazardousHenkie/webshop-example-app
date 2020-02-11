import { action } from 'typesafe-actions'

import ActionTypes from './constants'

import { Product } from './types'

export const getProducts = () => action(ActionTypes.GET_PRODUCTS)
export const getProductsSuccess = (products: Product[]) =>
  action(ActionTypes.GET_PRODUCTS_SUCCESS, { products })
export const getProductsFailed = (error: object) =>
  action(ActionTypes.GET_PRODUCTS_FAILED, error)

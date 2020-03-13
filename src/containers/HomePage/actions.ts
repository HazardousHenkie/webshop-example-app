import { action } from 'typesafe-actions'

import ActionTypes from './constants'

import { Product } from 'containers/ProductDetail/types'

export const getProducts = (lang: string) =>
  action(ActionTypes.GET_PRODUCTS, lang)
export const getProductsSuccess = (products: Product[]) =>
  action(ActionTypes.GET_PRODUCTS_SUCCESS, { products })
export const getProductsFailed = (error: Error) =>
  action(ActionTypes.GET_PRODUCTS_FAILED, error)

import CustomError from 'utils/customError'

import { action } from 'typesafe-actions'

import ActionTypes from './constants'

import { Product } from './types'

export const getProductDetail = (id: string) =>
  action(ActionTypes.GET_PRODUCT_DETAIL, id)
export const getProductDetailSuccess = (product: Product) =>
  action(ActionTypes.GET_PRODUCT_DETAIL_SUCCESS, { product })
export const getProductDetailFailed = (error: CustomError) =>
  action(ActionTypes.GET_PRODUCT_DETAIL_FAILED, error)

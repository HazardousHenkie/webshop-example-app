import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import { getProductsSuccess, getProductsFailed } from './actions'

import { Product } from 'containers/ProductDetail/types'

import ActionTypes from './constants'

function* getProductsSaga() {
  try {
    const snapshot = yield call(
      reduxSagaFirebase.firestore.getCollection,
      'products'
    )

    const products: Product[] = []
    snapshot.forEach((product: firebase.firestore.DocumentData) => {
      products.push({ ...product.data(), id: product.id })
    })

    yield put(getProductsSuccess(products))
  } catch (error) {
    yield put(getProductsFailed(error))
  }
}

export default function* getProductsRootSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCTS, getProductsSaga)
}

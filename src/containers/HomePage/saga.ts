import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import { getProductsSuccess, getProductsFailed } from './actions'

import { loaderStart, loaderEnd } from 'containers/App/actions'

import { Product } from './types'

import ActionTypes from './constants'

function* getProductsSaga() {
  try {
    yield put(loaderStart())

    const snapshot = yield call(
      reduxSagaFirebase.firestore.getCollection,
      'products'
    )

    const products: Product[] = []
    snapshot.forEach((product: firebase.firestore.DocumentData) => {
      products.push(product.data())
    })

    yield put(getProductsSuccess(products))
    yield put(loaderEnd())
  } catch (error) {
    yield put(getProductsFailed(error))
    yield put(loaderEnd())
  }
}

export default function* getProductsRootSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCTS, getProductsSaga)
}

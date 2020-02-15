import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import { getProductDetailSuccess, getProductDetailFailed } from './actions'

import ActionTypes from './constants'

function* getProductSaga() {
  try {
    const product = yield call(
      reduxSagaFirebase.firestore.getCollection,
      'product'
    )

    yield put(getProductDetailSuccess(product))
  } catch (error) {
    yield put(getProductDetailFailed(error))
  }
}

export default function* getProductRootSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCT_DETAIL, getProductSaga)
}

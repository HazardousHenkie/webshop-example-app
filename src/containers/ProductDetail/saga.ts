import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import { getProductDetailSuccess, getProductDetailFailed } from './actions'

import ActionTypes from './constants'

function* getProductSaga(id: Record<string, any>) {
  try {
    const snapshot = yield call(
      reduxSagaFirebase.firestore.getDocument,
      `products/${id.payload}`
    )

    // if not exits redirect to 404 or something? or throw error below
    console.log(snapshot.exists)

    if (snapshot.exists) {
      const product = { ...snapshot.data(), id: id.payload }

      yield put(getProductDetailSuccess(product))
    }
  } catch (error) {
    console.log(error)
    yield put(getProductDetailFailed(error))
  }
}

export default function* getProductRootSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCT_DETAIL, getProductSaga)
}

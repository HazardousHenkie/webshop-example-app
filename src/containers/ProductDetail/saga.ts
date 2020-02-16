import reduxSagaFirebase from 'utils/firebase'
import CustomError from 'utils/customError'

import { call, put, takeLatest } from 'redux-saga/effects'

import { getProductDetailSuccess, getProductDetailFailed } from './actions'

import ActionTypes from './constants'

function* getProductSaga(id: Record<string, any>) {
  try {
    const snapshot = yield call(
      reduxSagaFirebase.firestore.getDocument,
      `products/${id.payload}`
    )

    if (snapshot.exists) {
      const product = { ...snapshot.data(), id: id.payload }

      yield put(getProductDetailSuccess(product))
    }

    const error = new CustomError('Page not found.', 404)
    throw error
  } catch (error) {
    yield put(getProductDetailFailed(error))
  }
}

export default function* getProductRootSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCT_DETAIL, getProductSaga)
}

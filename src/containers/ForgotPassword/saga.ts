import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import {
  sendPasswordResetEmailSuccess,
  sendPasswordResetEmailError
} from './actions'

import { loaderStart, loaderEnd } from 'containers/App/actions'

import ActionTypes from './constants'

function* sendPasswordResetEmailSaga(params: Record<string, any>) {
  try {
    yield put(loaderStart())
    yield call(
      // check this ignore
      // @ts-ignore
      reduxSagaFirebase.auth.sendPasswordResetEmail,
      params.payload.email
    )
    yield put(sendPasswordResetEmailSuccess())
    yield put(loaderEnd())
  } catch (error) {
    yield put(sendPasswordResetEmailError(error))
    yield put(loaderEnd())
  }
}

export default function* sendPasswordResetEmailRootSaga() {
  yield takeLatest(
    ActionTypes.SEND_PASSWORD_RESET_EMAIL,
    sendPasswordResetEmailSaga
  )
}

import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import {
  sendPasswordResetEmailSuccess,
  sendPasswordResetEmailError
} from './actions'

import ActionTypes from './constants'

function* sendPasswordResetEmailSaga(params: Record<string, any>) {
  try {
    yield call(
      // check this ignore
      // @ts-ignore
      reduxSagaFirebase.auth.sendPasswordResetEmail,
      params.payload.email
    )
    yield put(sendPasswordResetEmailSuccess())
  } catch (error) {
    yield put(sendPasswordResetEmailError(error))
  }
}

export default function* sendPasswordResetEmailRootSaga() {
  yield takeLatest(
    ActionTypes.SEND_PASSWORD_RESET_EMAIL,
    sendPasswordResetEmailSaga
  )
}

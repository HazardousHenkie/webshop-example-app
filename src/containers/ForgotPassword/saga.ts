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
      // @ts-ignore firebase redux saga needs extra params but we won't use them so disabling tslint here
      reduxSagaFirebase.auth.sendPasswordResetEmail,
      params.payload
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

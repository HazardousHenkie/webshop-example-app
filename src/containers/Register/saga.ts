import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import { registerSuccess, registerError } from './actions'

import ActionTypes from './constants'

function* registerSaga(params: Record<string, any>) {
  try {
    yield call(
      // @ts-ignore firebase redux saga needs extra params but we won't use them so disabling tslint here
      reduxSagaFirebase.auth.sendPasswordResetEmail,
      params.payload
    )
    yield put(registerSuccess())
  } catch (error) {
    yield put(registerError(error))
  }
}

export default function* registerRootSaga() {
  yield takeLatest(ActionTypes.REGISTER, registerSaga)
}

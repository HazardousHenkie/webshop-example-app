import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeLatest } from 'redux-saga/effects'

import { registerSuccess, registerError } from './actions'

import ActionTypes from './constants'

function* registerSaga(params) {
  try {
    yield call(
      reduxSagaFirebase.auth.createUserWithEmailAndPassword,
      params.payload.email,
      params.payload.password
    )
    yield put(registerSuccess())
  } catch (error) {
    yield put(registerError(error))
  }
}

export default function* registerRootSaga() {
  yield takeLatest(ActionTypes.REGISTER, registerSaga)
}

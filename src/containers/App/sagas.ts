import reduxSagaFirebase from 'utils/firebase'

import { push } from 'connected-react-router'
import { home } from 'utils/routes'

import { call, take, put, takeLatest, fork } from 'redux-saga/effects'

import {
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  loaderStart,
  loaderEnd
} from './actions'
import ActionTypes from './constants'

function* loginSaga(params: Record<string, any>) {
  try {
    yield put(loaderStart())
    yield call(
      reduxSagaFirebase.auth.signInWithEmailAndPassword,
      params.payload.values.email,
      params.payload.values.password
    )

    if (params.payload.url) {
      yield put(push(params.payload.url))
    } else {
      yield put(push(home))
    }
  } catch (error) {
    yield put(loginError(error))
    yield put(loaderEnd())
  }
}

function* logoutSaga() {
  try {
    yield put(loaderStart())
    yield call(reduxSagaFirebase.auth.signOut)
  } catch (error) {
    yield put(logoutError(error))
    yield put(loaderEnd())
  }
}

function* loginStatusWatcher() {
  const channel = yield call(reduxSagaFirebase.auth.channel)
  yield put(loaderStart())
  while (true) {
    const { user } = yield take(channel)

    if (user) {
      yield put(loginSuccess(user.email))
      yield put(loaderEnd())
    } else {
      yield put(logoutSuccess())
      yield put(loaderEnd())
    }
  }
}

export default function* authenticationRootSaga() {
  yield fork(loginStatusWatcher)

  yield takeLatest(ActionTypes.LOGIN, loginSaga)
  yield takeLatest(ActionTypes.LOGOUT, logoutSaga)
}

import reduxSagaFirebase from 'utils/firebase'

import { push } from 'connected-react-router'
import { login, home } from 'utils/routes'

import { call, take, put, takeLatest, fork } from 'redux-saga/effects'

import { loginSuccess, loginError, logoutSuccess, logoutError } from './actions'
import ActionTypes from './constants'

function* loginSaga(params: Record<string, any>) {
  try {
    yield call(
      reduxSagaFirebase.auth.signInWithEmailAndPassword,
      params.payload.email,
      params.payload.password
    )
  } catch (error) {
    yield put(loginError(error))
    yield put(push(login))
  }
}

function* logoutSaga() {
  try {
    yield call(reduxSagaFirebase.auth.signOut)
  } catch (error) {
    yield put(logoutError(error))
  }
}

function* loginStatusWatcher() {
  const channel = yield call(reduxSagaFirebase.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) {
      yield put(loginSuccess(user.email))
      yield put(push(home))
    } else {
      yield put(logoutSuccess())
    }
  }
}

export default function* authenticationRootSaga() {
  yield fork(loginStatusWatcher)

  yield takeLatest(ActionTypes.LOGIN, loginSaga)
  yield takeLatest(ActionTypes.LOGOUT, logoutSaga)
}

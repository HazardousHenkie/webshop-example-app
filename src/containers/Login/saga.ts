import reduxSagaFirebase from 'utils/firebase'

import { call, put, takeEvery } from 'redux-saga/effects'

import ActionTypes from './constants'
import { login } from './actions'
import { loadingError, setLoading } from '../App/actions'

function* loginSaga(params: Record<string, Record<string, string>>) {
  yield put(setLoading(true))

  try {
    const data = yield call(
      reduxSagaFirebase.auth.signInWithEmailAndPassword,
      params.payload.email,
      params.payload.password
    ) as any
    yield put(login(data))
  } catch (error) {
    yield put(loadingError(error))
  }
}

export default function* loginRootSaga() {
  // @ts-ignore
  yield takeEvery(ActionTypes.CHANGE_LOGIN_DATA, loginSaga)
}

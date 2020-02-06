import { Reducer, Store } from 'redux'
import { RouterState } from 'connected-react-router'
import { Saga } from 'redux-saga'
import { ContainerState as HomeState } from 'containers/HomePage/types'
import { ContainerState as AppState } from 'containers/App/types'
import { ContainerState as LoginState } from 'containers/Login/types'

export interface InjectedStore extends Store {
  injectedReducers: any
  injectedSagas: any
  runSaga(
    saga: (() => IterableIterator<any>) | Saga<any[]>,
    args: any | undefined
  ): any
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState
  reducer: Reducer<any, any>
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState
  saga: () => IterableIterator<any>
  mode?: string | undefined
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState
  readonly global: AppState
  readonly login: LoginState
  readonly home: HomeState
  // for testing purposes
  readonly test: any
}

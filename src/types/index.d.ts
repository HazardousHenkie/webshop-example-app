import { Reducer, Store } from 'redux'
import { RouterState } from 'connected-react-router'
import { Saga } from 'redux-saga'
import { ContainerProductsState as ProductsState } from 'containers/HomePage/types'
import {
  ContainerStateAuthentication,
  ContainerStateLoader
} from 'containers/App/types'
import { ContainerLoginState as LoginState } from 'containers/Login/types'
import { ContainerForgotPasswordState as ForgotPasswordState } from 'containers/ForgotPassword/types'

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

export interface ApplicationRootState {
  readonly router: RouterState
  readonly global: ContainerStateLoader
  readonly passwordrequest: ForgotPasswordState
  readonly authentication: ContainerStateAuthentication
  readonly products: ProductsState
}

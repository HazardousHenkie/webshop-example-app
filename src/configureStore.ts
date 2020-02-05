/**
 * Create the store with dynamic reducers
 */

import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import { InjectedStore, ApplicationRootState } from 'types'
import { History } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(
  initialState: ApplicationRootState | {} = {},
  history: History
) {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  let enhancer = applyMiddleware(...middlewares)

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(enhancer)
  }

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state

  const store = (createStore(
    createReducer(),
    initialState,
    enhancer
  ) as unknown) as InjectedStore

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authenticationReducer from 'containers/App/reducer'
import themeSwitcherReducer from 'containers/ThemeSwitcher/reducer'
import productReducer from 'containers/ProductDetail/reducer'

import history from 'utils/history'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    authentication: authenticationReducer,
    themeSwitcher: themeSwitcherReducer,
    product: productReducer,
    router: connectRouter(history),
    ...injectedReducers
  })

  return rootReducer
}

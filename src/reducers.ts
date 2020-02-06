import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import globalReducer from 'containers/App/reducer'

import history from 'utils/history'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers
  })

  return rootReducer
}

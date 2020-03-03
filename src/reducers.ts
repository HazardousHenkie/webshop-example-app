import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authenticationReducer from 'containers/App/reducer'
import themeSwitcherReducer from 'containers/ThemeSwitcher/reducer'

import history from 'utils/history'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    authentication: authenticationReducer,
    themeSwitcher: themeSwitcherReducer,
    router: connectRouter(history),
    ...injectedReducers
  })

  return rootReducer
}

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authenticationReducer from 'containers/App/reducer'
import languageProviderReducer from 'components/LanguageProvider/reducer'

import history from 'utils/history'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    authentication: authenticationReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers
  })

  return rootReducer
}

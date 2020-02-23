import React from 'react'
import ReactDOM from 'react-dom'

import App from 'containers/App/App'

import LanguageProvider from 'components/LanguageProvider'

import history from 'utils/history'
import { ConnectedRouter } from 'connected-react-router'

import variables from 'styles/variables'
import { ThemeProvider } from 'styled-components'

import 'typeface-roboto'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import translationMessages from 'translations/i18n'

import * as serviceWorker from './serviceWorker'

const initialState = {}
const store = configureStore(initialState, history)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={variables}>
      <LanguageProvider messages={translationMessages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

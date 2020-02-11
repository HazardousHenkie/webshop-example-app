import React from 'react'
import ReactDOM from 'react-dom'

import App from 'containers/App/App'

import history from 'utils/history'
import { ConnectedRouter } from 'connected-react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'

import theme from 'styles/themeStyles'

import GlobalStyle from 'styles/index'
import 'typeface-roboto'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import * as serviceWorker from './serviceWorker'

const initialState = {}
const store = configureStore(initialState, history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <CssBaseline />
      <StylesProvider injectFirst={true}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

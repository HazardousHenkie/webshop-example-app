import React from 'react'

import Routes from './routes'

import Container from '@material-ui/core/Container'

import theme from 'styles/styledComponentsTheme'
import { ThemeProvider } from 'styled-components'

import { createSelector } from 'reselect'
import { useSelector } from 'react-redux'

import Loader from 'components/Loader'

import { makeSelectLoading } from 'containers/App/selectors'

const stateSelector = createSelector(makeSelectLoading(), loading => ({
  loading
}))

const App: React.FC = () => {
  const { loading } = useSelector(stateSelector)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container fixed={true}>
          <Routes />
        </Container>

        {loading && <Loader />}
      </div>
    </ThemeProvider>
  )
}

export default React.memo(App)

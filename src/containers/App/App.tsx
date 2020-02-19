import React from 'react'

import Routes from './routes'

import theme from 'styles/variables'
import { ThemeProvider } from 'styled-components'

import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'

import MainMenu from './MainMenu'
import Loader from 'components/Molecules/Loader'

import { makeSelectLoading, makeSelectLoggedIn } from 'containers/App/selectors'

import { useInjectSaga } from 'utils/injectSaga'
import saga from './sagas'

import { AppStyled, ContainerStyled } from './styledComponents'

const stateSelector = createStructuredSelector({
  loading: makeSelectLoading(),
  loggedIn: makeSelectLoggedIn()
})

const authenticationKey = 'authentication'

const App: React.FC = () => {
  const { loading, loggedIn } = useSelector(stateSelector)

  useInjectSaga({ key: authenticationKey, saga })
  return (
    <ThemeProvider theme={theme}>
      <AppStyled loggedIn={loggedIn}>
        {loggedIn && <MainMenu />}

        {loading && <Loader />}

        {!loading && (
          <ContainerStyled fixed={true}>
            <Routes />
          </ContainerStyled>
        )}
      </AppStyled>
    </ThemeProvider>
  )
}

export default React.memo(App)

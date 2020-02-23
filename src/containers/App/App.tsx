import React, { useState, useEffect } from 'react'

import Routes from './routes'

import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyle from 'styles/index'

import lightTheme, { darkTheme } from 'styles/themeStyles'

import { ThemeProvider, StylesProvider } from '@material-ui/styles'

import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'

import MainMenu from './MainMenu'
import Loader from 'components/Molecules/Loader'

import useMediaQuery from '@material-ui/core/useMediaQuery'

import { makeSelectLoading, makeSelectLoggedIn } from 'containers/App/selectors'

import { useInjectSaga } from 'utils/injectSaga'
import saga from './sagas'

import { FormattedMessage } from 'react-intl'

import { AppStyled, ContainerStyled } from './styledComponents'

const stateSelector = createStructuredSelector({
  loading: makeSelectLoading(),
  loggedIn: makeSelectLoggedIn()
})

const authenticationKey = 'authentication'

const App: React.FC = () => {
  const { loading, loggedIn } = useSelector(stateSelector)

  const [theme, setTheme] = useState(lightTheme)

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    if (prefersDarkMode) {
      setTheme(darkTheme)
    }
  }, [prefersDarkMode])

  useInjectSaga({ key: authenticationKey, saga })
  return (
    <StylesProvider injectFirst={true}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <AppStyled loggedIn={loggedIn}>
          {loggedIn && <MainMenu />}

          {loading && <Loader />}

          {!loading && (
            <ContainerStyled fixed={true}>
              <FormattedMessage
                id="Home.dayMessage"
                defaultMessage="It's a beautiful day outside."
              />
              <Routes />
            </ContainerStyled>
          )}
        </AppStyled>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default React.memo(App)

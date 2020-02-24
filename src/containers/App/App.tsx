import React, { useState, useEffect } from 'react'

import Routes from './routes'

import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyle from 'styles/index'

import lightTheme, { darkTheme } from 'styles/themeStyles'

import { ThemeProvider, StylesProvider } from '@material-ui/styles'

import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'

import MainMenu from './topMainMenu'
import Footer from './footer'
import Loader from 'components/Molecules/Loader'

import { makeSelectLoading, makeSelectLoggedIn } from 'containers/App/selectors'
import { makeSelectDarkMode } from 'containers/ThemeSwitcher/selectors'

import { useInjectSaga } from 'utils/injectSaga'
import saga from './sagas'

import { AppStyled, ContainerStyled } from './styledComponents'

const stateSelector = createStructuredSelector({
  loading: makeSelectLoading(),
  loggedIn: makeSelectLoggedIn(),
  darkMode: makeSelectDarkMode()
})

const authenticationKey = 'authentication'

const App: React.FC = () => {
  const { loading, loggedIn, darkMode } = useSelector(stateSelector)

  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    if (darkMode) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }, [darkMode])

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
              <Routes />
            </ContainerStyled>
          )}

          <Footer />
        </AppStyled>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default React.memo(App)

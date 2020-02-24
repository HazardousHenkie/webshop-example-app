import React, { useState, useEffect } from 'react'

import Routes from './routes'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyle from 'styles/index'

import lightTheme, { darkTheme } from 'styles/themeStyles'

import { ThemeProvider, StylesProvider } from '@material-ui/styles'

import { createStructuredSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'

import MainMenu from './topMainMenu'
import Footer from './footer'
import Loader from 'components/Molecules/Loader'

import { makeSelectLoading, makeSelectLoggedIn } from 'containers/App/selectors'
import { makeSelectDarkMode } from 'containers/ThemeSwitcher/selectors'

import { switchTheme } from 'containers/ThemeSwitcher/actions'

import { useCookies } from 'react-cookie'

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
  const dispatch = useDispatch()
  const { loading, loggedIn, darkMode } = useSelector(stateSelector)
  const [theme, setTheme] = useState(lightTheme)
  const [cookies] = useCookies(['darkMode'])
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    dispatch(switchTheme(true))
    if (cookies.darkMode !== undefined) {
      const cookieResult =
        cookies.darkMode.toLowerCase() === 'true' ? true : false

      if (cookieResult) {
        setTheme(darkTheme)
      } else {
        setTheme(lightTheme)
      }

      dispatch(switchTheme(cookieResult))
    } else {
      if (prefersDarkMode) {
        setTheme(darkTheme)
      } else {
        setTheme(lightTheme)
      }
      dispatch(switchTheme(prefersDarkMode))
    }
  }, [cookies.darkMode, dispatch, prefersDarkMode])

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

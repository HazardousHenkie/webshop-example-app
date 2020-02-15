import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import * as routes from 'utils/routes'
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
  const location = useLocation()
  const [isKnownPage, setIsKnownPage] = useState(false)

  useEffect(() => {
    const knownRoutes: string[] = Object.values(routes)
    const checkForSubstring = location.pathname.substring(
      1,
      location.pathname.lastIndexOf('/')
    )
    let toCheckString = location.pathname

    if (checkForSubstring !== '/') {
      toCheckString = '/' + checkForSubstring + '/'
    }

    setIsKnownPage(knownRoutes.includes(toCheckString))
  }, [location.pathname])

  useInjectSaga({ key: authenticationKey, saga })
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        {loggedIn && isKnownPage && <MainMenu />}

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

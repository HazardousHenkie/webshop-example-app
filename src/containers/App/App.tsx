import React from 'react'

import Routes from './routes'

import theme from 'styles/variables'
import { ThemeProvider } from 'styled-components'

import { createSelector } from 'reselect'
import { useSelector } from 'react-redux'

import Loader from 'components/Molecules/Loader'

import { makeSelectLoading } from 'containers/App/selectors'

import { useInjectSaga } from 'utils/injectSaga'
import saga from './sagas'

import { AppStyled, ContainerStyled } from './styledComponents'

const stateSelector = createSelector(makeSelectLoading(), loading => ({
  loading
}))

const authenticationKey = 'authentication'

const App: React.FC = () => {
  const { loading } = useSelector(stateSelector)

  useInjectSaga({ key: authenticationKey, saga })
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        {loading && <Loader />}

        <ContainerStyled fixed={true}>
          <Routes />
        </ContainerStyled>
      </AppStyled>
    </ThemeProvider>
  )
}

export default React.memo(App)

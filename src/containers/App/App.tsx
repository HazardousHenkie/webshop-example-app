import React from 'react'

import Routes from './routes'

import Container from '@material-ui/core/Container'

import theme from 'styles/styledComponentsTheme'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container fixed={true}>
          <Routes />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default React.memo(App)

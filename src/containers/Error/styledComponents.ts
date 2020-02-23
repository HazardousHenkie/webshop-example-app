import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

interface LoggedInInterface {
  loggedIn: boolean
}

export const StyledTypographyTitle = styled(Typography)`
  font-size: 1.6rem;
  font-weight: bold;
`

export const ErrorPageDiv = styled.div<LoggedInInterface>`
  height: ${props => (props.loggedIn ? 'calc(100vh - 76px)' : '100vh')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

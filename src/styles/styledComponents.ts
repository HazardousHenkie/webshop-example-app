import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

interface LoggedInInterface {
  loggedIn: boolean
}

export const PaperWrapper = styled.div<LoggedInInterface>`
  height: ${props =>
    props.loggedIn ? 'calc(100vh - 138px)' : 'calc(100vh - 62px)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledPaper = styled(Paper)`
  padding: 30px 30px 50px;
  width: 500px;
`

export const StyledTypographyTitle = styled(Typography)`
  font-size: 2.5rem;
  margin-bottom: 10px;
`

export const StyledSubmitButton = styled(Button)`
  margin-top: 20px;
`

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
`

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const PaperWrapper = styled.div`
  height: 100vh;
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

export const StyledLink = styled(Link)`
  margin-left: 5px;
  color: ${props => props.theme.black};
`

export const StyledSubmitButton = styled(Button)`
  margin-top: 20px;
`

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
`

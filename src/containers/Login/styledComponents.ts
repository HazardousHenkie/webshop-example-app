import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

export const StyledLink = styled(Link)`
  margin-left: 5px;
  color: ${props => props.theme.black};
`

export const StyledTypography = styled(Typography)`
  margin-top: 10px;
`

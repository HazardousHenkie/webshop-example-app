import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  margin-left: 5px;
  color: ${props => props.theme.black};
`

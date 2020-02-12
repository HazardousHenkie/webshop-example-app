import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const MessageWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
`
export const MessageInner = styled.div`
  display: flex;
`

export const StyledInnerLink = styled(Link)`
  margin-left: 5px;
  color: ${props => props.theme.blue};
`

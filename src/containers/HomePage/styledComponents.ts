import styled from 'styled-components'

import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'

import { Link } from 'react-router-dom'

export type IconButtonProps = {
  component: typeof Link
  to: Record<string, any>
}

export const CardMediaStyled = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`

export const IconButtonStyled = styled(IconButton)<IconButtonProps>`
  margin-left: auto;
`

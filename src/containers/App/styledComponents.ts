import styled from 'styled-components'

import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'

import { Link } from 'react-router-dom'

interface LoggedInInterface {
  loggedIn: boolean
}

export const AppStyled = styled.div.attrs({
  className: 'App'
})<LoggedInInterface>`
  height: ${props =>
    props.loggedIn ? 'calc(100% - 148px)' : 'calc(100% - 72px)'};
`

export const AppBarStyled = styled(AppBar)`
  margin-bottom: 20px;
`

export const ContainerStyled = styled(Container)`
  height: 100%;
`

export const LogoWrapper = styled.div`
  flex-grow: 1;
  line-height: 4;
`

export const LogoLinkStyled = styled(Link)`
  display: inline-block;
  vertical-align: initial;
  text-decoration: none;
  color: ${props => props.theme.white};
`

export const MenuLinkStyled = styled(Link)`
  margin-left: 30px;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 6px;
  color: ${props => props.theme.white};
`

export const LogoutButton = styled.button`
  background: none;
  margin-left: 30px;
  font-size: 1rem;
  border: 0;
  margin-bottom: 6px;
  cursor: button;
  color: ${props => props.theme.white};
`
export const FooterStyled = styled.footer`
  margin: 20px;
  display: flex;
  justify-content: flex-end;
`

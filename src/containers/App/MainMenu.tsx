import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import LocaleToggle from 'components/Molecules/LocaleToggle'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

import { useDispatch } from 'react-redux'
import { logout } from '../App/actions'

import { HOME } from 'utils/routes'

import {
  AppBarStyled,
  LogoWrapper,
  LogoLinkStyled,
  MenuLinkStyled,
  LogoutButton
} from './styledComponents'

const MainMenu: React.FC = () => {
  const dispatch = useDispatch()

  const doLogout = () => {
    dispatch(logout())
  }

  return (
    <AppBarStyled position="static">
      <Container fixed={true}>
        <Grid item={true} xs={12}>
          <Toolbar disableGutters={true} variant="dense">
            <LogoWrapper>
              <LogoLinkStyled to={HOME}>
                <Typography variant="h6" color="inherit">
                  <FormattedMessage {...messages.headerLogo} />
                </Typography>
              </LogoLinkStyled>
            </LogoWrapper>
            <MenuLinkStyled to={HOME}>
              <FormattedMessage {...messages.mainMenuHome} />
            </MenuLinkStyled>
            <LogoutButton onClick={doLogout}>
              <FormattedMessage {...messages.mainMenuLogout} />
            </LogoutButton>

            <LocaleToggle />
          </Toolbar>
        </Grid>
      </Container>
    </AppBarStyled>
  )
}

export default React.memo(MainMenu)

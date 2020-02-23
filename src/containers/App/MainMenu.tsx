import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import LocaleToggle from 'components/Molecules/LocaleToggle'

import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation(['header', 'mainMenu'])

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
                  {t('header:logo', 'Shop')}
                </Typography>
              </LogoLinkStyled>
            </LogoWrapper>
            <MenuLinkStyled to={HOME}>
              {t('mainMenu:item.home', 'Home')}
            </MenuLinkStyled>
            <LogoutButton onClick={doLogout}>
              {t('mainMenu:item.logout', 'Logout')}
            </LogoutButton>

            <LocaleToggle />
          </Toolbar>
        </Grid>
      </Container>
    </AppBarStyled>
  )
}

export default React.memo(MainMenu)

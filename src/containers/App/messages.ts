import { defineMessages } from 'react-intl'

export const scope = 'shop.containers.App'

export default defineMessages({
  headerLogo: {
    id: `${scope}.header.logo`,
    defaultMessage: 'Shop'
  },
  mainMenuHome: {
    id: `${scope}.mainMenu.home`,
    defaultMessage: 'Home'
  },
  mainMenuLogout: {
    id: `${scope}.mainMenu.logout`,
    defaultMessage: 'Logout'
  }
})

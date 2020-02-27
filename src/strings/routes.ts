export const LOGIN_LINK = '/'
export const FORGOT_PASSWORD = '/forgot-password'
export const HOME = '/home'
export const PRODUCT_LINK = '/product/'

interface RoutesInterface {
  readonly LOGIN_LINK: typeof LOGIN_LINK
  readonly FORGOT_PASSWORD: typeof FORGOT_PASSWORD
  readonly HOME: typeof HOME
  readonly PRODUCT_LINK: typeof PRODUCT_LINK
}

const ROUTES: RoutesInterface = {
  LOGIN_LINK,
  FORGOT_PASSWORD,
  HOME,
  PRODUCT_LINK
}

export default ROUTES

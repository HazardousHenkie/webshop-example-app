import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import ROUTES from 'strings/routes'

import Loader from 'components/Atoms/Loader'

const Home = lazy(() => import('../HomePage'))
const Login = lazy(() => import('../Login'))
const ForgotPassword = lazy(() => import('../ForgotPassword'))
const Register = lazy(() => import('../Register'))
const ProductDetail = lazy(() => import('../ProductDetail'))
const Error = lazy(() => import('../Error'))

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={ROUTES.LOGIN_LINK} exact={true} component={Login} />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          exact={true}
          component={ForgotPassword}
        />
        <Route path={ROUTES.REGISTER} exact={true} component={Register} />
        <Route path={ROUTES.HOME} exact={true} component={Home} />
        <Route
          path={`${ROUTES.PRODUCT_LINK}:id`}
          exact={true}
          component={ProductDetail}
        />
        <Route component={Error} />
      </Switch>
    </Suspense>
  )
}

export default Routes

import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as routes from 'utils/routes'

import Loader from 'components/Molecules/Loader'

const Home = lazy(() => import('../HomePage'))
const Login = lazy(() => import('../Login'))
const ForgotPassword = lazy(() => import('../ForgotPassword'))
const Error = lazy(() => import('../Error'))

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.loginLink} exact={true} component={Login} />
        <Route
          path={routes.forgotPassword}
          exact={true}
          component={ForgotPassword}
        />
        <Route path={routes.home} exact={true} component={Home} />
        <Route path="/test" exact={true} component={Home} />
        <Route component={Error} />
      </Switch>
    </Suspense>
  )
}

export default Routes

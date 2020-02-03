import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as routes from 'utils/routes'

import Loader from 'components/Loader'
const Home = lazy(() => import('../Home'))
const Error = lazy(() => import('../Error'))

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.login} exact component={Home} />
        <Route component={Error} />
      </Switch>
    </Suspense>
  )
}

export default Routes

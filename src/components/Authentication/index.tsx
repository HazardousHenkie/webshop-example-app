import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import history from 'utils/history'
import { loginLink } from 'utils/routes'
import { useLocation } from 'react-router-dom'

import { createSelector } from 'reselect'
import { makeSelectLoggedIn } from 'containers/App/selectors'

const stateSelector = createSelector(makeSelectLoggedIn(), loggedIn => ({
  loggedIn
}))

const withAuthorization = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthorization: React.FC<Props> = props => {
    const { loggedIn } = useSelector(stateSelector)
    const location = useLocation()

    useEffect(() => {
      if (!loggedIn) {
        history.push({
          pathname: loginLink,
          search: `?next=${location.pathname}`
        })
      }
    }, [loggedIn, location.pathname])

    return <Component {...(props as Props)} />
  }

  return WithAuthorization
}

export default withAuthorization

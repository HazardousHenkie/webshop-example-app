import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import history from 'utils/history'
import { login } from 'utils/routes'

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

    useEffect(() => {
      if (!loggedIn) {
        history.push(login)
      }
    }, [loggedIn])

    return <Component {...(props as Props)} />
  }

  return WithAuthorization
}

export default withAuthorization

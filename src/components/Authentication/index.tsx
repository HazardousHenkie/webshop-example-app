import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import history from 'utils/history'
import { loginLink } from 'utils/routes'
import { useLocation } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'
import { makeSelectLoading, makeSelectLoggedIn } from 'containers/App/selectors'

const stateSelector = createStructuredSelector({
  loading: makeSelectLoading(),
  loggedIn: makeSelectLoggedIn()
})

const withAuthorization = <Props extends object>(
  Component: React.ComponentType<Props>
) => {
  const WithAuthorization: React.FC<Props> = props => {
    const { loading, loggedIn } = useSelector(stateSelector)
    const location = useLocation()

    useEffect(() => {
      if (!loading && !loggedIn) {
        history.push({
          pathname: loginLink,
          search: `?next=${location.pathname}`
        })
      }
    }, [loading, loggedIn, location.pathname])

    return <> {loggedIn ? <Component {...(props as Props)} /> : null}</>
  }

  return WithAuthorization
}

export default withAuthorization

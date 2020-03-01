import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import history from 'utils/history'
import ROUTES from 'strings/routes'
import { useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { createStructuredSelector } from 'reselect'
import { makeSelectLoading, makeSelectLoggedIn } from 'containers/App/selectors'

import ErrorPage from 'containers/Error'

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
    const { t } = useTranslation('authentication')

    useEffect(() => {
      if (!loading && !loggedIn) {
        history.push({
          pathname: ROUTES.LOGIN_LINK,
          search: `?next=${location.pathname}`
        })
      }
    }, [loading, loggedIn, location.pathname])

    return (
      <>
        {loggedIn ? (
          <Component {...(props as Props)} />
        ) : (
          <ErrorPage
            errorCode={401}
            errorMessage={t('authentication:error', 'Unauthorized')}
          />
        )}
      </>
    )
  }

  return WithAuthorization
}

export default withAuthorization

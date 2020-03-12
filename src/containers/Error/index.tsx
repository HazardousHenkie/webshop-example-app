import React from 'react'

import Typography from '@material-ui/core/Typography'

import { withTranslation, WithTranslation } from 'react-i18next'

import { ErrorPageDiv, StyledTypographyTitle } from './styledComponents'

import { useSelector } from 'react-redux'
import { makeSelectLoggedIn } from 'containers/App/selectors'
import { createSelector } from 'reselect'

import { Helmet } from 'react-helmet'

const stateSelector = createSelector(makeSelectLoggedIn(), loggedIn => ({
  loggedIn
}))

interface ErrorType {
  errorCode: number
  errorMessage: string
}

const ErrorPage: React.FC<WithTranslation & ErrorType> = ({
  t,
  errorCode = 404,
  errorMessage = t('error:notFound', 'Page not found')
}) => {
  const { loggedIn } = useSelector(stateSelector)

  return (
    <ErrorPageDiv loggedIn={loggedIn}>
      <Helmet>
        <title>{t('error:title', 'Error Page')}</title>
        <meta
          name={t('error:title', 'Error Page')}
          content={t(
            'error:description',
            'A simple shop with react application error page'
          )}
        />
      </Helmet>
      <StyledTypographyTitle align="center" variant="h1">
        {errorCode}
      </StyledTypographyTitle>

      <Typography align="center" variant="body1">
        {errorMessage}
      </Typography>
    </ErrorPageDiv>
  )
}

export default withTranslation('error')(ErrorPage)

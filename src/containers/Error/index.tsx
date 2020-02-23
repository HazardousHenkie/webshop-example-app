import React from 'react'

import Typography from '@material-ui/core/Typography'

import { withTranslation, WithTranslation } from 'react-i18next'

import { ErrorPageDiv, StyledTypographyTitle } from './styledComponents'

import { useSelector } from 'react-redux'
import { makeSelectLoggedIn } from 'containers/App/selectors'
import { createSelector } from 'reselect'

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

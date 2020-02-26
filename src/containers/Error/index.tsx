import React from 'react'

import Typography from '@material-ui/core/Typography'

import { NOT_FOUND_ERROR } from 'utils/errorStrings'

import { ErrorPageDiv, StyledTypographyTitle } from './styledComponents'

import { useSelector } from 'react-redux'
import { makeSelectLoggedIn } from 'containers/App/selectors'
import { createSelector } from 'reselect'

const stateSelector = createSelector(makeSelectLoggedIn(), loggedIn => ({
  loggedIn
}))

type ErrorType = {
  errorCode: number
  errorMessage: string
}

const ErrorPage: React.FC<ErrorType> = ({
  errorCode = 404,
  errorMessage = NOT_FOUND_ERROR
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

export default ErrorPage

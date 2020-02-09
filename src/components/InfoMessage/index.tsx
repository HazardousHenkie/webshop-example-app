import React from 'react'

import { Alert } from '@material-ui/lab'

import { MessageWrapper } from './styledComponents/infoMessage'

type ErrorProps = {
  message: string
  severity: 'success' | 'info' | 'warning' | 'error' | undefined
}

const InfoMessage: React.FC<ErrorProps> = ({ message, severity }) => {
  return (
    <MessageWrapper>
      <Alert severity={severity}>{message}</Alert>
    </MessageWrapper>
  )
}

export default InfoMessage

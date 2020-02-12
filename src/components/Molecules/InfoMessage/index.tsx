import React from 'react'

import { Alert } from '@material-ui/lab'

import {
  MessageWrapper,
  MessageInner,
  StyledInnerLink
} from './styledComponents'

type ErrorProps = {
  message: string
  severity: 'success' | 'info' | 'warning' | 'error' | undefined
  link?: string
  linkText?: string
}

const InfoMessage: React.FC<ErrorProps> = ({
  message,
  severity,
  link,
  linkText
}) => {
  return (
    <MessageWrapper>
      <Alert severity={severity}>
        <MessageInner>
          {message}
          {link && linkText && (
            <StyledInnerLink to={link}>{linkText}</StyledInnerLink>
          )}
        </MessageInner>
      </Alert>
    </MessageWrapper>
  )
}

export default InfoMessage

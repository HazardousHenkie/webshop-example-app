import React from 'react'

import { LoaderWrapper } from './loader'

import CircularProgress from '@material-ui/core/CircularProgress'

const InlineLoader: React.FC = () => {
  return (
    <LoaderWrapper>
      <CircularProgress color="inherit" />
    </LoaderWrapper>
  )
}

export default InlineLoader

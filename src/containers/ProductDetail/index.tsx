import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import {
  makeSelectProductDetail,
  makeSelectError,
  makeSelectLoader
} from './selectors'
import reducer from './reducer'
import saga from './saga'

import { getProductDetail } from './actions'

import withAuthorization from 'components/Authentication'

import InfoMessage from 'components/Molecules/InfoMessage'
import InlineLoader from 'components/Molecules/InlineLoader'

import { Wrapper } from 'styles/styledComponents'

const key = 'product'

const stateSelector = createStructuredSelector({
  product: makeSelectProductDetail(),
  error: makeSelectError(),
  loading: makeSelectLoader()
})

const HomePage: React.FC = () => {
  const { product, error, loading } = useSelector(stateSelector)
  const dispatch = useDispatch()

  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  useEffect(() => {
    dispatch(getProductDetail())
  }, [dispatch])

  return (
    <Wrapper>
      {loading && <InlineLoader />}
      {error && <InfoMessage severity="error" message={error.toString()} />}
      {product}
    </Wrapper>
  )
}

export default withAuthorization(HomePage)

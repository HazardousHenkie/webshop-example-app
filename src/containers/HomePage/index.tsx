import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import {
  makeSelectProducts,
  makeSelectError,
  makeSelectLoader
} from './selectors'
import reducer from './reducer'
import saga from './saga'

import { getProducts } from './actions'

import withAuthorization from 'containers/Authentication'

import InfoMessage from 'components/Molecules/InfoMessage'
import InlineLoader from 'components/Atoms/InlineLoader'
import Product from './product'

import Grid from '@material-ui/core/Grid'

import { Wrapper } from 'styles/styledComponents'

const key = 'products'

const stateSelector = createStructuredSelector({
  products: makeSelectProducts(),
  error: makeSelectError(),
  loading: makeSelectLoader()
})

const HomePage: React.FC = () => {
  const { products, error, loading } = useSelector(stateSelector)
  const dispatch = useDispatch()

  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts())
    }
  }, [products, dispatch])

  return (
    <Wrapper>
      {loading && <InlineLoader />}
      {error && <InfoMessage severity="error" message={error.toString()} />}
      <Grid container={true} spacing={3}>
        {!loading &&
          !error &&
          products &&
          products.map(product => (
            <Product key={product.id} product={product} />
          ))}
      </Grid>
    </Wrapper>
  )
}

export default withAuthorization(HomePage)

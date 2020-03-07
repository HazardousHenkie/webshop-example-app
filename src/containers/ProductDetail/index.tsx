import React, { useEffect } from 'react'

import ErrorPage from 'containers/Error'

import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import {
  makeSelectProductDetail,
  getProductDetailFailed,
  getProductDetailsLoader
} from './selectors'
import reducer from './reducer'
import saga from './saga'

import { getProductDetail, getProductDetailSuccess } from './actions'

import withAuthorization from 'containers/Authentication'

import InfoMessage from 'components/Molecules/InfoMessage'
import InlineLoader from 'components/Atoms/InlineLoader'

import Grid from '@material-ui/core/Grid'

import { Wrapper } from 'styles/styledComponents'
import { TypographyStyled } from './styledComponents'

import { useParams } from 'react-router-dom'

const key = 'product'

const stateSelector = createStructuredSelector({
  product: makeSelectProductDetail(),
  error: getProductDetailFailed(),
  loading: getProductDetailsLoader()
})

const ProductDetailPage: React.FC<Record<string, any>> = productFromRoute => {
  const { product, error, loading } = useSelector(stateSelector)
  const dispatch = useDispatch()
  const { id } = useParams()

  if (productFromRoute && productFromRoute.location.state) {
    dispatch(getProductDetailSuccess(productFromRoute.location.state.product))
  }

  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  useEffect(() => {
    if (!product && id && !productFromRoute.location.state) {
      dispatch(getProductDetail(id))
    }
  }, [product, id, productFromRoute.location.state, dispatch])

  return error && error.status === 404 ? (
    <ErrorPage errorCode={error.status} errorMessage={'Product not found.'} />
  ) : (
    <Wrapper>
      {loading && <InlineLoader />}
      {error && <InfoMessage severity="error" message={error.toString()} />}
      {product && (
        <>
          <Grid item={true} xs={12}>
            <TypographyStyled variant="h1" color="inherit">
              {product.title}
            </TypographyStyled>
          </Grid>
          <Grid container={true} justify="center" spacing={2}>
            {product.image && (
              <Grid item={true} xs={6}>
                <img
                  src={product.image}
                  alt={product.title}
                  title={product.title}
                />
              </Grid>
            )}
            <Grid item={true} xs={product.image ? 6 : 12}>
              {product.description}
            </Grid>
          </Grid>
        </>
      )}
    </Wrapper>
  )
}

export default withAuthorization(ProductDetailPage)

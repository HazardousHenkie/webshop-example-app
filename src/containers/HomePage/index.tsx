import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import { makeSelectProducts } from './selectors'
import reducer from './reducer'
import saga from './saga'

import { getProducts } from './actions'

import withAuthorization from 'components/Authentication'

const key = 'products'

const stateSelector = createSelector(makeSelectProducts(), products => ({
  products
}))

const HomePage: React.FC = () => {
  const { products } = useSelector(stateSelector)
  const dispatch = useDispatch()

  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      home
      <ul>
        {products &&
          products.map(product => (
            <li key={product.product_id}>{product.title}</li>
          ))}
      </ul>
    </>
  )
}

export default withAuthorization(HomePage)

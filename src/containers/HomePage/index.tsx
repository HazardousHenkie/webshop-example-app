import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { useInjectReducer } from 'utils/injectReducer'

// import { changeAwesome } from './actions'
import { makeSelectProducts } from './selectors'
import reducer from './reducer'

import withAuthorization from 'components/Authentication'

const key = 'products'

const stateSelector = createSelector(makeSelectProducts(), products => ({
  products
}))

const HomePage: React.FC = () => {
  const { products } = useSelector(stateSelector)
  const dispatch = useDispatch()

  useInjectReducer({ key, reducer })

  return <>test</>
}

export default withAuthorization(HomePage)

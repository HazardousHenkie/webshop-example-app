import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { useInjectReducer } from 'utils/injectReducer'

import { changeAwesome } from './actions'
import { makeSelectUsername } from './selectors'
import reducer from './reducer'

import withAuthorization from 'components/Authentication'

const key = 'home'

const stateSelector = createSelector(makeSelectUsername(), awesome => ({
  awesome
}))

const HomePage: React.FC = () => {
  const { awesome } = useSelector(stateSelector)
  const dispatch = useDispatch()

  const onChangeAwesome = () => dispatch(changeAwesome(true))
  // console.log('username: ', awesome)

  useInjectReducer({ key, reducer })

  return <button onClick={onChangeAwesome}>Change is awesome</button>
}

export default withAuthorization(HomePage)

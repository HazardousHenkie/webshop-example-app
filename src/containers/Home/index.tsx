import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { makeSelectMyBoolean } from './selectors'

const stateSelector = createSelector(makeSelectMyBoolean(), myBoolean => ({
  myBoolean
}))

const Home: React.FC = () => {
  const { myBoolean } = useSelector(stateSelector)

  return <div className="home">home test {myBoolean}</div>
}

export default Home

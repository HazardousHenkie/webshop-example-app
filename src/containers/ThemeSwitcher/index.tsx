import React, { useEffect } from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import Switch from '@material-ui/core/Switch'

import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { useInjectReducer } from 'utils/injectReducer'

import { makeSelectDarkMode } from './selectors'

import reducer from './reducer'

import { switchTheme } from './actions'

const key = 'themeSwitcher'

const stateSelector = createSelector(makeSelectDarkMode(), darkMode => ({
  darkMode
}))

const ProductDetailPage: React.FC = () => {
  const [localstorageDarkMode, setLocalstoragedarkMode] = React.useState(false)
  const { darkMode } = useSelector(stateSelector)
  const dispatch = useDispatch()

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    dispatch(switchTheme(prefersDarkMode))
  }, [dispatch, prefersDarkMode])

  useEffect(() => {
    dispatch(switchTheme(localstorageDarkMode))
    localStorage.setItem('darkMode', localstorageDarkMode)
  }, [localstorageDarkMode])

  const handleChange = () => {
    setLocalstoragedarkMode(!darkMode)
  }

  useInjectReducer({ key, reducer })

  return (
    <Switch
      checked={darkMode}
      onChange={handleChange}
      color="default"
      inputProps={{ 'aria-label': 'Theme switcher' }}
    />
  )
}

export default ProductDetailPage

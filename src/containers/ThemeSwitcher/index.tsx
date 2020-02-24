import React from 'react'

import Switch from '@material-ui/core/Switch'

import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { useInjectReducer } from 'utils/injectReducer'

import { makeSelectDarkMode } from './selectors'

import reducer from './reducer'

import { switchTheme } from './actions'

import { useCookies } from 'react-cookie'

const key = 'themeSwitcher'

const stateSelector = createSelector(makeSelectDarkMode(), darkMode => ({
  darkMode
}))

const ThemeSwitcher: React.FC = () => {
  const { darkMode } = useSelector(stateSelector)
  const dispatch = useDispatch()
  const [cookies, setCookie] = useCookies(['darkMode'])

  const handleChange = () => {
    setCookie('darkMode', !darkMode)
    dispatch(switchTheme(!darkMode))
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

export default ThemeSwitcher
